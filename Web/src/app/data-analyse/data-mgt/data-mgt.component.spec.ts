import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMgtComponent } from './data-mgt.component';

describe('DataMgtComponent', () => {
  let component: DataMgtComponent;
  let fixture: ComponentFixture<DataMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataMgtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
