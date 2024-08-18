use TOPS_assignment;

create table Products(
    PRO_ID int primary key,
    PRO_NAME text,
    PRO_PRICE float,
    PRO_COM int
    
);

insert into Products values
(101,"Mother Board",3200.00,15),
(102,"Key Board",450.00,16),
(103,"ZIP drive",250.00,14),
(104,"Speaker",550.00,16),
(105,"Monitor",5000.00,11),
(106,"DVD drive",900.00,12),
(107,"CD drive",800.00,12),
(108,"Printer",2600.00,13),
(109,"Refill cartridge",350.00,13),
(110,"Mouse",250.00,12);

-- 20. From the following table, write a SQL query to select a range of
-- products whose price is in the range Rs.200 to Rs.600. Begin and end
-- values are included. Return pro_id, pro_name, pro_price, and pro_com.
-- select * from Products

select * from Products 
where PRO_PRICE  between 200 and 600;

-- 21. From the following table, write a SQL query to calculate the average
-- price for a manufacturer code of 16. Return avg.

select avg(PRO_PRICE) from Products
where PRO_COM = 16; 

-- 22. From the following table, write a SQL query to display the pro_name
-- as 'Item Name' and pro_priceas 'Price in Rs.'

select PRO_NAME,PRO_PRICE from Products
where PRO_PRICE >= 250;

select PRO_NAME,PRO_PRICE from Products
order by PRO_PRICE desc ;

select PRO_NAME,PRO_PRICE from Products
order by PRO_NAME asc;

-- 24. From the following table, write a SQL query to calculate average price of 
-- the items for each company. Return average price and companycode.

select avg(PRO_PRICE) as avrageprice ,PRO_COM as comapanycode  from Products 
group by PRO_COM;

select * from products;


