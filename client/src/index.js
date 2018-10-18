import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import style from './style/app.scss';

import Home from './view/Home';
import Page404 from './view/Page404';

ReactDOM.render((
    <Provider store={ store }>
        <Router history={browserHistory}>
            <React.Fragment>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route component={Page404} />
                </Switch>
            </React.Fragment>
        </Router>
    </Provider>
), document.getElementById("index"));

// Initial Redux Setup - step 1
// set provider and load store