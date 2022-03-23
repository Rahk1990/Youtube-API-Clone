import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchVideo, setSearchVideo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('')
        props.getSearchResults(searchVideo);

    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search...' value={searchVideo} onChange={(event) => setSearchVideo(event.target.value)} />
                <button onClick={handleSubmit} type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar