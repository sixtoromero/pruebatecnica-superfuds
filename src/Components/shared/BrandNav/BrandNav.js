import React from 'react'
import { Navbar  } from 'react-bootstrap';

import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

export default function BrandNav() {
    return (
        <Navbar.Brand>
            <Logo />
        </Navbar.Brand>
    );
}
