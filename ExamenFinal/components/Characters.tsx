import { FunctionComponent } from "preact";
import { HarryPotterType } from "../type.ts";
import CharacterCard from "./CharacterCard.tsx";

type Props = {
  character: HarryPotterType[];
};
const Characters: FunctionComponent<Props> = (props) => {
  const characters = props.character;
  return (
    <div class="cards-grid">
      {characters.map((ch) => <CharacterCard key={ch.name} character={ch} />)}
    </div>
  );
};
export default Characters;
