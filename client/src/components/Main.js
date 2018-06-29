import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import RoutePlanner from './RoutePlanner';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
                state: ''
        }
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <NavBar />

                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/route-planner' component={RoutePlanner} />
    
                </React.Fragment>
            </Router>
        );
    }
}

export default Main;