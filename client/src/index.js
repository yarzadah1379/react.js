import React from 'react';
import ReactDOM from 'react-dom';
import {
 
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools';

import App from './App';

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>

    <App />
    <ReactQueryDevtools/>
    </QueryClientProvider>

 ,
  document.getElementById('root')
);


