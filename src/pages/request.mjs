import axios from 'axios';
axios.defaults.baseURL = 'https://localhost:3000';
axios.post('/', {
    "name": "joao",
    "email": "amorajoaovictor@gmail.com",
    "message": "teste"
});
