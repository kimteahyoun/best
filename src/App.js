
import './App.css';

import { Link, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import BestPage from './component/BestPage';

import UserInsert from './component/UserInsert';

function App() {
  return (  
    <div className='App'>
      <div className='menu'>
        <Link to="/">홈</Link>
        <Link to="/best/list">Best</Link>

      </div>
      



      <Route path="/" component={HomePage} exact/>
      <Route path="/best" component={BestPage}/>
     
      <Route path="/user/insert" component={UserInsert}/>
        
    
    </div>

    
  );
}

export default App;
