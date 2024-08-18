use TOPS_assignment;
-- 2.Create table given below: Employee and IncentiveTable

create table Employee(
     Employee_id int primary key auto_increment, 
     First_name text,
     Last_name text,
     Salary int,
     Joining_date varchar(100),
     Department text
     
);

select * from Employee;
insert into Employee values
(1,"John","Abraham","1000000","1-Jan-13 12.00.00 AM","Banking"),
(2,"Michel","Clarke","800000","1-Jan-13 12.00.00 AM","Insurance"),
(3,"Roy","Thomas","700000","1-feb-13 12.00.00 AM","Banking"),
(4,"Tom","Jose","600000","1-feb-13 12.00.00 AM","Insurance"),
(5,"Jerry","Pinto","650000","1-frb-13 12.00.00 AM","Insurance"),
(6,"Philip","Mathew","750000","1-Jan-13 12.00.00 AM","Services"),
(7,"TestName1","123","650000","1-Jan-13 12.00.00 AM","Services"),
(8,"TestName2","Lname%","600000","1-feb-13 12.00.00 AM","Insurance");

drop table employee;
drop table Incentive;

select * from Employee;
create table Incentive(
    Employee_ref_id int,
    Incentive_date varchar(100),
    Incentive_amount varchar(10),
     foreign key Incentive(Employee_ref_id) references Employee(Employee_id)
);

select * from Incentive;
insert into Incentive values
(1,"01-FEB-13","5000"),
(2,"01-FEB-13","3000"),
(3,"01-FEB-13","4000"),
(1,"01-Jan-13","4500"),
(2,"01-FEB-13","3500");

-- 3.Get First_Name from employee table using Tom name “Employee Name”.

select first_name from Employee
where first_name = "Tom";

-- 4.Get FIRST_NAME, Joining Date, and Salary from employee table.

select first_name,Joining_date,Salary from Employee;

-- 5.Get all employee details from the employee table order by First_Name
-- Ascending and Salary descending?

select * from Employee
order by first_name asc;

select * from Employee
order by Salary desc;

-- 6.Get employee details from employee table whose first name contains ‘J’

select * from Employee
where first_name like '%j%';

-- 7.Get department wise maximum salary from employee table order by
-- 8. salaryascending?

select Department,Salary from Employee
Order by Salary desc; 

-- 9.Select first_name, incentive amount from employee and incentives table
-- forthose employees who have incentives and incentive amount greater than
-- 3000

select Employee.first_name,Incentive.Incentive_amount from Employee inner join Incentive on Employee_id=Employee_ref_id
where Incentive_amount > 3000;

-- 10.Create After Insert trigger on Employee table which insert records in
-- viewtable

CREATE TABLE viewtable (
    Employee_id INT,
    First_name TEXT,
    Last_name TEXT,
    Salary INT,
    Joining_date VARCHAR(100),
    Department TEXT
);


DELIMITER //

CREATE TRIGGER trg_AfterInsert_Employee
AFTER INSERT ON Employee
FOR EACH ROW
BEGIN
    INSERT INTO viewtable (Employee_id, First_name, Last_name, Salary, Joining_date, Department)
    VALUES (NEW.Employee_id, NEW.First_name, NEW.Last_name, NEW.Salary, NEW.Joining_date, NEW.Department);
END; //

DELIMITER ;

-- Insert a new record into Employee.
INSERT INTO Employee (First_name, Last_name, Salary, Joining_date, Department)
VALUES ('John', 'Doe', 60000, '2023-01-01', 'IT');

-- Check the viewtable.
SELECT * FROM viewtable;







