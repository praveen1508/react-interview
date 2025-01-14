import React from 'react'

const withProductIdComponent = (Component) => {
    return (props) => {
        return (
            <>
            <Component {...props}/>
            <div>withProductIdComponent</div>
            </>        
          )
    }
}

export default withProductIdComponent