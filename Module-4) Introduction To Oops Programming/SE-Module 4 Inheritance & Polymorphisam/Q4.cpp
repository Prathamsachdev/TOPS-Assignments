#include<iostream>
using namespace std;

class subject{
	protected:
		int eng,hindi,guj,sst,sci,maths;
		public:
			subject(){
				cout<<"\n---------------Marksheet----------------\n\n";
				cout<<"Enter Your english marks: ";
				cin>>eng;
				
				cout<<"Enter Your hindi marks: ";
				cin>>hindi;
				
				cout<<"Enter Your guj marks: ";
				cin>>guj;
				
				cout<<"Enter Your sst marks: ";
				cin>>sst;
				
				cout<<"Enter Your sci marks: ";
				cin>>sci;
				
				cout<<"Enter Your maths marks: ";
				cin>>maths;
			}
};

class total{
	protected:
		int total;
};

class result:public subject,total{
	protected:
		int result;
		float avg;
		
		public:
			
		void s_total(){
			total = eng+hindi+guj+sst+sci+maths;
		}
		
		void average(){
			avg = float(total)*100/600;
		}
		
		void print(){
			cout<<"Student Result total is: "<<total<<endl;
			cout<<"Student Percentage is: "<<avg;
		}
		
		
};

int main(){
	
	result obj;
	
	obj.s_total();
	obj.average();
	obj.print();
}


