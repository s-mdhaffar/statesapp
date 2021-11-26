import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
const ListMovies = (props) => {
	return (
		<div className="listMovies">
			{props.movies.map((el) => (
				<div className="movie">
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={el.image} />
						<Card.Body>
							<Card.Title>{el.name}</Card.Title>
							<Card.Text>{el.year}</Card.Text>
							<ReactStars value={el.rating} />
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
};

export default ListMovies;
