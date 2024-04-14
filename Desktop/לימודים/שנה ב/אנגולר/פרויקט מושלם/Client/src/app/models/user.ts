export enum JobField{
    TEACHING , TAXES, PROGRAMMING, KINDERGARDEN
}
export class user{
    id:Number
    jobField : JobField
    userName:string;
    password:string

    constructor(jobField:JobField,userName:string,password:string,id:Number) {
        this.id = id;
        this.userName = userName;
        this.jobField = jobField;
        this.password = password;
    }
}
