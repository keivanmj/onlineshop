import React from 'react';

class Phone {

    static type = "phone";

    constructor(picture, companyname, model, price) {
        this.picture = picture;
        this.companyname = companyname;
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
        return this.companyname;
    }

    getModel() {
        return this.model;
    }

    getPrice() {
        return this.price;
    }
}

export default Phone