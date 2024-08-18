#include<iostream>
using namespace std;	
class a{
	protected:
	string name;
	public:
		
		a(){
			
		};
};

class b:public a{
	protected:
	int age;
		public:
			b(){
				
			};
};

class c:public b{
	
	public:
		c(){
		
		cout<<"Enter Your name: ";
		cin>>name;
		
		cout<<"Enter your age: ";
		cin>>age;
		
		cout<<"Your Name is:"<<name<<endl;
		
		cout<<"Your age is:"<<age;
		};
};

int main(){
	c obj;
}
