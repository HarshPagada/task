import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Axios = () => {
    const [dataShow, setDataShow] = useState(null);

    useEffect(() => {
            const fetchData = async() => {
                try {
                    const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=b91d27b8878c4ea98aa122255242105&q=London&aqi=no')
                    setDataShow(response.data);
                    console.log('Data fetched successfully:', response.data);
                } catch (error) {
                    console.log('Data not fetched', error)
                }
            }
            fetchData()
    }, []);

  return (
    <div>
      <div>
            <h3>Fetching data from an API using axios API</h3>
            {dataShow ? (
                <div>
                    <p>{dataShow.location && dataShow.location.name}</p>
                    <p>{dataShow.location.region}</p>
                    <p>{dataShow.location.country}</p>
                    <p>{dataShow.location.localtime}</p>
                </div>
            ) : (<h2>Loading.......</h2>)}
        </div>
    </div>
  )
}

export default Axios
