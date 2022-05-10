import React from 'react'
import SuccessMsg from './SuccessMsg'
import ErrorMsg from './ErrorMsg'
import Loading from './Loading'
import './dialogWindow.css'


function DialogWindow({ error, callback, loading  }) {
    

    return (
        <div className='dialog'>
            <div className="dialog-window">
                
                {loading ?
                    <Loading />
                   : error
                    ? <ErrorMsg />
                    : <SuccessMsg />
                }
                { !loading && <button className="btn btn-primary" onClick={callback}>Ok</button>}
            </div>          
        </div>
    )
}

export default DialogWindow