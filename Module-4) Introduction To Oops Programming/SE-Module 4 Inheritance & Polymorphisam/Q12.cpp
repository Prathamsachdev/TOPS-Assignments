#include<iostream>
using namespace std;

class swap_num{
	int a,b;
	
	friend void swap(swap_num);	
};

void swap(swap_num obj1)
{
		cout<<"Enter value of a: ";
		cin>>obj1.a;
		
		cout<<"Enter value of b: ";
		cin>>obj1.b;
		
		obj1.a=obj1.a+obj1.b;
		obj1.b=obj1.a-obj1.b;
		obj1.a=obj1.a-obj1.b;
		
		cout<<"After the swap:"<<endl<<"a:"<<obj1.a<<endl<<"b:"<<obj1.b;
}
	
int main(){
	
	swap_num obj;
	swap(obj);
	
	return 0;
}
