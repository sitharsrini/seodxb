import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";

const PAGES: Record<string, () => React.JSX.Element> = {
  "/": Home,
  "/services": Services,
  "/results": Results,
  "/about": About,
  "/contact": Contact,
};

export default function App({ path }: { path: string }) {
  const Page = PAGES[path] ?? Home;
  return (
    <Layout path={path}>
      <Page />
    </Layout>
  );
}
