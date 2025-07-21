import { Request, Response } from "express";

export const getMessagesController = async (req:Request, res:Response):Promise<void>  => {
    res.json("Текст сообщения")
}

interface RequestBody {
    username: string,
    email: string
}

interface ReceivedData {
    message: string,
    data: RequestBody
}

export const addtMessagesController = async (req:Request, res:Response):Promise<void> => {
    const receivedData: ReceivedData = req.body;
    res.status(201).json({
        message: "Данные получены!",
        data: receivedData
    })
}