import React, { Component } from 'react';


class Logout extends Component {
    state = {}

    render() {

        return (
            <>
                <h1>logout</h1>
                <button onClick={(event) => { this.props.handleUserLogOut() }}>logout</button>
            </>

        )

    }
}
export default Logout
    ;