export class Person {
    name : string;
    age : number;
    dateNaiss : string
    email : string;
    
    adresse : {
        rue : string,
        cp : number,
        ville : string
    }

    constructor () {

    }

    calculAge() : number{
        return 11
    }
}

