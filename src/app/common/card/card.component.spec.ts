import { CardComponent } from './card.component';
import { Card } from '../models/card.model';

const cardData: Card = {
  title: 'card title',
  subTitle: 'card subtitle',
  description: 'card description',
  imagePath: 'imagePath',
  liked: true,
  shared: false,
};

describe('CardComponent', () => {
  describe('Function: getBackgroundImage', () => {
    it('should return "url("imagePath")"', () => {
      const comp = new CardComponent();
      comp.cardData = cardData;
      const expectedOutput = "url('imagePath')";
      expect(comp.getBackgroundImage()).toBe(expectedOutput);
    });
  });

  describe('Function: handleLike', () => {
    it('should raise onLike event', () => {
      const comp = new CardComponent();
    });
  });
});
