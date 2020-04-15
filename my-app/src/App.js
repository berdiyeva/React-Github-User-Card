import React from "react";
import Card from "./components/Card"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			users: [],
			userText: "",
			followers: [],
		};
	}

	componentDidMount() {
		// console.log("componentDidMount"); make this dynamic
		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.github.com/users/jambis`
		)
			.then((res) => res.json())
			.then((users) => {
				this.setState({ ...this.state, users: users });
			})
			.catch((err) => {
				console.log("error", err);
			});

		fetch(
			`https://cors-anywhere.herokuapp.com/https://api.github.com/users/jambis/followers`
		)
			.then((res) => res.json())
			.then((users) => this.setState({ ...this.state, followers: users }))
			.catch((err) => console.log("error:", err));
		console.log("just state", this.state);
	}


	handleChanges = (e) => {
		this.setState({ userText: e.target.value });
		// console.log("this.state.userTest:", this.state.userText);
	};

	render() {
		return (
			<div>
				<h2>React Github User Card</h2>
				<input
					type='text'
					value={this.state.userText}
					onChange={this.handleChanges}
				/>
				<button className='btn' onClick={this.fetchUsers}>
					Fetch Users
				</button>
				<div>
					{/* {this.state.users.name} */}
          {console.log("followers state", this.state)}
					{this.state.followers.map((follower) => {
						console.log("follower:", follower);
						return <Card data={follower} />;
					})}
				</div>
			</div>
		);
	}
}

export default App;
