import { JobField } from "./user";
export class job{
    jobId:Number;
    jobField : JobField;
    jobName:string;
    scopeOfHours:number;
    area:string;
    hybrid:boolean;
    requirements:string;

    constructor(jobId:Number,jobField:JobField,jobName:string,requirements:string,scopeOfHours:number,area:string,hybrid:boolean) {
        this.jobId = jobId;
        this.jobName = jobName;
        this.jobField = jobField;
        this.scopeOfHours = scopeOfHours;
        this.hybrid=hybrid;
        this.area=area;
        this.requirements=requirements;
    }
}
