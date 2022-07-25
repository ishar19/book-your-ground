import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios"
import Figure from 'react-bootstrap/Figure';
import CheckCalender from '../components/CheckCalender';


function GroundBook() {
    const location = useLocation();
    const id = location.state?.id;
    const [groundData, setGroundData] = useState({});

    

    useEffect(() => {
        async function getData() {
            const response = await axios.get(`http://localhost:8080/updateBooking/${id}`)
            await setGroundData((prevData) => response.data);
            console.log(groundData)
        }
         getData()
    }, [])

    return (
        <div>
            <h1 className="text-center mt-5">Book-Your-Ground</h1>
            <h2 className="text-center mt-5">{groundData.name}</h2>
            <div className="text-center mt-5">
                <Figure className="text-center">
                    <Figure.Image
                        width={"60%"}
                        height={200}
                        alt="image of venue"
                        // src={groundData.photos[0]?groundData.photos[0]:<></>}
                    />
                    <Figure.Caption>
                        <h4 className="text-center">Known for {groundData.sport}</h4>
                        <p className="text-center">Cost/day ${groundData.cost}</p>
                        <p className="text-center">Located in {groundData.location}</p>
                        <p className="text-center">Capacity of {groundData.capacity} people</p>
                    </Figure.Caption>
                </Figure>

            </div>
            <CheckCalender data={{id:id}} />

        </div>
    )
}

export default GroundBook