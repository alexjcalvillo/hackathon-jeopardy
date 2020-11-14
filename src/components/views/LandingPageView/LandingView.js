import React from 'react';
import { Link } from 'react-router-dom';
import ActionButton from '../../helpers/ActionButton';

const LandingView = () => {
    return (
        <>
            <div className="flex-col w-full h-1/2">
                <h1 className="text-6xl text-white font-bold tracking-tighter">Ready to play, the greatest quiz game on earth?!</h1>
                <Link to="play">
                    <ActionButton text="Play" />
                </Link>
            </div>
            <img
                className="w-1/2 inline-block contain"
                src="https://wp.usatodaysports.com/wp-content/uploads/sites/90/2014/09/ap_people_trebek_325511.jpg" 
                alt="alex trebek concerned and pointing"
            />
        </>
    )
}

export default LandingView;