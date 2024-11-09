import { FilterProp } from "../pages/OneFilterPage/OneFilterPage";


export const FILTERS_MOCK: FilterProp[] = [
    {image:"", 
     title:"Gaussian blur",
     description:"Эффект размытия изображения с помощью размытия по Гауссу 3x3 сверточной матрицей c расширением границ",
     id: 0,
     matrix_values: [0.0625,0.125,0.0625,0.125,0.25,0.125,0.0625,0.125,0.0625]
    },
    {image:"", 
     title:"Sharpen",
     description:"Эффект увеличения резкости с помощью сверточной матрицы 3x3 c расширением границ",
     id: 1,
     matrix_values: [0.0,-1.0,0.0,-1.0,5.0,-1.0,0.0,-1.0,0.0]},
    {image:"", 
     title:"Outline",
     description:"Эффект выделения контрастных границ изображения с помощью сверточной матрицы 3x3",
     id: 2,
     matrix_values: [-1.0,-1.0,-1.0,-1.0,8.0,-1.0,-1.0,-1.0,-1.0]

    }];
  