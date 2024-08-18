use TOPS_assignment;

-- 11.Create table given below: Salesperson and Customer

create table Salesperson(
    SNo int primary key ,
    SNAME text,
    CITY text,
    COMM float
    
);

insert into Salesperson values 
(1001,"Peel","London",.12),
(1002,"Serres","San Jose",.13),
(1004,"Motika","London",.11),
(1007,"Rafkin","Barcelona",.15),
(1003,"Axelrod","New York",.1);

select * from Salesperson;


create table Customer(
    CNM int primary key ,
    CNAME text,
    CITY text,
    RATING int,
    SNo int
);

insert into Customer values 
(201,"Hofman","London",100,1001),
(202,"Giovanne","Roe",200,1003),
(203,"Liu","San Jose",300,1002),
(204,"Grass","Barcelona",100,1002),
(206,"Clemens","London",300,1007),
(207,"Pereira","Roe",100,1004);



-- 12.Retrieve the below data from above table

select * from Customer;

-- 13.All orders for more than $1000.

select * from Customer
where SNo>1000;

-- 14.Names and cities of all salespeople in London with commission above 0.12

select * from Salesperson
where COMM >= .12  and CITY = "London"; 

-- 15.All salespeople either in Barcelona or in London

select * from Salesperson
where CITY="Barcelona" or CITY="London";

-- 16.All salespeople with commission between 0.10 and 0.12. (Boundary
-- valuesshould be excluded).

select * from Salesperson
where COMM between 0.10 and 0.12;

-- 17.All customers excluding those with rating <= 100 unless they are located
-- inRome

select * from Customer 
where RATING<=100 and CITY="Roe";









