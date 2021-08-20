import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center mt-2">{this.props.title}</h3>
            </div>
        )
    }
}
