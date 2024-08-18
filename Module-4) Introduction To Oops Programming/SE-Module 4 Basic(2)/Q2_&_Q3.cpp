//Define a class to represent a bank account. Include the following members:

// Data Member:

//-Name of the depositor
//-Account Number
//-Type of Account
//-Balance amount in the account

//Member Functions

//-To assign values
//-To deposited an amount
//-To withdraw an amount after checking balance
//-To display name and balance

#include<iostream>
using namespace std;
class bankdtl{

	string name;
	double account;
	string actype;
	float balance,value;
	
	public:
	
	void get(){
		
	
		
		cout<<"Enter Your name: ";
		cin>>name;
		
		cout<<"Enter Your Account Number: ";
		cin>>account;
		
		cout<<"Enter Your Account Type: ";
		cin>>actype;
	
		cout<<"Enter Your Balance On Account: ";
		cin>>balance;
		
		cout<<"--------Bank Account Details-------------------\n";
		cout<<"\nAccount Owner is: "<<name;
		cout<<"\nAccount Number is: "<<account;
		cout<<"\nAccount Type is: "<<actype;
		cout<<"\nAccount balance is: "<<balance;
	}
	
	void deposit(){
		
		cout<<"\n--------Your choice was Deposit Amount-------------------\n";
		cout<<"\nEnter Your deposit value: ";
		cin>>value;
		
		balance += value;
		
		cout<<"deposit Succesfully.......";
		cout<<endl<<name<<" Now Your Balance Was: "<<balance;
	}
	
	void withdraw(){
		
		cout<<"\n--------Your choice was Withdraw Amount-------------------\n";
		cout<<"\nEnter Your Withdraw value: ";
		cin>>value;
		
		balance -= value;
		
		if(balance < value ){
			cout<<"Aapke account mai itne paise nahi hai !!";
		}else{
			cout<<"Withdraw Succesfully.......";
			cout<<endl<<name<<" Now Your Balance Was: "<<balance;
		}
		
		
		
				
	}	
};

int main(){
	
	bankdtl bank;
	
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
