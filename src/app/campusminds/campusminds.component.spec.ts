import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusmindsComponent } from './campusminds.component';

describe('CampusmindsComponent', () => {
  let component: CampusmindsComponent;
  let fixture: ComponentFixture<CampusmindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampusmindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusmindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
