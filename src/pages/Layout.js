import { Outlet, Link } from "react-router-dom";
import bwlogo from "./images/bwlogo.webp";
import telephone from './images/telephone-fill.svg';
import ourNumber from '../ourNumber';


export default function Layout() {
  return (
    <>
   <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-black">
        <div className="container-fluid">
            <a className="navbar-brand" title="Logo" href="./images/bwlogo.png">
                <img className="img-logo" src={bwlogo} width={200} height={80} alt="Company Logo" />
            </a>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                        <Link to='/'>                            
                                <a className="nav-link p-2" aria-current="page" title="Homepage" href="/">                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                    </svg>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-2" aria-current="page" title="Support" href="https://cloudtensolutions.atlassian.net/servicedesk/customer/portal/2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" className="bi bi-question-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
                                </svg>
                            </a>
                        </li>                                        
                        
                    </ul>                    
        </div>
    </nav>
<Outlet />
    </>
  )
};
