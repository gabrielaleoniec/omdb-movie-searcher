import React from 'react';
import './Loader.css'

const WithLoading = (Component) => {
    return ({isLoading, ...props }) => {
        if(isLoading) {
            return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        }
        return <Component {...props} />
    }
}

export default WithLoading