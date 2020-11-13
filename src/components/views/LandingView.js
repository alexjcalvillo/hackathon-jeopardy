import React from 'react';

const LandingView = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="w-full mx-24">
                <div className="my-16">
                    Landing View
                </div>
                <div className="flex space-x-10 border rounded h-full px-24 py-10 justify-between">
                    <h1 className="text-6xl text-white font-bold w-1/2 tracking-tighter">Ready to play, the greatest quiz game on earth?!</h1>
                    <img
                        className="w-1/3 inline-block" 
                        src="https://wp.usatodaysports.com/wp-content/uploads/sites/90/2014/09/ap_people_trebek_325511.jpg" alt="alex trebek pointing" />
                </div>
            </div>
        </div>
    )
}

export default LandingView;