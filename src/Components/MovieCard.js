import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import Rate from './Rate';

import { Link } from 'react-router-dom';
export default function MovieCard({film}) {
    return (
        <div >
          <Link to={`/Descrip/${film.id}`}>
             <Card style={{width:"18rem"}}>
    <Card.Img variant="top" src={film.img} className="imag"/>
    <Card.Body>
    
      <Card.Title> {film.titre}</Card.Title>
 
      <Rate rate={film.rate}/>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{film.Rate}</small>
    </Card.Footer>
  </Card>
  </Link>
        </div>
    )
}
