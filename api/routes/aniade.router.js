const express = require('express');
const AniadeService = require('./../services/aniade.service');
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();
const service = new AniadeService();
const {
    obtenerAniadeSchema,
    crearAniadeSchema,
    actualizarAniadeSchema,
} = require("../schemas/aniade.schema");

router.get('/', async (req, res) => {
    try {
        const aniadidos = await service.find();
        console.log("service working");
        
        res.json(aniadidos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los añadidos', error: error.message });
    }
});

router.get('/:id_aniade', 
    validatorHandler(obtenerAniadeSchema, "params"),
    async (req, res) => {
        try {
            const { id_aniade } = req.params;
            const aniadido = await service.findOne(id_aniade);
            if (!aniadido) {
                return res.status(404).json({ message: 'Aniade no encontrado' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener la aniade', error: error.message });
        }
    }
);

router.get('/:id_carrito/:id_producto', 
    validatorHandler(obtenerAniadeSchema, "params"),
    async (req, res) => {
      try {
        const { id_carrito, id_producto } = req.params;
        const aniadido = await service.findOneByCarritoAndProducto(id_carrito, id_producto);
        if (!aniadido) {
          return res.status(404).json({ message: 'Elemento no encontrado en el carrito' });
        }
        res.json(aniadido);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el elemento', error: error.message });
      }
    }
  );
  

  router.post('/', 
    validatorHandler(crearAniadeSchema, "body"),
    async (req, res) => {
        try {
            const { id_carrito, id_producto } = req.body;

            // Verificar si ya existe un registro con el mismo id_carrito y id_producto
            const existeAniadido = await service.findOneByCarritoAndProducto(id_carrito, id_producto);
            
            if (existeAniadido) {
                return res.status(400).json({ 
                    message: 'Este producto ya ha sido añadido al carrito.' 
                });
            }

            // Si no existe, se procede a crear uno nuevo
            const nuevoAniadido = await service.create(req.body);
            res.status(201).json(nuevoAniadido);

        } catch (error) {
            console.error(error);
            res.status(500).json({ 
                message: 'Error al crear la aniade', 
                error: error.message 
            });
        }
    }
);

router.patch('/:id_aniade', 
    validatorHandler(obtenerAniadeSchema, "params"),
    validatorHandler(actualizarAniadeSchema, "body"),
    async (req, res) => {
        try {
            const { id_aniade } = req.params;
            const body = req.body;
            const aniadido = await service.update(id_aniade, body);
            if (!aniadido) {
                return res.status(404).json({ message: 'Aniade no encontrada' });
            }
            res.json(aniadido);
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Error al actualizar la aniade', error: error.message });
        }
    }
);
router.delete('/:id_aniade', 
    validatorHandler(obtenerAniadeSchema, "params"),
    async (req, res) => {
        try {
            const { id_aniade } = req.params;
            const rta = await service.delete(id_aniade);
            if (!rta) {
                return res.status(404).json({ message: 'Aniade no encontrada' });
            }
            res.json(rta);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al eliminar la aniade', error: error.message });
        }
    }
);

module.exports = router;
