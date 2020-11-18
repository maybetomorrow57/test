import React from 'react';
import "./RequestDetails.css";

function RequestDetails(props) {

	if (!props.row) {
		return null;
	}
	return (
		<div className = "request-details">
			<p>
				Номер заявки: <b>{props.row.requestNumber}</b>
			</p>
			<p>
				Дата и время: <b>{`${new Date(props.row.date).toLocaleDateString()} ${new Date(props.row.date).toLocaleTimeString()}`}</b>
			</p>
			<p>
				Название фирмы клиента: <b>{props.row.nameCompany}</b>
			</p>
			<p>
				ФИО перевозчика: <b>{props.row.nameCarrier}</b>
			</p> 
			<p>
				Номер телефона: <b>{props.row.phoneCarrier}</b>
			</p>
			<p>
				Комментарии: <b>{props.row.comments}</b>
			</p> 
			<p>
				ATI код: <b>{props.row.codeATI}</b>
			</p>
			<button onClick = {() => props.cover()}>
				Закрыть
			</button>
		</div>
	);
}

export default RequestDetails;