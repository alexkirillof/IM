import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../SideBar/SideBar";
import AppRoutes from "../Routes/Routes.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
          <AppRoutes/>
      </div>
      <Footer />
    </div>
  );
}
export default App;
