#include<iostream>
using namespace std;
class calc{
	int n1,n2,res;
	
	public:
		void result(){
			int area,breadth;
			
			cout<<"Enter value of area for rectangle: ";
			cin>>area;
			
			cout<<"Enter value of breadth for rectangle: ";
			cin>>breadth;
			
			n1=area;
			n2 = breadth;
			
			res = n1*n2;
			
			cout<<"The area of Rectangle is: "<<res;
		};
		
		void result(int area,int breadth){
			
			n1 = area;
			n2 = breadth;
			
			res = 0.5*n1*n2;
			cout<<"The area of Triangle is: "<<res;
		};
		
		void result(double area){
			
			float pie = 3.14;
			n1 = area;
			n2 = pie;
			
			res = pie*n1*n1;
			
			cout<<"The area of circle is: "<<res;
		}
};
int main(){
	int choice,n1,n2;
	calc obj;
	
	cout<<"\n--------------choice-----------\n";
	cout<<"\n1. Rectangle \n2. Triangle \n3. Circle \n\n";
	cout<<"Enter Your choice: ";
	cin>>choice;
	
	
	switch(choice){
		case 1:
			obj.result();
			break;
		case 2:
			cout<<"Enter value of area for Triangle: ";
			cin>>n1;
			
			cout<<"Enter value of breadth for Triangle: ";
			cin>>n2;
			obj.result(n1,n2);
			break;
		case 3:
			cout<<"Enter value of radius for circle: ";
			cin>>n1;
			
			obj.result(n1);
			break;
		default:
			cout<<"Invalid Choice";
			
	}
}
