import axios from "axios";

export default class SystemPersonalService{
    getSystemPersonals(){
        return axios.get("http://localhost:8080/api/systempersonals/getall")
    }
}