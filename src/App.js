
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddUser from './pages/AddUser/AddUser'
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Services from './pages/Home/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import ContactUs from './pages/ContactUs/ContactUs';
import ServiceRivewsColeection from './pages/ServiceRivewsColeection/ServiceRivewsColeection';

import Registration from './pages/Regirtration/Registration';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login';
import AuthProvider from './pages/Context/AuthProvider';
import ManageOrder from './pages/ManageOrder/ManageOrder';
import NotFound from './pages/NotFound/NotFound';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/rivew">
              <ServiceRivewsColeection></ServiceRivewsColeection>
            </PrivateRoute>
            <Route path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/Sign In">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addUser">
              <AddUser></AddUser>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrder">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
