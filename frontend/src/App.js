import React from 'react';
import axios from 'axios';
import './App.css'

import NavBar from './Components/NavBar.js'

class App extends React.Component {

  state = {
    classified: [],
  }

  componentDidMount() {
    let data;

    axios.get('/api/jornal/')
      .then(response => {
        data = response.data;
        this.setState({
          classified: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="main-container">
        <div className="container"> 
          <NavBar />
            <div>
                {this.state.classified.map((c) => (
                    
                    <table key={c.id}>
                      <h2>{c.title}</h2>
                      <h3>{c.date}</h3>
                      <h4>{c.description}</h4>
                    </table> 
                ))} 
            </div> 
        </div>
      </div>
      
    );
  }
}


export default App;