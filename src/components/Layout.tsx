import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode
};

const Layout:FC<Props> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header/>
    <main className="flex-grow bg-gradient-to-b from-purple-200 to-blue-200">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;