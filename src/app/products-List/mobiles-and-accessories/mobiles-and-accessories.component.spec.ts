import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesAndAccessoriesComponent } from './mobiles-and-accessories.component';

describe('MobilesAndAccessoriesComponent', () => {
  let component: MobilesAndAccessoriesComponent;
  let fixture: ComponentFixture<MobilesAndAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilesAndAccessoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilesAndAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
