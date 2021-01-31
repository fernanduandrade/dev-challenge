import React, { Component } from 'react';

class NavBar extends Component{
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
	          <a className="navbar-brand" href="#">Classificados</a>

	          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
	            <div className="navbar-nav">
	              <a className="nav-item nav-link" href="/">Novo Classificado</a>
	            </div>
	          </div>
        	</nav> 
		);
	}
}

export default NavBar;