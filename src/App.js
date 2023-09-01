import { NavBar } from "./components/NavBar.jsx";
import { Presentacion } from "./components/Presentation.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Invitacion } from "./components/Invitation.jsx";
import { Church } from "./components/Church.jsx";
import { Fiesta } from "./components/Fiesta.jsx";
import { Music } from "./components/Music.jsx";
import "./App.css";
import { useBackgroundImage } from "./components/context.jsx";
function App() {
  const { backgroundStyles } = useBackgroundImage();
  return (
    // style={backgroundStyles}
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Presentacion />} />
            <Route path="/invitacion" element={<Invitacion />} />
            <Route path="/iglesia" element={<Church />} />
            <Route path="/fiesta" element={<Fiesta />} />
            <Route path="/musica" element={<Music />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
