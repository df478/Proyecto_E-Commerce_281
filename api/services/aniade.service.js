const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class AniadeService {
  constructor() {}

  async create(data) {
    const nuevoAniade = await models.Aniade.create(data); // Crear el registro en la base de datos
    return nuevoAniade;
  }

  async find() {
    const aniades = await models.Aniade.findAll(
      
    ); // Obtener todos los registros
    return aniades;
  }

  async findOne(id_aniade) {
    const aniade = await models.Aniade.findOne({
        where: { id_aniade: id_aniade } // Especificar el criterio de búsqueda
    });

    if (!aniade) {
        throw boom.notFound("Registro de aniade no encontrado");
    }

    return aniade;
}

  async findOneByCarritoAndProducto(id_carrito, id_producto) {
    const aniade = await models.Aniade.findOne({
      where: {
        id_carrito: id_carrito,
        id_producto: id_producto
      }
    });
    if(!aniade){
      throw boom.notFound("Registro de aniade no encontrado");
    }
    return aniade;
  }
  
  async findOneByCarritoAndProducto2(id_carrito, id_producto) {
    return await models.Aniade.findOne({
      where: {
          id_carrito: id_carrito,
          id_producto: id_producto
      }
  });
  }

  async updateProductoCantidad(id_carrito, id_producto, cantidadIncremento) {
    // Buscar el registro del producto en el carrito
    const aniade = await models.Aniade.findOne({
        where: {
            id_carrito: id_carrito,
            id_producto: id_producto,
        }
    });

    // Verificar si el producto no existe
    if (!aniade) {
        throw boom.notFound("El producto no se encuentra en el carrito.");
    }

    // Incrementar la cantidad
    const nuevaCantidad = aniade.cantidad + cantidadIncremento;

    // Actualizar la cantidad en la base de datos
    const [updatedRowCount, updatedRows] = await models.Aniade.update(
        { cantidad: nuevaCantidad }, // Nuevos valores
        {
            where: {
                id_carrito: id_carrito,
                id_producto: id_producto
            },
            returning: true // Para que devuelva el registro actualizado
        }
    );

    // Verificar si se actualizó algún registro
    if (updatedRowCount === 0) {
        throw new Error("No se pudo actualizar la cantidad del producto en el carrito.");
    }

    // Retornar el registro actualizado
    return updatedRows[0]; // Devolver el primer registro actualizado
  }

  async update(id_aniade, cambios) {
    const aniade = await this.findOne(id_aniade); // Obtener el registro existente

    if (!aniade) {
      throw boom.notFound("Añadido no encontrado");
    }

    const updatedAniade = await aniade.update(cambios); // Actualizar el registro con los cambios
    return updatedAniade;
  }

  async delete(id_aniade) {
    const aniade = await this.findOne(id_aniade); // Obtener el registro específico

    if (!aniade) {
      throw boom.notFound("Añadido no encontrado");
    }

    await aniade.destroy(); // Eliminar el registro
    return { id_aniade };
  }
}

module.exports = AniadeService;