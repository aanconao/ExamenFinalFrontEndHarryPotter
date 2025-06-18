import { Handlers, PageProps } from "$fresh/server.ts";
import Characters from "../components/Characters.tsx";
import { HarryPotterType } from "../type.ts";
import Axios from "npm:axios";

export const handler: Handlers<HarryPotterType[]> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const search = url.searchParams.get("search");
    const res = await Axios.get<HarryPotterType[]>(
      "https://hp-api.onrender.com/api/characters",
    );
    const data = res.data;
    if (search) {
      const found = data.find((c) => c.name === search);
      if (found) {
        const redirectUrl = `${url.origin}/characters/${found.id}`;
        return Response.redirect(redirectUrl, 302);
      }
    }
    return ctx.render(data);
  },
};

export default function Page(props: PageProps<HarryPotterType[]>) {
  return (
    <div>
      <a href="/favorites">Ver Favoritos</a>
      <Characters character={props.data} />
    </div>
  );
}
