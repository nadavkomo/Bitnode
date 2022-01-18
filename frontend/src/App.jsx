import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { BitnodeApp } from './pages/BitnodeApp/BitnodeApp'
import { BitnodeDetails } from './pages/BitnodeDetails/BitnodeDetails';
import "./assets/scss/global.scss";
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { HomePage } from './pages/HomePage/HomePage'
import { BitnodeEdit } from './pages/BitnodeEdit/BitnodeEdit';
import { AppFooter } from './cmps/AppFooter/AppFooter'

export function App() {
  return (
    <div className="App main-container">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/bitnode/edit/:id?"  component={BitnodeEdit} />
          {/* <Route path="/bitnode/:id"  component={BitnodeDetails} /> */}
          <Route path="/bitnode"  component={BitnodeApp} />
          <Route path="/"  component={HomePage} />
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
}