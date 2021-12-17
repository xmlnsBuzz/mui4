import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* react-router-dom V6에서의 변경사항은 https://velog.io/@kcdoggo/Switch-is-not-exported-from-react-router-dom-%EC%97%90%EB%9F%AC 를 참조. */
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage'



function App () {
  const [ selectedIndex, setSelectedIndex ] = useState( 0 );
  const [ value, setValue ] = useState( 0 );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/services" component={() => <div>Services</div>} />
            <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
            <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
            <Route exact path="/websites" component={() => <div>Websites</div>} />

            <Route exact path="/revolution" component={() => <div>The Revolution</div>} />
            <Route exact path="/vision" component={() => <div>Vision</div>} />
            <Route exact path="/technology" component={() => <div>Technology</div>} />
            <Route exact path="/process" component={() => <div>Process</div>} />

            <Route exact path="/about" component={() => <div>About Us</div>} />
            <Route exact path="/history" component={() => <div>History</div>} />
            <Route exact path="/team" component={() => <div>Team</div>} />

            <Route exact path="/contact" component={() => <div>Contact</div>} />

            <Route exact path="/estimate" component={() => <div>Estimate</div>} />
          </Switch>
          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
