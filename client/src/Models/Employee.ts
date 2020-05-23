class Employee {
    
    name :string = '';
    id :string = '';
    email:string = '';
    phoneNumber:string = '';
    address:string = '';
    createDate:string = '';

    constructor(data: any) {
        Object.assign(this, data);
    }
}

export default Employee;