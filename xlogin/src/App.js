import { useState } from "react";
function App() {
  const [display, setDisplay] = useState("form");
  const [error, setError] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    const { Username, Password } = e.target.elements;
    if (Username.value === "user" && Password.value === "password") {
      setError(false);
      setDisplay("login");
    } else setError(true);
  };
  return (
    <>
      <h1>Login Page</h1>
      {error && <p>Invalid username or password</p>}
      {display === "form" ? (
        <form
          onSubmit={handleForm}
          // style={{ display: "flex", flexDirection: "column", width: "200px" }}
        >
          <div>
            <label for="Username">Username: </label>
            <input type="text" name="Username" required id="Username" placeholder="username"/>
          </div>
          <div>
            <label for="Password">Password: </label>
            <input type="password" name="Password" required id="Password" placeholder="password"/>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      ) : (
        <>
          <p>Welcome, user!</p>
        </>
      )}
    </>
  );
}

export default App;