import React from 'react';

class Laptop {
    constructor (picture, companyName, model, price) {
        this.picture = picture;
        this.companyName = companyName;
        this.model = model;
        this.price = price;
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