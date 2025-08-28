import { useCallback, useState } from "react";
import MyTitle from "./ui/MyTitle";
import MySubtitle from "./ui/MySubtitle";

const MemoHooks = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubTitle] = useState("Mundo");

  // useCallback se usa cuando quiero memorizar un funcion que define en un
  // componente que se esta renderizando pero el componente que usa la funcion no lo hace
  const handleMyAPICall = useCallback(() => {
    console.log("Llamar a mi API ", subtitle);
  }, [subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>

      <MyTitle title={title} />

      <MySubtitle subtitle={subtitle} callMyAPI={handleMyAPICall} />

      <button
        onClick={() => setTitle("Hello, " + new Date().getTime())}
        className="bg-blue-500 text-whte px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar titulo
      </button>

      <button
        // onClick={() => setSubTitle("World " + new Date().getTime())}
        onClick={() => setSubTitle("World")}
        className="bg-blue-500 text-whte px-4 py-2 rounded-md cursor-pointer"
      >
        Cambiar subtitulo
      </button>
    </div>
  );
};

export default MemoHooks;
