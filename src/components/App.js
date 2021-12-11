import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* react-router-dom V6에서의 변경사항은 https://velog.io/@kcdoggo/Switch-is-not-exported-from-react-router-dom-%EC%97%90%EB%9F%AC 를 참조. */
import theme from './ui/Theme';
import Header from './ui/Header';


function App () {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/services" component={() => <div>Services</div>} />
            <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
            <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
            <Route exact path="/websites" component={() => <div>Websites</div>} />
            <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
            <Route exact path="/about" component={() => <div>About Us</div>} />
            <Route exact path="/contact" component={() => <div>Contact</div>} />
            <Route exact path="/estimate" component={() => <div>Estimate</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
