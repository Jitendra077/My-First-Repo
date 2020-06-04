import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d49cd.firebaseio.com/'
});

export default instance;