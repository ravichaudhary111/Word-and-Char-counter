let textarea = document.getElementById("textarea");
textarea.addEventListener("input", fun)


function fun() {
    // var text = textarea.value;
    var text = this.value;
    console.log(text);
    let char = text.length;
    console.log(char);
    document.getElementById("character").innerHTML = char;

    text = text.trim();
    let wordList = text.split(" ");
    newWordList = wordList.filter(function (elem) {
        return elem != " ";
    })
    let n = newWordList.length;
    console.log(newWordList);
    document.getElementById("words").innerHTML = n;
};
