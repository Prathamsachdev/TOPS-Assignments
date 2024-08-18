//template using swap the value

#include<iostream>
using namespace std;

template <typename k>
void swap(k x,k y){
	int z;
	
	cout<<"Enter First Number: ";
	cin>>x;
	
	cout<<"Enter second number: ";
	cin>>y;
	
	z=x;
	x=y;
	y=z;
	
	cout<<"After The swap"<<endl<<"x:"<<x<<endl<<"y:"<<y<<endl;
};

int main(){
	
	swap<int>(6,7);
	
	return 0;
}


