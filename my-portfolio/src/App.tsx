import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Navbar />
      {/* Main content of the portfolio can go here */}
      {/* Example placeholder for main content */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 pt-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Welcome to My Portfolio
        </h1>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;