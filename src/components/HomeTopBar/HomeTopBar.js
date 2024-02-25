import React, {useState} from 'react';
import './HomeTopBar.css';

function HomeTopBar() {

    // const [menuContents, setMenuContents] = useState()

    // function handleExpand() {
    //     setMenuContents
    // }
    return(
        <div className = "topBar">
            <div>
                sign in
            </div>
            <div className = "brand">
                online shop
            </div>
            <div class = "menu">
                <div class="menu-icon" onclick="toggleMenu()">
                    ☰
                </div>

                {/* <div class="menu-content" id="menuContent"> */}
                    {/* <!-- Your menu content goes here --> */}
                    {/* <p>Menu Item 1</p>
                    <p>Menu Item 2</p>
                    <p>Menu Item 3</p> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default HomeTopBar;