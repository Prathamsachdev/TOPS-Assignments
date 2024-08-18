//Write a Program of Two 1D Matrix Addition using Operator Overloading

#include <iostream>

using namespace std;

class Matrix {
private:
    int* data;
    int size;

public:
    // Constructor to initialize the matrix with given size
    Matrix(int s) : size(s) {
        data = new int[size];
    }

    // Copy constructor
    Matrix(const Matrix& other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; ++i) {
            data[i] = other.data[i];
        }
    }

    // Overload the assignment operator
    Matrix& operator=(const Matrix& other) {
        if (this != &other) {
            delete[] data;
            size = other.size;
            data = new int[size];
            for (int i = 0; i < size; ++i) {
                data[i] = other.data[i];
            }
        }
        return *this;
    }

    // Overload the + operator to add two matrices
    Matrix operator+(const Matrix& other) {
        Matrix result(size);
        for (int i = 0; i < size; ++i) {
            result.data[i] = this->data[i] + other.data[i];
        }
        return result;
    }

    // Function to input matrix elements
    void input() {
        for (int i = 0; i < size; ++i) {
            cout << "Enter element " << i + 1 << ": ";
            cin >> data[i];
        }
    }

    // Function to print matrix elements
    void print() const {
        for (int i = 0; i < size; ++i) {
            cout << data[i] << " ";
        }
        cout << endl;
    }

    // Destructor to release allocated memory
    ~Matrix() {
        delete[] data;
    }
};

int main() {
    int size;
    cout << "Enter the size of the matrices: ";
    cin >> size;

    Matrix mat1(size);
    Matrix mat2(size);

    cout << "Enter elements for the first matrix:" << endl;
    mat1.input();

    cout << "Enter elements for the second matrix:" << endl;
    mat2.input();

    Matrix result = mat1 + mat2;

    cout << "Resultant matrix after addition:" << endl;
    result.print();

    return 0;
}

