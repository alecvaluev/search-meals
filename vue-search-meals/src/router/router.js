import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import Ingredients from '../views/Ingredients.vue'
import MealDetails from '../views/MealDetails.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-ingredients/:ingredient',
                name: 'byIngredients',
                component: MealsByIngredients
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    }
]

const router = createRouter({
    history :createWebHistory(),
    routes
})

export default router
