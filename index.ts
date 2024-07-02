#! /usr/bin/env node

import inquirer from "inquirer"

const randomNumber: number = Math.floor(10000 + Math.random() * 90000)


let mybalance: number = 0

let answer = await inquirer.prompt(
    [
        {
            name:"students",
            type:"input",
            message:"Enter student name:",
            validate: function(value){
                if(value.trim() !== ""){
                   return true
                }
                return "Please enter a non empty value"
            }
        },
        {
            name: "courses",
            type: "list",
            message: "Select the course to enrolled",
            choices:["web development","HTML","Python","CSS"]
        }
    ]
);

const tutionFee: {[key: string]:number} = {
     "web development" : 2000,
     "HTML" : 3000,
     "Python" : 100000,
     "CSS" : 50000
}

console.log(`\ntution fees: ${tutionFee[answer.courses]}\n`);

console.log(`Balance: ${mybalance}\n`);

let paymentType = await inquirer.prompt(
    [
        {
            name:"payment",
            type: "list",
            message: "Select payment method",
            choices: ["Bank transfer","Eassypaisa","Jazzcash"]
        },
        {
            name:"amount",
            type:"input",
            message: "Transfer money",
            validate: function(value){
                if(value.trim() !== ""){
                   return true
                }
                return "Please enter a non empty value"
            }
           
        }
    ]
)

console.log(`\nYou select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses];

const paymentAmount = parseFloat(paymentType.amount);

if (tutionFees === paymentAmount){
    console.log(`congratulations, you have successfully enrolled in ${answer.courses}.\n`);
    
let ans = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"what would you like to do next?",
        choices: ["view status","Exit"]
    }
])   

if (ans.select === "view status"){
     console.log("\n********status***********\n");
     console.log(`Student Name: ${answer.students}`);
     console.log(`\nStudent ID: ${randomNumber}`);
     console.log(`\nCourses: ${answer.courses}`);
     console.log(`\nTution fees paid : ${paymentAmount}`);
     console.log(`\nBalance : ${mybalance += paymentAmount}`)
     
}
}else {

    console.log("\n Exiting student management system\n")

}