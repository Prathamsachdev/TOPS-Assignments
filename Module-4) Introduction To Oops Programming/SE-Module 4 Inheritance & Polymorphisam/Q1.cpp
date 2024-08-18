#include<iostream>
using namespace std;
class cricketer{
	
protected:		
	int total_runs;
	float avg;
	int perfomance;
	int total_bowl_play;
	
};

class batsman:public cricketer{
	protected:
	string player;
	
	public:
	void get(){
		cout<<"Enter The player name: ";
		cin>>player;
		
		cout<<"Enter the total runs: ";
		cin>>total_runs;
		
		cout<<"Enter the bowl play by "<<player<<":" ;
		cin>>total_bowl_play;

		cout<<"Enter the Best perfomance: ";
		cin>>perfomance;
	};
	
	void calculation(){
		avg = float(total_runs)/float(total_bowl_play);
	};
	
	void print(){
		cout<<"\n\n----------Output----------\n"<<endl;
		cout<<"The player name was: "<<player<<endl;
		cout<<"Total runs of player: "<<total_runs<<endl;
		cout<<"total bowl played by player was: "<<total_bowl_play<<endl;
		cout<<"best perfomance of run is: "<<perfomance<<endl;
		cout<<"Average runs of player: "<<avg<<endl;
	}
};

int main(){
	batsman cricket;
	
	cricket.get();
	cricket.calculation();
	cricket.print();
}
