import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LostAndFound} from "./LostAndFound";
import './App.css';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LostAndFound/>
                </Route>
                <Route path="/lost-and-found">
                    <LostAndFound/>
                </Route>
            </Switch>
        </Router>
    );
}
