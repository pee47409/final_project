import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,

  } from "react-router-dom";
  import Home from './assets/screens/Home' 
import FindMap from './assets/screens/FindMap'
import Consignment from './assets/screens/Consignment'
import Pee2 from "./assets/screens/Pee";
import ConsignmentLists from "./assets/screens/ConsignmentLists";
import PropertyAppraisal from "./assets/screens/PropertyAppraisal";
import Test from "./assets/screens/Test";
import Map from "./assets/screens/components/Map";
import Maphome from "./assets/screens/components/Maphome";
import ohm from "./assets/screens/Test/ohm";
import ResultScreen from "./assets/screens/ResultScreen";
import facility from "./assets/screens/Facility";
function Routes() {
  return (
    <>
     <Router>
         <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/findmap" component={FindMap} />
         <Route exact path="/Consignment" component={Consignment} />
         <Route exact path="/ConsignmentLists" component={ConsignmentLists} />
         <Route exact path="/PropertyAppraisal" component={PropertyAppraisal} />
         <Route exact path="/Test" component={Test} />
         <Route path="/pee" component={Pee2} />
         <Route path="/Map" component={Map} />
         <Route path="/Maphome" component={Maphome} />
         <Route path="/ohm" component={ohm} />
         <Route path="/facility" component={facility} />
         <Route path="/ResultScreen" component={ResultScreen} />
         <Route path='*' exact={true} component={()=>{return(<>Not found</>)}} />
         
         </Switch>
       
     </Router>
        
    </>
  );
}

export default Routes;
