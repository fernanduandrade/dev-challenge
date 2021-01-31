import React, { Component } from 'react';

class NavBar extends Component{
	render() {
		return(
			<nav className="navbar navbar-expand-lg bg-light navbar-light">
	          <a className="navbar-brand" href="/">Classificados</a>
	          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>

	          <div className="collapse navbar-collapse" id="navbarNav">
	            <div className="navbar-nav ml-auto">
	              <li className="nav-item">
			        <a className="nav-link a-style" href="/">Novo Classificado <i class="fa fa-plus-square-o" aria-hidden="true"></i></a>
			      </li>
	            </div>
	          </div>
        	</nav> 
		);
	}
}

export default NavBar;