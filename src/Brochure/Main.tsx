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
          <Header />
          <Footer />
        </Router>
      </div>
    );
  }
}