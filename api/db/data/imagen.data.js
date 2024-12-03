const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function generate() {
let imagenes = [];
const imagenData = [
    {
        id_producto: 1,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2024/03/261002A.webp"
    },
    {
        id_producto: 1,
        url_imagen: "https://i.etsystatic.com/18136424/r/il/f33b95/3470754681/il_1588xN.3470754681_62kj.jpg"
    },
    {
        id_producto: 1,
        url_imagen: "https://i.etsystatic.com/18136424/r/il/940302/3391814663/il_1588xN.3391814663_tr11.jpg"
    },
    {
        id_producto: 1,
        url_imagen: "https://i.etsystatic.com/21923614/r/il/bb33c1/5315175793/il_1588xN.5315175793_fpvd.jpg"
    },
    {
        id_producto: 1,
        url_imagen: "https://m.media-amazon.com/images/I/91MZAP8uCsL._SL1500_.jpg"

    },
    {
        id_producto: 2,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/320214A.webp"
    },
    {
        id_producto: 2,
        url_imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_757101-MLA20272073985_032015-F.webp"
    },
    {
        id_producto: 2,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/320214A.webp"
    },
    {
        id_producto: 2,
        url_imagen: "https://www.vajillassantis.com/wp-content/uploads/bandejas-ceramica-asas.jpg"
    },
    {
        id_producto: 3,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2024/03/320113A.webp"
    },
    {
        id_producto: 3,
        url_imagen: "https://scontent.flpb4-1.fna.fbcdn.net/v/t1.6435-9/183574762_283078526829139_6127612538597860711_n.jpg?stp=dst-jpg_s720x720&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Bd8a4Ga3ILgQ7kNvgF5IU3r&_nc_ht=scontent.flpb4-1.fna&_nc_gid=AiwgYXJNiWOgXM4lCG1BIxT&oh=00_AYDIA3f6wGnahGZ1E8iEyY25YHnLtgEK3xnMw4vvgnuzAw&oe=6734F821"
    },
    {
        id_producto: 3,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/140202A.webp"
    },
    {
        id_producto: 4,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/180202A.webp"
    },
    {
        id_producto: 4,
        url_imagen: "https://t1.uc.ltmcdn.com/es/posts/3/1/5/como_renovar_un_baul_de_madera_15513_600.webp"
    },
    {
        id_producto: 4,
        url_imagen: "https://jaimaalkauzar.es/7843-superlarge_default/baul-arabe-hecho-y-pintado-a-mano-colores-alegres-calidad.jpg"
    },
    {
        id_producto: 4,
        url_imagen: "https://jaimaalkauzar.es/7845-superlarge_default/baul-arabe-hecho-y-pintado-a-mano-colores-alegres-calidad.jpg"
    },
    {
        id_producto: 4,
        url_imagen: "https://jaimaalkauzar.es/7846-superlarge_default/baul-arabe-hecho-y-pintado-a-mano-colores-alegres-calidad.jpg"
    },
    {
        id_producto: 5,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/260409A.webp"
    },
    {
        id_producto: 5,
        url_imagen: "https://i0.wp.com/venbo.shop/wp-content/uploads/2019/08/artecampo_munecachalascz_1809_1.jpg?resize=768%2C768&ssl=1"
    },
    {
        id_producto: 5,
        url_imagen: "https://www.boliviamall.com/images/APILINCHAS01_M.jpg"
    },
    {
        id_producto: 5,
        url_imagen: "https://us.cdn.eltribuno.com/032023/1680219472541.jpg?cw=950"
    },
    {
        id_producto: 6,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/140525A.webp"
    },
    {
        id_producto: 6,
        url_imagen: "https://i.etsystatic.com/13804941/r/il/bef312/5956944879/il_1588xN.5956944879_l4k1.jpg"
    },
    {
        id_producto: 6,
        url_imagen: "https://i5.walmartimages.com/asr/46bd3421-cbb1-4edf-867f-e3da387d55db.0c04362ccfc9154d09a55d6f60910ac4.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
        id_producto: 6,
        url_imagen: "https://i5.walmartimages.com/asr/ce9f24ba-cb35-4a87-ad08-58607a80c121.900298d68e64b37c562630c82f46356e.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
        id_producto: 6,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/140525A.webp"
    },
    {
        id_producto: 7,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/130106A.webp"
    },
    {
        id_producto: 7,
        url_imagen: "https://ethnoworldliving.com/59-pdt_540/angel-redondo.jpg"
    },
    {
        id_producto: 7,
        url_imagen: "https://i.etsystatic.com/28345048/r/il/50421b/5693276838/il_1588xN.5693276838_ccsw.jpg"
    },
    {
        id_producto: 7,
        url_imagen: "https://dbhg6mekyuoi1.cloudfront.net/images/upload/74469/card/65d29c058c18b9.43386889.jpg"
    },
    {  
        id_producto: 7,
        url_imagen: "https://ethnoworldliving.com/131-pdt_540/angel-arcoiris.jpg"
    },
    {
        id_producto: 8,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/160206A.webp"
    },
    {
        id_producto: 8,
        url_imagen: "https://pbs.twimg.com/media/F6gmqQQX0AAUw-u?format=jpg&name=medium"
    },
    {
        id_producto: 8,
        url_imagen: "https://media.sketchfab.com/models/e7a59ab8d30547e292483ea77806ea56/thumbnails/fd72dad389a8422aa17c4effe13a549f/46b776149fcd4888accf519ce95cccb0.jpeg"
    },
    {
        id_producto: 9,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2024/03/300218A.webp"
    },
    {
        id_producto: 9,
        url_imagen: "https://f.fcdn.app/imgs/319038/www.turkishbazar.com.uy/turkuy/fb59/webp/catalogo/A260_AZ_1/1500-1500/bombonera-de-ceramica-pintada-azul.jpg"
    },
    {
        id_producto: 9,
        url_imagen: "https://www.artesanum.com/content/upi/5/24545/4/d71116874b025a4d.jpg?w=560"
    },
    {
        id_producto: 9,
        url_imagen: "https://artesaniadecastillalamancha.es/wp-content/uploads/2020/11/3964-Bombonera-scaled.jpg"
    },
    {
        id_producto: 9,
        url_imagen: "https://galeriaseltriunfo.com/wp-content/uploads/2024/02/302001736150.png"
    },
    {
        id_producto: 10,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/200119A.webp"
    },
    {
        id_producto: 10,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/200118A-300x300.webp"
    },
    {
        id_producto: 10,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/200105A-300x300.webp"
    },
    {
        id_producto: 10,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/200202A.webp"
    },
    {
        id_producto: 10,
        url_imagen: "https://artecampo.com.bo/wp-content/uploads/2023/12/200116A.webp"
    }    
];


for (const imagen of imagenData) {
    imagenes.push({
        url_imagen: imagen.url_imagen,
        id_producto: imagen.id_producto
    });
  }

  return imagenes;
}

// Function to generate and export the data
async function generarImagen() {
  const imagenData = await generate();
  return imagenData;
}

// Export the function
module.exports = {
  generarImagen,
};