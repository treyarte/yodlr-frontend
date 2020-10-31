import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

class YodlerApi {
    static async signUp(userData){
        let res = await axios.post(`${BASE_URL}/users`, {...userData})
        return res.data
    }

    static async getUser(id){
        let res = await axios.get(`${BASE_URL}/users/${id}`)
        console.log(res.data);
        return res.data
    }
}

export default YodlerApi