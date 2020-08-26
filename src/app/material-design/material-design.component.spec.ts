import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { MaterialDesignComponent } from './material-design.component';
import { MaterialDesignService } from '../services/material-design.service';

class MockMaterialService {
  cardData = of(1, 2, 3);
  handleLike = () => {};
}

let comp: MaterialDesignComponent;
let userService: MaterialDesignService;

describe('MaterialDesignComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        MaterialDesignComponent,
        { provide: MaterialDesignService, useClass: MockMaterialService },
      ],
    });
    // inject both the component and the dependent service.
    comp = TestBed.inject(MaterialDesignComponent);
    userService = TestBed.inject(MaterialDesignService);
  });

  it('should call userService.handleLike once when calling comp.handleLike', () => {
    comp.ngOnInit();
    spyOn(userService, 'handleLike');
    //NOTE: spyOn userService befor calling comp.handleLike
    comp.handleLike();
    expect(userService.handleLike).toHaveBeenCalledTimes(1);
  });
});
