import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import ProductDetail from './components/product'
import Cart from './components/cart'
import store from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components"; 

const theme = {
  secondaryColor: 'rgb(163, 130, 72)',
  primaryColor: 'black',
  borderColor: '#ccc',
};


function App() {

  return (
    <React.Fragment>

      <Provider store={store}>
        <ThemeProvider theme={theme}>

          <Router>
            <Header />
            <main>
              <Switch>
                <Route exact path="/product/:productId" component={ProductDetail} />
                <Route path="/"> <Home /></Route>
              </Switch>
              <Cart />
            </main>

            <footer className="footer">
              <Footer />
            </footer>
          </Router>
        </ThemeProvider>

      </Provider>
    </React.Fragment>
  );
}

export default App;
