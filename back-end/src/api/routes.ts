import { Router } from 'express' 
import {
	handleGetTotalTime,
    handlePutTotalTime
} from './handlers'
import { parseBody } from "./middlewares"

export const api = Router();
api.get('/timer', handleGetTotalTime);
api.put('/timer', parseBody, handlePutTotalTime);