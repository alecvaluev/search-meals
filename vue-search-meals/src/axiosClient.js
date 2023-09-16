import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
  });
  
export const GET_MEAL_BY_NAME_URL ='search.php?s='
export const GET_ALL_INGREDIENTS_URL = 'list.php?i=list'
export const GET_MEAL_BY_INGREDIENT_URL = 'filter.php?i='
export const GET_MEAL_BY_LETTER_URL = 'search.php?f='
export const GET_A_MEAL_URL = 'lookup.php?i='

export default axiosClient