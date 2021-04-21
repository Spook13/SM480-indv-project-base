import React from 'react';
import PropTypes from "prop-types";
import './GraphPopup.scss';
import GraphInfo from './GraphInfo';

function  GraphPopup(props){

    if(!props.show) {
        return null;
    }

    return (
        <div className="graph-popup-container" >
            <div className="graph-info-container">
                
                <div 
                    className="exit-graph"
                    onClick={props.hidePopUp}
                >
                    X 
                </div>

                <p className="graph-text">
                    Graph Info
                </p>

                <div>
                    <GraphInfo />
                </div>
                
            </div>
        </div>
    )
}

GraphPopup.propTypes = {
    show: PropTypes.bool,
    // for hiding pop up
    hidePopUp: PropTypes.func,
}

export default GraphPopup;