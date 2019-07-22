import React, { Component,Fragment } from 'react';
import axios from 'axios';
import './App.css';
import { saveAs } from 'file-saver';
import {Header} from './partials/header';
class App extends Component {
  state={
    name:'',
    receiptId:0,
    price1:0,
    price2:0


  }
  handleChange=({target:{value,name}})=>this.setState({[name]:value})
  createAndDownloadPdf=()=>{
    axios.post('create-pdf',this.state)
      .then(()=>axios.get('fetch-pdf',{responseType:'blob'}))
      .then((res)=>{
        const pdfBlob=new Blob([res.data],{type:'application/pdf'})
        saveAs(pdfBlob,'newPdf.pdf');
      })
  }
  render() {
    return (
      <Fragment>
<Header  />
      <div className="App">
      <div class="row">
    <form class="col s12">
      <div class="row">
      
        <div class="input-field col s12">
        <div class="card-panel green lighten-1">
        First Name
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        </div>
        
        
        <div class="card-panel green lighten-1">
        Receipt ID
        <input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange}/>
        </div>
        
        
        
        <div class="card-panel green lighten-1">
        Price 1
        <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange}/>
        </div>
        
        
        <div class="card-panel green lighten-1">
        Price2
        <input  type="number" placeholder="Price 2" name="price2" onChange={this.handleChange}/>
        </div>
        </div>
        </div>
        
        
      
    </form>
    <button class="btn teal accent-4 btn-small" onClick={this.createAndDownloadPdf}>
        <i class="material-icons right">send</i>Download PDF</button>
    </div>
    
    
  
        
        
        </div>
      </Fragment>

    );
  }
}

export default App;
