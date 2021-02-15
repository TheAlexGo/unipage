import { Word } from "./Word";

export const Words =( { words } ) => {
  if(!words) {
    return null;
  }
  return words.map(word => <Word word={ word.symb } classW={ word.class } key={ word.id } />);
}
