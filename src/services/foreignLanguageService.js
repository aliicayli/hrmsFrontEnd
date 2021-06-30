import axios from "axios";

export default class ForeignLanguageService{

    getForeignLanguages(){
        return axios.get("http://localhost:8080/api/foreignlanguages/getall")
    }

    add(foreignLanguage){
        return axios.post("http://localhost:8080/api/foreignlanguages/add"+foreignLanguage)
    }

    getByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/foreignlanguages/getbycurriculumvitaeid?curriculumVitae="+curriculumVitaeId)
    }
}
