//Welcome to address book program

//UC1 : Create Contact

function Contact(fName,lName,address,city,state,zip,phone,email){
    this.firstName = fName;
    this.lastName = lName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip  = zip;
    this.phone = phone;
    this.email = email;
}

let contact = new Contact('Mohanee', 'Dammu','Avenue-A','Bhilai','CG','490006','9674879893','monee99@gmail.com');

console.log(contact); 