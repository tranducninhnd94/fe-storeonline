import React, {Component} from 'react';
import "./menu-left.component.scss";

class MenuLeftComponent extends Component {

    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className = "sidebar-nav">
                    <li className = "sidebar-brand">
                        <a href="#menu-toggle"  id="menu-toggle"  > 
                            <i className ="fa fa-bars "  aria-hidden="true" aria-hidden="true"></i> 
                        </a>
                    </li>
                    <li>
                        <a href="#"><i className ="fa fa-sort-alpha-asc " aria-hidden="true"> </i> <span >Section</span>  </a>
                    </li>
                    <li>
                        <a href="#"> <i className ="fa fa-play-circle-o " aria-hidden="true"> </i> <span> Section</span> </a>
                    </li>
                    <li>
                        <a href="#"> <i className ="fa fa-puzzle-piece" aria-hidden="true"> </i> <span > Section</span> </a>
                    </li>
                    <li>
                        <a href="#"> <i className ="fa fa-font" aria-hidden="true"> </i> <span > Section</span> </a>
                    </li>
                    <li>
                        <a href="#"><i className ="fa fa-info-circle " aria-hidden="true"> </i> <span >Section </span> </a>
                    </li>
                    <li>
                        <a href="#"> <i className ="fa fa-comment-o" aria-hidden="true"> </i> <span > Section</span> </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuLeftComponent;