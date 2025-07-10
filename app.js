import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { Body } from "./components/body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
