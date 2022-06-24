import { Footer } from "./Footer";
import { Topbar } from "./Topbar";
export const Layout: React.FC = ({ children }) => {
  return (
    <div className="relative font-app flex flex-col min-h-screen">
      <Topbar />
      {children}
      <Footer />
    </div>
  );
};
