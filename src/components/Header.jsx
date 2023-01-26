import React from 'react';

const Header = ({mainimage}) => {
    return (
        <div className='header-all'>
          
            <div className='red'>  <img src={mainimage} alt="" /></div>
            <div className='black'>
                <div className='circle'>
                    <div className='circle-in'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;