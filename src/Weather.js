import React from 'react'
import { Component } from 'react'

class Weather extends Component {




    render() {
        return (
            <div className="card">
                <div className="article">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
                <div className="pic">
                    <img src={this.props.image} alt=""/>
                    
                </div>
            </div>
        )
    }
}

export default Weather