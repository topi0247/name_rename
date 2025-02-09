import { Route, Routes } from "react-router";
import { IndexPage } from "./indexPage";
import { TopPage } from "./top";

export const App = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="top" element={<TopPage />} />
    </Routes>
  );
};
