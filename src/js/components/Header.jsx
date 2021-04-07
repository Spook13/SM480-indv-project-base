import React from 'react';
import ReactDOM from 'react-dom';
import './Header.scss';

function  Header(props){
    return (
        <div className="under-line" >
            <p className= "hashtag"> #{props.hashtag} </p>
        </div>
    )
}

Header.propTypes = {
    // eslint-disable-next-line no-undef
    // hashtag: PropTypes.string.isRequired,
}
export default Header;