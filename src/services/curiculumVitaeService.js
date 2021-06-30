import axios from "axios";

export default class CurriculumVitaeService{
    getCurriculumVitaes(){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getall")
    }

    add(curiculumVitae){
        return axios.post("http://localhost:8080/api/curriculumvitaes/add",curiculumVitae)
    }

    update(curiculumVitae){
        return axios.put("http://localhost:8080/api/curriculumvitaes/update",curiculumVitae)
    }

    getByJobSeekersId(jobSeekerId){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getbyjobseekerid?jobSeekerId="+jobSeekerId)
    }

}