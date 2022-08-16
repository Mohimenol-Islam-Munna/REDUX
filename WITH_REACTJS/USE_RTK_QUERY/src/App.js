import "./App.css";
import { useGetUserQuery } from "../src/store/features/api/apiSlice";

const App = () => {
  const { isLoading, isError, isSuccess, data } = useGetUserQuery();

  console.log("post loading ::", isLoading);
  console.log("post data ::", data);

  return (
    <div className="App">
      <h2>Awesome RTK Query</h2>
    </div>
  );
};

export default App;
