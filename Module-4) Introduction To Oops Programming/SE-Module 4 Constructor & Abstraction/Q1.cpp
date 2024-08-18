#include<iostream>
using namespace std;

inline int multiplication(int mul,int multi){
	return mul*multi;
};

inline int cubic_values(int i,int cube){
		return i*i*i;
};

int main()
{
	int a,b;
	cout<<"Enter a: ";
	cin>>a;
	
	cout<<"Enter b: ";
	cin>>b;
	
	cout<<"The multiplication is: "<<multiplication(a,b)<<endl;
	cout<<"The cubic value is: "<<cubic_values(a,b);
		
}


