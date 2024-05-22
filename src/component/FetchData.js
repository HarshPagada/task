import React, { useState, useEffect } from 'react'

const FetchData = () => {
    const [dataShow, setDataShow] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            const fetchData = async() => {
                try {
                    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=b91d27b8878c4ea98aa122255242105&q=London&aqi=no');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setDataShow(data);
                    console.log('Data fetched successfully:', data);
                } catch (error) {
                    console.log('some error occured!')
                }
            }
            fetchData()
        }, 3000);
    }, []);

    return (
        <div>
            <h3>Fetching data from an API using async/await</h3>
            {dataShow ? (
                <div>
                    <p>{dataShow.location && dataShow.location.name}</p>
                    <p>{dataShow.location.region}</p>
                    <p>{dataShow.location.country}</p>
                    <p>{dataShow.location.localtime}</p>
                </div>
            ) : (<h2>Loading.......</h2>)}
        </div>
    )
}

export default FetchData
