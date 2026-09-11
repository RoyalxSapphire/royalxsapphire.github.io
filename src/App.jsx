import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CraigslistCaseStudy from './pages/CraigslistCaseStudy.jsx';
import QuizletCaseStudy from "./pages/QuizletCaseStudy.jsx";
import OregonRoad83CaseStudy from "./pages/OregonRoad83CaseStudy.jsx";
import HouseplantCareCaseStudy from "./pages/HouseplantCareCaseStudy.jsx";

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
        <Route path="/work/oregon-road-83" element={<OregonRoad83CaseStudy />} />
        <Route path="/work/houseplant-care-app" element={<HouseplantCareCaseStudy />} />
      </Routes>
    </>
  );
}