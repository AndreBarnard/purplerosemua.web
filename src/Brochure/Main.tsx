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
import BlackLips from '../Portfolio/Photoshoots/BlackLips';
import Winter from '../Portfolio/Photoshoots/Winter';
import Skin from '../Portfolio/Photoshoots/Skin';
import SocietyVsReality from '../Portfolio/Photoshoots/SocietyVsReality';
import Facepaint from '../Portfolio/SpecialEffects/Facepaint';
import SpecialEffects from '../Portfolio/SpecialEffects/SpecialEffects';
import GrimeHouseFightClub from '../Portfolio/SpecialEffects/GrimeHouseFightClub';

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
    path: "/blacklips",
    component: BlackLips
  },
  {
    path: "/winter",
    component: Winter
  },
  {
    path: "/skin",
    component: Skin
  },
  {
    path: "/societyvsreality",
    component: SocietyVsReality
  },
  {
    path: "/servicedetail",
    component: ServicesContent
  },
  {
    path: "/facepaint",
    component: Facepaint
  },
  {
    path: "/grimehousefightclub",
    component: GrimeHouseFightClub
  },
  {
    path: "/specialeffects",
    component: SpecialEffects
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