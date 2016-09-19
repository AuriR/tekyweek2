var person = {
    firstName : "Auri",
    lastName : "Rahimzadeh",
    phone : "317.490.4321",
    fullname : function() {
        return this.firstName + " " + this.lastName;
    }
};

function printDetails (p) {
    console.log(p.email);
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.fullname());
} 

printDetails(person);
