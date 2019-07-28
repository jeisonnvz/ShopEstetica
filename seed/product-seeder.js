var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

var products = [ new Product({
imagePath:'https://cdns3-2.primor.eu/71307-thickbox/mascarilla-lisso-keratina.jpg',
title:'Keratina lisso perfecto',
description:'Nueva Keratina lisso perfecto unica en el mercado con la mejor hidratacion y tecnologia del momento' ,
price:250,
category:'Keratina'
}),
new Product({
    imagePath:'https://cdn.cosmeticaval.cl/tienda/5190-large_default/kit-de-alisado-de-keratina-uso-profesional.jpg',
    title:'Keratina liss',
    description:'Nueva Keratina lisso Frutal unica en el mercado con lamejor  tecnologia del momento unica por su extractos' ,
    price:250,
    category:'Keratina'
    }),
    new Product({
        imagePath:'https://i.linio.com/p/af9957c51b7b4ec9957b604264aad9e9-product.jpg',
        title:'Shampoo treSeme detox ',
        description:'Todos los tipos de cabello pueden mantenerse sanos y brillantes siempre y cuando le demos el cuidado y tratamiento que este requiere, además de que se utilicen los productos adecuados para la alimentación e hidratación del mismo.' ,
        price:150,
        category:'Shampoo'
        }),
        new Product({
            imagePath:'https://i.linio.com/p/4028fa6adcf8372b8f28e77b15dd6dfd-product.jpg',
            title:'Set de Belleza Gama Bloom Planchita + Secador Eleganza',
            description:'Implementa tu belleza y al mismo tiempo realizando un cariño y cuidado con este Set de belleza Gama Bloom Planchita + Secador Eleganza. Perteneciente de la línia Elegance, cuenta con materiales de alta calidad, por lo que su efectividad y resistencia son precisos.' ,
            price:4500,
            category:'Secador'
            }),
            new Product({
                imagePath:'https://i.linio.com/p/2bcd5ca17815da01b462d8a85b2a9bcb-product.jpg',
                title:'Gama Rizador Pelo Ceramic 19',
                description:'Gama Rizador Pelo Ceramic 19 Mm Onduladora Rulos Buclera Cable giratorio profesional. Permite realizar rizos y ondas perfectas y duraderas.' ,
                price:2500,
                category:'Rizadpres'
                }),
                new Product({
                    imagePath:'https://i.linio.com/p/fa324a86106f0bdcfe72768c4d8c310c-product.jpg',
                    title:'Shampoo herbal essence coconut',
                    description:'Todos los tipos de cabello pueden mantenerse sanos y brillantes siempre y cuando le demos el cuidado y tratamiento que este requiere, además de que se utilicen los productos adecuados para la alimentación e hidratación del mismo. ' ,
                    price:450,
                    category:'Shampoo'
                    }),
];
var done=0;

for( var i=0; i< products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
    
}


function exit(){
   mongoose.disconnect(); 
}
