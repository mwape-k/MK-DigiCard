import "./App.css";
import Lanyard from "./components/lanyard";

function App() {
  return (
    <>
      <div
        className="ditherComponent"
        style={{ width: "100vw", height: "100%" }}
      >
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
      <div className="spacer"></div>
      <div className="button-container">
        <a
          href="https://mwape-kurete-portfolio.vercel.app/"
          className="link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        <a
          href="http://www.linkedin.com/in/mwape-kurete-"
          className="link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Mwape-Kurete?tab=overview&from=2025-05-01&to=2025-05-06"
          className="link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.behance.net/mwapekurete2"
          className="link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behance
        </a>
      </div>
    </>
  );
}

export default App;
