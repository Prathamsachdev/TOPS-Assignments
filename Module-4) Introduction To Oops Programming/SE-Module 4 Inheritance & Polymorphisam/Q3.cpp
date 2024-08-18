#include<iostream>
using namespace std;
class teacher{
	protected:
		int salary;
		string t_name;
		int t_age;
		char choice_t;
		public:
		void teach_get(){
			cout<<"-------------Teacher-------------\n";
				cout<<"Enter the name of Teacher: ";
				cin>>t_name;
				
				cout<<"Enter age of Teacher: ";
				cin>>t_age;
				
				cout<<"Enter salary of teacher: ";
				cin>>salary;
		}
		
		void teach(){
			
				cout<<"\n-----------------Update Time---------------------\n";
				cout<<"\nCan u change the name of teacher(y/n): ";
				cin>>choice_t;
				
				if(choice_t == 'y'){
				cout<<"\nEnter update name of teacher: ";
				cin>>t_name;
				};
				
				cout<<"\nCan u change the age of teacher(y/n): ";
				cin>>choice_t;
				
				if(choice_t == 'y'){
				cout<<"\nEnter update age of teacher: ";
				cin>>t_age;
				};
				
				cout<<"\nCan u change the salary of teacher(y/n): ";
				cin>>choice_t;
				
				if(choice_t == 'y'){
				cout<<"\nEnter update salary of teacher: ";
				cin>>salary;
				};
				
				cout<<"\n---------teacher updates values------------\n\n";
				cout<<"Teacher name is: "<<t_name<<endl;
				cout<<"Teacher Age is: "<<t_age<<endl;
				cout<<"Teacher Salary is: "<<salary<<endl;
			}
};

class student{
	protected:
		float percentage;
		char s_choice;
		
		public:
			void pr(){
				
				cout<<"Enter percentage of student: ";
				cin>>percentage;
			}
			
			void c_pr(){
				cout<<"---------student percentage update...------------\n";
				cout<<"\nCan u change the percentage of student(y/n):";
				cin>>s_choice;
				
				if(s_choice == 'y'){
				cout<<"\nEnter update percentage of student: ";
				cin>>percentage;
				};
			}
};

class person:public teacher,public student{
	protected:
		string name;
		int age;
		char choice;
	
		
		public:
			void get(){
				cout<<"\n\n-------------Student -------------\n\n";
				cout<<"\nEnter the name of student: ";
				cin>>name;
				
				cout<<"Enter age of student: ";
				cin>>age;
			}
			
			void display(){
				cout<<"\n\n-------------ouput-------------\n\n";
				cout<<"The Teacher name is: "<<t_name<<endl;
				cout<<"The student name is: "<<name<<endl;
				cout<<"The Teacher age is: "<<t_age<<endl;
				cout<<"The student age is: "<<age<<endl;
				cout<<"The percentage of student is: "<<percentage<<endl;
				cout<<"The salary of teacher is: "<<salary<<endl;
			}
			
			void s_change(){
				
				cout<<"\n\n-------------Student update-------------\n";
				cout<<"\nCan u change the name of student(y/n): ";
				cin>>choice;
				
				if(choice == 'y'){
				cout<<"\nEnter update name of student: ";
				cin>>name;
				};
				
				cout<<"\nCan u change the age of student(y/n): ";
				cin>>choice;
				
				if(choice == 'y'){
				cout<<"\nEnter update age of teacher: ";
				cin>>age;
				
				cout<<"\n-----------Student updated Sucessfully...----------------\n";
				cout<<"Student name is: "<<name<<endl;
				cout<<"Student age is: "<<age<<endl;
				};
			}
			
			
			
};

int main(){
	person obj;
	
	obj.teach_get();
	obj.get();
	obj.pr();
	obj.display();
	obj.teach();
	obj.s_change();
	obj.c_pr();
	obj.display();
}
