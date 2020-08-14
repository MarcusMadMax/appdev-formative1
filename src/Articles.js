import React from 'react'
import { Component } from 'react'

class Articles extends Component {




    render() {
        return (
            <div className="card">
                <div className="article">
                    <h1>{this.props.source.name}</h1>
                    <p>{this.props.title}</p>
                    <div className="pic">
                        <img src="https://images.unsplash.com/photo-1596920691408-b1df63fda141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>

            </div>
        )
    }
}

export default Articles