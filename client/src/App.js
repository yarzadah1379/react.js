import React from 'react'

import {
 
  QueryClient,
  QueryClientProvider,
} from 'react-query'


import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Layout from './hocs/Layout';
import Login from './containers/Login'
import Signup from './containers/Signup'
import Edit from './containers/Edit'
import Table from './containers/Table'

import './sass/main.scss'
const queryClient = new QueryClient()

function App() {
  return (
 <QueryClientProvider client={queryClient}>
     <Router>
     <Layout>
      <Route exact  path='/'  component={Login}/>
      <Route   path='/signup'  component={Signup}/>
      <Route   path='/edit'  component={Edit}/>
      <Route   path='/table'  component={Table}/>

     </Layout>
     </Router>
     </QueryClientProvider>
  );
}

export default App;
