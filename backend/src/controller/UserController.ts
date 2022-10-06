import { UserCS } from "../entity/UserCS"
import { CS } from "../entity/CS"
import { AppDataSource } from "../data-source"
import { Request,  Response } from "express"



export const getUsersCS = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(UserCS).find()
return response.json (users)
};


export const getUserCS = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserCS).findOneBy(id)
    return response.json (user)
};

export const saveUserCS = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(UserCS).save(request.body)
return response.json(user)
}

export const updateUserCS = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserCS).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserCS).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'User not found!'})
};

export const removeUserCS = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(UserCS).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(UserCS).findOneBy(id)
        return response.json({message: 'User file removed'})
    }
    return response.status(404).json({message: 'User not found!'})
};



export const getUsrCS = async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(CS).find()
return response.json (users)
};


export const getCS = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(CS).findOneBy(id)
    return response.json (user)
};

export const saveCS = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(CS).save(request.body)
return response.json(user)
}

export const updateCS = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(CS).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(CS).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'User not found!'})
};

export const removeCS = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(CS).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(CS).findOneBy(id)
        return response.json({message: 'User file removed'})
    }
    return response.status(404).json({message: 'User not found!'})
};
