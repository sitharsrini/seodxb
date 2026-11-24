import type { ReactNode } from "react";
import { Layout } from "./components/Layout";

export default function App({ path, children }: { path: string; children: ReactNode }) {
  return <Layout path={path}>{children}</Layout>;
}
