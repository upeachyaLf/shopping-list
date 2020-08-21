import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../../common/models/card.model';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cardData: Card;
  @Output() onLike = new EventEmitter<void>();
  @Output() onShare = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  getBackgroundImage() {
    return `url('${this.cardData.imagePath}')`;
  }

  handleLike() {
    this.onLike.emit();
  }

  handleShare() {
    this.onShare.emit();
  }
}
