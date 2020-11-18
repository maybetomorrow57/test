import React from "react";
import "./AddRequest.css";


class AddRequest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requestNumber: "",
			nameCompany: "",
			nameCarrier: "", 
			phoneCarrier: "",
			comments: "",
			codeATI: ""
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
		let newRequest = {
			requestNumber: parseInt(this.state.requestNumber), 
			date: Date.now(), 
			nameCompany: this.state.nameCompany, 
			nameCarrier: this.state.nameCarrier, 
			phoneCarrier: this.state.phoneCarrier, 
			comments: this.state.comments, 
			codeATI: parseInt(this.state.codeATI)
		};
		this.props.addNewRequest(newRequest);
		this.setState({
			requestNumber: "", 
			nameCompany: "", 
			nameCarrier: "", 
			phoneCarrier: "", 
			comments: "", 
			codeATI: ""
		});	
	}

	render() {
		if (!this.props.showAddRequest) {
			return null;
		}
		return (
			<div className="add-request">
				<form onSubmit={this.handleSubmit}>
					<p>
						<label htmlFor="requestNumber">Номер заявки<span>*</span></label>
						<input 
							id="requestNumber" 
							type="number"
							name="requestNumber" 
							value={this.state.requestNumber} 
							onChange={this.handleChange}
							required="required"/>
					</p>
					<p>
						<label htmlFor="nameCompany">Название фирмы клиента<span>*</span></label>
						<input 
							id="nameCompany" 
							type="text"
							name="nameCompany" 
							value={this.state.nameCompany} 
							onChange={this.handleChange}
							required="required"/>
					</p>
					<p>
						<label htmlFor="nameCarrier">ФИО перевозчика<span>*</span></label>
						<input 
							id="nameCarrier"
							type="text" 
							name="nameCarrier" 
							value={this.state.nameCarrier}
							onChange={this.handleChange}
							required="required"/>
					</p>
					<p>
						<label htmlFor="phoneCarrier">Номер телефона<span>*</span></label>
						<input 
							id="phoneCarrier" 
							type="number"
							name="phoneCarrier" 
							value={this.state.phoneCarrier} 
							onChange={this.handleChange}
							required="required"/>
					</p>
					<p>
						<label htmlFor="comments">Комментарии</label>
						<textarea 
							className="comments"
							id="comments" 
							name="comments" 
							value={this.state.comments}
							onChange={this.handleChange}>
						</textarea>
					</p>
					<p>
						<label htmlFor="codeATI">ATI код<span>*</span></label>
						<input 
							id="codeATI"
							type="number" 
							name="codeATI" 
							value={this.state.codeATI}
							onChange={this.handleChange}
							required="required"/>
					</p>
					<button>Записать</button> 
				</form>
			</div>
		);
	}

}

export default AddRequest;