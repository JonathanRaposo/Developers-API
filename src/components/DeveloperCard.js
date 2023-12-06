import { Link } from 'react-router-dom';
const DeveloperCard = ({ developer }) => {
    return (
        <div className='developerCard'>
            <Link to={`/developers/${developer.id}`} className="links">
                <img src={developer.image_url} alt="profile pic" />
                <h3>{developer.firstName} {developer.lastName}</h3>
            </Link>

        </div>
    );
}

export default DeveloperCard;