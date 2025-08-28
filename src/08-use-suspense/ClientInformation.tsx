import { use, type Usable } from "react";
import { type User } from "./api/get-user-action";

interface Props {
  getUser: Usable<User>;
}

const ClientInformation = ({ getUser }: Props) => {
  // permite leer un valor de un recurso como promesa o contexto
  // suspendiendo la creacion hasta tener la resolucion.
  // va de la mano del componente Suspense
  const user = use(getUser);

  // const user = await getUserAction(id)

  //   useEffect(() => {
  //     getUserAction(id).then(console.log);
  //   }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>

      <p className="text-white text-2xl">{user.location}</p>
      <p className="text-white text-xl">{user.role}</p>
    </div>
  );
};

export default ClientInformation;
