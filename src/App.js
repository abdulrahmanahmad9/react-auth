// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Notes from "./pages/Notes";
// import Note from "./pages/Note";
// import Users from "./pages/Users";
// import { clear } from "@testing-library/user-event/dist/clear";

// function App() {
//   return (
//     <div className="App font-mono ">
//       <Navbar />
//       <Routes>
//         <Route path="/" Component={Home} />
//         <Route path="/notes" Component={Notes} />
//         <Route path="/notes/:noteId" Component={Note} />
//         <Route path="/login" Component={Login} />
//         <Route path="/register" Component={Register} />
//         <Route path="/users" Component={Users} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import Users from "./pages/Users";
import { QueryClient, QueryClientProvider } from "react-query"; // Import QueryClient and QueryClientProvider
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
import UserContext from "./context/UserContext";
import { getToken } from "./api/Storge.js";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <QueryClientProvider client={queryClient}>
        {" "}
        {/* Wrap your app with QueryClientProvider */}
        <div className="App font-mono">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* Use element prop instead of Component */}
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:noteId" element={<Note />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </UserContext.Provider>
  );
}

export default App;
