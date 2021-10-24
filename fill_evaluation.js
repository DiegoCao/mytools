// var buttons = document.getElementsByTagName("Strongly Agree")
var buttons = document.getElementsByTagName("input")
console.log(buttons.length);
for (let i = 0; i <buttons.length; i += 1){
    if (buttons[i].value == "Options0_0"){
        var button = buttons[i]
        button.click()
    }
}
var texts = document.getElementsByTagName('textarea')
console.log(texts.length)
for (let i = 0; i < texts.length; i += 1){
    var modval = i%3
    if (modval == 0){
        // first type question define your own answer in each one of them
        texts[i].value = "Great"
    }
    else if(modval == 1){
        texts[i].value = "Good"
    }
    else{
        texts[i].value = "Thanks a lot for the instruction"
    }
}
