import axios from 'axios';


export default ClassifiedService {
	constructor(){}

	getClassified() {
		const url = `/api/jornal/`;
		return axios.get(url).then(res => res.data);
	}

	createClassified() {
		const url = `/api/jornal/`
		return axios.post(url);
	}

	/*updateClassified(id) {
		const url = `/api/jornal/${id}/`;
		return axios.put(url);
	}*/

	/*deleteClassified(id) {
		const url = `/api/jornal/${id}`;
		return axios.delete(url);
	}*/

}