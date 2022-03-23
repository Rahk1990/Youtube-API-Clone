import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';


const SearchResults = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            {props.mapVideo()}
        </table>
    );

}
export default SearchResults;