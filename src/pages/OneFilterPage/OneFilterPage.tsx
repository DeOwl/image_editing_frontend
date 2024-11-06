import "./OneFilterPage.css";
import { FC, useEffect, useState } from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routs";
import { useParams } from "react-router-dom";
import { Col, Row, Spinner, Image } from "react-bootstrap";
//import { ALBUMS_MOCK } from "../../modules/mock";
import { getFiltersById, getFiltersByTitle } from "../../api";
import { FILTERS_MOCK } from '../../modules/mock'
import image_mock from "../../assets/def.jpg"

export interface FilterProp {
  image: string
  title: string
  description: string
  id: number,
  matrix_values: number[],
}


export const OneFilterPage: FC = () => {
  const [pageData, setPageData] = useState<FilterProp>();

  const { id } = useParams(); 


  const getFilter = async () =>{
    if (!id) return;
    await getFiltersById(+id).then((data)=>setPageData(data)).catch(
      ()=>{
        setPageData(FILTERS_MOCK.filter((item)=> (item.id == +id))[0])
      }
    )
}

  useEffect(() => {
    getFilter()
  }, [id]);

  return (
    <div>
      <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.FILTERS, path: ROUTES.FILTERS },
          { label: pageData?.title || "Фильтр" },
        ]}
      />
      {pageData ? ( // проверка на наличие данных, иначе загрузка
        <div className="single_filter_main_div">
          <img src={pageData.image || image_mock} className="image_big"/>
          <div className="filter-contents">
              <p className="title">{pageData.title}</p>
              <p className="short-description">{pageData.description}</p>
              <p className="short-description">Матрица:</p>
              <div className="matrix_filter">
                { pageData.matrix_values.map((item, index)=>(
                    <div style={{border:"1px solid black"}} key={index}>
                        {item}
                    </div>
                ))
                }
              </div>
          </div>  
        </div> 
      ) : (
        <div className="album_page_loader_block">{/* загрузка */}
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};