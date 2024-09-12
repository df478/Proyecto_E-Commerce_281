const { faker } = require("@faker-js/faker");
const UsuarioService = require("./usuario.service");

class ProductoService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate() {
    const limite = 100;
    for (let index = 0; index < limite; index++) {
      this.products.push({
        id_producto: index,
        id_artesano: parseInt(Math.random() * 500),
        nombre_producto: faker.commerce.productName(),
        precio_producto: parseInt(faker.commerce.price(), 10),
        descripcion_producto: faker.commerce.productDescription(),
        stock_producto: parseInt(Math.random() * 1000),
        imagen_producto: faker.image.imageUrl()
      });
    }
  }
  create(data) {
    const nuevoProducto = {
        id: this.products.length,
        ...data,
    }
    this.products.push(nuevoProducto);
    return nuevoProducto;
  }
  find() {  
    return this.products;
  }
  findOne(id) {
    return this.products.find(item => item.id);
  }
  update(id, cambios) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
        throw new Error('Producto no encontrado');
    }
    this.products[index] = cambios;
    return this.products[index];
  }
  delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
        throw new Error('Producto no encontrado');
    }
    this.products.splice(index,1);
    return { id };
  }
}

module.exports = ProductoService