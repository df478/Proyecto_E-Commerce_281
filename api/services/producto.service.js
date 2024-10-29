const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
class ProductoService {
  constructor() {

  }

  async create(data) {
    const { images, ...productoData } = data;
    const nuevoProducto = await models.Producto.create(productoData);
    
    const id_producto = nuevoProducto.id_producto;
    // Si hay imágenes, las procesamos y las guardamos en la tabla 'Imagenes'
    if (images && Object.keys(images).length > 0) {
        for (const [key, url_imagen] of Object.entries(images)) {
            await models.Imagen.create({
                id_producto,
                url_imagen
            });
        }
    }

    return nuevoProducto;
    // const nuevoData = {
    //   ...data,
    // };
    // const nuevoProducto = await models.Producto.create(nuevoData);
    // return nuevoProducto;
  }

  async find() {
    const rta = await models.Producto.findAll(
      {
        include: ["imagen"]
      });

    return rta;
  }

  async findOne(id_producto) {
    
    const producto = await models.Producto.findByPk(id_producto,{
      include: [
        {
            model: models.Imagen,  
            as: "imagen"
        },
        {
            model: models.Resenia,  
            as: "resenia"          
        }
      ]
    });
    if (!producto) {
      throw boom.notFound("Producto no encontrado");
    }
    return producto;
  }

  async update(id_producto, cambios) {
    // Obtener el producto actual
    const producto = await this.findOne(id_producto);
    if (!producto) {
        throw new Error('Producto no encontrado'); // Lanza un error si el producto no existe
    }

    // Verificar si hay una nueva calificación en cambios
    if (cambios.calificacion) {
        // Acumular calificaciones y cantidad
        const nuevaCalificacion = cambios.calificacion;
        const calificacionAcumulada = producto.calificacion + nuevaCalificacion;
        const cantidadCalificacionAcumulada = producto.cantidad_calificacion + 1;

        // Actualizar los cambios para la acumulación
        cambios.calificacion = calificacionAcumulada;
        cambios.cantidad_calificacion = cantidadCalificacionAcumulada;
    }

    // Realiza la actualización del producto
    const rta = await producto.update(cambios);
    return rta;
}

async delete(id_producto) {
    const producto = await this.findOne(id_producto);
    await producto.destroy();
    return { id_producto };
  }
}

module.exports = ProductoService;