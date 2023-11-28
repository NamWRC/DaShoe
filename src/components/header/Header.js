import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChair,
    faCartShopping,
    faWineGlass,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
    return (
        <header className="navbar">
            <ul className="navmenu">
                <li className="item-wraper">
                    <div className="item">
                        <FontAwesomeIcon icon={faChair} />
                        <p>Home</p>
                    </div>
                </li>
                <li className="item-wraper">
                    <div className="item">
                        <FontAwesomeIcon icon={faWineGlass} />
                        <p>Acc</p>
                    </div>
                </li>
                <li className="item-wraper">
                    <div className="item">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <p>Save</p>
                    </div>
                </li>
                <li className="item-wraper">
                    <div className="item">
                        <FontAwesomeIcon icon={faSearch} />
                        <p>Search</p>
                    </div>
                </li>
            </ul>
        </header>
    );
};

export default Header;
