import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './components/AddModal';
import { v4 as uuidv4 } from 'uuid';
import ListMovies from './components/ListMovies';

class App extends React.Component {
	state = {
		movies : [
			{
				id     : uuidv4(),
				name   : 'inception',
				image  :
					'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
				rating : 4,
				year   : '2005'
			},
			{
				id     : uuidv4(),
				name   : 'Harry Potter',
				image  : 'https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg',
				rating : 5,
				year   : '2013'
			},
			{
				id     : uuidv4(),
				name   : 'Fantastic Beasts',
				image  : 'https://m.media-amazon.com/images/I/81xndous2xL._SL1500_.jpg',
				rating : 3,
				year   : '2016'
			}
		]
	};
	render () {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Movie App</h1>
					<ListMovies movies={this.state.movies} />
					<AddModal />
				</header>
			</div>
		);
	}
}

export default App;
