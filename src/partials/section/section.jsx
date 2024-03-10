import { Outlet } from "react-router-dom";

import './section.css';

export default function Section(){
    return(
        <>
            <div className="parentSectionContent">
                <Outlet />
            </div>
        </>
    )
}