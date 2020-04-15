import { React } from "react";

export default function Card(props) {
	console.log("card props", props.data);
	return (
		<div>
			<p>{props.data.username}</p>
		</div>
	);
}
