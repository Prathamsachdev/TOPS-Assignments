//Write a program to concatenate the two strings using Operator Overloading

#include <iostream>
#include <string>

using namespace std;

class StringConcatenator {
private:
    string str1;
    string str2;

public:
    StringConcatenator(string s1, string s2) {
        str1 = s1;
        str2 = s2;
    }

    StringConcatenator operator+(const StringConcatenator& other) {
        return StringConcatenator(str1 + other.str1, str2 + other.str2);
    }

    friend ostream& operator<<(ostream& os, const StringConcatenator& sc);
};

ostream& operator<<(ostream& os, const StringConcatenator& sc) {
    os << "Concatenated strings: " << sc.str1 << " "<< sc.str2;
    return os;
}

int main() {
    string input1, input2;
    cout << "Enter the first string: ";
    getline(cin, input1);
    cout << "Enter the second string: ";
    getline(cin, input2);

    StringConcatenator sc(input1, input2);

    cout << sc << endl;

    return 0;
}
