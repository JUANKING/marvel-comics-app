import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comics from './component/Comics';
import ComicDetail from './component/ComicDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
<Router >
    <div>
      <Route path="/" component={App} />
      <Route path="/comics" component={Comics} />
      <Route path='/comic/:id' component={ComicDetail}/>
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
