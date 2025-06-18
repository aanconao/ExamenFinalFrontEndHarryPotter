import { Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { HarryPotterType } from "../type.ts";
import Characters from "../components/Characters.tsx";

export const handler: Handlers<HarryPotterType[]> = {
  async GET(req, ctx) {
    const cookies = Object.fromEntries(
      (req.headers.get("Cookie") ?? "").split(";").map((c) =>
        c.trim().split("=")
      ),
    );
    const favs = cookies.favorites?.split(",") || [];
    const res = await Axios.get<HarryPotterType[]>(
      "https://hp-api.onrender.com/api/characters",
    );
    return ctx.render(res.data.filter((c) => favs.includes(c.id)));
  },
};
export default function Pages(props: PageProps<HarryPotterType[]>) {
  return (
    <>
      <h1>FAVORITOS</h1>
      {props.data.length === 0
        ? <p>No hay favoritos</p>
        : <Characters character={props.data} />}
      <a href="/">VOLVER AL LA LISTA DE PERSONAJES</a>
    </>
  );
}
