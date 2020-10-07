import React from 'react';
// components
import { Header, PageWrapper } from './components';
// pages
import { MainPage } from './pages';
// store
import { rootModel } from './store/rootModel';
// context
import MSTContext from './MSTContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <MSTContext.Provider value={rootModel}>
        <Header />
        <PageWrapper>
          <Router>
            <Switch>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </Router>
        </PageWrapper>
      </MSTContext.Provider>
    </div>
  );
}

export default App;
