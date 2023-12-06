
class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }

    getAllDevelopers = () => {
        return fetch(`${this.BASE_URL}/developers`)
            .then((response) => response.json())
            .catch((err) => console.log('Error while fetching developers: ', err))

    }

    getDeveloper = (id) => {
        return fetch(`${this.BASE_URL}/developers/${id}`)
            .then((response) => response.json())
            .catch((err) => console.log('Error while fetching developer'))
    }

    createOne = (developerData) => {
        return fetch(`${this.BASE_URL}/developers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(developerData)
        })
            .then((response) => response.json())
            .catch((err) => console.log('Error creating developer: ', err))
    }

    updateOne = (id, updatedData) => {
        return fetch(`${this.BASE_URL}/developers/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)

        })
            .then((response) => response.json())
            .catch((err) => console.log('Error while updating developer: ', err))
    }

    deleteOne = (id) => {
        return fetch(`${this.BASE_URL}/developers/${id}`, { method: 'DELETE' })
            .then(() => console.log(`Deleveloper with id ${id} was removed succesfully`))
            .catch((err) => console.log('Error while deleting developer: ', err))
    }

}

export default APIHandler

