const express = require('express')

const PedNotService = require('./../services/ped_not(tiene).service')
const router = express.Router()
const service = new PedNotService()

router.get('/', (req, res) => {
    const pedNot = service.find()
    res.json(pedNot)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const pedNot = service.findOne(id)
    res.json(pedNot)
})

router.post('/', (req, res) => {
    const body = req.body
    const nuevoPedNot = service.create(body)
    res.status(201).json(nuevoPedNot)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params
    const body = req.body
    const pedNotActualizado = service.update(id, body)
    res.json(pedNotActualizado)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const rta = service.delete(id)
    res.json(rta)
})

module.exports = router
