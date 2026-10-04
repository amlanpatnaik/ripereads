import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Book from "./pages/Book";
import { AgesIndex, AgeHub, GradesIndex, GradeHub, SeriesIndex, SeriesHub } from "./pages/Hubs";
import { Lists, Vibe, ReadNextIndex, ReadNext } from "./pages/Lists";
import { BookishLifeIndex, BookishLifePost } from "./pages/BookishLife";
import Challenged from "./pages/Challenged";
import About from "./pages/About";
import { Method, Shelf, Corrections, EditorialPolicy } from "./pages/Trust";
import Find from "./pages/Find";
import Quiz from "./pages/Quiz";
import Disagree from "./pages/Disagree";
import CardPage from "./pages/CardPage";
import NotFound from "./pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/books/:slug" element={<Book />} />
          <Route path="/ages" element={<AgesIndex />} />
          <Route path="/ages/:band" element={<AgeHub />} />
          <Route path="/grades" element={<GradesIndex />} />
          <Route path="/grades/:grade" element={<GradeHub />} />
          <Route path="/series" element={<SeriesIndex />} />
          <Route path="/series/:slug" element={<SeriesHub />} />
          <Route path="/read-next" element={<ReadNextIndex />} />
          <Route path="/read-next/:slug" element={<ReadNext />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/vibes/:slug" element={<Vibe />} />
          <Route path="/bookish-life" element={<BookishLifeIndex />} />
          <Route path="/bookish-life/:slug" element={<BookishLifePost />} />
          <Route path="/challenged" element={<Challenged />} />
          <Route path="/about" element={<About />} />
          <Route path="/method" element={<Method />} />
          <Route path="/shelf" element={<Shelf />} />
          <Route path="/corrections" element={<Corrections />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/find" element={<Find />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/disagree" element={<Disagree />} />
          <Route path="/og/:slug" element={<CardPage kind="og" />} />
          <Route path="/pin/:slug" element={<CardPage kind="pin" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
