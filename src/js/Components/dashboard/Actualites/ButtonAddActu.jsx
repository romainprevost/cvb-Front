import {React, useState} from 'react'
import moment from 'moment'
import { router } from '@inertiajs/react'


export default function ButtonAddActu() {

    const [createActu, setCreateActu] = useState(false);

    const [previewImage, setPreviewImage] = useState(null);

    const [formData, setFormData] = useState({
        author: '',
        title: '',
        content: '',
        file: ''
    });

    const [errorForm, setErrorForm] = useState(false);
    const [validForm, setValidForm] = useState(false);

    const handleCreateActu = () => {
            // Utilisation de la fonction setCreateActu avec une fonction callback pour basculer l'état actuel
        setCreateActu(prevState => !prevState);
        }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(formData.author === '' || formData.title === '' || formData.content === '') {
            setErrorForm(true);
        }else {
            try {
                const formDataToSend = new FormData(); // Crée un objet FormData
                formDataToSend.append('author', formData.author); // Ajoutez les données de formData à l'objet FormData
                formDataToSend.append('title', formData.title);
                formDataToSend.append('content', formData.content);
                formDataToSend.append('image', formData.image); 
        
    
    
                router.post(`/actu/create`, formDataToSend); // Envoyez la requete au controller pour traitement en bdd
                setErrorForm(false);
                setValidForm(true); //confirm que le formulaire est bien valide

            // Utilisation de setTimeout pour déclencher la fonction après 3 secondes
                setTimeout(() => {
                    // Réinitialiser le formulaire
                    setFormData({
                        author: '',
                        title: '',
                        content: '',
                        image: ''
                    });
                    setValidForm(false);
                    setPreviewImage(null);
                    setCreateActu(false);
                }, 3000);

                    
            } catch (error) {
                console.error("Erreur lors de l\'envoi des données :", error.message);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            const imageUrl = URL.createObjectURL(files[0]);
            setFormData({
                ...formData,
                [name]: files[0]
            });
            setPreviewImage(imageUrl); // Afficher l'aperçu de l'image
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };


  return (
    <>
        <div className="create-actu">
            <button className='button-create-actu' onClick={() => handleCreateActu()}>
                Créer une nouvelle actualité
            </button>
            {createActu && (
                <div className='block-create-actu flex'>
                    <div className="new-actu">
                        <form onSubmit={handleSubmit}>
                            <div className='input-form'>
                                <label htmlFor="author">Auteur</label>
                                <input 
                                    type="text" 
                                    name='author' 
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nom de l'auteur"
                                />
                            </div>
                            <div className='input-form'>
                                <label htmlFor="title">Titre</label>
                                <input 
                                    type="text" 
                                    name='title' 
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Titre de l'article"
                                />
                            </div>
                            <div className='input-form'>
                                <label htmlFor="content">Contenu</label>
                                <textarea 
                                    rows="3" 
                                    cols="30" 
                                    name='content'
                                    value={formData.content}
                                    onChange={handleChange}
                                    placeholder="Entrez votre texte ici...">
                                </textarea>                            
                            </div>
                            <div className='input-form'>
                                <label htmlFor="image">Image</label>
                                <input 
                                    type="file" 
                                    name="image" 
                                    accept="image/*" 
                                    onChange={handleChange} // Ajouter l'événement onChange
                                />
                            </div>
                            {errorForm && (
                                <div className='message-error-form'>
                                    <p>Un des champs ci-dessus est incomplet ou vide...</p>
                                </div>
                            )}
                            {validForm && (
                                <div className='message-valid-form'>
                                    <p>L'article a bien été créé!</p>
                                </div>
                            )}
                            <button>
                                Valider
                            </button>
                        </form>
                    </div>
                    <div className="extrait">
                        <h1 className={formData.title ? 'with-bar' : ''}>{ formData.title }</h1> {/* condition pour afficher la barre::after que s'il y a un titre */}
                        <div className='card-actu'>
                            <h3>Par { formData.author } | Le {moment().format('DD/MM/YYYY')}</h3> 
                            {previewImage && ( 
                                <div className='flex justify-center'>
                                    <img 
                                        src={previewImage} 
                                        alt="Aperçu de l'image" 
                                    />
                                </div>
                                
                            )}
                            <p className='article-content'>{ formData.content }</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}
