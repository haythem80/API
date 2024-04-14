import React from 'react'
import Usercard from './Usercard'
import { Spinner } from 'react-bootstrap'

const Userlist = ({users,loading}) => {
    
  return (
    <div>
    {loading? <>
        <h1>Loading ...</h1>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
      </>:
       React.Children.toArray(users.map(el => <Usercard user={el}/>))
    }
    </div>
  )
}

export default Userlist