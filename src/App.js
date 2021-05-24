import React from 'react';
import Header from './app/components/header';
import HorizontalStepper from './app/components/horizontalStepper';
import './app.scss';

function App() {
  return (
    <React.Fragment>
      <Header className="app-header" />
      <HorizontalStepper />
    </React.Fragment>
  );
}

export default App;
