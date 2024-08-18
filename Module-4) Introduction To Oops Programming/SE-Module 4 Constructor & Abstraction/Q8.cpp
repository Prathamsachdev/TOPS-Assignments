//Write a C++ program to implement a class called Student that has private member variables for name, class, roll number, and marks. Include member functions to calculate the grade based on the marks and display the student's information. Accept address from each student implement
using namespace std;


#include <iostream>

using namespace std;

class Address {
    string street;
    string city;
    string state;
    string pin;

public:
    Address() {
        cout << "Enter street: ";
        getline(cin, street);
        cout << "Enter city: ";
        getline(cin, city);
        cout << "Enter state: ";
        getline(cin, state);
        cout << "Enter pin code: ";
        getline(cin, pin);
    }

    void display(){
        cout << "Address: " << street << ", " << city << ", " << state << ", " << pin << endl;
    }
};

class Student 
{
    string name;
    string studentClass;
    int rollNumber;
    float marks;
    Address address;

    char calculateGrade() {
        if (marks >= 90)
            return 'A';
        else if (marks >= 80)
            return 'B';
        else if (marks >= 70)
            return 'C';
        else if (marks >= 60)
            return 'D';
        else
            return 'F';
    }

public:
    Student() 
	{
        cout << "Enter name: ";
        cin >> name;
        
        cout << "Enter class: ";
        cin >> studentClass;
        
        cout << "Enter roll number: ";
        cin >> rollNumber;
        
        cout << "Enter marks: ";
        cin >> marks;
        
    }

    void display()
	{
        cout << "\nName: " << name << endl;
        cout << "Class: " << studentClass << endl;
        cout << "Roll Number: " << rollNumber << endl;
        cout << "Marks: " << marks << endl;
        cout << "Grade: " << calculateGrade() << endl;
        address.display();
    }
};

int main() {
    Student student;
    student.display();
    return 0;
}

