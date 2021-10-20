import React from 'react';
import UserList from './UserList';

class App extends React.Component{
   
    render(){
        return(
            <div>
                <h3>hello all users</h3>
                <UserList/>
            </div>
        );
    }
}

export default App;