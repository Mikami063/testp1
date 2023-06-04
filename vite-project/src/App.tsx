import { Route, Routes, useLocation } from "react-router-dom";
import ListGroup from "./components/ListGroup";
import UserInfoPage from "./UserInfoPage";

function App() {
  const location = useLocation();
  const { state } = location;

  return (
    <Routes>
      <Route path="/" element={<ListGroup />} />
      <Route
        path="/user"
        element={
          <UserInfoPage
            name={String(state?.name || "")}
            age={Number(state?.age || 0)}
            sex={String(state?.sex || "")}
          />
        }
      />
    </Routes>
  );
}

export default App;
