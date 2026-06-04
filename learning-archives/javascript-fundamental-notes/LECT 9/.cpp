// #include <stdio.h>

// // Function to add two numbers
// double add(double num1, double num2) {
//     return num1 + num2;
// }

// // Function to subtract two numbers
// double subtract(double num1, double num2) {
//     return num1 - num2;
// }

// // Function to multiply two numbers
// double multiply(double num1, double num2) {
//     return num1 * num2;
// }

// // Function to divide two numbers
// double divide(double num1, double num2) {
//     if (num2 == 0) {
//         printf("Error! Division by zero.\n");
//         return -1; // Returning an error value
//     } else {
//         return num1 / num2;
//     }
// }

// int main() {
//     int choice;
//     double num1, num2;

//     printf("\nSelect operation:\n");
//     printf("1. Add\n");
//     printf("2. Subtract\n");
//     printf("3. Multiply\n");
//     printf("4. Divide\n");

//     scanf("%d", &choice);

//     printf("\nEnter first number: ");
//     scanf("%lf", &num1);

//     printf("Enter second number: ");
//     scanf("%lf", &num2);

//     switch (choice) {
//         case 1:
//             printf("%.2lf + %.2lf = %.2lf\n", num1, num2, add(num1, num2));
//             break;
//         case 2:
//             printf("%.2lf - %.2lf = %.2lf\n", num1, num2, subtract(num1, num2));
//             break;
//         case 3:
//             printf("%.2lf * %.2lf = %.2lf\n", num1, num2, multiply(num1, num2));
//             break;
//         case 4:
//             printf("%.2lf / %.2lf = %.2lf\n", num1, num2, divide(num1, num2));
//             break;
//         default:
//             printf("Invalid choice! Please select a valid operation.\n");
//     }

//     return 0;
// }
