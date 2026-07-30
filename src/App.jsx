import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CraigslistCaseStudy from './pages/CraigslistCaseStudy.jsx';
import QuizletCaseStudy from "./pages/QuizletCaseStudy";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/craigslist-redesign" element={<CraigslistCaseStudy />} />
        <Route path="/work/quizlet-redesign" element={<QuizletCaseStudy />} />
      </Routes>
    </>
  );
}