import React from 'react';

class Laptop {

    static type = "laptop";

    constructor (picture, companyName, model, price) {
        this.picture = picture;
        this.companyName = companyName;
        this.model = model;
        this.price = price;
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

export default Laptop;