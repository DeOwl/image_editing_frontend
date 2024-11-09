import { FC} from 'react'
import { useNavigate } from "react-router-dom"
import { ROUTES } from '../../Routs'
import { Outlet } from 'react-router-dom'




export const HeaderMain: FC = () => {

    const navigate = useNavigate();

    const homeClickHandler = () =>{
        navigate(`${ROUTES.HOME}`);
    }
    const filtersClickHandler = () =>{
        navigate(`${ROUTES.FILTERS}`);
    }


    return (
        <div>
            <div className="header">
            <a className="header-text" onClick={homeClickHandler}>Pictura</a>
            <a onClick={filtersClickHandler} className="header-href">
                <div  className="header-button">Фильтры</div>
            </a>
            
            </div>
            <Outlet/>
        </div>
    )
}