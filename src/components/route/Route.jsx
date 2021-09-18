import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import Header from '../header/Header';
import Home from '../home/Home';

const Routes = () => {
    return <div>
        <Router>
            <div>
                <Header />
                <div className="main">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/cart' component={Cart} />
                    </Switch>
                </div>
            </div>
        </Router>
    </div>
}

export default Routes
