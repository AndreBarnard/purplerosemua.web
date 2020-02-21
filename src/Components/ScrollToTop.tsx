import { Component } from "react";
import { withRouter } from "react-router-dom";
import {RouteComponentProps} from "react-router";


type PropsType = RouteComponentProps<any> & {
}

 class ScrollToTop extends Component<PropsType> {
     componentDidUpdate(prevProps: { location: any; }) {
         if (this.props.location !== prevProps.location) {
             window.scrollTo(0, 0);
         }
     }

     render() {
         return this.props.children
     }
 }

 export default withRouter(ScrollToTop)