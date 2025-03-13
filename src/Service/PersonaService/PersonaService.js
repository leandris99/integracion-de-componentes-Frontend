import axios from "axios";

const PERSONA_BASE_RES_API = "http://localhost:8080/api/v1/Persona";

class PersonaService{

    getAllPersona(){

        return axios.get(PERSONA_BASE_RES_API);
    }

    registrarPersona(persona){
        return axios.post(PERSONA_BASE_RES_API, persona);
    }

    getPersonaById(idpersona){
        return axios.get(PERSONA_BASE_RES_API + '/' + idpersona);
    }

    updatePersona(persona, idpersona){
        return axios.put(PERSONA_BASE_RES_API + '/' + idpersona, persona);
    }

    deletePersona(idpersona){
        return axios.delete(PERSONA_BASE_RES_API + '/' + idpersona)
    }

}

export default new PersonaService();