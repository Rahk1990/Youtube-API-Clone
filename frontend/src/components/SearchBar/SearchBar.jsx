import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchVideo, setSearchVideo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchVideo)
        props.fetchVideos(searchVideo);

    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Search...' value={searchVideo} onChange={(event) => setSearchVideo(event.target.value)} ></input>
                <button onClick={handleSubmit} type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar