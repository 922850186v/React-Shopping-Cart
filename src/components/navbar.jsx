import React from 'react';

const NavBar = ({totalCounters}) => { //retrieving the the total count from the parent
    return ( 

        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                    Total Items :
                    <span className="badge badge-pill badge-secondary m-2">
                    {totalCounters}
                    </span>
            </a>
        </div>
    </nav>
     );
}
 
export default NavBar;