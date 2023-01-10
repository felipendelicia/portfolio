import Home from "../pages/Home"
import Projects from "../pages/Projects"

const routes = [
    {
        name: '🏠',
        path: '/',
        component: <Home/>
    },
    {
        name: 'proyectos',
        path: '/projects',
        component: <Projects/>
    }
]

export default routes