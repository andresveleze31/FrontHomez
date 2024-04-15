import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterArrendadorComponent } from './register-arrendador.component';

describe('RegisterArrendadorComponent', () => {
  let component: RegisterArrendadorComponent;
  let fixture: ComponentFixture<RegisterArrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterArrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterArrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
