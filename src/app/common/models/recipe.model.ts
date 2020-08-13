import { Ingredent } from './ingredent.model';

export interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredents: Array<Ingredent>;
}
