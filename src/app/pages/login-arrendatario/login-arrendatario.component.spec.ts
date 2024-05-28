import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginArrendatarioComponent } from './login-arrendatario.component';

describe('LoginArrendatarioComponent', () => {
  let component: LoginArrendatarioComponent;
  let fixture: ComponentFixture<LoginArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
