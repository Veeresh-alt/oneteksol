import React, { Component } from 'react';
import '../styles/App.css'
import {Link} from 'react-router-dom';

class Header extends Component {
    render() { 
        return (
            <div className="head">
        <div className="no titlediv">
        <h1 className="no titleName"><Link to="/">Courseque</Link></h1>
        </div>
        <div className="no headersearch">
            <form>
            <input type="search" className="search" placeholder="search here" ></input>
            <button className="fafa_search"><i class="fas fa-search">click</i></button>
            </form>
        </div>
        </div>
          );
    }
}
 
export default Header;