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

// Display a message indicating the start of the Concatenating Strings Demo
printf("*** Start of Concatenating Strings Demo ***\n");

//declaring a variable 'compare1' of type char which has size of BUFFER_SIZE
char compare1 [BUFFER_SIZE]; 
//declaring a variable 'compare2' of type char which has size of BUFFER_SIZE
char compare2 [BUFFER_SIZE];
//declare variable 'result' of int type to store the result of string comparison
int result;
// start a do-while loop to continuously get user input and compare strings
do {
    // Prompt the user to input the first string or 'q' to quit
    printf ("Type the 1st string to compare (q - to quit): \n");
   // Get the user input for the first string and store it in compare1 
    fgets (comparel, BUFFER SIZE, stdin);
    // Remove the newline character at the end of compare1 
    compare1[strlen (compare1) - 1] = '\0';
    // Check if the user input is not 'q' to quit
    if (strcmp (compare1,"q") != 0) {
        // Prompt the user to input the second string 
        printf ("Type the 2nd string to compare: \n");
        // Get the user input for the first string and store it in compare2 
        fgets (compare2, BUFFER SIZE, stdin);
        // Remove the newline character at the end of compare2
        compare2 [strlen (compare2) - 1] = '\0';
        // Compares strings 'compare1' and 'compare2' and store the result
        result = strcmp (compare1, compare2) ;
        //conditions to check if result is less than 0
        if (result < 0) 
            // Display a message indicating compare1 string is less than compare2 string
            printf ("\'%s\'string is less than \'%s\'\n", compare1, compare2);
        //conditions to check if result is equal to 0,
        else if (result == 0)
            // Display a message indicating compare1 string is equal to compare2 string
            printf("\'%s\' string is equal to \'s\'\n", compare1, compare2);
        // If neither of the above conditions is true
        else
            // Display a message indicating compare1 string is greater than compare2 string
            printf("\'%s\'string is greater than \'%s\'\n", compare1, compare2);
        }    
} while (strcmp (compare1,"q") != 0) ;// continue the loop until the user inputs 'q'

// Display a message indicating the end of the Concatenating Strings Demo
printf("*** End of Comparing strings Demo ***\n\n");


/* Version 3 */
>> insert here


