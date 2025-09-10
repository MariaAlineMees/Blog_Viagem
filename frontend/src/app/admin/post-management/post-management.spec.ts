import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManagement } from './post-management';

describe('PostManagement', () => {
  let component: PostManagement;
  let fixture: ComponentFixture<PostManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
