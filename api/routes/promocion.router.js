const express = require('express')

const PromocionService = require('./../services/promocion.service')
const router = express.Router()
const service = new PromocionService()

router.get('/', (req, res) => {
    const promociones = service.find()
    res.json(promociones)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const promocion = service.findOne(id)
    res.json(promocion)
})

router.post('/', (req, res) => {
    const body = req.body
    const nuevoPromocion = service.create(body)
    res.status(201).json(nuevoPromocion)
})

router.patch('/:id', (req, res) => {
    const { id } = req.params
    const body = req.body
    const promocionActualizada = service.update(id, body)
    res.json(promocionActualizada)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const rta = service.delete(id)
    res.json(rta)
})

module.exports = router
