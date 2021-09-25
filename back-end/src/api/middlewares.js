const express = require('express');

const cors = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')

    next()
}

const parseBody = express.json();

module.exports =  { 
    cors,
    parseBody 
}