import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebararrendadorComponent } from './sidebararrendador.component';

describe('SidebararrendadorComponent', () => {
  let component: SidebararrendadorComponent;
  let fixture: ComponentFixture<SidebararrendadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebararrendadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebararrendadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
