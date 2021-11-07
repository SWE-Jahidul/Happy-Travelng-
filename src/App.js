import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Events from "./Components/Events/Events";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Components/Blogs/Blogs";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import AddEvents from "./Components/AddEvents/AddEvents";
import PopularDestinationDetails from "./Components/PopularDestiantionDetails/PopularDestinationDetails";
import EventsDetails from "./Components/EventsDetails/EventsDetails";
import AuthProvider from "./Components/context/AuthProvider";
import ManageOrder from "./Components/ManageOrder/ManageOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddPopularDEstination from "./Components/AddPopularDestination/AddPopularDEstination";
import PopularDestination from "./Components/PopularDestination/PopularDestination";
import NotFound from "./Components/NotFound/NotFound";
import MyOrder from "./Components/MyOrder/MyOrder";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar> </Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/events">
              <Events></Events>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/popularDestinationusers">
              <PopularDestination></PopularDestination>
            </Route>

            <Route path="/adddestination">
              <AddPopularDEstination></AddPopularDEstination>
            </Route>

            <Route path="/addevents">
              <AddEvents></AddEvents>
            </Route>

            <PrivateRoute path="/populardestinationdetails/:destinationId">
              <PopularDestinationDetails></PopularDestinationDetails>
            </PrivateRoute>

            <PrivateRoute path="/eventdetails/:eventId">
              <EventsDetails></EventsDetails>
            </PrivateRoute>

            <Route path="/manageorder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/myorder">
              <MyOrder></MyOrder>
            </Route>
          
           
           
           

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
