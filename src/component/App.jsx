// React Base
import React from 'react'

// Helper Module
import helper from './helper/helper'

// Custom Components
import Map from './Map'
import Options from './Options'

// CSS Module
import styles from './modules/App.module.css'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            map: {
                matrix: [[]],
                start: { row: -1, col: -1 },
                goal:  { row: -1, col: -1 }
            },
            stats: {
                cost: 0,
                visited: 0,
                duration: 0
            },
            rows: 32,
            cols: 48,
            method: 0,
            edit: 1,
            iterate: false,
            stop: false,
            solved: false
        }

        this.generate = () => {
            const rows   = this.state.rows
            const cols   = this.state.cols
            const matrix = []
            
            let start = { row: -1, col: -1 }
            let goal  = { row: -1, col: -1 }

            for (let i = 0; i < rows; i++) {
                const row = []

                for (let j = 0; j < cols; j++) {
                    // 20% chance to put an obstacle
                    if (parseInt(Math.random() * 100) < 20) {
                        row.push(3) // obstacle
                    } else {
                        row.push(0) // empty
                    }
                }

                matrix.push(row)
            }

            while ((start.row == -1) || (start.col == -1)) {
                const r = parseInt(Math.random() * rows)
                const c = parseInt(Math.random() * cols)

                if (matrix[r][c] == 0) {
                    start = { row: r, col: c }
                    matrix[r][c] = 1 // start
                }
            }

            while ((goal.row == -1) || (goal.col == -1)) {
                const r = parseInt(Math.random() * rows)
                const c = parseInt(Math.random() * cols)

                if (matrix[r][c] == 0) {
                    goal = { row: r, col: c }
                    matrix[r][c] = 2 // goal
                }
            }

            return { start, goal, matrix }
        }

        this.edit = (row, col) => {
            const update = {...this.state.map}
            const start  = this.state.map.start
            const goal   = this.state.map.goal

            update.matrix = JSON.parse(JSON.stringify(this.state.map.matrix))
            
            if (this.state.edit == 1) {
                const r = this.state.map.start.row
                const c = this.state.map.start.col
                
                if ((r != -1) || (c != -1)) {
                    update.matrix[r][c] = 0
                }

                update.start = { row, col }
            } else if (this.state.edit == 2) {
                const r = this.state.map.goal.row
                const c = this.state.map.goal.col

                if ((r != -1) || (c != -1)) {
                    update.matrix[r][c] = 0
                }

                update.goal = { row, col }
            }

            if ((start[0] == row) && (start[1] == col) && (this.state.edit != 1)) {
                update.start = { row: -1, col: -1 }
            } else if ((goal[0] == row) && (goal[1] == col) && (this.state.edit != 2)) {
                update.goal = { row: -1, col: -1 }
            }

            update.matrix[row][col] = parseInt(this.state.edit)

            this.setState({ map: update })
        }

        this.editChange = (event) => {
            this.setState({ edit: event.target.value })
        }

        this.methodChange = (event) => {
            this.setState({ method: event.target.value })
        }

        this.updateMap = (result) => {
            if (result) {
                const update = JSON.parse(JSON.stringify(this.state.map))
    
                if (result.visited.size) {
                    for (const node of result.visited) {
                        update.matrix[parseInt(node / 48)][node % 48] = 4
                    }
                }

                for (const node of result.path) {
                    update.matrix[parseInt(node / 48)][node % 48] = 5
                }
    
                update.matrix[update.start.row][update.start.col] = 1
                update.matrix[update.goal.row][update.goal.col] = 2
    
                this.setState({ map: update })
            } else {
                alert("No solution found")
            }
        }

        this.selectMethod = () => {
            switch (parseInt(this.state.method)) {
                case 0: return helper.BFS
                case 1: return helper.greedy
                case 2: return helper.aStarEuclidean
                case 3: return helper.aStarManhattan
            }
        }

        this.actions = {
            reset: () => {
                if (this.state.iterator) {
                    window.location.reload()
                } else {
                    const update = JSON.parse(JSON.stringify(this.state.map))

                    for (let i = 0; i < update.matrix.length; i++) {
                        for (let j = 0; j < update.matrix[i].length; j++) {
                            if (3 < update.matrix[i][j]) {
                                update.matrix[i][j] = 0
                            }
                        }
                    }

                    this.setState({ map: update, iterator: false, solved: false }, () => {
                        this.updateMap({ path: [], visited: new Set(), duration: 0 })
                    })
                }
            },
            iterate: () => {
                const flag = (this.state.map.start.row < 0) || (this.state.map.start.col < 0) || (this.state.map.goal.row < 0) || (this.state.map.goal.col < 0)
                
                if (!flag) {
                    const method = this.selectMethod()
    
                    this.setState({ iterator: true, solved: true }, () => {
                        method(this.state.map, this.updateMap, { iterate: true }).then(res => {
                            this.updateMap(res)
                            this.setState({ iterator: false, stats: { cost: (res.path && res.path.length), visited: (res.visited && res.visited.size), duration: res.duration } })
                        })
                    })
                } else {
                    alert("Invalid Start/Goal")
                }
            },
            solve: () => {
                const flag = (this.state.map.start.row < 0) || (this.state.map.start.col < 0) || (this.state.map.goal.row < 0) || (this.state.map.goal.col < 0)
                
                if (!flag) {
                    const method = this.selectMethod()
                    const map    = JSON.parse(JSON.stringify(this.state.map))
    
                    this.setState({ solved: true }, () => {
                        method(map, () => {}, { iterate: false }).then(res => {
                            this.updateMap(res)

                            if (res.path && res.visited) {
                                this.setState({ stats: { cost: (res.path && res.path.length), visited: (res.visited && res.visited.size), duration: res.duration } })
                            }
                        })
                    })
                } else {
                    alert("Invalid Start/Goal")
                }
            },
            stop: () => {
                this.setState({ stop: true })
            },
            clear: () => {
                const matrix = []

                for (let i = 0; i < this.state.rows; i++) {
                    const row = []
                    
                    for (let j = 0; j < this.state.cols; j++) {
                        row.push(0)
                    }

                    matrix.push(row)
                }

                this.setState({ map: {
                    matrix: matrix,
                    start: { row: -1, col: -1 },
                    goal: { row: -1, col: -1 }
                }})
            },
            generate: () => {
                if (this.state.iterator) {
                    window.location.reload()
                } else {
                    this.setState({ map: this.generate() })
                }
            }
        }
    }

    componentDidMount() {
        this.setState({ map: this.generate() })
    }

    render() {
        return (
            <div className={styles.Container}>
                <Map
                    data={this.state.map}
                    edit={this.edit}
                />
                <Options
                    editChange={this.editChange}
                    methodChange={this.methodChange}
                    functions={this.actions}
                    add={this.state.edit == 3}
                    iterator={this.state.iterator}
                    solved={this.state.solved}
                    stats={this.state.stats}
                />
            </div>
        )
    }
}

export default App
