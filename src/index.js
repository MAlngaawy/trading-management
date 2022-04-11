import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

const clientMe = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
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
