import React, { Component } from 'react'

export default class Lifecycle extends Component {

    constructor(props) {
        super(props)
        console.log('Constructor: Component is being created.')
    }

    componentDidMount() {
        console.log('componentDidMount: Component has been mounted.');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate: Component has been updated.');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount: Component is about to be unmounted.');
    }

    render() {
        console.log('Render: Component is rendering.');
        return (
            <div>
                <h1>Lifecycle Methods in Action</h1>
                <p>Check the console to see the lifecycle methods in action.</p>
            </div>
        )
    }
}
