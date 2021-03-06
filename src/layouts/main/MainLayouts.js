import React from 'react';
import Header from '../../components/Header';

const MainLayouts = (props) => {
    return (
        <div>
            <Header Auth={props.Auth} display={props.display} setAuth={ props.setAuth } />
            <div>
                {props.children}
            </div>
        </div>
    );
}
export default MainLayouts;