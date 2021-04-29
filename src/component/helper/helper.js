import PriorityQueue from 'js-priority-queue'

const ROWS = 32
const COLS = 48

function delay(ms) {
    return new Promise(res => setTimeout(res, ms))
}

function matrix2graph(matrix) {
    const graph = {}

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const index = i * COLS + j
            graph[index] = []

            if (matrix[i][j] < 3) {
                if (0 <= (i - 1)) {
                    if (!matrix[i - 1][j] || matrix[i - 1][j] == 2) {
                        graph[index].push((i - 1) * COLS + j)
                    }
                }

                if (0 <= (j - 1)) {
                    if (!matrix[i][j - 1] || matrix[i][j - 1] == 2) {
                        graph[index].push(i * COLS + (j - 1))
                    }
                }
                
                if ((j + 1) < COLS) {
                    if (!matrix[i][j + 1] || matrix[i][j + 1] == 2) {
                        graph[index].push(i * COLS + (j + 1))
                    }
                }
                
                if ((i + 1) < ROWS) {
                    if (!matrix[i + 1][j] || matrix[i + 1][j] == 2) {
                        graph[index].push((i + 1) * COLS + j)
                    }
                }
            }
        }
    }

    return graph
}

async function BFS(map, callback, options) {
    const graph    = matrix2graph(map.matrix)
    const frontier = []
    const visited  = new Set()
    const start    = map.start.row * COLS + map.start.col
    const goal     = map.goal.row * COLS + map.goal.col
    const begin    = (new Date()).getTime()

    frontier.push([start])

    while (frontier.length) {
        const path = JSON.parse(JSON.stringify(frontier.shift()))
        const node = path[path.length - 1]
        
        if (node == goal) {
            return { path, visited, duration: ((new Date()).getTime() - begin) / 1000 }
        }

        if (!visited.has(node)) {
            for (const adj of (graph[node] || [])) {
                if (!visited.has(adj)) {
                    const newPath = JSON.parse(JSON.stringify(path))
                    newPath.push(adj)
                    frontier.push(newPath)
                }
            }
        }

        visited.add(node)

        if (options.iterate) {
            await delay()

            callback({ path, visited, duration: ((new Date()).getTime() - begin) / 1000 })
        }
    }

    return false
}

function euclideanDistance(a, b) {
    const ax = a / COLS
    const ay = a % COLS

    const bx = b / COLS
    const by = b % COLS

    return Math.ceil(Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2)))
}

function manhattanDistance(a, b) {
    const ax = a / COLS
    const ay = a % COLS

    const bx = b / COLS
    const by = b % COLS

    return Math.abs(bx - ax) + Math.abs(by - ay)
}

async function greedy(map, callback, options) {
    const queue = new PriorityQueue({ comparator: (a, b) => {
        return -(b.remaining - a.remaining)
    }})

    const visited = new Set()
    const graph   = matrix2graph(map.matrix)
    const start   = map.start.row * COLS + map.start.col
    const goal    = map.goal.row * COLS + map.goal.col
    const begin   = (new Date()).getTime()

    queue.queue({ path: [start], remaining: euclideanDistance(start, goal) })

    while (queue.length) {
        const next   = queue.dequeue()
        const vertex = next.path[next.path.length - 1]

        if (vertex == goal) {
            return { path: next.path, visited, duration: ((new Date()).getTime() - begin) / 1000 }
        }

        if (!visited.has(vertex)) {
            for (const adj of (graph[vertex] || [])) {
                if (!visited.has(adj)) {
                    const path = JSON.parse(JSON.stringify(next.path))
                    path.push(adj)
                    queue.queue({ path, remaining: euclideanDistance(adj, goal) })
                }
            }
        }
        
        visited.add(vertex)

        if (options.iterate) {
            await delay()

            callback({ path: next.path, visited, duration: ((new Date()).getTime() - begin) / 1000 })
        }
    }

    return false
}

async function aStar(map, callback, options, manhattan) {
    const queue = new PriorityQueue({ comparator: (a, b) => {
        return -((b.g + b.h) - (a.g + a.h))
    }})

    const graph    = matrix2graph(map.matrix)
    const start    = map.start.row * COLS + map.start.col
    const goal     = map.goal.row * COLS + map.goal.col
    const visited  = new Set()
    const begin    = (new Date()).getTime()
    const distance = manhattan ? manhattanDistance : euclideanDistance

    queue.queue({ path: [start], g: 1, h: distance(start, goal) })

    while (queue.length) {
        const next   = queue.dequeue()
        const vertex = next.path[next.path.length - 1]

        if (vertex == goal) {
            return { path: next.path, visited, duration: ((new Date()).getTime() - begin) / 1000 }
        }

        if (!visited.has(vertex)) {
            for (const adj of (graph[vertex] || [])) {
                if (!visited.has(adj)) {
                    const path = JSON.parse(JSON.stringify(next.path))
                    path.push(adj)
                    queue.queue({ path, g: path.length, h: distance(adj, goal) })
                }
            }
        }

        visited.add(vertex)

        if (options.iterate) {
            await delay()

            callback({ path: next.path, visited, duration: ((new Date()).getTime() - begin) / 1000 })
        }
    }

    return false
}

async function aStarEuclidean(map, callback, options) {
    return aStar(map, callback, options, false)
}

async function aStarManhattan(map, callback, options) {
    return aStar(map, callback, options, true)
}

export default {
    BFS,
    greedy,
    aStarEuclidean,
    aStarManhattan
}
