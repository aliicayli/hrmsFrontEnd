import axios from "axios";

export default class SchoolService{
    getSchools(){
        return axios.get("http://localhost:8080/api/schools/getall")
    }

    getByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/schools/getbycurriculumvitaeid?curriculumVitae="+curriculumVitaeId)
    }
}