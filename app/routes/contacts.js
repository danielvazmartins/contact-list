'use strict';
var express = require('express');
var router = express.Router();
var db = require('./../models');

// Retorna todos os registros
router.get('/', function(req, res, next) {
    db.Contacts.findAll({})
    .then(function(result) {
        res.json(result);
    });
});

module.exports = router;