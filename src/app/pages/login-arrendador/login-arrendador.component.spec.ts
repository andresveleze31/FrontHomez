import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginArrendadorComponent } from './login-arrendador.component';

describe('LoginArrendadorComponent', () => {
  let component: LoginArrendadorComponent;
  let fixture: ComponentFixture<LoginArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
