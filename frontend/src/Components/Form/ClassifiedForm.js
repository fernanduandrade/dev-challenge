import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label, Container } from "reactstrap";
import axios from 'axios';

class ClassifiedForm extends Component {

    
    state = {
    isClassifiedCreated: false
  }

    handleFormSubmit = event => {
		event.preventDefault();
		const title = event.target.elements.title.value;
		const description = event.target.elements.description.value;

		return axios.post('/api/jornal/', {
			title: title,
			description: description
		}).then((res) => {
      if(res.status === 201){
        this.setState({ isClassifiedCreated: true });
      }
    }).catch(err => console.error(err));
	}

  render() {
    if (this.state.isClassifiedCreated) {
      return <Redirect to = {{ pathname: "/" }} />;
    }
    return (
        <Container>
          <div className="card-header">
            <h3>Criar Classificado</h3>
          </div>
          <div className="card-body">
            <Form onSubmit={(event) => this.handleFormSubmit(event)}>
                  <FormGroup>
                  <Label for="name">Título</Label>
                  <Input
                      placeholder="Digite um título"
                      type="text"
                      name="title"
                      required
                  />
                  </FormGroup>
                  <FormGroup>
                  <Label for="email">Descrição</Label>
                  <Input
                      placeholder="Digite uma descrição"
                      type="textarea"
                      name="description"
                      required
                  />
                  </FormGroup>
                  
                  <Button style={{backgroundColor: '#1F2833', color: '#ffffff'}}>Cadastrar</Button>
              </Form>
            </div>
      </Container>
    );
  }
}

export default ClassifiedForm;