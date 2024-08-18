//Write a C++ program to create a class called Triangle that has privatemember variables for the lengths of its three sides. Implement member functions to determine if the triangle is equilateral, isosceles, or scalene

#include<iostream>

using namespace std;

class triangle
{
    private:
        int side1, side2, side3;

    public:
        void get()
        {
            cout << "Enter length of side 1: ";
            cin >> side1;
            cout << "Enter length of side 2: ";
            cin >> side2;
            cout << "Enter length of side 3: ";
            cin >> side3;
        }

        void display()
        {
            if (side1 == side2 && side2 == side3)
            {
                cout << "The triangle is equilateral." << endl;
            }
            else if (side1 == side2 || side2 == side3 || side1 == side3)
            {
                cout << "The triangle is isosceles." << endl;
            }
            else
            {
                cout << "The triangle is scalene." << endl;
            }
        }
};

int main()
{
    triangle obj;

    obj.get();
    obj.display();

    return 0;
}

