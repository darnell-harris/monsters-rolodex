import React from 'react';
import './search-field.styles.css';

export const SearchField = ({ ...restProps }) => {
    return(
        <div>
            <input className="search" {...restProps} />
        </div>
    );
}