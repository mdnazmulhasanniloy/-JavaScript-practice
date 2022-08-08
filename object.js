var Laptop = {
    BrandName: "HP Laptop" ,
    Ram :"4GB",
    SDD : "1TB",
    Price: 500,
};
var Mobile ={
    MordelName : "hpx28",
    Price : 700
};
//delet value in object

delete Laptop.Ram;


//Object Data revise

const finalResult = Object.assign(Laptop,Mobile);


console.log(finalResult);