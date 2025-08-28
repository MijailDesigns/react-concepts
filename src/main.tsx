import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
// import MemoHooks from "./06-memos/MemoHooks";
// import MemoCounter from "./06-memos/MemoCounter";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
import ClientInformation from "./08-use-suspense/ClientInformation";
import { getUserAction } from "./08-use-suspense/api/get-user-action";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import FocusScreen from "./04-useRef/FocusScreen";
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
// import { PokemonPage } from "./03-examples/PokemongPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen />
    <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHooks /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* // el Suspense Mostrar una interfaz de usuario de respaldo (un "fallback", como un
    spinner de carga) // mientras espera que la carga de datos de sus
    componentes hijos se complete. */}
    <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense>
  </StrictMode>
);
