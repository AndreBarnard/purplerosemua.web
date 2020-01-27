import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Wrapper from '../Templetes/Wrapper'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Service';
import Contact from './Contact';

export interface IAppProps {
}

const routes = [
  {
    path: "/about",
    component: About
  },
  {
    path: "/portfolio",
    component: Portfolio
  },
  {
    path: "/services",
    component: Services
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/",
    component: Home
  },
];

export default class Main extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <Router>
          <div className="row">
            <div className="col col-lg-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col col-lg-12">
              <Wrapper>
                <Switch>            
                {routes.map((route, i) => (
                    <Route path={route.path} component={route.component}/>
                  ))}    
                </Switch>
              </Wrapper>          
            </div>
          </div>        
          <div className="row">
            <div className="col col-lg-12">
              <Footer/>
            </div>          
          </div>
        </Router>
      </div>
    );
  }
}