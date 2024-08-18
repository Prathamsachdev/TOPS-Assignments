//Write a program of Addition, Subtraction, Division, Multiplication using constructor.

#include<iostream>

using namespace std;

class calculator
{
	int n1;
	int n2;
	
	public:
		void get()
		{
			cout<<"Enter number 1 value : ";
			cin>>n1;
			
			cout<<"Enter number 2 value : ";
			cin>>n2;
		}
		void add()
		{
			int add;
			add = n1 + n2;
			cout<<"Addition is : "<<add;
		}
		void sub()
		{
			int sub;
			sub = n1 - n2;
			cout<<"Subtraction is : "<<sub;
		}
		void mul()
		{
			int mul;
			mul = n1 * n2;
			cout<<"Multiplication is : "<<mul;
		}
		void div()
		{
			int div;
			div = n1 / n2;
			cout<<"Division is : "<<div;
		}
};

int main()
{
	calculator obj;
	
	char choice;
	
	cout<<"-------- Select choice --------"<<endl;
	cout<<"For Addition : + "<<endl;
	cout<<"For Subtraction : - "<<endl;
	cout<<"For Division : / "<<endl;
	cout<<"For Multiplication : * "<<endl;
	
	cout<<"\nEnter choice : ";
	cin>>choice;
	
	switch(choice)
	{
		case '+' :
		{
			obj.get();
			obj.add();
			break;
		}
		case '-' :
		{
			obj.get();
			obj.sub();
			break;
		}
		case '*' :
		{
			obj.get();
			obj.mul();
			break;
		}
		case '/' :
		{
			obj.get();
			obj.div();
			break;
		}
	}
	
	return 0;
}
