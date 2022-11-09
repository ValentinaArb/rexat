/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; */
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {Mongoose } = require ('./bdd/database')

const app = express();
//npm run dev

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json())

//Routes
app.use('/api/tasks' , require('./bdd/routes/task.routes'));


//Static files
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get("port"), ()=> {
  console.log(`Server on port ${app.get('port')}`);
});

/* 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals(); 
*/