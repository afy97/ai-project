// React Base
import React from 'react'

// CSS Module
import styles from './modules/Options.module.css'

class Options extends React.Component {
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
                                <option value="1">Greedy Best First</option>
                                <option value="2">A* Euclidean</option>
                                <option value="3">A* Manhattan</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={() => {
                                if (!this.props.iterator) {
                                    (this.props.functions || {}).iterate()
                                } else {
                                    (this.props.functions || {}).stop()
                                }
                            }} disabled={this.props.solved}>Iterate</button>
                            <button onClick={(this.props.functions || {}).solve} disabled={this.props.solved}>Solve</button>
                            <button onClick={(this.props.functions || {}).reset}>Reset</button>
                            <div hidden={!this.props.iterator}>
                                <small><b>Caution:</b> the <code><b>Reset</b></code> button will resfresh the page while iterating</small>
                            </div>
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
