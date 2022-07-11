import { useSelector } from "react-redux";
import Login from "./page/Login";
import Home from "./page/Home";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const user = useSelector((state) => state.userReducer);
  const theme = useSelector((state) => state.themeReducer);

  console.log(user);

  return (
    <ThemeProvider>
      <div
        className="text-center"
        style={{
          height: user ? "100%" : "100vh",
          backgroundColor: theme ? "#4E4E50" : "#E5E6EA",
        }}
      >
        {user ? <Home /> : <Login user={user} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
