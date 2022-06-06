import { Footer } from "./Footer";
import { Topbar } from "./Topbar";
import { Sticky } from "./Sticky";
export const Layout: React.FC = ({ children,tourPackage }) => {
  console.log('children',children)
  console.log('layout tourPackage',tourPackage)
  return (
    <div className="relative font-app flex flex-col min-h-screen">
      <Topbar />
      {children}
      <Sticky  tourPackage={tourPackage}/>
      <Footer />
    </div>
  );
};
