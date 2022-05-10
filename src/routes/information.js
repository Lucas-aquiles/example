const express = require('express');
require('dotenv').config();
const axios = require('axios');
const { API, API_NAME } = process.env;
const server = require("express").Router();
// const API = "https://restcountries.com/v3/all"
const allInformacion = require('../All/CHILD/infoNiños.json')
const allInfant = require('../All/INFANT/ADIDAS-INFANT0.json')



server.get('/children', (req, res) => {

    res.status(200).json(allInformacion)

})

server.get('/infant', (req, res) => {

    res.status(200).json(allInfant)

})

// server.get('/men', (req, res) => {

//     res.status(200).json(allMen)

// })




module.exports = server;
