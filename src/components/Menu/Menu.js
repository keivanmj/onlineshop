import React, {useState} from 'react';
import './Menu.css';

function Menu() {

    const [showContents, setShowContents] = useState(false);

    const [buttonContent, setButtonContent] = useState('☰');

    const [textSize, setTextSize] = useState('15px');

    function toggleMenu(e) {
        if (buttonContent === '☰') {
            setButtonContent('×');
            setTextSize('18px');
        }
        else if (buttonContent === '×') {
            setButtonContent('☰');
            setTextSize('15px');
        }
        setShowContents(!showContents);
    }

    return(
        <div>
            <button style={{ fontSize: textSize }} onClick={toggleMenu} >{buttonContent}</button>
        {showContents ? 
            <div class="menu-content" id="menuContent">
                {/* <button class="menu-icon" onClick={closeMenu}>
                    <span>&times;</span>
                </button> */}
                <div>Menu Item 1</div>
                <div>Menu Item 2</div>
                <div>Menu Item 3</div>
            </div> : 
            <div/>
        }
        </div>
    )
}

export default Menu;