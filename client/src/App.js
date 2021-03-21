// import logo from './logo.svg';
// import './App.css';
// import './index.css';
// import header from './component/header';
// import ReactDOM from 'react-dom';       
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// function App() {
//   return (
//     <Switch>
//     <Route path='/' exact component={header} />
//     {/* <Route path='/developer-info/:id' exact component={DeveloperInfoPage} /> */}
    
//   </Switch>
//   );
// }

// export default App;

// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Developer from './webpage/developer';
// import HomePage from './webpage/homepage';
import footer from './component/Modal';
import page from './webpage/home';
import Developer from './webpage/devprofile';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={page} />
      {/* <Route path='/' exact component={HomePage} /> */}
      <Route path='/developer-info/:id' exact component={Developer} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

// import React from 'react';
// import coderpic from './logo/coder.png';
// import './component/header.css';



// export default coder;