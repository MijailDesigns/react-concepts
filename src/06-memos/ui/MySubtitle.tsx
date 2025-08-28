import React from "react";

interface Props {
  subtitle: string;

  callMyAPI: () => void;
}

const MySubtitle = React.memo(({ subtitle, callMyAPI }: Props) => {
  console.log("MySubTitle re-render");
  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>

      <button
        onClick={callMyAPI}
        className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
      >
        Llamar a funcion
      </button>
    </>
  );
});

export default MySubtitle;
