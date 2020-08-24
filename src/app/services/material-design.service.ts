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

  // NOTE: object.assign is for avoiding mutations
  cardData = new BehaviorSubject<Card>(Object.assign({}, this.cardDataInitial));

  handleLike(isLiked: boolean) {
    let newCardData: Card = this.cardData.getValue();
    newCardData.liked = isLiked;
    this.cardData.next(newCardData);
  }

  handleShare(isShared: boolean) {
    let newCardData: Card = this.cardData.getValue();
    newCardData.shared = isShared;
    this.cardData.next(newCardData);
  }
}
