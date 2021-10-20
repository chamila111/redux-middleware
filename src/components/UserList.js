import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import '../css/userList.css'
class UserList extends Component{
    componentDidMount(){
        this.props.fetchUsers()
    }
    renderUsers(){
        return this.props.users.map(user => {
            return (
            <div  key={user.name} className="ui card">
  
            <div className="content">
                <a className="header">{user.name}</a>

                    <div className="description">
                        {user.company.name}
                    </div>
        <div className="ui labeled button" tabindex="0">
        <div className="ui red button">
                <i className="heart icon"></i> Like
        </div>
            <a className="ui basic red left pointing label">
                                {user.website}
            </a>
        </div>
        </div>
  
</div>
            );
        })
    }
    render(){
        return(
            <div className='container'>
                {this.renderUsers()}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        users:state.users
    }
}
export default connect(mapStateToProps,actions)(UserList);