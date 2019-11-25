import React from 'react'
import ReactDom from 'react-dom'
import App from './Containers/App'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import reducers from './Redux/reducers'
import {createStore} from 'redux'

let store = createStore(reducers)

console.log(App)
ReactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

