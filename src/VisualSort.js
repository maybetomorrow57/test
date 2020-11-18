import React from 'react';
import "./VisualSort.css";
import arrowdown from "./images/arrowdown.png";
import arrowup from "./images/arrowup.png";

function VisualSort(props) {
	if (props.sortType == "toTop") {
		return (
			<img src = {arrowdown}  alt="arrowdown" className="visual-sort"/>
		);
	}
	return (
		<img src = {arrowup}  alt="arrowup" className="visual-sort"/>
	);
}

export default VisualSort;