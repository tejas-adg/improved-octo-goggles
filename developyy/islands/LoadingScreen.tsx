import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export default function LoadingScreen() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Delay to show the animation even on fast loads (optional)
      setTimeout(() => setLoaded(true), 300);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      id="loading-screen"
      class={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${
        loaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <h1 class="shadow-dance-text text-9xl font-['Press_Start_2P']">Developyy</h1>
    </div>
  );
}