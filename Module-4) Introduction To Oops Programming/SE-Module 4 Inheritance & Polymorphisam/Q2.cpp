#include<iostream>
using namespace std;
class ractangle{
	protected:
		float l,w;
		int calc;
};

class area:public ractangle{
	
	public:
		
		void get(){
			cout<<"Enter the length of ractangle: ";
			cin>>l;
			
			cout<<"Enter the width of ractangle: ";
			cin>>w;
		}
		
		void calculation(){
			calc = l*w;
			
			cout<<"The area of Rectangle is: "<<calc;
		}
	
};

int main(){
	area obj;
	
	obj.get();
	obj.calculation();
}
