import {React, useState, useEffect } from 'react';
import ButtonAddUser from './ButtonAddUser';
import axios from '@/libs/axios';
import { useAuth } from '@/context/AuthContext'; // Importez useAuth

const Users = () => {
  //recuperation JSON contenant infos du staff
  const [staff, setStaff] = useState([]);
  const { auth } = useAuth(); // Utilise le contexte d'authentification

  useEffect(() =>{
    // Fonction asynchrone pour récupérer les articles
    const fetchStaff = async() => {
      try {
        const response = await axios.get('/api/dashboard')
        setStaff(response.data.staff)
              
      } catch (err) {
        console.error(err);
      }
    }

    fetchStaff();
  }, [auth]);

  const [formData, setFormData] = useState({ //recuperation des data de utilisateur ciblé
    id :'',
    name: '',
    email: ''
  });

  const [utilisateurId, setUtilisateurId] = useState(''); // Déclarez utilisateurId comme un state

  const [action, setAction] = useState(''); // Action à effectuer : "edit" ou "delete"

  //EDIT
  const handleEdit = (id, name, email) => {
    setUtilisateurId(id); // recuperer id de l'utilisateur ciblé
    setFormData({
      id: id,
      name: name, //modif nom utilisateur
      email: email //modif email
    });
    setAction('edit'); // Définir l'action sur "edit"
  }

  const updateHandleEdit = (id, name, email) => {
    setUtilisateurId(id); // recuperer id de l'utilisateur ciblé
    setFormData({
      id: id,
      name: name, //modif nom utilisateur
      email: email //modif email
    });
    setAction('update'); //remettre action par defaut
  }

  
  //DELETE
  const handleDelete = (id, name, email) => {
    setUtilisateurId(id); // recuperer id de l'utilisateur ciblé
    setFormData({
      id: id,
      name: name,
      email: email,
    });
    const isConfirmed = window.confirm(`Voulez-vous vraiment supprimer l'utilisateur ${name}?`);
    if (isConfirmed) {
      setAction('delete'); // Définir l'action sur "delete"
    }
  }

  //Cancel
  const handleCancel = () => {
    setAction(''); //remettre action par defaut
  }
  
  useEffect(() => {
    // Envoyez la requête POST une fois que formData est mis à jour
    if (formData.name !== '' && formData.email !== '' && utilisateurId !== null && action !== null) {
      if (action === 'delete') {
        const fetchDeleteStaff = async() => {
          const data = await axios.post(`/api/user/delete/${utilisateurId}`, formData)
        }
        fetchDeleteStaff();
      } else if (action === 'update') {
        const fetchUpdateStaff = async() => {
            const data = await axios.post(`/api/user/delete/${utilisateurId}`, formData)
          }    
          fetchUpdateStaff(); 
      }
      // Réinitialiser l'état de l'action après l'exécution de la requête POST
      // setAction('');
    }
  }, [formData, utilisateurId]);
  
    return (
      <>
      <hr />
        <div className="users" >
          <div className='ml-8 mb-8'>
            <div>
              <ButtonAddUser />
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((utilisateur) => ( 
                <>
                  <tr key={utilisateur.id}>
                    <td>{utilisateur.id}</td>
                    <td>{utilisateur.name}</td>
                    <td>{utilisateur.email}</td>                    
                    <td>
                      <button className='button-edit' onClick={() => handleEdit(utilisateur.id, utilisateur.name, utilisateur.email)}>
                        <img src="/assets/icones/edit-button.png" alt="button edit" />
                      </button>
                    </td>
                    <td>
                      <button className='button-delete' onClick={() => handleDelete(utilisateur.id, utilisateur.name, utilisateur.email)}>
                        <img src="/assets/icones/delete-button.png" alt="button delete" />
                      </button>
                    </td>
                  </tr>
                    {action === "edit" && (
                      <>
                        {utilisateurId === utilisateur.id && (
                          <tr>
                            <>
                              <td></td>
                              <td>
                                <div className='flex'>
                                  <input 
                                    type="text" 
                                    value={formData.name} 
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className='flex'>
                                  <input 
                                    type="text" 
                                    value={formData.email} 
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}                                  
                                  />
                                </div>
                              </td>
                              <td>
                                <button className='button-cancel' onClick={() => handleCancel()}>
                                  <img src="/assets/icones/cancel.png" alt="button cancel" />
                                </button>
                              </td>
                              <td>
                                <button className='button-edit' onClick={() => updateHandleEdit(utilisateur.id, formData.name, formData.email)}>
                                  <img src="/assets/icones/valid.png" alt="button check"/>
                                </button>
                              </td>
                            </>
                          </tr>
                        )}
                      </>
                    )}
                </>
              ))}
            </tbody>
          </table>
        </div>  
      </>
  );
};

export default Users;
