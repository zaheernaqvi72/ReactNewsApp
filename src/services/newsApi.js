import axios from 'axios';

const apiKey = 'afc2915a01db4e5bbb9fd5a183946655'; 

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  params: {
    apiKey
  }
});

export default newsApi;
