function NamedOne (firstName, lastName) {

    // this.lastName = lastName;
    // this.fullName = `${this.firstName} ${this.lastName}`;

    let res = {

        firstName: lastName,
        lastName: lastName,

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        set fullName(val) {
            let nameArr = val.split(' ');

            if (nameArr.length !== 2) {
                return (console.log(`Your name isn't correct`));
            } else {
                this.firstName = nameArr[0];
                this.lastName = nameArr[1];
            }
        }
    }
    return res;
}

let namedOne = new NamedOne ("Naomi", "Wang");

console.log('fullName: ', namedOne.fullName);

namedOne.firstName = 'Matvey';
namedOne.lastName = 'Prupas';

console.log('fullName: ', namedOne.fullName);

namedOne.fullName = 'Avgust Peterson';

console.log('firstName: ', namedOne.firstName);
console.log('lastName: ', namedOne.lastName);

namedOne.fullName = 'AvgustPeterson';
namedOne.fullName = 'PleeeaseSetThisName!!!';