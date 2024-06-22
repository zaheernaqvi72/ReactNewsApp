import axios from 'axios';

const apiKey = 'e3421233278c4b028ddb2656e4fd9fb3'; 

const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  params: {
    apiKey
  }
});

export default newsApi;
