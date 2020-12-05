import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='Search by City...' className='search-input' autoFocus /> 
                <input type='submit' value='Search' className='search-btn'/>
            </form>
        )
    }
}

export default Search;