import { useState } from "react";
import MyTitle from "./ui/MyTitle";
import MySubtitle from "./ui/MySubtitle";

const MemoHooks = () => {
  const [title, setTitle] = useState("Hola");
  const [subtitle, setSubTitle] = useState("Mundo");
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MomApp</h1>

      <MyTitle title={title} />

      <MySubtitle subtitle={subtitle} />

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
