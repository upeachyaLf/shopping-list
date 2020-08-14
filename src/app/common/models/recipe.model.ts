import { Ingredent } from './ingredent.model';

export interface Recipe {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredents: Array<Ingredent>;
}
