import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import MinimalLayout from "./components/MinimalLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Token from "./pages/Token";
import HowItWorks from "./pages/HowItWorks";
import Transparency from "./pages/Transparency";
import Redemption from "./pages/Redemption";
import Whitepaper from "./pages/Whitepaper";
import FAQ from "./pages/FAQ";
import Risks from "./pages/Risks";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Restricted from "./pages/Restricted";
import Blocked from "./pages/Blocked";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Cookies from "./pages/legal/Cookies";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/blocked" element={<MinimalLayout><Blocked /></MinimalLayout>} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="token" element={<Token />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="transparency" element={<Transparency />} />
          <Route path="redemption" element={<Redemption />} />
          <Route path="whitepaper" element={<Whitepaper />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="risks" element={<Risks />} />
          <Route path="contact" element={<Contact />} />
          <Route path="media" element={<Media />} />
          <Route path="restricted" element={<Restricted />} />
          <Route path="legal/terms" element={<Terms />} />
          <Route path="legal/privacy" element={<Privacy />} />
          <Route path="legal/cookies" element={<Cookies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
