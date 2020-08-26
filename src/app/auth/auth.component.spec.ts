import { AuthComponent } from './auth.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AuthService } from '../services/auth.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [AuthService],
    });

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
  });
});
