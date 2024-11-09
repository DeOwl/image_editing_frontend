import { FC, FormEvent, useEffect, useState } from 'react'
import { getFiltersByTitle } from '../../api'
import AllFiltersCard from '../../components/AllFiltersCard/AllFiltersCard'
import { Spinner } from 'react-bootstrap'
import "./AllFiltersPage.css"
import InputField from '../../components/InputField/InputField'
import { useNavigate } from "react-router-dom"
import { ROUTES, ROUTE_LABELS } from '../../Routs'
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs'
import { FiltersProp } from '../../components/AllFiltersCard/AllFiltersCard'
import { FILTERS_MOCK } from '../../modules/mock'
import { HeaderMain } from '../../components/NavBar/NavBar'

export interface FilterPropWithQueue {
    queue_id: number
    count: number
    filters: FiltersProp[]
}



const AllFiltersPage: FC = () => {
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [filters, setFilters] = useState<FiltersProp[]>([])
    const [queueId, setQueueId] = useState(-1)
    const [queueCount, setQueueCount] = useState(0)

    const navigate = useNavigate();

    //выполнение функции operation при нажатии формы
    const handleForm = async (operation: () => void, e: FormEvent) =>{
        e.preventDefault()
        operation()
    }

    //функция подгрузки фильтров
    const handleSearch = async () =>{
        
        setLoading(true)
        await getFiltersByTitle(searchValue).then(( response ) => {
            setFilters(response.filters)
            setLoading(false)
            setQueueId(response.queue_id)
            setQueueCount(response.count)
            }).catch(() => 
            { // В случае ошибки используем mock данные, фильтруем по имени
                setFilters(
                    FILTERS_MOCK.filter((item) =>{
                        return item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                    })
                );
                setQueueId(-1)
                setQueueCount(0)
                setLoading(false);
            })
        
    }

    const cardClickHandler = (id: number) =>{
        navigate(`${ROUTES.FILTERS}/${id}`);
    }

    //подгрузка фильтров без поиска при mount
    useEffect(() => {
        handleSearch()
    }, [])


    return (
        <div className="main_screen">
            <HeaderMain/>
            <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.FILTERS }]} />

            <div className="search-div">
                <InputField value={searchValue} setValue={setSearchValue} onSubmit={handleForm.bind(this, handleSearch)}/>

                { queueId != -1 && <a className="buttons" href= {"/queue/" + queueId} > Очередь: {queueCount}</a>}
                { queueId == -1 && <a className="buttonsDisabled" >Очередь</a>}
            </div>
            {loading && <div className="loadingBg"><Spinner animation="border"/></div>}
            
            {!loading && !filters.length && 
            <div>
                <h1>Не найдены удовлетворяющие фильтры</h1>
            </div>
            }

            <div className="card-container">
                {filters.map((item, index)=> (
                    <AllFiltersCard 
                        clickHandler={() => cardClickHandler(item.id)} 
                        {...item} 
                        key={index}
                    />
                ))}
            </div>


        </div>
    )
}

export default AllFiltersPage