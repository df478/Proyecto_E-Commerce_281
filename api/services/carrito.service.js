const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
class CarritoService {
  constructor() {

  }

  async create(data) {
    const nuevoData = {
      ...data,
    };
    const nuevoCarrito = await models.Carrito.create(nuevoData);
    return nuevoCarrito;
  }

  async find() {
    const rta = await models.Carrito.findAll({
      include:["cliente"]
    });

    return rta;
  }

  async findOne(id_carrito) {
    
    const carrito = await models.Carrito.findByPk(id_carrito);
    if (!carrito) {
      throw boom.notFound("Carrito no encontrado");
    }
    return carrito;
  }
  //----------------------------- OBTENER EL CARRITO DEL CLIENTE -------------------------
  async obtenerCarritoConProductos(id_usuario) {
    const carrito = await models.Carrito.findOne({id_usuario,
        include: [{
            model: models.Aniade,
            as: "aniade", 
            include: [{
                model: models.Producto,
                as: "producto", 
                attributes: ['id_producto', 'nombre_producto', 'precio_producto'],
            }],
        }],
    });

    if (!carrito) {
        throw boom.notFound("Carrito no encontrado para el cliente");
    }

    // Formatear los productos
    const productosEnCarrito = carrito.aniade.map((aniade) => ({ 
        id_producto: aniade.producto.id_producto, 
        nombre: aniade.producto.nombre_producto, 
        precio: aniade.producto.precio_producto, 
        cantidad: aniade.cantidad,
    }));

    return {
        id_carrito: carrito.id_carrito,
        productos: productosEnCarrito,
    };
}

  //-----------------------------------------------------------------------------------
  async update(id_carrito, cambios) {
    
    console.log(id_carrito, cambios);
    
    const carrito = await this.findOne(id_carrito);
    const rta = await carrito.update(cambios);
    return rta;
  }

  async delete(id_carrito) {
    const carrito = await this.findOne(id_carrito);
    await carrito.destroy();
    return { id_carrito };
  }
}

module.exports = CarritoService;