import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEssentialsComponent } from './home-essentials.component';

describe('HomeEssentialsComponent', () => {
  let component: HomeEssentialsComponent;
  let fixture: ComponentFixture<HomeEssentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEssentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
