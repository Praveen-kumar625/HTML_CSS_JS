let obj={
    id:1,
    firstname:"praveen",
    lastname:"Jayswal",
    gender:"male"
    fullname:function(){
        console.log(this.firstname+ " " + this.lastname);
    }

}
let user={
    id:1,
    firstname:"Gaurav",
    lastname:"Jayswal",
    gender:"male"
    

}

obj.fullname.call(user);
