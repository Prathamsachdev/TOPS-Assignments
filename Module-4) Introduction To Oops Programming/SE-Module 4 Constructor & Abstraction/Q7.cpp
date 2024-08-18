#include<iostream>
using namespace std;
class Data
{
	int date;
	string month;
	int year;
	
	public:
		
	Data(){
		cout<<"Enter date: ";
		cin>>date;
		
		if(date > 31)
		{
			cout<<"Invalid Date";
		}
		else
		{
			cout<<"Enter month: ";
			cin>>month;
		}
			
			
			if(month == ("feb") && (date>28))
			{
				cout<<"date is not valid";
			}
			else
			{
				cout<<"\nEnter Year: ";
		     	cin>>year;
		     	cout<<date<<"-"<<month<<"-"<<year;
			}
			
		
			
		};
		
		
		};
		
		
		
		
	

int main(){
		Data obj;
}
