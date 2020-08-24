import { Component, OnInit } from '@angular/core';

import { Card } from '../common/models/card.model';
import { MaterialDesignService } from '../services/material-design.service';

@Component({
  selector: 'app-material-design',
  templateUrl: './material-design.component.html',
  styleUrls: ['./material-design.component.css'],
})
export class MaterialDesignComponent implements OnInit {
  cardData: Card;

  constructor(private mdService: MaterialDesignService) {}

  ngOnInit(): void {
    this.mdService.cardData.subscribe((data) => {
      this.cardData = data;
    });
  }

  handleLike() {
    this.cardData.liked = !this.cardData.liked;
  }

  handleShare() {
    this.cardData.shared = !this.cardData.shared;
  }
}
