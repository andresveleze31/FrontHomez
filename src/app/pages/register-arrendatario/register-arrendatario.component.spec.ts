import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterArrendatarioComponent } from './register-arrendatario.component';

describe('RegisterArrendatarioComponent', () => {
  let component: RegisterArrendatarioComponent;
  let fixture: ComponentFixture<RegisterArrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterArrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterArrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
