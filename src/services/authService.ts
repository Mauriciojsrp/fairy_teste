import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://template-backend-fairy-d6gx9.ondigitalocean.app',
    headers: {
        'Content-Type':'application/json',
    }
})

const AuthService = {
    async login(data: any){
        console.log('chegou login')
        try {
            const response = await apiClient.post("/api/v1/auth/login", data);
            return response;
        } catch(error: any) {
            throw error;
        }
    }
}
export default AuthService