import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import API from './API'

const clientMe = new ApolloClient({
    uri: `${API}/graphql`,
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <BrowserRouter forceRefresh={true}>
        <ApolloProvider client={clientMe}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
