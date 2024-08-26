import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://template-backend-fairy-d6gx9.ondigitalocean.app',
    headers: {
        'Content-Type':'application/json',
    },

})

const UserService = {
    async listUsers(token: string){
        try {
            const response = 
                await apiClient.get("/api/v1/users/list?page=1&itemsPerPage=20", 
                    { 
                        headers: {'Authorization': `Bearer ${token}`}
                    }
                );
            return response;
        } catch(error: any) {
            throw error;
        }
    }
}
export default UserService

