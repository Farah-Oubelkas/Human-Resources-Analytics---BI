import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentAddComponent } from './recruitment-add.component';

describe('RecruitmentAddComponent', () => {
  let component: RecruitmentAddComponent;
  let fixture: ComponentFixture<RecruitmentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
