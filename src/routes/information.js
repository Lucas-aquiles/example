const express = require('express');
require('dotenv').config();
const server = require("express").Router();

const allInformacion = require('../All/CHILD/AdidasChild.json')
const allInfant = require('../All/INFANT/ADIDAS-INFANT0.json')
const allMen = require('../All/MEN/AdidasMen0.json')
const allUnisex = require('../All/UNISEX/ADIDAS-UNISEX.json')
const allWomen = require('../All/WOMEN/ADIDAS-WOMEN0.json')

server.get('/children', (req, res) => {

    res.status(200).json(allInformacion)

})

server.get('/infant', (req, res) => {

    res.status(200).json(allInfant)

})

server.get('/men', (req, res) => {

    res.status(200).json(allMen)

})

server.get('/unisex', (req, res) => {

    res.status(200).json(allUnisex)

})


server.get('/women', (req, res) => {

    res.status(200).json(allWomen)

})




module.exports = server;
