import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './Components/';
import GlobalStyle from './globalStyles';
import Home from     './pages/HomePage/Home';
import Services from './pages/ServicesPage/Services';
import Products from './pages/ProductsPage/Products';
import SignUp from   './pages/SignUpPage/SignUp';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer/>
      <GlobalStyle />
    </Router>
  );
}

export default App;