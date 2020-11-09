import React from 'react';
import './banner.css';
import { Button } from "@material-ui/core";

function Banner() {
    return (
        <div className='banner'>
            <div className="banner-info">
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of getaway to uncover hidden gems near you.
                </h5>
                <Button
                    variant='outlined'
                >
                    Explore nearby
                </Button>
            </div>
        </div>
    )
};

export default Banner;