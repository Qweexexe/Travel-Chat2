import axios from 'axios'
import {BASE_URL} from "../../env";

export const LoginRequest = (username, password) => {
    axios
        .post(`${BASE_URL}/login`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                usernmame: username,
                password: password
            }
        })
}