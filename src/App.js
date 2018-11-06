import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from "./common/Header";
import Home from './pages/Home'
import Login from './pages/Login'
import Write from './pages/Write'
import Detail from './pages/Detail'
import Download from './pages/Download'
import Error from './pages/Error'
import store from './store'
import './App.css'
import {Globalstyle} from "./style";
import {IconGlobalStyle} from './static/iconfont/iconfont'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Globalstyle/>
            <IconGlobalStyle/>
            <Router>
                <div>
                    <Header/>
                    <Switch>
                     <Route path="/" exact component={Home}/>
                     <Route path="/login" exact component={Login}/>
                     <Route path="/write"  component={Write}/>
                     <Route path="/detail/:id" component={Detail}/>
                     <Route path="/download" component={Download}/>
                     <Route component={Error}/>
                    </Switch>
                </div>
            </Router>
          </div>
        </Provider>
    );
  }
}

export default App;
