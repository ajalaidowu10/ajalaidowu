export default setYear = () => {
	addEventListener('load', () => {
		const date = new Date();
		const getYear = document.createTextNode(date.getFullYear());
		const year = document.querySelector('#year').appendChild(getYear);
	})
}
