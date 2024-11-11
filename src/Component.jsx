import React from 'react'

function Component(props) {
    
    return (
        <div>
            <button  className=' py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  bg-white rounded-lg border border-gray-200 '
             onClick={props.onclick}
             style={{backgroundColor: props.index_Value == props.currentId ? 'brown' : 'white'}}>
                {props.children}
            </button>
        </div>
    )
}
export default Component
