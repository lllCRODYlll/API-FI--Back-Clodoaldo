import {Router,  Request, Response} from 'express'
import { getUserCS, getUsersCS, saveUserCS, updateUserCS, removeUserCS} from './controller/UserController'
import { getUsrCS, getCS, saveCS, updateCS, removeCS} from './controller/UserController'


const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json( {message: 'hello Word!'})
}) 

routes.get('/UsersCS',getUsersCS)
routes.get('/UserCS/:id',getUserCS)
routes.post('/UserCS',saveUserCS)
routes.put('/UserCS/:id',updateUserCS)
routes.delete('/UserCS/:id',removeUserCS)

routes.get('/CS',getUsrCS)
routes.get('/CS/:id',getCS)
routes.post('/CS',saveCS)
routes.put('/CS/:id',updateCS)
routes.delete('/CS/:id',removeCS)

export default routes