import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

//{JSON.stringify(props, null, 2)} TO CHECK PROPS

function Home(props){
    return(
    <div>
        <p>Im the home component</p>
        <p>{props.state.visibility}</p>
        <p><Link to="/page" onClick={props.action1} >Go to Page</Link></p>
    </div>)
} 

const connectedApp = connect(state=>({state:state}), (dispatch) => ({
    action1: () => dispatch({
        type:'ACTION_1',
        payload: "HELLO WORLD"
    }),

    action2: () => dispatch({
        type:'ACTION_2',
        payload:"BYE WORLD"
    })
}))
(Home)

export default connectedApp