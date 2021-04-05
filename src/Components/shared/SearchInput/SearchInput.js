import React from 'react'
import { Search } from 'react-bootstrap-icons';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
//import { SearchStyle } from '../../../utils/constants'

import { SearchStyle } from './SearchInputStyle'


export const SearchInput = () => {
    return (

        <div className={SearchStyle}>
            <input type='text' placeholder='Busca marcas y productos'/>
            <div className="searchIcon">
                <Search />
            </div>
        </div>

        // <InputGroup>
        //     <Form.Control
        //         type="text"
        //         placeholder="Busca marcas y productos..."
        //     />
        //     <InputGroup.Prepend>
        //         <InputGroup.Text>
        //             <Search />
        //         </InputGroup.Text>
        //     </InputGroup.Prepend>
        // </InputGroup>
    );
}

export default SearchInput;