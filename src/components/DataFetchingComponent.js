import React, { Component } from 'react'

export default class DataFetchingComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            error: null,
        }
    }

    componentDidMount() {
        console.log('componentDidMount: Fetching data from API...');
        fetch('https://api.weatherapi.com/v1/current.json?key=b91d27b8878c4ea98aa122255242105&q=London&aqi=no')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ data, loading: false });
                console.log('Data fetched successfully:', data);
            })
            .catch(error => {
                this.setState({ error, loading: false });
                console.error('Error fetching data:', error);
            });
    }
    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }
        return (
            <div>
                <h1>Data Fetched from API</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        )
    }
}
