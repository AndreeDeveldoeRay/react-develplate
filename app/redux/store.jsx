/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:53+01:00
* @Email:  me@andreeray.se
* @Filename: configStore.jsx
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-05T22:08:33+02:00
*/


var redux = require('redux'), thunk = require('redux-thunk').default, {appNameReducer, appStatusReducer, moviesReducer, mapReducer} = require('reducers')

export var configureStore = () => {
    var reducer = redux.combineReducers(
    {
        appName: appNameReducer,
        appStatus: appStatusReducer,
        movies: moviesReducer,
        map : mapReducer
    })

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    return store
}
