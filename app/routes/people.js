'use strict';
var express = require('express');
var router = express.Router();
var db = require('./../models');

// Retorna todos os registros
router.get('/', function(req, res, next) {
    db.people.findAll({
        include: [{
            model: db.contacts,
            required: false,
            order: [['type']],
        }],
        order: [
            ['name']
        ]
    })
    .then(function(result) {
        res.json(result);
    });
});

// Retorna um registro específico
router.get('/:id', function(req, res, next) {
    let id = req.params.id;

    try {
        db.people.findOne({
            where: {
                id: id
            },
            include: [{
                model: db.contacts,
                required: false
            }]
        })
        .then(function(result) {
            res.json(result);
        })
        .catch(function(error) {
            console.log(error);
        });
    } catch (error) {
        console.log(error);
    }
});

// Insere um novo registro
router.post('/', function(req, res, next) {
    let name = req.body.name;
    let company = req.body.company;
    let relationship = req.body.relationship;
    let contacts = req.body.contacts;

    db.people.create({
        name: name,
        company: company,
        relationship: relationship
    })
    .then(function(newPerson) {
        if ( contacts.length > 0 ) {
            newPerson.contacts = []
            let promiseMap = contacts.map( contact => {
                return db.contacts.create({
                    people_id: newPerson.dataValues.id,
                    type: contact.type,
                    contact: contact.contact
                })
                .then(function(newContact) {
                    newPerson.contacts.push(newContact)
                    return newPerson
                }); 
            })
            Promise.all(promiseMap).then((newPerson) => {
                res.json(newPerson)
            })
        }
    });    
});

// Alterar um registro
router.put('/:id', function(req, res, next) {
    let id = req.params.id;
    let newData = {
        name: req.body.name,
        company: req.body.company,
        relationship: req.body.relationship,
    }
    let contacts = req.body.contacts;

    // Procura a pessoa para alterar
    db.people.findOne({
        where: {
            id: id
        }
    }).then(person => {
        // Atualiza os dados
        person.update(newData)
        .then(newPerson => {
            // Limpa os contatos existentes
            db.contacts.destroy({
                where: {
                    people_id: id
                }
            }).then(result => {
                // Adiciona os contatos atualizados
                if ( contacts.length > 0 ) {
                    let promiseMap = contacts.map( contact => {
                        return db.contacts.create({
                            people_id: id,
                            type: contact.type,
                            contact: contact.contact
                        })
                        .then(function(newContact) {
                            return true
                        }); 
                    })
                    Promise.all(promiseMap).then((result) => {
                        res.json(result)
                    })
                } else {
                    res.json(1)
                }
            })
        })
    })
});

// Remove um registro
router.delete('/:id', function(req, res, next) {
    let id = req.params.id;

    db.people.destroy({
        where: {
            id: id
        }
    })
    .then(function(result) {
        res.json(result);
    });
});

module.exports = router;