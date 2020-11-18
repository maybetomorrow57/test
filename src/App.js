import React from "react";
import "./App.css";
import Table from "./Table.js";
import AddRequest from "./AddRequest.js";
import Search from "./Search.js";
import RequestDetails from "./RequestDetails.js";
import byField from "./byField.js";


class App extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			// дата и время в милисекундах для удобства сортировки
			requests: [
			{requestNumber: 1, date: 1602744351000, nameCompany: "ООО Рога и копыта", nameCarrier: "Иванов В.В.", phoneCarrier: "89105180567", comments: "доставить к 15-00", codeATI: 100000},
			{requestNumber: 2, date: 1603531965000, nameCompany: "АО Петрович", nameCarrier: "Петров И.В.", phoneCarrier: "89138905029", comments: "", codeATI: 100450},
			{requestNumber: 3, date: 1603531965000, nameCompany: "ЗАО Строймаш", nameCarrier: "Сидоров А.С.", phoneCarrier: "89058979089", comments: "нужны два грузчика", codeATI: 100234},
			{requestNumber: 4, date: 1604229065000, nameCompany: "ООО Рога и копыта", nameCarrier: "Емельянов А.А.", phoneCarrier: "89105180567", comments: "", codeATI: 100000},
			{requestNumber: 5, date: 1604734215000, nameCompany: "ООО Волна", nameCarrier: "Сидоров А.С.", phoneCarrier: "89138905029", comments: ":)", codeATI: 100123},
			{requestNumber: 6, date: 1605189421000, nameCompany: "ООО Волна", nameCarrier: "Васин Е.Е.", phoneCarrier: "89105673445", comments: "", codeATI: 100123},
			{requestNumber: 7, date: 1605342940000, nameCompany: "АО Петрович", nameCarrier: "Сенин Е.А.", phoneCarrier: "89091234567", comments: "какой-то коммент", codeATI: 100450},
			{requestNumber: 8, date: 1605531176000, nameCompany: "АО Петрович", nameCarrier: "Бовин Н.Н.", phoneCarrier: "89209009123", comments: "и еще коммент)", codeATI: 100450},
			{requestNumber: 9, date: 1605676636000, nameCompany: "ООО Рога и копыта", nameCarrier: "Иванов В.В.", phoneCarrier: "89105180567", comments: "", codeATI: 100000},
			{requestNumber: 10, date: 1605686636000, nameCompany: "ООО Рога и копыта", nameCarrier: "Иванов В.В.", phoneCarrier: "89105180567", comments: "", codeATI: 100000},
			], 
			showAddRequest: false,
			searchValue: "",
			searchField: "",
			row: null,
			sortType: "toTop", // toDown
			sortField: "requestNumber"			
		};
		this.handleClickShowAddRequest = this.handleClickShowAddRequest.bind(this);
		this.handleAddRequest = this.handleAddRequest.bind(this);
		this.handleDeleteRequest = this.handleDeleteRequest.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.showRequestDetails = this.showRequestDetails.bind(this);
		this.coverRequestDetails = this.coverRequestDetails.bind(this);
		this.handleSort = this.handleSort.bind(this);
	}

	handleClickShowAddRequest() {
		this.setState(state => ({
			showAddRequest: !state.showAddRequest
		}));
	}

	handleAddRequest(request) {
		this.setState(state => ({
			requests: state.requests.concat(request)
		}));
	}

	handleDeleteRequest(requestNumberDelete) {
		if (window.confirm("Вы точно хотите удалить заявку?")) {
			let requests = this.state.requests.concat();
			let requestsFiltered = requests.filter(request => request.requestNumber != requestNumberDelete);
			this.setState({requests: requestsFiltered});
		}
		return;
	}

	handleSearch(searchValue, searchField) {
		this.setState({
			searchValue: searchValue, 
			searchField: searchField
		});
	}

	renderTable() {
		let searchField = this.state.searchField;
		let searchValue = this.state.searchValue;
		if (searchValue == "") {
			return (
				<Table 
					requests = {this.state.requests} 
					deleteRequest = {this.handleDeleteRequest} 
					requestDetails = {this.showRequestDetails} 
					onSort = {this.handleSort} 
					sortField = {this.state.sortField} 
					sortType = {this.state.sortType} />
			);
		}
		let requests = this.state.requests.concat();
		let requestsFiltered = requests.filter(request => 
			request[searchField].toString().toLowerCase().includes(searchValue.toLowerCase())
		);
		if (requestsFiltered.length == 0) {
			return (
				<div className = "find-nothing">
					<p>По вашему запросу ничего не найдено...</p>
				</div>
			);
		}
		return (
			<Table 
				requests = {requestsFiltered} 
				deleteRequest = {this.handleDeleteRequest} 
				requestDetails = {this.showRequestDetails} 
				onSort = {this.handleSort} 
				sortField = {this.state.sortField} 
				sortType = {this.state.sortType} />
		);
	}

	showRequestDetails(row) {
		this.setState({row: row});
	}

	coverRequestDetails() {
		this.setState({row: null});
	}

	handleSort(sortField) {
		let requests = this.state.requests.concat();
		let sortType = this.state.sortType == "toTop" ? "toDown" : "toTop";
		let requestsSorted = requests.sort(byField(sortField, sortType));
		this.setState({
			requests: requestsSorted, 
			sortType: sortType,
			sortField: sortField
		});
	}


	render() {
		return (
			<div className = "App"> 
				<Search search = {this.handleSearch} />
				<button onClick = {this.handleClickShowAddRequest}>
					Добавить заявку
				</button>
				<AddRequest showAddRequest = {this.state.showAddRequest} addNewRequest = {this.handleAddRequest} />  
				{this.renderTable()}
				<RequestDetails row = {this.state.row} cover = {this.coverRequestDetails} />
			</div> 
		);
	}
}

export default App;
