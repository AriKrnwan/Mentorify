import { FiSearch } from "react-icons/fi";
import "../searchBar/SearchBar.css";
import Button from 'react-bootstrap/Button';

function SearchBar() {
    return (
        <>
            <div className="search-bar d-flex align-items-center border rounded">
                <input type="text" palaceholder="Cari mentor di sini" className="form-control border-0 outline-0" />
                <Button variant="primary" className="btn-search">
                    <FiSearch color="white" size={24} />
                </Button>{' '}
            </div>     
        </>
    )
}

export default SearchBar;