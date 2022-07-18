import { useSelector } from "react-redux";
import Login from "./page/Login";
import Home from "./page/Home";

function App() {
  const user = useSelector((state) => state.userReducer);
  const theme = useSelector((state) => state.themeReducer);

  console.log(user);

  return (
    <div
      className="p-5"
      style={{
        height: user ? "100%" : "100vh",
        backgroundColor: theme ? "black" : "#E5E6EA", // "#4E4E50"
      }}
    >
      {user ? <Home /> : <Login user={user} />}
    </div>
  );
}

export default App;
