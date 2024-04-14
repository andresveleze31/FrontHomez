import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebararrendatarioComponent } from './sidebararrendatario.component';

describe('SidebararrendatarioComponent', () => {
  let component: SidebararrendatarioComponent;
  let fixture: ComponentFixture<SidebararrendatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebararrendatarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebararrendatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
