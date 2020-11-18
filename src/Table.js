import React from "react";
import "./Table.css";
import cross from "./images/delete.png";
import loupe from "./images/loupe.png";
import edit from "./images/edit.png";
import VisualSort from "./VisualSort.js";


function Table(props) {
	return (
		<div className="table"> 
			<table>
				<thead> 
					<tr>
						<th onClick = {() => props.onSort("requestNumber")}>
							Номер заявки {props.sortField == "requestNumber" ? <VisualSort sortType={props.sortType} /> : null}
						</th>
						<th onClick = {() => props.onSort("date")}>
							Дата и время {props.sortField == "date" ? <VisualSort sortType={props.sortType} /> : null}
						</th>
						<th onClick = {() => props.onSort("nameCompany")}>
							Название фирмы клиента {props.sortField == "nameCompany" ? <VisualSort sortType={props.sortType} /> : null}
						</th>
						<th onClick = {() => props.onSort("nameCarrier")}>
							ФИО перевозчика {props.sortField == "nameCarrier" ? <VisualSort sortType={props.sortType} /> : null}
						</th>
						<th onClick = {() => props.onSort("phoneCarrier")}>
							Номер телефона {props.sortField == "phoneCarrier" ? <VisualSort sortType={props.sortType} /> : null}
						</th>
						<th>
							Комментарии
						</th>
						<th onClick = {() => props.onSort("codeATI")}>
							ATI код {props.sortField == "codeATI" ? <VisualSort sortType={props.sortType} /> : null}
						</th>
						<th>
							Действия
						</th> 
					</tr>
				</thead>
				<tbody>
					{props.requests.map(request => (
						<tr key = {request.requestNumber}>
							<td>
								{request.requestNumber}
							</td>
							<td>
								{`${new Date(request.date).toLocaleDateString()} ${new Date(request.date).toLocaleTimeString()}`}
							</td>
							<td>
								{request.nameCompany}
							</td>
							<td>
								{request.nameCarrier}
							</td>
							<td>
								{request.phoneCarrier}
							</td>
							<td>
								{request.comments}
							</td>
							<td>
								<a href={`http://ati.su/firms/${request.codeATI}/info`} target="_blank">
									{request.codeATI}
								</a>
							</td>
							<td>
								<button onClick = {()=> props.requestDetails(request)}>
									<img src={loupe} alt="loupe" className="table-action" />
								</button>
								<button>
									<img src={edit} alt="edit" className="table-action" />
								</button>
								<button onClick = {() => props.deleteRequest(request.requestNumber)}>
									<img src={cross} alt="cross" className="table-action" />
								</button>
							</td>
						</tr>
					))}
				</tbody> 
			</table>
		</div>
	);
}

export default Table;