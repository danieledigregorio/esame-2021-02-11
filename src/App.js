import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Home";
import ControlPane from "./ControlPane";
import {HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {createContext, useReducer} from "react";
import {Reducer, initialState} from "./Reducer";

export const StateContext = createContext()

function App() {

    return (
        <StateContext.Provider value={useReducer(Reducer, initialState)}>
            <HashRouter>
                <Switch>
                    <Route exact path={'/settings'} ><ControlPane /></Route>
                    <Route exact path={'/'} ><Home /></Route>
                </Switch>
            </HashRouter>
        </StateContext.Provider>
    );
}

export default App;
