import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFolderComponent } from './tree-folder.component';

describe('TreeFolderComponent', () => {
  let component: TreeFolderComponent;
  let fixture: ComponentFixture<TreeFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeFolderComponent]
    });
    fixture = TestBed.createComponent(TreeFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
