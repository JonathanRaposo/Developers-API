import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom"
import APIHandler from "../utils/APIHandler";

const developerAPI = new APIHandler('http://localhost:8000');


const DetailsPage = () => {
    const [developer, setDeveloper] = useState({})
    const { id } = useParams();
    const navigate = useNavigate()
    const { firstName, lastName, description, image_url, programming_language } = developer;
    useEffect(() => {
        developerAPI
            .getDeveloper(id)
            .then((data) => setDeveloper(data))

    }, [id])

    const handleDelete = () => {
        developerAPI
            .deleteOne(id)
            .then(() => navigate('/developers'))
    }

    return (
        <div className='DetailsPage'>
            <img src={image_url} alt="profile pic" />
            <div>
                <h3>{firstName} {lastName}</h3>
                <p><strong>Programming language:</strong> {programming_language}</p>
                <p id="description-para">{description}</p>
                <div className='links'>
                    <Link to={`/developers/update/${id}`}>
                        <p>Update profile</p>
                    </Link>
                    <button onClick={handleDelete}>Delete Profile</button>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;