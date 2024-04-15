import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropiedadComponent } from './create-propiedad.component';

describe('CreatePropiedadComponent', () => {
  let component: CreatePropiedadComponent;
  let fixture: ComponentFixture<CreatePropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePropiedadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
