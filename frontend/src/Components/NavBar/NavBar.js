import React, { Component } from 'react';
import './style.css';

class NavBar extends Component{
	render() {
		return(
			<nav className="navbar navbar-expand-lg bg-light navbar-light">
	          <a className="navbar-brand" href="/">Classificados</a>
	          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

			  <div className="count-classfied">
				  <p className="text-center p-style">Total: {this.props.totalClassified}</p>
			  </div>

	          <div className="collapse navbar-collapse" id="navbarNav">

	            <div className="navbar-nav ml-auto">

	              <li className="nav-item li-style">
			        <a className="nav-link a-style" href="/"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Novo Classificado</a>
			      </li>
	            </div>
	          </div>
        	</nav> 
		);
	}
}

export default NavBar;