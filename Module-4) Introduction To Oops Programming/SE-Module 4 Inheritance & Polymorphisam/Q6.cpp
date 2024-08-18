#include<iostream>
using namespace std;
class a1{
	string name;
	
	public:
			a1(){
				cout<<"Enter Your Name: ";
				cin>>name;
			};
};

class b1:public a1{
	protected:
		int age;
		public:
			b1(){
				cout<<"Enter Your Age: ";
				cin>>age;
			}
};

int main(){
	b1 obj;
	
}
