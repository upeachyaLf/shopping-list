import { MaterialDesignService } from './material-design.service';
import { Card } from '../common/models/card.model';

describe('MaterialDesignService', () => {
  let service: MaterialDesignService;
  beforeEach(() => {
    service = new MaterialDesignService();
  });

  describe('Function: handleLike', () => {
    it('should convert data.liked to true when true is passed to handleLike', (done: DoneFn) => {
      service.handleLike(true);
      service.cardData.subscribe((data: Card) => {
        expect(data.liked).toBe(true);
        done();
      });
    });
    it('should convert data.liked to false when false is passed to handleLike', (done: DoneFn) => {
      service.handleLike(false);
      service.cardData.subscribe((data: Card) => {
        expect(data.liked).toBe(false);
        done();
      });
    });
  });
});
