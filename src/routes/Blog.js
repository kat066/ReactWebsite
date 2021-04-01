import { Typography } from "@material-ui/core";
import React from "react";
import "../App.css"
class Blog extends React.Component {
	render() {
		return (
			<div className="centerFlexCol" style={{ background: "#6B705C",margin:"0"}}>
				<Typography variant="h5" style={{ color: "#A5A58D", fontWeight: "bold", marginTop: "5vh" }}> My Blog </Typography>
				<div>

				</div>
			</div>
		);
	};
}
export default Blog;