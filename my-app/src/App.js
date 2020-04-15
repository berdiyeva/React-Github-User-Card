import React from "react";

class App extends React.Component {
	constructor() {
		// console.log("constructor running");
		super();
		this.state = {
			users: [],
			userText: "",
			followers: [],
		};
	}

	componentDidMount() {
		// console.log("componentDidMount"); make this dynamic
		fetch(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/jambis`)
			.then((res) => res.json())
			.then((users) => {
				// console.log("users:", users);
				this.setState({ ...this.state, users: users });
			})
			.catch((err) => {
				console.log("error", err);
			});
	}

	componentDidUpdate(prevProps, prevState) {
		// console.group("somponentDidUpdate");

		//update the state
		if (prevState.users !== this.state.users) {
			// console.log("new users");
			this.fetchUsers();
			console.log(this.state.followers);
		}
	}

	handleChanges = (e) => {
		this.setState({ userText: e.target.value });
		// console.log("this.state.userTest:", this.state.userText);
	};

	fetchUsers = (e) => {
		fetch(`https://cors-anywhere.herokuapp.com/${this.state.users.followers_url}`)
			.then((res) => res.json())
			.then((users) => this.setState({ ...this.state, followers: users }))
      .catch((err) => console.log("error:", err));
      console.log(this.state)
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
				<button onClick={this.fetchUsers}>Fetch Users</button>
				<div>
					<p>{this.state.users.name}</p>
          {/* nap the folowers
    <p>{}</p> */}
				</div>
			</div>
		);
	}
}

export default App;
