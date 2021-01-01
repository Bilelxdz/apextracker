import React from 'react'
import './cards.css'
import {Card , ListGroup , ListGroupItem} from 'react-bootstrap'
const Cards = ({data}) => {
    return (
        <div className='hehe'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https:\/\/api.mozambiquehe.re\/assets\/ranks\/bronze4.png" />
                <Card.Body>
                    <Card.Title>{data.global.name} Stats</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Level : {data.global.level}</ListGroupItem>
                    <ListGroupItem>Kills : {data.total.kills.value}</ListGroupItem>
                    <ListGroupItem>Kd : {data.total.kd.value}</ListGroupItem>
                    <ListGroupItem></ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    )
}

export default Cards
