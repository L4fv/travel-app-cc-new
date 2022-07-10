import { Footer } from "./Footer";
import { Topbar } from "./Topbar";
type Props = {
  children: JSX.Element,

};
export const Layout: React.FC<Props> = ({ children }) => (
  <div className="relative font-app flex flex-col min-h-screen">
    <Topbar />
    {children}
    <Footer />
  </div>
);
