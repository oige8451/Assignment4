// MANIPULATING SOURCE
//To overcome the strcat warnings in the code 
#define CRT_SECURE_NO_WARNINGS
//  a macro named BUFFER_SIZE with size 80
#define BUFFER_SIZE 80
// Include the header file
#include "manipulating.h"

void manipulating() {
/* Version 1 */
// V1
        // Display a message indicating the start of the Concatenating Strings Demo
        printf("*** Start of Concatenating Strings Demo ***\n");

        // Declare character arrays string1 and string2 to store strings
        char string1[BUFFER_SIZE];
        char string2[BUFFER_SIZE];

        // Loop to concatenate strings until the user enters 'q'
       do {
            // Prompt the user to input the first string 'q' to quit
            printf("Type the 1st string (q - to quit): \n");
            // Get the user input for the first string and store it in string1 array
            fgets(string1, BUFFER_SIZE, stdin);
            // Remove the newline character at the end of string1
            string1[strlen(string1) - 1] = '\0';
             // Check if the user entered 'q' to quit
            if (strcmp(string1, "q") != 0) {
                // Prompt the user to input the second string 
                printf("Type the 2nd string:\n");
                 // Get the user input for string 2 and store it in string2 array
                fgets(string2, BUFFER_SIZE, stdin);
                // Remove the newline character at the end of string2
                string2[strlen(string2) - 1] = '\0';
                // Concatenate the string2 to string1
                strcat(string1, string2);
                  // Display the concatenated string1
                printf("Concatenated string is '%s'\n", string1);
            }
        } while (strcmp(string1, "q") != 0);// Continue the loop until the user enters 'q'

        // Display a message indicating the end of the Concatenating Strings Demo
        printf("*** End of Concatenating Strings Demo ***\n\n");

    }


/* Version 2 */
>> insert here


/* Version 3 */
>> insert here


