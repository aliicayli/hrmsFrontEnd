import axios from "axios";

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }
    add(jobposting){
        return axios.post("http://localhost:8080/api/jobpostings/add",jobposting)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobpostings/getbyid?id="+id)
    }

    getByIsActiveTrue(){
        return axios.get("http://localhost:8080/api/jobpostings/getactivejobpostings")
    }

    getByIsActiveFalse(){
        return axios.get("http://localhost:8080/api/jobpostings/getbyfalse")
    }
}