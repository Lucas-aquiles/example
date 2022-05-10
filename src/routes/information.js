const express = require('express');
require('dotenv').config();
const axios = require('axios');
const { API, API_NAME } = process.env;
const server = require("express").Router();
// const API = "https://restcountries.com/v3/all"
const info = require('../AdidasMen0.json');
const allInformacion = require('../All/CHILD/AsicsChild.json')


server.get('/', (req, res) => {

    res.status(200).json(allInformacion)

})






module.exports = server;
