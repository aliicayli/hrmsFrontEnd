import axios from "axios";

export default class TechnologyService{
    getTechnologies(){
        return axios.get("http://localhost:8080/api/technologies/getall")
    }

    add(technology){
        return axios.post("http://localhost:8080/api/technologies/add"+technology)
    }

    getByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/technologies/getbycurriculumvitaeid?curriculumVitae="+curriculumVitaeId)
    }
}