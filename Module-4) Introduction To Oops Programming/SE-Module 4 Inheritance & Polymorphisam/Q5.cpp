#include<iostream>
using namespace std;
class students{
	protected:
		int roll_no;
	public:
		
		void roll_stud(){
			cout<<"Enter Your Roll No : ";
			cin>>roll_no;
		}
};

class test:public students{
	protected:
		int sci,maths;
	public:
		void test_marks(){
			cout<<"Enter Your sci Marks : ";
			cin>>sci;
			
			cout<<"Enter Your maths Marks : ";
			cin>>maths;
		}
	
};

class result:public test{
	protected:
		int total;
	public:
		
		void calc(){
			total = sci+maths;
		}
		void result_mod(){
			cout<<"\nThe Total marks of test is: "<<total<<endl;
			cout<<"The Roll Number of student is: "<<roll_no<<endl;
		}
};

int main(){
	result main;
	
	main.roll_stud();
	main.test_marks();
	main.calc();
	main.result_mod();
}
