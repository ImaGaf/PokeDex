import React from 'react';

const Pagination = ({num,setPage}) => {
    return (
        <div className='pagination-button'>
            <button onClick={()=>setPage(num)}>{num}</button>
        </div>
    );
};

export default Pagination;