const inquirer = require("inquirer");

const userPrompt = () => {
  console.log("User Prompt");
  return inquirer
    .prompt({
      type: "list",
      message: "Create New User, Log In",
      name: "action",
      choices: ["Create New User", "Log In"],
    })
    .then(({ action }) => {
      if (action === "Create New User") {
        userCreate();
      } else if (action === "Log In") {
        userLogin();
      }
    });
};

const userCreate = () => {
  console.log('Create User prompt:')
  return inquirer
  .prompt([
    {
      name: "username",
      type: "input",
      message: "Enter a username: ",
    },
    {
      name: "email",
      type: "input",
      message: "Enter an email: ",
    },
    {
      name: "password",
      type: "input",
      message: "Enter a password",
    },
  ])
  .then(async (newUserData) => {
    console.log(newUserData);

    const username = newUserData.username;
    const email = newUserData.email;
    const password = newUserData.password;

    if (username && email && password) {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        console.log('created user');
        userLogin();
      }
    }
  });
}
const userLogin = () => {
  console.log("login prompt:");
  return inquirer
    .prompt([
      {
        name: "email",
        type: "input",
        message: "What is your email?",
      },
      {
        name: "password",
        type: "password",
        message: "What is your password?",
      },
    ])
    .then(async (loginData) => {
      const email = loginData.email;
      const password = loginData.password;

      if (email && password) {
        const response = await fetch("http://localhost:3001/api/users/login", {
          method: "post",
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("Logged in!");
          window.location.replace('/');
          
        } else {
          console.log(response.statusText);
        }
      } else {
        console.log("Please enter valid email and password!");
      }
    });
};

module.exports = userPrompt;
