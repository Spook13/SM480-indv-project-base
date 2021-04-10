import React, { useState } from 'react';
import './Popup.scss';
import PopupButton from './PopupButton'

function  Popup(props){

    // if(!props.show) {
    //     return null;
    // }

    return (
        <div className="container" >
            <div className="exit" onClick={props.hidePopUp}>
                X
            </div>
        </div>
    )
}

// Adding this broke things
// Popup.propTypes = {
//     // eslint-disable-next-line no-undef
//     show: PropTypes.bool,
//     // for hiding pop up
//     // eslint-disable-next-line no-undef
//     hidePopUp: PropTypes.func,
// }
 
export default Popup;