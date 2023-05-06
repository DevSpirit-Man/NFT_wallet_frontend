import { Provider } from "react-redux";
import store from "./app/store";
import { Routes, Route } from "react-router-dom";
// import Onboarding from "./pages/Onboarding";

import Layout from "./pages/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";
import Receive from "./pages/Receive";
import Home from "./pages/Home";
import Exchange from "./pages/Exchange";
import WalletTest from "./pages/WalletTest";
import Onboarding from "./pages/Onboarding";
import { ThemeProvider } from "./contexts";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Onboarding />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/receive" element={<Receive />} />
              <Route path="/home" element={<Home />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/test" element={<WalletTest />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
