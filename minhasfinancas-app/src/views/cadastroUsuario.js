import React from 'react';

import Card from '../components/card/card';
import FormGroup from '../components/form-group/form-group';

class CadastroUsuario extends React.Component{

  state = {
    nome: '',
    email: '',
    senha: '',
    senhaConfirma: ''
  }

  cadastrar = () => {
    console.log(this.state)
  }

  render(){
    return (
      <div className="container">
        <Card title="Cadastro de Usuário">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <FormGroup label="Nome: *" htmlFor="inputNome">
                <input
                  type="text"
                  id="inputNome"
                  className="form-control"
                  name="nome"
                  onChange={e => this.setState({nome: e.target.value})}
                />
              </FormGroup>
              <FormGroup label="Email: *" htmlFor="inputEmail">
                <input
                  type="email"
                  id="inputSenha"
                  className="form-control"
                  name="email"
                  onChange={e => this.setState({email: e.target.value})}
                />
              </FormGroup>
              <FormGroup label="Senha: *" htmlFor="inputSenha">
                <input
                  type="password"
                  id="inputSenha"
                  className="form-control"
                  name="senha"
                  onChange={e => this.setState({senha: e.target.value})}
                />
              </FormGroup>
              <FormGroup label="Confirma Senha: *" htmlFor="inputConfirmaSenha">
                <input
                  type="password"
                  id="inputConfirmaSenha"
                  className="form-control"
                  name="senha"
                  onChange={e => this.setState({senhaConfirma: e.target.value})}
                />
              </FormGroup>
              <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
              <button type="button" className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </div>
        </Card>
      </div>
    )
  }
}

export default CadastroUsuario
