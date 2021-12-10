import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-88888.cloudfunctions.net/api'
});

export default instance;

// https://us-central1-clone-88888.cloudfunctions.net/api
// http://localhost:5001/clone-88888/us-central1/api