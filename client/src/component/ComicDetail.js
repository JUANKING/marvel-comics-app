import React, { Component } from 'react';
import auth from '../auth/auth';
import logo from '../logo.svg';



class ComicDetail extends Component { 
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
        this.body=null;
    }
  componentDidMount() {
    this.getComicById(this.props.match.params.id)
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

goBack(){
    this.props.history.goBack();
}

  getComicById = async (id) => {
    const response = await fetch('/comics/'+id ,{method:"GET", headers:{'x-access-token':auth.getToken()}});
    this.body = await response.json();

    if (response.status !== 200) throw Error(this.body.message);

    return this.body;
  };

  render() {
    return (  
        <div>
            <button onClick={this.goBack}>Volver</button>
            {this.body!=null ?
            (
                <div>
                   
                    <h2>{this.body.title}</h2>
                    <h3>{this.body.description}</h3>
                    {
                        this.body.images.map((img, i) =>(
                        <li key={i}>
                            <img src={img.path+'/portrait_uncanny.jpg'}/> 
                        </li>
                    ))}
                </div>
            )
            :
            (
              <div>
                <span className="App-title">Cargando detalle del comic...</span>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
           )}  
        </div>
    );
  }
}

export default ComicDetail;