import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleimgComponent } from './toogleimg.component';

describe('ToogleimgComponent', () => {
  let component: ToogleimgComponent;
  let fixture: ComponentFixture<ToogleimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToogleimgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToogleimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
