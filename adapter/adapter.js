class movie {
	constructor(name) {
		this.getRating = () => {
			return '4.5'
		}
	}
}

class imdb {
	constructor(credentials) {
		this.login = (credentials) => {}
		this.setMovie = (name) => {}
		this.getRating = () => '4.5';
	}
}

class movieAdapter {
	constructor(credentials) {
		this.adapt = new imdb();
		this.adapt.login(credentials);
		return {
			request: (name) => {
				this.adapt.setMovie(name);
				return this.adapt.getRating();
			}
		}
	}
}

run = () => {
	let logger = '';
	let old = new movie('Titanic');
	logger = old.getRating();
	console.log(logger);

	let credentials = 'Hakuna Matata';
	let newMovie = new movieAdapter(credentials);
	logger = newMovie.request('titanic');
	console.log(logger);
}
