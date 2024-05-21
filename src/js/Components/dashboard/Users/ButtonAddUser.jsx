import {React, useState} from 'react'

export default function ButtonAddUser() {

    const [createUser, setCreateUser] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleAddUser = () => {
        setCreateUser(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        setFormData({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        })
        console.log(formData);

        alert(`L'utilisateur ${formData.name} a bien été créé`)

        setCreateUser(false)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value

        });
    };

  return (
    <>
        <button className='button-add-user' onClick={() => handleAddUser()}>
            Créer un nouvel utilisateur
        </button>
        {createUser && (
            <>
                <form onSubmit={handleSubmit} className='flex gap-6 mt-8 mb-8'>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="">Nom</label>
                        <input type="text" name='name' value={formData.name} onChange={handleChange}/>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="">Email</label>
                        <input type='email' name='email' value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="">Mot de passe</label>
                        <input type="password" name='password' value={formData.password} onChange={handleChange}/>
                    </div>
                    <button type='submit' className='button-add-user'>
                        Valider
                    </button>
                </form>
            </>
        )}
    </>
  )
}
