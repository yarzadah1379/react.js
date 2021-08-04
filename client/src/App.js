import React,{useState} from 'react'

import {BrowserRouter as Router,Route} from 'react-router-dom'
 
import Layout from './hocs/Layout';
import Login from './containers/Login'
import Signup from './containers/Signup'
import Edit from './containers/Edit'
import Table from './containers/Table'


import './sass/main.scss'

function App() {

  const [userId,setUserId]=useState();
  return (
     <Router>
     <Layout>
      <Route exact  path='/'  component={Login}/>
      <Route   path='/signup'  component={Signup}/>


      <Route   path='/edit/:id'  />

      
      <Route   path='/table' 
      render={(props) =>(
        <Table   {...props} setUserId={setUserId}/>
      )}
   
      
      />


      

     </Layout>
     </Router>
  );
}

export default App;
