import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-eda79.firebaseio.com/'
});

export default instance;