import React, { Component } from 'react';
import './home.component.scss';

import MenuTopComponent from '../../partial/menu-top/menu-top.component';
import MenuLeftComponent from '../../partial/menu-left/menu-left.component';

class HomePageComponent extends Component { 
    render() {
        return (
            <div className = "container-fluid">
                <MenuTopComponent />
                <MenuLeftComponent />
            </div>
        )
    }
}

export default HomePageComponent;