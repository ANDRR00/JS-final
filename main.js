// N 1

// let userNum1 = prompt("გთხოვთ შეიყვანოთ პირველი რიცხვი");
// let userNum2 = prompt("გთხოვთ შეიყვანოთ მეორე რიცხვი");

// if (isNaN(parseInt(userNum1)) || isNaN(parseInt(userNum2))) {
//     document.getElementById("demo").innerHTML = "გთხოვთ შეიყვანოთ რიცხვი სწორად!";
// }else{
//     let num1 = parseInt(userNum1);
//     let num2 = parseInt(userNum2);
//     let operation = prompt("გთხოვთ შეიყვანოთ სასურველი არითმეტიკული ოპერატორი");

//     switch(operation){
//         case "+": document.getElementById("demo").innerHTML = num1 + num2;
//         break;
//         case "-": document.getElementById("demo").innerHTML = num1 - num2;
//         break;
//         case "*": document.getElementById("demo").innerHTML = num1 * num2;
//         break;
//         case "/":
//         if(num2 === 0){
//             document.getElementById("demo").innerHTML = "ნულზე გაყოფა არ შეიძლება სცადეთ თავიდან!";
//         }else{
//             document.getElementById("demo").innerHTML = num1 / num2;
//         }
//         break;
//         default: document.getElementById("demo").innerHTML = "გთხოვთ სწორად შეიყვანოთ არითმეტიკული ოპერატორი";
//     }
// }

// N 2

// let randomNum = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
// console.log(randomNum);
// let userInput = prompt("შეიყვანეთ სავარაუდო რიცხვი");
// let count = 0;
// for(let i = 0; i < randomNum/2; i++){
//     count++;
//     if(userInput < randomNum){
//         userInput = prompt("თქვენი რიცხვი ჩაფიქრებულზე პატარაა. სცადეთ თავიდან");
//     }else if(userInput > randomNum){
//         userInput = prompt("თქვენი რიცხვი ჩაფიქრებულზე დიდია. სცადეთ თავიდან");
//     }else{
//         document.getElementById("demo").innerHTML = `თქვენ სწორად გამოიცანით ჩაფიქრებული რიცხვი გილოცავთ! თქვენ დაგჭირდათ ${count} მცდელობა.`;
//         break;
//     }
// }

// N 3

// let words = ["cat", "mango", "mustang", "dog"];
// let word = words[Math.floor(Math.random() * words.length)];

// let answerArr = [];

// for(let i = 0; i < word.length; i++){
//     answerArr[i] = "_";
// }

// let remainingLetters = word.length;
// let remainingAttempts = remainingLetters + 4;

// while(remainingLetters > 0 && remainingAttempts > 0){

//     alert(answerArr.join(" "));

//     let guess = prompt("შეიყვანეთ თქვენთვის სასურველი ასო");
//     if(guess === null){
//         break;
//     }else if(guess.length !== 1){
//         alert("გთხოვთ შეიყვანოთ მხოლოდ ერთი ასო!");
//     }else{
//         guess = guess.toLowerCase();

//         for(let j = 0; j < word.length; j++){
//             if(word[j] === guess && answerArr[j] === "_"){
//                 answerArr[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }

//     remainingAttempts--;

// }

// alert(answerArr.join(" "));

// if(remainingLetters === 0){
//         alert(`გილოცავ! შენ გამოიცანი სიტყვა ${word}.`);
//     }else{
//         alert(`სამწუხაროდ შენ ვერ გამოიცანი სიტყვა ${word}.`)
//     }


// N 4

// const englishWords = [["hello"], ["goodbye"], ["cat"], ["dog"], ["car"], ["hello, how are you?"]];
// const georgianWords = [["გამარჯობა"], ["ნახვამდის"], ["კატა"], ["ძაღლი"], ["მანქანა"], ["გამარჯობა, როგორ ხარ?"]];
// const russianWords = [["Привет"], ["до свидания"], ["кот"], ["собака"], ["машина"], ["Привет, как дела?"]]


// function translateWord(inputWord, fromLanguage, toLanguage) {
//     let sourceArray, targetArray;

//     if(fromLanguage === "georgian" && toLanguage === "english"){
//         sourceArray = georgianWords;
//         targetArray = englishWords;
//     }else if(fromLanguage === "english" && toLanguage === "georgian"){
//         sourceArray = englishWords;
//         targetArray = georgianWords;
//     }else if(fromLanguage === "russian" && toLanguage === "georgian"){
//         sourceArray = russianWords;
//         targetArray = georgianWords;
//     }else if(fromLanguage === "russian" && toLanguage === "english"){
//         sourceArray = russianWords;
//         targetArray = englishWords;
//     }else if(fromLanguage === "georgian" && toLanguage === "russian"){
//         sourceArray = georgianWords;
//         targetArray = russianWords;
//     }else if(fromLanguage === "english" && toLanguage === "russian"){
//         sourceArray = englishWords;
//         targetArray = russianWords;
//     }else{
//         return "Invalid language selection/ენა არასწორად იქნა შეყვანილი";
//     }

//     for (let i = 0; i < sourceArray.length; i++) {
//         const index = sourceArray[i].indexOf(inputWord.toLowerCase());
//         if (index !== -1) {
//             return targetArray[i][index];
//         }else if(inputWord !== sourceArray){
//             let newWord = prompt("თქვენს მიერ შეტანილი სიტყვა დაემატება ლექსიკონს. გთხოვთ შეიყვანოთ მისი თარგმანიც").toLowerCase();
//             sourceArray.push([inputWord]);
//             targetArray.push([newWord]);
//             break;
//         }
//     }
    
// }

// let userInput = prompt("Enter a word to translate/შეიყვანეთ სათარგმნი სიტყვა:");
// let fromLanguage = prompt("Enter the source language (georgian or english)/აირჩიეთ ენა საიდანაც გსურთ თარგმნა:").toLowerCase();
// let toLanguage = prompt("Enter the target language (georgian or english)/აირჩიეთ რომელ ენაზე გსურთ თარგმნა:").toLowerCase();

// let translation = translateWord(userInput, fromLanguage, toLanguage);

// if(translation === undefined){
//     alert("მადლობა რომ სარგებლობთ ჩვენი აპლიკაციით.")
// }else{
//     alert(`Translation/თარგმანი: ${translation}`);
// }


// N 5

// let credentials = prompt("შეიყვანეთ თქვენი სახელი და გვარი:")
// let balance = parseInt(prompt("შეიყვანეთ ბალანსზე არსებული თანხის რაოდენობა:"))

// let userInfo = [[credentials], [balance]];

// function checkBalance(){
//     alert(`თქვენს ბალანსზე ფიქსირდება ${balance} ლარი.`);
// }

// function addToBalance(amount){
//     balance += amount;
//     alert(`თქვენ ანგარიშზე შეიტანეთ ${amount} ლარი წარმატებით. ბალანსზე არსებული თანხაა: ${balance} ლარი.`);
// }

// function getMoney(amount){
//     if(balance >= amount){
//         balance -= amount;
//         alert(`თქვენ ანგარიშიდან გაიტანეთ ${amount} ლარი წარმატებით. ბალანსზე დარჩენილი თანხაა: ${balance} ლარი.`);
//     }else{
//         alert(`თქვენ ანგარიშზე ფიქსირდება ${amount} ლარზე ნაკლები. სამწუხაროდ თანხის გატანა ვერ მოხერხდა!`);
//     }
// }

// while(true){

//     let operation = prompt("რომელი ოპერაციის შესრულება გსურთ: ბალანსის შემოწმება, თანხის შეტანა, თანხის გატანა, გასვლა");

//     operation = operation.toLowerCase();

//     switch(operation){
//         case "ბალანსის შემოწმება":
//         checkBalance();
//         break;
//         case "თანხის შეტანა":
//             let addingMoney = parseInt(prompt("რა რაოდენობის თანხის შეტანა გსურთ?"));
//             addToBalance(addingMoney);
//             break;
//         case "თანხის გატანა":
//             let gettingMoney = parseInt(prompt("რა რაოდენობის თანხის გატანა გსურთ?"));
//             getMoney(gettingMoney);
//             break;
//         case "გასვლა":
//             alert("თქვენ გადიხართ პორტალიდან.");
//             break;
//         default:
//             alert("დაფიქსირდა შეცდომა. სცადეთ ახლიდან.");
//             break;
//     }

//     let answer = prompt("გსურთ სხვა ოპერაციის განხორციელება?");
//     anwer = answer.toLowerCase();

//     if(answer === "დიახ" || answer === "კი"){
//         continue;
//     }else if(answer === "არა"){
//         break;
//     }else{
//         alert("დაფიქსირდა შეცდომა!");
//         continue;
//     }
// }