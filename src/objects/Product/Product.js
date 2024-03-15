import React from 'react';

class Product {

    constructor (type, id, picture, companyName, model, price) {
        this.type = type;
        this.id = id;
        this.picture = picture;
        this.companyName = companyName;
        this.model = model;
        this.price = price;
    }

    getId() {
        return this.id;
    }

    getType () { 
        return this.type;
    }

    getPicture() {
        return this.picture;
    }
    
    getCompanyName() {
        return this.companyName;
    }

    getModel() {
        return this.model;
    }

    getPrice() {
        return this.price;
    }
}  

export default Product;