function byField(field, sortType) {
	return function(a, b) {
		if (sortType == "toDown") {
			return a[field] > b[field] ? -1 : 1;
		}
		return a[field] > b[field] ? 1 : -1;

	};
}

export default byField;
