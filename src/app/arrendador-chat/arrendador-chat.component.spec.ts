import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendadorChatComponent } from './arrendador-chat.component';

describe('ArrendadorChatComponent', () => {
  let component: ArrendadorChatComponent;
  let fixture: ComponentFixture<ArrendadorChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrendadorChatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrendadorChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
