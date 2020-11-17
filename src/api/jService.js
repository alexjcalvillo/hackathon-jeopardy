import axios from 'axios';

// this api call takes a single param of 'id' which will be used to fetch a specific category from jService

export default axios.create({
  baseURL: 'http://jservice.io/api',
});
