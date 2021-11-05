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

function App() {
  return (
    <div className="App">
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

          <Route path="/addevents">
            <AddEvents></AddEvents>
          </Route>

          <Route path="/populardestinationdetails/:destinationId">
            <PopularDestinationDetails></PopularDestinationDetails>
          </Route>

          <Route path="/eventdetails/:eventId">
            <EventsDetails></EventsDetails>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
