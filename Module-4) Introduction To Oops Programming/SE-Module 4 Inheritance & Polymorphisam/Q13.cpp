#include <iostream>
using namespace std;

class max_num {
private:
    int num1, num2;

public:
    max_num(int a, int b) {
        num1 = a;
        num2 = b;
    }

    friend int findMax(const max_num& obj);
};

int findMax(const max_num& obj) {
    return (obj.num1 > obj.num2) ? obj.num1 : obj.num2;
}

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;

    max_num obj(a, b);
    int maxNum = findMax(obj);

    cout << "The maximum number is: " << maxNum << endl;

    return 0;
}
