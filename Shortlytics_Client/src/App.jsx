import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShortenUrl from "./components/ShortenUrl";
import Redirect from "./components/Redirect";
import RedirectComponent from "./components/RedirectComponent";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortUrl" element={<ShortenUrl />} />
        <Route path="/:shortenedUrl" element={<Redirect />} /> {/* Match the key */}
        <Route path="/:data" element={<RedirectComponent />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
};

export default App;
