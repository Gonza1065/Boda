import { Presentacion } from "./components/Presentation.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Invitacion } from "./components/Invitation.jsx";
import { Church } from "./components/Church.jsx";
import { Fiesta } from "./components/Fiesta.jsx";
import { Music } from "./components/Music.jsx";
import { Gifts } from "./components/Gifts.jsx";
import "./App.css";
function App() {
  return (
    <>
      <main className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Presentacion />} />
            <Route path="/invitacion" element={<Invitacion />} />
            <Route path="/iglesia" element={<Church />} />
            <Route path="/fiesta" element={<Fiesta />} />
            <Route path="/musica" element={<Music />} />
            <Route path="/regalo" element={<Gifts />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
