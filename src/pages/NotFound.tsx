import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="404 — Page not found" path="/404" noindex />
      <section className="container-x py-32 text-center">
        <p className="font-serif text-gold text-8xl">404</p>
        <h1 className="display-2 text-teal mt-4">Page not found</h1>
        <p className="mt-4 text-ink/70">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">Back to home</Link>
          <Link to="/faq" className="btn-secondary text-teal">FAQ</Link>
        </div>
      </section>
    </>
  );
}
