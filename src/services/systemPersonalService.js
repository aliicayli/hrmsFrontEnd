import axios from "axios";

export default class SystemPersonalService{
    getSystemPersonals(isActive,id){
        return axios.get("http://localhost:8080/api/systempersonals/getall")
    }

    confirm(isActive,id){
        return axios.put("http://localhost:8080/api/systempersonals/confirm?active="+isActive+"&id="+id
  
       )
    }
}