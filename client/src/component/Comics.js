import React, { Component } from 'react';
import auth from '../auth/auth';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';


class Comics extends Component {
  constructor() {
    super();
    this.body=null;
  }

  componentDidMount() {
    this.getAllComics()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  getAllComics = async () => {
    const response = await fetch('/comics',{method:"GET", headers:{'x-access-token':auth.getToken()}});
    this.body = await response.json();

    if (response.status !== 200) throw Error(this.body.message);

    return this.body;
  };

  
  render() {
    return (
      <div>
        {this.body!=null ?
            (<ul>
              {this.body.map((comic, i) =>(
                <li key={i}>  
                  <Link to={'/comic/'+comic.id} key={comic.id}>
                    <img src={comic.img}/>{comic.title} 
                  </Link>
                </li>
              ))}
            </ul>):
            (
              <div>
              <span className="App-title">Cargando...</span>
              <img src={logo} className="App-logo" alt="logo" />
              </div>
           )}
       

      </div>
      
    );
  }
}

export default Comics;