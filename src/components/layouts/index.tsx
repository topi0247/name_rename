import { ReactNode } from "react";
import { Link } from "react-router";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-300">
      <header>
        <ul className="flex gap-4 p-4">
          <li>
            <Link to="/">index</Link>
          </li>
          <li>
            <Link to="/top">top</Link>
          </li>
        </ul>
      </header>
      <main className="grow">{children}</main>
      <footer className="container flex justify-end gap-4">
        <p>© 2025 とぴ</p>
        <p>
          <a href="" target="_blank">
            contact
          </a>
        </p>
      </footer>
    </div>
  );
};
