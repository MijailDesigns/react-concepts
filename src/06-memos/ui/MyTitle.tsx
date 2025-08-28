import React from "react";

interface Props {
  title: string;
}

// evita que el componente se vuelva renderizar si si props no han cambiado
const MyTitle = React.memo(({ title }: Props) => {
  console.log("MyTitle re-render");
  return <h1 className="text-3xl">{title}</h1>;
});

export default MyTitle;
