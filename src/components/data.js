const data =[
    {
      id:1,
      categoryId: 1,
      img:"https://http2.mlstatic.com/D_NQ_NP_705336-MLA48168969407_112021-W.jpg",
      marca:"Kawasaki",
      modelo:"Z1000",
      cilindradas:"1043cc",
      anos:"2022",
      precio:"2.220.000",
      description: "Equipada con el eficaz motor de 1.043cc de cuatro cilindros que incorporan varios modelos de la marca japonesa y que ofrece una respuesta soberbia a medio régimen. Su relación de cambio corta da una respuesta deportiva realmente espectacular."
    },
    {
      id:2,
      categoryId: 2,
      img: "https://cdn.motor1.com/images/mgl/wYkrE/s3/en-el-garage-de-autoblog-ktm-rc-200.jpg",
      marca:"KTM",
      modelo:"RC200",
      cilindradas:"200cc",
      anos:"2020",
      precio:"500.000",
      description: "Esta moto es de la categoría de deportivay el primer modelo de ésta generación de las Ktm 200 rc se comenzó a vender al particular en el año 2014,por lo que hacemos referencia a una generación de motos que tiene ya 8 años."
    },
    {
      id:3,
      categoryId: 3,
      img:"https://d2r9epyceweg5n.cloudfront.net/stores/985/830/products/skua-silver-edition-45-der1-21d9c6bd4e9405580115569451808741-1024-1024.jpg",
      marca:"Motomel",
      modelo:"Skua Silver Edicion",
      cilindradas:"125cc",
      anos:"2020",
      precio:"200.000",
      description: "Edición exclusiva de tan solo 1000 unidades con motivo de nuestros 25 años de trayectoria. La edición limitada de Skua 150 Silver Edition se desarrolló con componentes de distinción como la pintura única en su historia color gris mate con tratamiento anti rayaduras, escape deportivo, cubre carter y cubre puños, suspensión invertida, tablero digital y accesorios PRO OFF ROAD."
    },
    {
      id:4,
      categoryId: 2,
      img: "https://www.motofichas.com/images/cache/01-ktm-390-duke-2021-estudio-gris-739-a.jpg",
      marca:"KTM",
      modelo:"Duke",
      cilindradas:"390cc",
      anos:"2022",
      precio:"1.200.000",
      description: "Es verdad que el motor parte de la base del de la Duke de octavo de litro, si bien se modifican pistón, árboles de levas, válvulas, cajas de admisión y escape y cigüeñal. Con todo ello, el modelo de la marca austriaca es capaz de ofrecer más de 10 CV más de potencia que la 125, aunque encontrarse a medio camino entre la accesible 125 y la poderosa 390 ha motivado que deje de importarse a España en 2015."
    },
    {
      id:5,
      categoryId: 1,
      img: "https://a.mcdn.es/mnet_ft//YAMAHA/YZF/1312/26415MG.jpg/660x/",
      marca:"Yamaha",
      modelo:"R6",
      cilindradas:"600cc",
      anos:"2010",
      precio:"1.500.000",
      description: "Esta moto pertenece a la categoría de deportivay el primer modelo de ésta generación de las Yamaha yzf se comenzó a vender al particular en el año 1993,por lo que hacemos referencia a una generación de motos que tiene ya 29 años."
    },
    {
      id:6,
      categoryId: 2,
      img: "https://www.dailymotos.com/wp-content/uploads/2020/09/Yamaha-MT-03-2020-color-icon-blue-1024x576.jpg",
      marca:"Yamaha",
      modelo:"MT 03",
      cilindradas:"321cc",
      anos:"2022",
      precio:"1.400.000",
      description: "La MT-03 monta llantas de 17″ de 10 radios y que llegan calzadas con un delantero de 110/70-17M/C, mientras que el trasero es un 140/70-17M/C. La nueva MT-03 dispone de un rediseñado depósito de combustible con capacidad para 14 litros lo que asegura una amplia autonomía gracias a su contenido consumo."
    },
    {
      id:7,
      categoryId: 2,
      img: "https://www.heavenimagenes.com/heavencommerce/6e9b30bb-b4e0-4fa5-bc5f-94d657a13a22/images/v2/HONDA/2008011159127309_04_medium.jpg",
      marca:"Honda",
      modelo:"CB 190r",
      cilindradas:"190cc",
      anos:"2018",
      precio:"500.000",
      description: "Disfruta de un diseño con estilo único gracias a su tanque aerodinámico renovado, farola de última generación, sillín cómodo y suspensión invertida. Además, presenta detalles renovados en su nuevo escape que brinda mayor distancia del suelo mientras mejora la salida de los gases del motor."
    },
    {
      id:8,
      categoryId: 1,
      img: "https://www.motofichas.com/images/cache/01-kawasaki-ninja-h2-2020-estudio-739-a.jpg",
      marca:"Yamaha",
      modelo:"Ninja",
      cilindradas:"1000cc",
      anos:"2022",
      precio:"8.000.000",
      description: "Esta moto es de la categoría de deportivay el primer modelo de ésta generación de las Ktm 200 rc se comenzó a vender al particular en el año 2014,por lo que hacemos referencia a una generación de motos que tiene ya 8 años."
    },
    {
      id:9,
      categoryId: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/XR_150.jpg/1200px-XR_150.jpg",
      marca:"Honda",
      modelo:"XR",
      cilindradas:"150cc",
      anos:"2022",
      precio:"400.000",
      description: "Mayor torque y más eficiente gracias a su mejor rendimiento y transmisión mecánica de 5 velocidades. Potencia de 12,1HP a 7750RPM y un torque de 12,93Nm a 5000RPM. Gastarás menos y te moverás más rápido a diferencia de otros modelos más básicos.."
    },
    {
      id:10,
      categoryId: 2,
      img: "https://http2.mlstatic.com/D_NQ_NP_975262-MLA47329468350_092021-O.jpg",
      marca:"CFMOTO",
      modelo:"RZ",
      cilindradas:"400cc",
      anos:"2022",
      precio:"1.150.000",
      description: "Con una potencia máxima de 50 HP que se entrega a 9500 rpm y un par máximo de 32 N.m / 7750 rpm, en un motor bicilíndrico DOHC en línea de posición transversal con doble árbol de levas, 8 válvulas, 4 tiempos, 6 marchas y refrigerado por líquido, compacto, de última generación."
    }
]
module.exports = {
    data,
}