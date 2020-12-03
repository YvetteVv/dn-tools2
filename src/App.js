import React, { Component } from 'react';
import Numbers from "./components/Numbers"
import './App.css';
import 'antd/dist/antd.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Occupation} from "./occupation-picker";
import {Person} from "./person-picker";
class App extends Component {


  render() {
    //console.log(this.state.checkedList)
    return (
     <Route>
       <Switch>
         <Route
             path="/occupation"
             component={routeProps => <Occupation {...routeProps} />}
         />
           <Route
               path="/group"
               component={routeProps => <Person {...routeProps} />}
           />
           <Redirect to="/occupation"/>
       </Switch>

     </Route>
    );
  }
}

export default App;
