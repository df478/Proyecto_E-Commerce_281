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
    const carrito = await models.Carrito.findOne({
        where: { id_usuario },  // Filtro por 'id_usuario'
        include: [{
            model: models.Aniade,
            as: "aniade", 
            include: [{
                model: models.Producto,
                as: "producto",
                include:[{
                    model: models.Imagen,
                    as:"imagen"
                }]
            }],
        }],
    });

    if (!carrito) {
        throw boom.notFound("Carrito no encontrado para el cliente");
    }

    // Formatear los productos con sus imágenes
    const productosEnCarrito = carrito.aniade.map((aniade) => ({
        producto: aniade.producto,
        cantidad: aniade.cantidad,
    }));

    return {
        id_carrito: carrito.id_carrito,
        producto: productosEnCarrito,
    };
}

  //-----------------------------------------------------------------------------------
  async update(id_carrito, cambios) {
    const carrito = await this.findOne(id_carrito);
    const rta = await carrito.update(cambios);
    return rta;
  }

  async findProductoEnCarrito(id_carrito, id_producto) {
    const productoEnCarrito = await models.Aniade.findOne({
      where: { id_carrito, id_producto }
    });
    return productoEnCarrito;
  }

  async updateProductoEnCarrito(id_carrito, id_producto, nuevaCantidad) {
    const productoActualizado = await models.Aniade.update(
      { cantidad: nuevaCantidad },
      { where: { id_carrito, id_producto } }
    );
    return productoActualizado;
  }

  async delete(id_carrito) {
    const carrito = await this.findOne(id_carrito);
    await carrito.destroy();
    return { id_carrito };
  }
  
  async deleteProductoEnCarrito(id_carrito, id_producto) {
    const resultado = await models.Aniade.destroy({
      where: { id_carrito, id_producto }
    });
    return resultado; // Retorna el número de filas eliminadas
  }
}



module.exports = CarritoService;