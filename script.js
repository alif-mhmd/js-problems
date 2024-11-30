// Problem 1

function FixWeightMachine(number) {

    if (!Array.isArray(number)) {
        return "Invalid Input"; 
    }

    var validweights = [];

    for (var i = 0; i < number.length; i++) {
        var weight = number[i];

        if (typeof weight === "number" && weight > 0) {
            validweights.push(weight);
        }
    }

    return validweights;
}




// ----------------------------------------------------------------------------



// Problem 2

function countVowels(word) {

    if (typeof word !== 'string') {
        return "Invalid Input";
    }


    var TCount = 0;
    var vowels = "aeiouAEIOU";

    for (let i = 0; i < word.length; i++) {
        var count = word[i]; 

    if (vowels.includes(count)) {
        TCount++;
        }
    }

    return TCount; 
  }
  
  
  




// -------------------------------------------------------------------------




// Problem 3

function evaluateResult(numbers) {

    if (!Array.isArray(numbers) && typeof mark !== "number" ) {
      return "Invalid Input"; 
    }

    var grades = [];

    for (var i = 0; i < numbers.length; i++) {
      var mark = numbers[i];


      
      if (mark < 50) {
        grades.push("F");
      } 
      else if (mark >= 50 && mark <= 59) {
        grades.push("D");
      } 
      else if (mark >= 60 && mark <= 69) {
        grades.push("C");
      } 
      else if (mark >= 70 && mark <= 79) {
        grades.push("B");
      } 
      else if (mark >= 80 && mark <= 89) {
        grades.push("A");
      } 
      else if (mark >= 90) {
        grades.push("A+");
      }
      else {
        grades.push("Invalid")
      }
    }

    return grades;
  }







//   ---------------------------------------------------------------------




// Problem 4

function createPerfectPassword(user) {
  if (typeof user !== 'object') {
    return "Invalid Input";
  }

  if (user.year.toString().length !== 4) {
    return "Invalid Input";
  }
  let password = user.name[0].toUpperCase().concat(user.name.slice(1)).concat(user.year);
  return password;
}






// ---------------------------------------------------------------------------





// Problem 5

function calculateMonthlyExpenses(A, B) {
    if (!Array.isArray(A) || typeof B !== 'number') {
      return "Invalid Input";
    }
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      sum = sum + A[i];
    }
  
    let savings = sum - B;
    if (savings <= 0) {
      return "Save more money";
    }
    return savings;
  
  }

  
  

