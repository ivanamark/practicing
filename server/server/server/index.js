const express = require('express');

const bodyParser=require('body-parser');
const pdf=require('html-pdf');
const cors=require('cors');
const app=express();
const pdfTemplate=require('./documents/index.js');

const port=process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//POST method
app.post('/create-pdf',(req,res)=>{
    pdf.create(pdfTemplate(req.body),{}).toFile('result.pdf',(err)=>{
        if(err){
            res.send(Promise.reject()) ;
        }
        res.send(Promise.resolve()) ;
    })
})
//GET method
app.get('/fetch-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/result.pdf`)
})
app.listen(port,()=>
console.log(`Listening on port ${port}`));

