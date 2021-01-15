buildList();
//Call populate high score
//Get Local Storage
scoreArr = JSON.parse(localStorage.getItem("score"))
console.log(scoreArr);
//    Submit click handler
document.getElementById("submit").addEventListener("click", function () {
    var username = userName();
    //Grab the value of the input 
    
    //Set last item of array user property to the value
    scoreArr[(scoreArr.length-1)].user = username;
    console.log(scoreArr);
    //Stringify array and add to local storage
    localStorage.setItem("score",JSON.stringify(scoreArr));
    //Disable input box

    //Call populate high score function
    buildList();
});

//Create function to push user input into user array
function userName() {
    var input = document.getElementById("input");
    var inputText = input.value;
    console.log(inputText);
    return inputText;

}
function buildList() {

    //Create function to populate high score list
    scoreArr = JSON.parse(localStorage.getItem("score"))
    // Loop through length of the array and for each index create a li item element and assign it and give it text content of username property and score property
    for (var i = 0; i < scoreArr; i++) {
        var user = scoreArr[i].user;
        var score = scoreArr[i].score;
        var newList = document.createElement("LI");
        newList.textContent = user + score;
        document.getElementById("ol").appendChild(newList);
    };
    //Append list item to the ordered list
};

