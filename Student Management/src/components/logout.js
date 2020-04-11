import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from './header';


class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (<div>
                <Header />
                <div className="loginPage">
                <h1>you have been logout</h1>
                <Link to="/">Login Again </Link>
                </div>
            </div>
        );
    }
}

export default Logout;