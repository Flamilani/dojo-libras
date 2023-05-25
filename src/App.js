import React, { Fragment } from 'react';
import RouteApp from './routes/routes';

import './global/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <main>    
        <Header /> 
        <article>
          <RouteApp />
        </article>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
