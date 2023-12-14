import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeePageComponent } from './update-employee-page.component';

describe('UpdateEmployeePageComponent', () => {
  let component: UpdateEmployeePageComponent;
  let fixture: ComponentFixture<UpdateEmployeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
