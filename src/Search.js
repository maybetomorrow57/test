import React from "react";


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			field: "requestNumber"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({[name]: value});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.search(this.state.value, this.state.field);
	}


	render() {
		return (
			<div className="search">
				<form onSubmit = {this.handleSubmit}>
					<select 
						name = "field" 
						value = {this.state.field} 
						onChange = {this.handleChange}>
							<option value = "requestNumber">номер заявки</option>
							<option value = "nameCompany">название фирмы</option>
					</select>
					<input 
						type = "text"
						name = "value"
						value = {this.state.value} 
						onChange= {this.handleChange} />
					<button>Поиск</button>
				</form>
			</div>
		);
	}

}

export default Search;