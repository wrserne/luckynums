/** processForm: get data from form and make AJAX call to our API. */
function processForm(evt) {
    evt.preventDefault();
  
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      year: document.getElementById("year").value,
      color: document.getElementById("color").value,
    };
  
    fetch("/api/get-lucky-num", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(handleResponse)
      .catch((error) => console.error("Error:", error));
  }
  
  /** handleResponse: deal with response from our lucky-num API. */
  function handleResponse(resp) {
    if ("errors" in resp) {
      for (const field in resp.errors) {
        const errorMessage = resp.errors[field][0];
        const errElement = document.getElementById(`${field}-err`);
        if (errElement) {
          errElement.textContent = errorMessage;
        }
      }
    } else {
      const numFact = resp.num.fact;
      const yearFact = resp.year.fact;
      const num = resp.num.num;
      const year = resp.year.year;
  
      const resultDiv = document.getElementById("lucky-results");
      resultDiv.textContent = `Your lucky number is ${num} (${numFact}). Your birth year (${year}) fact is ${yearFact}.`;
    }
  }
  
  $("#lucky-form").on("submit", processForm);
  