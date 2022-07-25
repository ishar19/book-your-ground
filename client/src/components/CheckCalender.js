import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function CheckCalender(props) {
    const id = props.data.id ;
    const [value, setValue] = useState(new Date());
    function onChange(nextValue) {
        setValue(nextValue);  
        console.log(typeof(value))
    }

    async function booking(){
      const timeValue = value.getTime();
      console.log(timeValue.toString())
      const resposne = await axios
        .post(`http://localhost:8080/updateBooking/${id}/${sessionStorage.getItem("email") }`,timeValue.toString())
       console.log(resposne)
    }
  
  return (
    <div className="text-center">
      <div>  <Calendar onChange={onChange} value={value} />
      </div>
      <Button onClick={booking} className="text-center mx-auto" variant="primary">Book this Ground</Button>

    </div>
     
  )
}


export default CheckCalender