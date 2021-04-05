import React, { useState, useEffect } from 'react';

//import { Search } from 'react-bootstrap-icons';
// import { Container, Navbar, Nav  } from 'react-bootstrap';

// import { Search } from 'react-bootstrap-icons';

// import BrandNav from '../shared/BrandNav/BrandNav';

// import { ReactComponent as Logo } from '../../assets/images/logo.svg';
// import IconHeader from '../shared/IconHeader/IconHeader';
// import MyProfilePhoto from '../shared/MyProfilePhoto/MyProfilePhoto';
//import SearchBar from '../shared/SearchBar/SearchBar';
import { ArrowDown } from 'react-bootstrap-icons';

import SearchInput from '../shared/SearchInput/SearchInput';
import { NavBarStyle } from '../../utils/constants'
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './HeaderLayout.scss';

export const HeaderLayout = (props) => {
    
    return (        
        <div className={NavBarStyle}>
            <div to="/" className="logo">
                <Logo />
            </div>
            <div  className="search">
                <SearchInput />
            </div>
            <div className="profile">
                {/* <Link to="/cart" >
                    <IconButton aria-label="cart" className="cart">
                        <StyledBadge badgeContent={total}>
                        <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Link> */}
            <div className="info">
                <div className="data">
                <h4 className="name">
                    Sixto Romero
                </h4>
                <p className="viewProfile">Mi perfil <ArrowDown /></p>
                </div>
                {/* <Avatar alt="Jessica Sandoval" src="./assets/jessica.png" /> */}
            </div>
            </div>
        </div>
        
    );
}

