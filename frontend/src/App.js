import React from 'react';
import axios from 'axios';
import './App.css'

import NavBar from './Components/NavBar/NavBar.js'
import CardList from './Components/CardList/CardList.js'

class App extends React.Component {

  state = {
    classified: [],
    ClassifiedCount: []
  }

  

  componentDidMount() {
    let data;

    axios.get('/api/jornal/')
      .then(response => {
        data = response.data;
        this.setState({
          classified: data,
          ClassifiedCount: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container"> 
          <NavBar totalClassified={this.state.ClassifiedCount.length} />
          <div className="container-fluid">
            <div className="row">
              {this.state.classified.map((c) => (
                <CardList 
                  key={c.id}
                  title={c.title} 
                  date={c.date} 
                  description={c.description}
                />
              ))} 
            </div>
          </div>
      </div>
    );
  }
}


export default App;