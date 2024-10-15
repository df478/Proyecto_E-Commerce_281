const express = require("express");
const CarritoService = require("./../services/carrito.service");
const router = express.Router();
const service = new CarritoService();
const validatorHandler = require("../middlewares/validator.handler");
const {
  crearCarritoSchema,
  actualizarCarritoSchema,
  obtenerCarritoSchema,
} = require("../schemas/carrito.schema");

router.get("/", async (req, res) => {
  try {
    const carritos = await service.find();
    res.json(carritos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los carritos", error });
  }
});

router.get('/:id_carrito', 
    validatorHandler(obtenerCarritoSchema, "params"), 
    async (req, res) => {
    try {
        const { id_carrito } = req.params;
        const carrito = await service.findOne(id_carrito);
        if (!carrito) {
            return res.status(404).json({ message: 'carrito no encontrado' });
        }
        res.json(carrito);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el carrito", error });
    }
});
// ruta para obtener el carrito de un cliente con productos añadidos
router.get('/cliente/:id_usuario',
    
    async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const carritoConProductos = await service.obtenerCarritoConProductos(id_usuario);
        if (!carritoConProductos) {
            return res.status(404).json({ message: 'No se encontró el carrito del cliente' });
        }
        res.json(carritoConProductos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el carrito del cliente', error });
    }
});
//-------------------------------------------------------------------------------------------------
router.post('/', 
    validatorHandler(crearCarritoSchema, "body"),
    async (req, res) => {
    try {
      const body = req.body;
      const nuevoCarrito = await service.create(body);
      res.status(201).json(nuevoCarrito);
    } catch (error) {
      res.status(400).json({ message: "Error al crear el carrito", error });
    }
  }
);

router.patch('/:id_carrito', 
    validatorHandler(obtenerCarritoSchema, "params"),
    validatorHandler(actualizarCarritoSchema, "body"),
    async (req, res) => {
    try {
        const { id_carrito } = req.params;
        const body = req.body;
        const carrito = await service.update(id_carrito, body);
        if (!carrito) {
            return res.status(404).json({ message: 'carrito no encontrado' });
        }
        res.json(carrito);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error al actualizar el carrito", error });
    }
  }
);

router.patch('/producto/:id_carrito',
  validatorHandler(obtenerCarritoSchema, "params"),
  async (req, res) => {
    try {
      const { id_carrito } = req.params;
      const { id_producto, cantidad } = req.body; // Asegúrate de que estos datos estén en el body
      // Verificar si existe el producto en el carrito
      const productoEnCarrito = await service.findProductoEnCarrito(id_carrito, id_producto);
      
      if (!productoEnCarrito) {
        return res.status(404).json({ message: 'El producto no se encuentra en el carrito' });
      }
      // Si existe, actualizar la cantidad
      const carritoActualizado = await service.updateProductoEnCarrito(id_carrito, id_producto, cantidad);
      if (!carritoActualizado) {
        return res.status(404).json({ message: 'No se pudo actualizar el producto en el carrito' });
      }

      res.json({
        message: 'Carrito actualizado correctamente',
        carrito: carritoActualizado
      });
      
    } catch (error) {
      res.status(400).json({
        message: "Error al actualizar el carrito",
        error: error.message
      });
    }
  }
);


router.delete('/:id_carrito', async (req, res) => {
    try {
        const { id_carrito } = req.params;
        const rta = await service.delete(id_carrito);
        if (!rta) {
            return res.status(404).json({ message: 'carrito no encontrado' });
        }
        res.json(rta);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el carrito', error });
    }
});
router.delete('/producto/:id_carrito/:id_producto',
  validatorHandler(obtenerCarritoSchema, "params"),
  async (req, res) => {
    try {
      const { id_carrito,id_producto } = req.params;

      // Verificar si existe el producto en el carrito
      const productoEnCarrito = await service.findProductoEnCarrito(id_carrito, id_producto);
      
      if (!productoEnCarrito) {
        return res.status(404).json({ message: 'El producto no se encuentra en el carrito' });
      }

      // Si existe, eliminar el producto del carrito
      const productoEliminado = await service.deleteProductoEnCarrito(id_carrito, id_producto);

      if (!productoEliminado) {
        return res.status(500).json({ message: 'No se pudo eliminar el producto del carrito' });
      }

      res.json({
        message: 'Producto eliminado correctamente del carrito'
      });
      
    } catch (error) {
      res.status(400).json({
        message: "Error al eliminar el producto del carrito",
        error: error.message
      });
    }
  }
);

module.exports = router;
