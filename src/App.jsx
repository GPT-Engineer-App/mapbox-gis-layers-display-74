import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TopBar from "./components/TopBar.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="flex flex-1">
          <SideBar />
          <div className="flex-1" style={{ marginLeft: '16rem' }}>
            <TopBar />
            <Routes>
              <Route exact path="/" element={<Index />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;