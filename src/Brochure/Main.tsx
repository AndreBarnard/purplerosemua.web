import * as React from 'react';
import Header from './Header';
import Footer from '../Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../styles/_purplerose.scss'

import Home from '../Home/Home';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Service';
import Contact from './Contact';
import BlogMain from '../Blog/BlogMain';
import DupperWedding from '../Portfolio/Weddings/DupperWedding';
import GeyerWedding from '../Portfolio/Weddings/GeyerWedding';

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
    path: "/blog",
    component:  BlogMain
  },
  {
    path: "/dupperwedding",
    component: DupperWedding
  },
  {
    path: "/geyerwedding",
    component: GeyerWedding
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
          <Header />
          <Switch>
          {routes.map((route, i) => (
                     <Route path={route.path} component={route.component} />
                  ))} 
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}