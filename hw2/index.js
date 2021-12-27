function NamedOne (firstName, lastName) {

    const res = {

        firstName: firstName,
        lastName: lastName,

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        set fullName(val) {
            let nameArr = val.split(' ');

            if (nameArr.length !== 2) {
                return (console.log(`"${val}" isn't correct name`));
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