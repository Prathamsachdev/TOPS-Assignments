//Write a program to Mathematic operation like Addition, Subtraction,
//Multiplication, Division Of two number using different parameters and
//Function Overloading


#include<iostream>
using namespace std;
class calculator

{
	int n1,n2,res;
	double num1;
	public:
	void result()
	{
		cout<<"enter 2 numbers for addition";
		cin>>n1>>n2;
		res=n1+n2;
		cout<<"addition is "<<res;
	}
	void result(int no1,int no2)
	{
		n1=no1;
		n2=no2;
		res=n1-n2;
		cout<<"subtraction is "<<res;
	}
	void result(double no1,double no2)
	{
		n1=no1;
		n2=no2;
		res=n1*n2;
		cout<<"multiplication is "<<res;
	}
	void result(double no1,int no2)
	{
		
		n1=no1;
		n2=no2;
		res=n1/n2;
		cout<<"division is "<<res;
	}
	void result(int no1)
	
	{
		cout<<"enter 2 number for modulo";
		cin>>n2;
		n1=no1;
		res=n1%n2;
		cout<<"result is "<<res;
	}
};
int main()
{
	calculator obj;
	int choice;
	int n1,n2;
	double no1,no2;
	cout<<"1 for + 2 for - 3 for * 4 for / 5 for %";
	cin>>choice;
	switch(choice)
	{
		case 1:
			obj.result();
			break;
		case 2:
			cout<<"enter 2 values for subtraction";
			cin>>n1>>n2;
				obj.result(n1,n2);
				break;
		case 3:
				cout<<"enter 2 values for multiplication";
				cin>>no1>>no2;
				obj.result(no1,no2);
				break;
		case 4:
				cout<<"enter 1st number for division";
				cin>>no1;
				cout<<"enter 2nd number for division";
				cin>>n2;
				obj.result(no1,n2);
				break;
		case 5:
				cout<<"enter 1st number for modulo";
				cin>>n1;
				obj.result(n2);
				break;			
		default:
				cout<<"invalid ";		
	}
	
	return 0;
}
