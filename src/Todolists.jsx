import React from 'react';
const Todolists=(props)=>{
    return(
        <>
            <div className='todo_style'>
                <i class='fa fa-times' area-hidden='true'></i>
                <li>{props.text}</li>
            </div>
        </>
    );

};
export default Todolists;