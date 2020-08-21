import { Component, OnInit } from '@angular/core';

import { Card } from '../common/models/card.model';

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
  styleUrls: ['./material-design.component.css'],
})
export class MaterialDesignComponent implements OnInit {
  cardData: Card = {
    title: 'Shiba Inu',
    subTitle: 'Dog Breed',
    description:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    imagePath: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  };
  constructor() {}

  ngOnInit(): void {}

  handleLike() {
    console.log('liked');
  }

  handleShare() {
    console.log('shared');
  }
}
