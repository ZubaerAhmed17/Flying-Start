const Logo = document.querySelectorAll("#Logo path");

for (let i = 0; i < Logo.length; i++) {
  console.log(`Letter ${i} is ${Logo[i].getTotalLength()}`);
  
}