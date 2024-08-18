//Write a C++ program to create a class called Rectangle that has private member variables for length and width. Implement member functions to calculate the rectangle's area and perimeter

#include<iostream>

using namespace std;

float width;
float length;

class calc
{
	float rect_area;
	float rect_perimeter;
	
	public:
		
	void area()
	{
		rect_area = width*length;
		cout<<"Ractangle area is : "<<rect_area<<endl;
	}
	
	void perimeter()
	{
		rect_perimeter = 2*length + 2*width;
		cout<<"Ractangle perimeter is : "<<rect_perimeter<<endl;
	}
};

int main(){
	
	calc obj;
	
	cout<<"Enter length of ractangle : ";
	cin>>length;
	
	cout<<"Enter width of ranctangle : ";
	cin>>width;
	
	obj.area();
	obj.perimeter();
}
