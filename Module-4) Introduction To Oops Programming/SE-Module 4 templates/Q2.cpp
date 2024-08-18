#include <iostream>
using namespace std;

template <typename T>
void sortArray(T arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

template <typename T>
void printArray(T arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

template <typename T>
void getArray(T arr[], int size) {
    cout << "Enter " << size << " elements of the array: ";
    for (int i = 0; i < size; i++) {
        cin >> arr[i];
    }
}

int main() {
    int intArray[5];
    int intSize = sizeof(intArray) / sizeof(intArray[0]);

    getArray(intArray, intSize);

    cout << "Original integer array: ";
    printArray(intArray, intSize);

    sortArray(intArray, intSize);

    cout << "Sorted integer array: ";
    printArray(intArray, intSize);

    return 0;
}
