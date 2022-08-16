import "./App.css";
import {
  useGetUserQuery,
  useCreateUserMutation,
} from "../src/store/features/api/apiSlice";

const App = () => {
  const [createUserMutationHandler, { isLoading }] = useCreateUserMutation();
  const { isLoading: isUserLoading, data } = useGetUserQuery();

  console.log("user create isLoading ::", isLoading);
  // console.log("user data ::", data);

  // create post handler
  const createUserHandler = async (data) => {
    console.log("createPostHandler", data);

    try {
      const res = await createUserMutationHandler(data).unwrap();
      console.log("user created successfully :res:", res);
    } catch (err) {
      console.log("user does not created");
    }
  };

  return (
    <div className="App">
      <h2>Awesome RTK Query</h2>

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
