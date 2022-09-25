import "./App.css";

const App = () => {
  const createUserHandler = () => {
    console.log("create user handler ");
  };

  return (
    <div className="App">
      <h2 style={{ textTransform: "uppercase" }}>Awesome RTK Query</h2>

      <div>
        <button
          onClick={() =>
            createUserHandler({
              name: "Md Mohimenol Islam Munna",
              job: "React Developer",
            })
          }
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default App;
