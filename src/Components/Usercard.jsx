import React from 'react'

import Card from 'react-bootstrap/Card';


const Usercard = ({user}) => {
    // console.log(user)
  return (
    <div>
    {
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email} </Card.Text>
        <Card.Text>{user.address.street} </Card.Text>
        <Card.Text>{user.phone} </Card.Text>
        </Card.Body>
        </Card>
        </>
    }
    </div>
  )
}

export default Usercard