import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <Navbar />
      <main className="h-full overflow-y-scroll bg-indigo-500">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
