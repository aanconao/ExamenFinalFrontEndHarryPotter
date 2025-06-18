import { Handlers, PageProps } from "$fresh/server.ts";
import { HarryPotterType } from "../../type.ts";

export const handler: Handlers<HarryPotterType | null> = {
  async GET(_req, ctx) {
    const { id } = ctx.params;
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const data: HarryPotterType[] = await res.json();

    const character = data.find((c) => c.id === id) || null;
    return ctx.render(character);
  },
};

export default function CharacterPage(
  { data }: PageProps<HarryPotterType | null>,
) {
  if (!data) {
    return <h1>No se ha encontrado el personaje</h1>;
  }
  return (
    <div class="page-container">
      <div class="character-card">
        <h1>{data.name}</h1>
        <img src={data.image} alt={data.name} width={200} />
        <p>
          <strong>Actor:</strong>
          {data.actor}
        </p>
        <p>
          <strong>Alternate_names</strong>
          {data.alternate_names.length > 0
            ? (
              <ul>
                {data.alternate_names.map((name) => (
                  <li key={data.id}>{name}</li>
                ))}
              </ul>
            )
            : <p>Ningun nombre alterno</p>}
        </p>
        <p>
          <strong>species:</strong>
          {data.species}
        </p>
        <p>
          <strong>gender:</strong>
          {data.gender}
        </p>
        <p>
          <strong>house:</strong>
          {data.house}
        </p>
        <p>
          <strong>dateOfBirth:</strong>
          {data.dateOfBirth}
        </p>
        <p>
          <strong>yearOfBirth:</strong>
          {data.yearOfBirth}
        </p>
        <p>
          <strong>wizard:</strong>
          {data.wizard ? "Es mago" : "No es mago"}
        </p>
        <p>
          <strong>ancestry:</strong>
          {data.ancestry}
        </p>
        <p>
          <strong>eyeColour:</strong>
          {data.eyeColour}
        </p>
        <p>
          <strong>hairColour:</strong>
          {data.hairColour}
        </p>
        <p>
          <strong>Wand:</strong>
          <ul>
            <li>
              <strong>Wood:</strong>
              {data.wand.wood || "Desconocido"}
              <strong>Core:</strong>
              {data.wand.core || "Desconocido"}
              <strong>Length:</strong>
              {data.wand.length || "Desconocido"}
            </li>
          </ul>
        </p>
        <p>
          <strong>patronus:</strong>
          {data.patronus}
        </p>
        <p>
          <strong>hogwartsStudent:</strong>
          {data.hogwartsStudent ? "Estudiante" : "No Estudiante"}
        </p>
        <p>
          <strong>hogwartsStaff:</strong>
          {data.hogwartsStaff
            ? "Personal de hogwarts"
            : "No es personal de hofwarts"}
        </p>
        <p>
          <strong>actor:</strong>
          {data.actor}
        </p>
        <p>
          <strong>alternate_actors:</strong>
          {data.alternate_actors.length > 0
            ? (
              <ul>
                {data.alternate_actors.map((actor) => (
                  <li key={data.id}>{actor}</li>
                ))}
              </ul>
            )
            : <p>Ningun nombre alterno</p>}
        </p>
        <p>
          <strong>Alive:</strong>
          {data.alive ? "Vivo" : "Muerto"}
        </p>
      </div>
      <a href="/">
        Volver al listado de personajes
      </a>
    </div>
  );
}
