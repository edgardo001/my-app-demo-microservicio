import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor(props) {
    	super(props)
        this.state = { users: [], form : {} }
  }

  componentWillMount() {
    this.loadData();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.form);
    //alert("Guardando" + this.form.nombre.value);
    //Aqui la logica
    //Guardar el usuario en el API
    //var data = JSON.stringify({"id":"5","nombre":"roberto","apellido":"valenzuela","edad":34});
    //
    //fetch('http://localhost:3000/user', {
    //  method: 'POST',
    //  headers: {'Accept': 'application/json','Content-Type': 'application/json'},
    //  body: data
    //});
    ////Limpiar el form
    ////Refrescar la grilla
    //this.loadData();
    event.preventDefault();
  }

  loadData(){
    fetch('http://localhost:3000/user')
    .then((res) => {return res.json()})
    .then((users) => {this.setState({ users: users })});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Id: <input type="number" value={this.state.form.nombre}/>
            </label>
            <br/>
            <label>
              Nombre: <input type="text"/>
            </label>
            <br/>
            <label>
              Apellido: <input type="text"/>
            </label>
            <br/>
            <label>
              Edad: <input type="number"/>
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
          <br/>
          <table>
            <tbody>
              {this.state.users.map(function(item, key) {             
                    return (
                       <tr key = {key}>
                           <td>{item.id}</td>
                           <td>{item.nombre}</td>
                           <td>{item.apellido}</td>
                           <td>{item.edad}</td>
                       </tr>
                    )
              })}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
