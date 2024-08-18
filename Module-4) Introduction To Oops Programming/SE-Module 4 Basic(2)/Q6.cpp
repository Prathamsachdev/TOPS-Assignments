
#include<iostream>

using namespace std;

class person
{
	string name;
	int age;
	string country;	
	
	public:
		
	void input()
	{
		cout<<"Enter your name : ";
		cin>>name;
		
		cout<<"Enter your age : ";
		cin>>age;
		
		cout<<"Enter your country : ";
		cin>>country;
	}
	
	void output()
	{
		cout<<"\nYour name is : "<<name<<endl;
		cout<<"Your age is : "<<age<<endl;
		cout<<"Your country is : "<<country<<endl;
	}
};

int main()
{
	person obj;
	
	obj.input();
	obj.output();
}
