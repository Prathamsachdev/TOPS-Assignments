create database TOPS_assignment;
use TOPS_assignment;

CREATE TABLE student (
    Rollno INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL,
    branch TEXT
);


use TOPS_assignment;

select * from student;
insert into student values
(1,"Jay","Computer Science"),
(2,"Suhani","Electronic and Com"),
(3,"Kriti","Electronic and Com");

select * from student
where name like 'j%';

create table Exam(
    Rollno INT ,
    S_code varchar(10) NOT NULL,
    Marks INT,
    P_code varchar(10) NOT NULL,
    foreign key Exam(Rollno) references student(Rollno)
);

insert into Exam values
(1,"CS11","50","CS"),
(1,"CS12","50","CS"),
(2,"EC101","66","EC"),
(2,"EC102","70","EC"),
(3,"EC101","45","EC"),
(3,"EC102","50","EC");

select * from student;
select * from Exam;