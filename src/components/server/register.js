
import axios from 'axios'
import {BASE_URL} from "../../env";

export const registerUser = (data) => {
    axios
        .post(`${BASE_URL}/register`, {
            data : data
        })
}

