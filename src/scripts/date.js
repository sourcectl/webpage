const baseOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

export function formatDate(date) {
	return new Date(date).toLocaleDateString('en-GB', { weekday: 'long', ...baseOptions });
}

export function formatUnixTimestampToDate(timestamp) {
	return new Date(timestamp * 1000).toLocaleDateString('en-GB', { weekday: 'long', ...baseOptions });
}

export function formatDateWithoutWeekday(date) {
	return new Date(date).toLocaleDateString('en-GB', baseOptions);
}
