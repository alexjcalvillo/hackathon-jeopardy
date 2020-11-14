import axios from 'axios';

export default axios.create({
  baseURL: 'http://jservice.io/api/category?id=',
});
