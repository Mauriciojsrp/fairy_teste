import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext, useEffect, useState } from 'react';
import UserService from '../../services/userServise';
import { AuthContext } from '../../context/AuthContext';


const UsersList = () => {
    const [users, setUsers] = useState([]);
    const {token} = useContext(AuthContext)

    const fetchUsers = () => {
        if (!token) {
            alert('Você não está autenticado.');
            return;
        }

        UserService.listUsers(token)
            .then(response => {
                setUsers(response.data.data);
            })
            .catch(error => {
                alert('Erro ao buscar listagem de usuários');
            });
    };

    useEffect(() => {
        fetchUsers();

    }, [token])

    return (
        <div>
        <h1>Listagem de Usuários:</h1>

        <div style={{
            width: '100%',
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            {users.map((user) => (
            <Card style={{
                width:'300px'
            }}>
      <CardMedia
        component="img"
        alt={user.name}
        height="140"
        image={user.profileImageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          User Type: {user.type}
        </Typography>
      </CardContent>
    
    </Card>
))}
        </div>
     </div>   
    )
}

export default UsersList;