function atm(){
    let balance = 5000;
    let user;
while (true) {
alert ("pease insert your card");
user = prompt(`please tell us your name`);
if (user === null) {
alert('lease enter yor name and try again');
 // Exit the loop if the user clicks cancel
}else{

let accountType = prompt(`Account selection
1. savings
2. current `);

if (accountType === "1" || accountType === "2") {
  let secret = prompt(`Welcome ${user}! please enter your secret number`);
  if (!isNaN(secret)) {
    let choice;
    while (true) {
      choice = prompt(`please select an option
1. check balance      4. buy data     
2. withdraw            5. transfer to UBA 
3. buy airtime         6. transfer to other banks
7. Exit`);

      if (choice === null || choice === "7") {
        alert("Thank you for using our services!");
        break;
      }
      switch (choice) {
        case "1":
          alert(`your balance is ${balance}`);
          break;
        case "2":
        let withdraw = prompt(
              "Enter the amount you would like to withdraw"
            );
            if (withdraw <= balance && !isNaN(secret) == true) {
              alert(
                `congratulations ${user}, you have successfully withdrawn ${withdraw}`
              );
            } else {
              alert("insufficient funds");
            }
            break;
          case "3":
            let amount = prompt("please enter amount");
            if (amount <= balance && !isNaN(amount) == true) {
              let phoneNumber = prompt("enter destination phone number");
              if (!isNaN(phoneNumber) == true) {
                alert(
                  `congratulations ${user}, your recharge of ${amount} was successful`
                );
              } else {
                alert("please enter a valid phone number");
              }
            } else {
              alert("insufficient funds");
            }
          case "4":
            let data = prompt("please enter amount");
            if (data <= balance && +!isNaN(amount) == true) {
              let dataNumber = prompt("enter destination phone number");
              if (!isNaN(dataNumber) == true) {
                alert(
                  `congratulations ${user}, your data top up of ${data} was successful`
                );
              } else {
                alert("please enter a valid phone number");
              }
            } else {
              alert("insufficient funds");
            }
          case "5":
          case "6":
            let account = prompt("please enter account number");
            if (!isNaN(account)) {
              let recepient = prompt("please enter  recepient name");
              let transfer = prompt("please enter  transfer amount");
              if (transfer <= balance && !isNaN(transfer == true)) {
                alert(
                  `congratulations ${user}, your have successfully transfered ${transfer} to ${recepient}`
                );
              } else {
                alert("insuffiecient funds");
              }
            } else {
              alert(
                "please enter a valid account number and try again, Thank you!"
              );
            }
        default:
          alert("Please select a valid option.");
      }
    }
  } else {
    alert("Invalid secret number");
  }
} else {
  alert("Invalid account type");
}
}
}
}



