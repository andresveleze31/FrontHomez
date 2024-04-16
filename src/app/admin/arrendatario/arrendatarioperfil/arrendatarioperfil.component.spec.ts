import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatarioperfilComponent } from './arrendatarioperfil.component';

describe('ArrendatarioperfilComponent', () => {
  let component: ArrendatarioperfilComponent;
  let fixture: ComponentFixture<ArrendatarioperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrendatarioperfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendatarioperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
