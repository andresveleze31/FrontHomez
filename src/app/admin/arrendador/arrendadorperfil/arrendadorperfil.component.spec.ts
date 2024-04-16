import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorperfilComponent } from './arrendadorperfil.component';

describe('ArrendadorperfilComponent', () => {
  let component: ArrendadorperfilComponent;
  let fixture: ComponentFixture<ArrendadorperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrendadorperfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendadorperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
