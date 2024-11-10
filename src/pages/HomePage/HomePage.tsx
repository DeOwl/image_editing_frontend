import { FC } from "react";
import "./HomePage.css"
import image_mock from "../../assets/logo.png"


export const HomePage: FC = () => {
  return (
      <div className="mainPage">
        
        <img src={image_mock} className="picturaImage"/>
        <div className="filter-contents">
        <p className="mainPageText">
            Добро пожаловать в Pictura!
          </p>
          <p className="mainPageText">
            Pictura - это ваше решение для обработки изображений быстро и удобно. 
            Просто добавьте фильтры которые вы хотите применить в очередь и выбирите изображение. Затем, нажмите оформить.
          </p>
          <p className="mainPageText">
            После одобрения заявки, все фильтры будут наложены на изображение в указаном порядке и вы сможете скачать итогове изображение.
          </p>

        </div>  
        
      </div>
  );
};