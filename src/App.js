import React, {useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";

import './styles/App.scss';
import TokenForm from './tokenForm';
import ListUrl from "./list-url";


const App = () => {
    const history = useHistory();

    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const setTokenHandler = (tokenToSave) => {
        setToken(tokenToSave);
        localStorage.setItem('token', token);
        window.location.pathname='/';
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/token">
                    <TokenForm changeTokenHandler={setTokenHandler} token={token}/>
                </Route>
                <Route exact path="/">
                    {token === '' ? <Redirect to="/token"/> : <ListUrl token={token}/>}
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
