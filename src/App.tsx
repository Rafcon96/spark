// import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-grow">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
