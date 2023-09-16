import { defineStore } from 'pinia'
import {axiosClient, GET_MEAL_BY_NAME_URL, GET_MEAL_BY_LETTER_URL, GET_MEAL_BY_INGREDIENT_URL, GET_ALL_INGREDIENTS_URL} from '../axiosClient'


const useStore = defineStore("store", {
    //state
    state: () => {
        return {
            searchedMeals: [],
            mealsByLetter: [],
            mealsByIngredient: [],
            ingredients: [],
        }
    },
    getters: {
        getLastMeal: function(){
            return this.lastMeal
        }
    },
    actions: {
        searchMeal: function (keyword) {
            axiosClient.get(`${GET_MEAL_BY_NAME_URL}${keyword}`)
            .then(({data}) => {
                this.searchedMeals = data.meals
            })
            .catch((err) => {
                this.searchedMeals = []
            })
        },
        searchMealsByLetter: function(letter){
            axiosClient.get(`${GET_MEAL_BY_LETTER_URL}${letter}`)
            .then(({data}) => {
                this.mealsByLetter = data.meals
            })
            .catch((err) => {
                this.mealsByLetter = []
            })
        },
        searchMealByIngredient: function(ingredientId){
            axiosClient.get(`${GET_MEAL_BY_INGREDIENT_URL}${ingredientId}`)
            .then(({data}) => {
                this.mealsByIngredient = data.meals
            })
            .catch((err) => {
                this.mealsByIngredient = []
            })
        },
        getAllIngredients: function(){
            axiosClient.get(GET_ALL_INGREDIENTS_URL)
            .then(({data}) => {
                this.ingredients = data.meals
            })
            .catch((err) => {
                this.ingredients = []
            })
        }
    },
})

export default useStore