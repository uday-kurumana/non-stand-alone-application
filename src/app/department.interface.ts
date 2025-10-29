interface IDepartment {
  deptId: number;
  departmentName: string;
  subDeptId: number;
  subDepartmentName: string;
  departmentIncharge: string;
  subDepartmentIncharge: string;
  employees?: IEmployeeDetails[];
}

interface IEmployeeDetails { 
employeeId : string | number;
employeename : string;
deptId : number;
subDeptId : number;
designation : string;
managerID : string | number;
salary : number;
fullTime : boolean;
}
