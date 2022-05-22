import axios from 'axios';

export default axios.create({
  baseURL: '127.0.0.1:6000/api/v1/cws',
  headers: {
    'Content-type': 'application/json',
  },
});
