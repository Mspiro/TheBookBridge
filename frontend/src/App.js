import "./index.css";
import { MainRoutes } from "./MainRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
// import { Navbar } from "./components/Navbar/Navbar.jsx";
// import { AuthorNavbar } from "./AuthorSide/authorComponents/AuthorNavbar/AuthorNavbar.jsx";

function App() {
  // Initialize the state properly
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    // Set state with fetched data
    const storedAuthor = localStorage.getItem("author");
    if (storedAuthor) {
      setAuthorData(JSON.parse(storedAuthor));
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <ToastContainer position="top-center" />
      {/* Uncomment the line below if you have a condition to render Navbar or AuthorNavbar */}
      {/* {authorData?.authorToken ? <AuthorNavbar /> : <Navbar />} */}
      <MainRoutes />
    </div>
  );
}

export default App;
