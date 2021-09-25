const express = require('express');
const { Router } = express;
const {
	handleGetTotalTime,
    updateTotalTime
} = require('./handlers');
const { parseBody } = require('./middlewares')

const api = new Router();

api.get('/timer', handleGetTotalTime);
api.put('/timer', parseBody, updateTotalTime)

module.exports = {
	api,
};