import { Link } from 'react-router-dom';

function Sidebar() {
    return (
       <>
          <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
                <Link to="/dashboard" className="nav-link collapsed">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i className="bi bi-menu-button-wide"></i><span>User</span><i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                    <li>
                        <Link to="/user">
                            <i className="bi bi-circle"></i><span>Data admin</span>
                        </Link>
                    </li>
                   
                </ul>
            </li>

            </ul>
        </aside> 
       </>
    );
}

export default Sidebar;
