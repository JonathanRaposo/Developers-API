
import { useState, useEffect } from 'react';
import APIHandler from '../utils/APIHandler';
import SearBar from '../components/SearchBar';
import SortButtons from '../components/SortButtons';
import DeveloperCard from '../components/DeveloperCard';

const developersAPI = new APIHandler('http://localhost:8000');


const DevelopersPage = () => {
    const [developers, setDevelopers] = useState([]);
    const [query, setQuery] = useState('');
    const [sortType, setSortType] = useState('');

    useEffect(() => {

        developersAPI
            .getAllDevelopers()
            .then((data) => setDevelopers(data))
            .catch((err) => console.log(err))
    }, [])

    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
    const handleSort = (name) => {
        setSortType(name)
    }

    const getDeveloper = (query, arr) => {
        const filteredDevelopers = arr.filter((developer) => {
            return developer.firstName.toLowerCase().includes(query.toLowerCase()) ||
                developer.lastName.toLowerCase().includes(query.toLowerCase()) ||
                developer.programming_language.toLowerCase().includes(query.toLowerCase()) ||
                developer.description.toLowerCase().includes(query.toLowerCase())
        })
        if (!filteredDevelopers.length) {
            return arr;
        }
        return filteredDevelopers;
    }

    let filteredDevelopers = getDeveloper(query, developers);

    if (sortType === 'firstName') {
        filteredDevelopers = filteredDevelopers.sort((a, b) => (
            a.firstName > b.firstName ? 1 : -1
        ))
    } else if (sortType === 'lastName') {
        filteredDevelopers = filteredDevelopers.sort((a, b) => (
            a.lastName > b.lastName ? 1 : -1
        ))
    }

    return (
        <div className='DevelopersPage'>
            <h1 className='DevelopersPage-heading'>List of well known software engineers</h1>
            <SearBar handleQuery={handleQuery} />
            <SortButtons handleSort={handleSort} />


            {filteredDevelopers.map((developer) =>
                <DeveloperCard key={developer.id} developer={developer} />)}
        </div>
    );
}

export default DevelopersPage;