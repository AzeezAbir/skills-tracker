import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tabsy from "./components/tabs";
import Ul from "./components/Buttons/ul";
import GroupSubjects from "./components/Buttons/Verticlesub";
import Subjects from "./components/Subjects";
import Nav from "./components/Nav";
import Homebtn from "./components/Buttons/Homebtn";
import "./styles/App.css";
import { Route, Routes, Outlet } from "react-router";
import BoxBasic from "./components/BoxBasic";
import Skill from "./pages/skill";
import Home from "./pages/Home";
import C12 from "./pages/C12";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<div />} />
          <Route path="/p" element={<BoxBasic subName={"Physics"} />} />
          <Route path="/c" element={<BoxBasic subName={"Chemistry"} />} />
          <Route path="/b" element={<BoxBasic subName={"Biology"} />} />
        </Route>

        <Route path="/c12" element={<C12 />} />
      </Routes>
    </>
  );
}
