import React from 'react'
import { Route,Link } from 'react-router-dom'
import BestInsert from './BestInsert'
import BestList from './BestList'
import BestRead from './BestRead'
import UserInsert from './UserInsert'

const BestPage = () => {
  return (
    
    <div>
        <div className='sub_menu'>
            <Link to="/best/list">Best List</Link>     
            <Link to="/best/insert">best insert</Link>
            
               </div>
        <Route path="/best/list" component={BestList}/>
        <Route path="/best/insert" component={BestInsert}/>
        <Route path="/best/read/:id" component={BestRead}/>
        <Route path="/user/insert" component={UserInsert}/>
        </div>
  )
}

export default BestPage