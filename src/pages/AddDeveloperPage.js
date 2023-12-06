import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIHandler from '../utils/APIHandler';

const developersAPI = new APIHandler('http://localhost:8000');

const AddDeveloperPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [program, setProgram] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !description || !imageUrl || !program) {
            setErrorMessage('All fields must be filled.');
            return;
        }
        const newDelevoper = { firstName, lastName, programming_language: program, description, image_url: imageUrl };

        developersAPI
            .createOne(newDelevoper)
            .then(() => {
                setFirstName('');
                setLastName('')
                setDescription('');
                setImageUrl('');
                setProgram('');
                navigate(`/developers`)
            })
            .catch((err) => console.log('Error: ', err))
    }


    return (
        <div className='AddDeveloperPage'>
            <h3>Add a developer</h3>
            <form onSubmit={handleSubmit} className='update-form'>
                <label htmlFor='firstName'>First name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor='lastName'>Last name</label>
                <input
                    type="text"
                    name="lastName"
                    id="LastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor='description'>Description</label>
                <textarea
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>

                </textarea>


                <label htmlFor='imageUrl'>Image url</label>
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />

                <label htmlFor='program'>Programming language</label>
                <input
                    type="text"
                    name="program"
                    id="program"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                />
                <button type="submit">Add</button>
                {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </div>
    );

}
export default AddDeveloperPage;