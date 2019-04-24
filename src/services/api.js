import axios from 'axios'

/* your main api url goes here */
export default() => {
    return axios.create({
        baseURL: 'https://rolinder.azurewebsites.net/',
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
}
