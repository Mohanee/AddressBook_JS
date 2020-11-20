//Welcome to address book program

//UC1 Create Contact Object
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

let contact1 = new Contact('Mohanee', 'Dammu','Avenue-A','Bhilai','CG','490006','9674879893','monee99@gmail.com');
let contact2 = new Contact('Shreya', 'Dammu','Topsia Hall','Ranchi','JK','498766','8765423487','somu002@gmail.com');
//console.log(contact1); 

//UC2  Validate Entries
let validate = 
    {
        firstName : fName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(fName),
        lastName : lName => new RegExp('^[A-Z][A-Za-z]{2,}$').test(lName),
        city : city => new RegExp('^[A-Za-z]{4,}$').test(city),
        state : state => new RegExp('^[A-Za-z]{2,}$').test(state),
        zip : zip => new RegExp('^[0-9]{6}$').test(zip),
        address : address => new RegExp('^[A-Za-z0-9]+[- A-Za-z0-9]*$').test(address),
        phone : phone => new RegExp('^[7-9][1-9]{9}$').test(phone),
        email : email => new RegExp('^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*[@][A-Za-z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3})?$').test(email),
        validateAll : function(contact)
        {
            for(let key in contact)
                if(key != 'address' && !validate[key](contact[key]))
                    throw key + ' is not valid';
        }
    };
validate.validateAll(contact1); 

//UC3 Add AddressBook Array to store Multiple Con tacts
let AddressBookArray = [contact1];
AddressBookArray.push(contact2);
console.log(AddressBookArray); 

//UC4 Find Contact in AddressBookArray with firstName
let firstNameToFind= 'Mohanee';
let contact = AddressBookArray.find(person => person.firstName==firstNameToFind);
if(contact!=undefined)
{
    console.log("Following are the details of Contact with First Name : "+firstNameToFind);
    console.log(contact);
}
else{
    console.log("No Contact with First Name "+firstNameToFind);
}