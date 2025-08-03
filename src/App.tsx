import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LandingPage from "./pages/LandingPage";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col  caret-transparent ">
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="flex-grow ">
                  <LandingPage />
                </main>
                <Footer />
              </>
            }
          />

          {/* Thank you page route */}
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
