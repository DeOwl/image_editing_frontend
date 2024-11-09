import { FC} from 'react'
import { useNavigate } from "react-router-dom"
import { ROUTES } from '../../Routs'




export const HeaderMain: FC = () => {

    const navigate = useNavigate();

    const homeClickHandler = () =>{
        navigate(`${ROUTES.HOME}`);
    }
    const filtersClickHandler = () =>{
        navigate(`${ROUTES.FILTERS}`);
    }


    return (
        <div className="header">
        <a className="header-text" onClick={homeClickHandler}>Pictura</a>
        <a onClick={filtersClickHandler} className="header-href">
              <div  className="header-button">Фильтры</div>
        </a>
      </div>
    )
}