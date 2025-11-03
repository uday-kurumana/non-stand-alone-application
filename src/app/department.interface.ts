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
employeeName : string;
deptId : number;
subDeptId : number;
designation : string;
managerId : string | number;
salary : number;
fullTime : boolean;
}
