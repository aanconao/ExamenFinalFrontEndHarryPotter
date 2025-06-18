import { FunctionComponent } from "preact";
import { HarryPotterType } from "../type.ts";

type Props = {
  character: HarryPotterType;
};

const CharacterCard: FunctionComponent<Props> = ({ character }) => {
  return (
    <div>
      <a href={`/characters/${character.id}`}>
        <img src={character.image} alt={character.name} width={150} />
        <div>{character.name}</div>
      </a>
      <form method="POST" action="/favorites/add">
        <input type="hidden" name="id" value={character.id} />
        <button type="submit">Agregar a Favoritos</button>
      </form>
    </div>
  );
};

export default CharacterCard;
