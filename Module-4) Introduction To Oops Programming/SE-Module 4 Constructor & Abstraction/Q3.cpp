//. Write a C++ program to create a class called Car that has private member variables for company, model, and year. Implement member functions to get and set these variables.

#include<iostream>

using namespace std;

class car
{
	string car_name;
	string car_company;
	string car_model;
	string car_year;
	
	public:
		void get()
		{
			cout<<"Enter car name : ";
			cin >>car_name;
	        cout <<"Enter car company: ";
	        cin >>car_company;
	
	        cout <<"Enter car model: ";
	        cin >>car_model;
	
	        cout <<"Enter car manufecturing year: ";
	        cin >>car_year;
		}
		
		void display() 
		{
			cout << "\n--------- Car details ---------- "<<endl<<endl;
			cout << "Car name : " <<car_name<<endl;
	        cout << "Car Company: " << car_company << endl;
	        cout << "Car Model: " << car_model << endl;
	        cout << "Car Manufecturing Year: " << car_year << endl;
    	}
};

int main()
{
	car obj;
	
	obj.get();
	obj.display();
}
