import React, { Fragment } from 'react';
import RouteApp from './routes/routes';

import './global/styles.css';
import Footer from './components/Footer';
import ShowHeader from './shared/locations/ShowHeader';

function App() {
  return (
    <Fragment>
      <main>    
        <ShowHeader /> 
        <article>
          <RouteApp />
        </article>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
