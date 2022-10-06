import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatmenuComponent } from './matmenu.component';

const matmenucomponent = new MatmenuComponent();
describe('MatmenuComponent', () => {
  let component: MatmenuComponent;
  let fixture: ComponentFixture<MatmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatmenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatmenuComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MatmenuComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('testing function', () => {
    expect(matmenucomponent.showMainList).toBeDefined();
  });
});
