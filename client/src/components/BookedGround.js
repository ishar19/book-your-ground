import React from 'react'
import Figure from 'react-bootstrap/Figure';
import CancelBooking from './CancelBooking';

function BookedGround (props)  {
  console.log(props.data.date)
  console.log(props.data.ground)
  const date = new Date(props.data.date.seconds*1000)
  console.log(date)
  return (
    <div>
      <div className="text-center mt-5">
        <Figure className="text-center">
          <Figure.Image
            width={180}
            height={200}
            alt="image of venue"
            src={props.data.ground.image}
          />
          <Figure.Caption>
            <h2 className="text-center">{props.data.ground.name} <span className="badge badge-secondary">Booked for {date.getDate() +
              "/" + (date.getMonth() + 1) +
              "/" + date.getFullYear()}</span></h2>
            <h4 className="text-center">Known for {props.data.ground.sport}</h4>
            <p className="text-center">Cost/day ${props.data.ground.cost}</p>
            <p className="text-center">Located in {props.data.ground.location}</p>
            <p className="text-center">Capacity of {props.data.ground.capacity} people</p>
          </Figure.Caption>
        </Figure>
        <CancelBooking data={{date:props.data.date, ground:props.data.ground}} />
    </div>
    </div>
  )
}

export default BookedGround