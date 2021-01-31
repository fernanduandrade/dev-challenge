import React, { Component } from 'react';
import './style.css'

class CardList extends Component {
    render() {
        return(
            <div className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.date}</h6>
                    <p className="card-text">{this.props.description}</p>
                  </div>
                </div>
            </div>
        );
    }
}

export default CardList;