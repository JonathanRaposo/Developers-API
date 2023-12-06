
const SortButtons = ({ handleSort }) => {

    return (
        <div className='sortButtons'>
            <button onClick={() => handleSort('firstName')}>Sort by first name</button>
            <button onClick={() => handleSort('lastName')}>Sort by last name</button>

        </div>
    );
}

export default SortButtons;