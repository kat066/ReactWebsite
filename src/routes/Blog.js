import { Typography } from "@material-ui/core";
import React from "react";
import "../App.css"



class Blog extends React.Component {

	resizeIframe() {
		var obj = document.getElementById("resume");
		obj.style.height = 0;
		obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
	}
	render() {
		return (
			<div className="centerFlexCol" style={{ background: "#6B705C", margin: "0" }}>
				<Typography variant="h5" style={{ color: "#A5A58D", fontWeight: "bold", marginTop: "5vh" }}> My Blog </Typography>
				<embed src="files:///C:\Users\blade\Desktop\React\react-website\src\assets\Resume.pdf"
					type="application/pdf"
					width="425"
					height="425"
				/>
					
			</div>
		);
	};
}
export default Blog;