import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-27114.firebaseio.com/'
});

export default instance;
