import { Request, Response, NextFunction } from 'express'
import { storeService, getService, updateService, deleteService } from './service';

export const storeController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, url } = req.body;
        const result = storeService(name, url);
        res.status(201).json({ result });
    } catch (e) {
        next(e)
    }
};

export const getController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const result = getService(name);
        res.status(200).json({ result });
    } catch (e) {
        next(e)
    }
}

export const updateController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, url } = req.body;
        const result = updateService(name, url);
        res.status(200).json({ result });
    } catch (e) {
        next(e)
    }
};

export const deleteController = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const result = deleteService(name);
        res.status(200).json({ result });
    } catch (e) {
        next(e)
    }
};