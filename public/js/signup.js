const signupFormHandler = async (event) => {
  event.preventDefault();

  const emailNew = document.querySelector("#email-signup");
  const passwordNew = document.querySelector("#password-signup");

  const response = await fetch("/api/user/signup", {
    method: "POST",
    body: JSON.stringify({
      email: emailNew.value,
      password: passwordNew.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Unable to signup");
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
