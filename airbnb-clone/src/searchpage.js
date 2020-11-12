import React from 'react';
import './searchpage.css';
import { Button } from '@material-ui/core';

function Searchpage() {
    return (
        <div className='searchpage'>
            <div className='searchpage-info'>
                <p>
                    ? Stays - Provided Dates - Provided Guests
                </p>
                <h1>
                    Stays nearby
                </h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms & Beds</Button>
                <Button variant="outlined">More Filters</Button>

            </div>
        </div>
    );
};

export default Searchpage;