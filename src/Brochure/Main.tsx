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
import About from '../About/About';
import Portfolio from './Portfolio';
import Services from '../Service/Services';
import Contact from '../ContactUs/Contact';
import BlogMain from '../Blog/BlogMain';
import DupperWedding from '../Portfolio/Weddings/DupperWedding';
import GeyerWedding from '../Portfolio/Weddings/GeyerWedding';
import NeethlingWedding from '../Portfolio/Weddings/NeethlingWedding';
import RougeRevue from '../Portfolio/Stage/RougeRevue';
import ServicesContent from '../Service/ServicesContent';

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
    path: "/therougerevue",
    component: RougeRevue    
  },
  {
    path: "/neethlingwedding",
    component: NeethlingWedding    
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
    path: "/servicedetail",
    component: ServicesContent
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