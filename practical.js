function findLargest() {
  // Get values from input boxes
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let num3 = parseInt(document.getElementById("num3").value);
  let num4 = parseInt(document.getElementById("num4").value);
  let num5 = parseInt(document.getElementById("num5").value);

  // Assume first number is largest
  let largest = num1;

  // Compare with others
  if (num2 > largest) largest = num2;
  if (num3 > largest) largest = num3;
  if (num4 > largest) largest = num4;
  if (num5 > largest) largest = num5;

  // Show result
  document.getElementById("result").innerText = "The largest number is: " + largest;
}
