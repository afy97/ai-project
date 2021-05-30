// React Base
import React from 'react'

// CSS Module
import styles from './modules/Options.module.css'

class Options extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.alertStyle = {
            borderColor: "crimson",
            backgroundColor: "red",
            color: "white"
        }
    }

    render() {
        return (
            <div className={styles.Options}>
                <form onSubmit={event => event.preventDefault()}>
                    <fieldset>
                        <legend>Edit</legend>
                        <div>
                            <select name="edit" value={this.props.type} onChange={this.props.editChange}>
                                <option value="1">Select Start</option>
                                <option value="2">Select Goal</option>
                                <option value="3">Add Obstacle</option>
                                <option value="0">Remove</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={(this.props.functions || {}).generate}>Generate</button>
                            <button onClick={(this.props.functions || {}).clear} disabled={this.props.solved}>Clear</button>
                        </div>
                        <div>
                            <small><b>Tip:</b> hold <code><b>CTRL</b></code> while moving the mouse for continuous paint</small>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Solve</legend>
                        <div>
                            <select name="method" onChange={this.props.methodChange}>
                                <option value="0">BFS</option>
                                <option value="1">DFS</option>
                                <option value="2">Greedy Best First</option>
                                <option value="3">A* Euclidean</option>
                                <option value="4">A* Manhattan</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={(this.props.functions || {}).solve} disabled={this.props.solved}>Solve</button>
                            <button onClick={(this.props.functions || {}).reset} style={(this.props.iterator ? this.alertStyle : undefined)}>Reset</button>
                        </div>
                        <div hidden={!this.props.iterator}>
                            <small><b>Caution:</b> the <code><b>Reset</b></code> button will resfresh the page while iterating</small>
                        </div>
                        <div>
                            <input type="number" min="0" value={this.state.count} onChange={(event) => this.setState({ count: (event.target.value || 0) })} />
                        </div>
                        <div>
                            <button onClick={() => {
                                if (!this.props.iterator) {
                                    (this.props.functions || {}).iterate(this.state.count)
                                } else {
                                    (this.props.functions || {}).stop()
                                }
                            }} disabled={this.props.solved}>Iterate</button>
                        </div>
                        <div>
                            <small><b>Tip:</b> This parameter limits the iteration count. <code><b>0</b></code> is unlimited.</small>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Stats</legend>
                        <div>Cost: {this.props.stats.cost}</div>
                        <div>Visited: {this.props.stats.visited}</div>
                        <div>Duration: {this.props.stats.duration}</div>
                    </fieldset>
                    <fieldset className={styles.Legend}>
                        <legend>Legend</legend>
                        <div>
                            <span style={{ borderRadius: "50%", backgroundColor: 'green' }} /> Start
                        </div>
                        <div>
                            <span style={{ borderRadius: "50%", backgroundColor: 'red' }} /> Goal
                        </div>
                        <div>
                            <span style={{ backgroundColor: 'black' }} /> Obstacle
                        </div>
                        <div>
                            <span style={{ backgroundColor: 'cyan' }} /> Path
                        </div>
                        <div>
                            <span style={{ backgroundColor: 'orange' }} /> Visited
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Options
