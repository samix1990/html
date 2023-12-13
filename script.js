function getDataAndSetVariables() {
    // Get the input element by its id
    var inputElement = document.getElementById("myInput");

    // Get the value entered by the user
    var inputValue = inputElement.value;

    // Get the selected option from the list
    var listElement = document.getElementById("myList");
    var selectedOption = listElement.options[listElement.selectedIndex].value;

    // Set variables with the collected data
    var myData = {
        input: inputValue,
        option: selectedOption
    };

    // Do something with the data (e.g., log it to the console)
    console.log("Entered data: " + myData.input);
    console.log("Selected option: " + myData.option);

    // You can now use the variables myData.input and myData.option as needed.
}
