import { Component, OnInit } from '@angular/core';

import { Card } from '../common/models/card.model';

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
  styleUrls: ['./material-design.component.css'],
})
export class MaterialDesignComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  cardData: Card = {
    title: 'Shiba Inu',
    subTitle: 'Dog Breed',
    description:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    imagePath: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
  };

  checkBoxes = [
    { label: 'box one', checked: false },
    { label: 'box two', checked: true },
  ];

  handleLike() {
    console.log('liked');
  }

  handleShare() {
    console.log('shared');
  }

  handleChange(event: { checked: boolean }, index: number) {
    this.checkBoxes[index].checked = event.checked;
    console.log('box', this.checkBoxes[index]);
  }
}
