// React Base
import React from 'react'

// CSS Module
import styles from './modules/Map.module.css'

class Col extends React.Component {
    render() {
        const lookup = ["white", "green", "red", "black", "orange", "cyan"]

        return (
            <div className={styles.Col}>
                <div
                    style={{
                        backgroundColor: lookup[this.props.data],
                        borderRadius: (this.props.data == 1 || this.props.data == 2) ? "50%" : undefined
                    }}
                    onClick={() => {
                        this.props.edit(this.props.rid, this.props.cid, false)
                    }}
                    onMouseEnter={event => {
                        if (event.ctrlKey) {
                            this.props.edit(this.props.rid, this.props.cid, true)
                        }
                    }}
                />
            </div>
        )
    }
}

class Row extends React.Component {
    render() {
        return (
            <div className={styles.Row}>
                {this.props.data && Array.isArray(this.props.data) ? (
                    this.props.data.map((value, index) => (
                        <Col key={index} edit={this.props.edit} rid={this.props.rid} cid={index} data={value} />
                    ))
                ):(
                    null
                )}
            </div>
        )
    }
}

class Map extends React.Component {
    render() {
        return (
            <div className={styles.Map}>
                {(this.props.data.matrix || [[]]).map((value, index) => (
                    <Row key={index} edit={this.props.edit} rid={index} data={value} />
                ))}
            </div>
        )
    }
}

export default Map
