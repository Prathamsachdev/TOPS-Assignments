// Write a C++ program to implement a class called Bank Account that has private member variables for account number and balance. Include member functions to deposit and withdraw money from the account

#include<iostream>

using namespace std;

class bank_account
{
	float acc_num;
	float balance , value;
	
	public:
	
	void get()
	{
		cout<<"Enter Your Account Number: ";
		cin>>acc_num;
	
		cout<<"Enter Your Balance On Account: ";
		cin>>balance;
		
		cout<<"--------Bank Account Details-------------------\n";
		cout<<"\nAccount Number is: "<<acc_num;
		cout<<"\nAccount balance is: "<<balance;
	}
	
	void deposit(){
		
		cout<<"\n--------Your choice was Deposit Amount-------------------\n";
		cout<<"\nEnter Your deposit value: ";
		cin>>value;
		
		balance += value;
		
		cout<<"deposit Succesfully.......";
		cout<<" Now Your Balance Was: "<<balance;
	}
	
	void withdraw(){
		
		cout<<"\n--------Your choice was Withdraw Amount-------------------\n";
		cout<<"\nEnter Your Withdraw value: ";
		cin>>value;
		
		balance -= value;
		
		if(balance < value ){
			cout<<"Aapke pass itne paise nahi hai jitne aap withdraw karna chahte hai !!";
		}else{
			cout<<"Withdraw Succesfully.......\n";
			cout<<" Now Your Balance Was: "<<balance;
		}
		
		
		
				
	}	
};

int main(){
	
	bank_account bank;
	
	int choice;
	
		bank.get();									
		cout<<"\n\n 1.deposit value";
		cout<<"\n 2.withdraw value\n";
		
		cout<<"\nEnter Your Choice: ";
		cin>>choice;
		switch(choice){
		case 1:bank.deposit();break;
		case 2:bank.withdraw();
		}
	
}
