import './header.css';
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        <>
            <div className="parentNavbar">
                <Link to='/'>
                    <button  className='btnbrandlogo'>El_Harrak <span className='point'>.</span></button>
                </Link>
                <Link to='/'>
                    <button  className='btnhearme'><i className='bx bxs-volume-full' ></i></button>
                </Link>
                
            </div>
        </>
    )
}