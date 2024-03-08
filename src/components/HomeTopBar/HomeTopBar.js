import React, {useEffect, useState} from 'react';
import './HomeTopBar.css';
import Menu from '../Menu/Menu';

function HomeTopBar() {

    // function closeMenu() {
    //     setShowContents(false);
    // }
    
    return(
        <div>
        <div className = "topBar">
            <div>
                sign in
            </div>
            {/* <div className = "brand">
                online shop
            </div> */}
            <Menu/>
        </div>
        </div>
    )
}
export default HomeTopBar;