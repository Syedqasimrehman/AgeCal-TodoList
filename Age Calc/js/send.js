const B_date = document.querySelector(".input_data");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const birth_year = B_date.value;

  if (!birth_year) {
    const wrong = "<p>Please fill in the birth year first!</p>";
    error.innerHTML = wrong;
    result.innerHTML = "";
  } else {
    const current_date = new Date();
    const birth_date = new Date(birth_year);

    let years = current_date.getFullYear() - birth_date.getFullYear();
    let months = current_date.getMonth() - birth_date.getMonth();
    let days = current_date.getDate() - birth_date.getDate();

    if (days < 0) {
      months -= 1;
      days += 30;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const html = `<h3>Your age is
     <span>${years}</span> 
      Years, <span>${months}</span> 
      Months, and 
      <span>${days}</span> Days.</h3>`;
    result.innerHTML = html;
    error.innerHTML = "";
  }
});
