
import "./sidebar.css";
import UserNavbar from "../assets/DainamycData/UserNavbar.jsx";

const User = () => {

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h2>
          <span>
            <i class="ri-taxi-line"></i>
          </span>{" "}
                    UberX
                </h2>
            </div>

            <div className="sidebar__content">
                <div className="menu">
                    <ul className="nav__list">
                        {UserNavbar.map((item, index) => (
                            <li className="nav__item" key={index}>
                                <UserNavbar
                                    to={item.path}
                                    className={(navClass) =>
                                        navClass.isActive ? "nav__active nav__link" : "nav__link"
                                    }
                                >
                                    <i className={item.icon}></i>

                                    {item.display}
                                </UserNavbar>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar__bottom">
          <span>
            <i class="ri-logout-circle-r-line"></i> Logout
          </span>
                </div>
            </div>
        </div>
    );
};

export default User;
