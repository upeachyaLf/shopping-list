import { Injectable } from '@angular/core';

import { Card } from '../common/models/card.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MaterialDesignService {
  constructor() {}

  private cardDataInitial: Card = {
    title: 'Shiba Inu',
    subTitle: 'Dog Breed',
    description:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    imagePath: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    liked: false,
    shared: false,
  };

  cardData = new BehaviorSubject<Card>(this.cardDataInitial);
}
