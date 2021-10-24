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
        // first type question
        texts[i].value = "The major strength of the class is the interaction between the students and instructors"
    }
    else if(modval == 1){
        texts[i].value = "Very good class and I enjoy in this semester"
    }
    else{
        texts[i].value = "A very responsible Instructor and I truly learn a lot, thanks"
    }
}
