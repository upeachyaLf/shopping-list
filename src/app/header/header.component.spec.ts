import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from '../services/auth.service';

let fixture: ComponentFixture<HeaderComponent>;
let component: HeaderComponent;
let authService: AuthService;

class MockAuthService {}

describe('HeaderComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  it('should create header component', () => {
    expect(component).toBeDefined();
  });

  it('should contain text Recipe Book', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    expect(headerElement.textContent).toContain('Recipe Book');
  });

  it('should have <a> tag with Recipe Book', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const a = headerElement.querySelector('a');
    expect(a.textContent).toEqual('Recipe Book');
  });
});
