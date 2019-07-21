import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { saveAs } from 'file-saver';

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

      <div className="App">
        <label><p>Name</p>
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        </label>
        <label><p>Receipt ID</p>
        <input type="number" placeholder="Receipt ID" name="receiptId" onChange={this.handleChange}/></label>
        <label><p>Price1</p>
        <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange}/></label>
        <label><p>Price2</p>
        <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange}/></label>
        <label>
        <button onClick={this.createAndDownloadPdf}>Download PDF
        </button></label>
      </div>
    );
  }
}

export default App;
