      function ussd() {
        let user = prompt("please enter your name?");
        let code;

        while (true) {
          code = prompt(`Welcome, ${user}! Please enter UBA transfer code:`);

          if (code === "*121#") {
            let inputPin = prompt("Enter your 4-digit secret number:");
            let request = prompt(`Hello ${user}, please select an option?
        1. Airtime-self
        2. Airtime-others
        3. Transfer UBA-UBA
        4. Transfer other banks
        `);

            if (
              !isNaN(request) &&
              (request === "1" ||
                request === "2" ||
                request === "3" ||
                request === "4")
            ) {
              let transfer = prompt("Please enter amount");
              let recipient = prompt("Please enter recipient number");

              if (!isNaN(transfer) && !isNaN(recipient)) {
                alert(
                  `Congratulations ${user}, your transfer of NGN ${transfer} was successful.`
                );
              } else {
                alert("Invalid input. Please enter a valid number.");
              }
            } else {
              alert("Invalid input");
            }

            break; 
          } else {
            alert("Please input the correct UBA transfer code and try again.");
          }
        }
      }
   