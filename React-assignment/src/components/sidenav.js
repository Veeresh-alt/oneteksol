import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideNav extends Component {
    state = {  }
    render() { 
        return (
            <div className="b SideNav">
                <button className="sideButtons"><Link to="" className="a" href="">JavaScript</Link></button>
                <button className="sideButtons"><Link to="" className="a" href="">React js</Link></button>
                <button className="sideButtons"><Link to="" className="a" href="">React Native</Link></button>
                <button className="sideButtons"><Link to="" className="a" href="">Node.Js</Link></button>
                <button className="sideButtons"><Link to="" className="a" href="">Agular JS</Link></button>
                <button className="sideButtons"><Link to="" className="a" href="">PHP</Link></button>
                <button className="sideButtons"><Link to="" className="a" href="">Vue JS</Link></button>
            </div>
          );
    }
}
 
export default SideNav;