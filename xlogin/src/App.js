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
      <h1>Login</h1>
      {error && <p>Invalid username or password</p>}
      {display === "form" ? (
        <form
          onSubmit={handleForm}
          style={{ display: "flex", flexDirection: "column", width: "200px" }}
        >
          <>
            <label label="Username">username: </label>
            <input type="text" name="Username" required id="Username"/>
          </>
          <>
            <label label="Password">password: </label>
            <input type="password" name="Password" required id="Password"/>
          </>
          <button type="submit" style={{ width: "30%" }}>
            Submit
          </button>
        </form>
      ) : (
        <>
          <p>Welcome, user!</p>
          <button onClick={() => setDisplay("form")}>Go Back</button>
        </>
      )}
    </>
  );
}

export default App;