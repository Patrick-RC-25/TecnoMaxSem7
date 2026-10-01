import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NosotrosComponet } from './nosotros-componet';

describe('NosotrosComponet', () => {
  let component: NosotrosComponet;
  let fixture: ComponentFixture<NosotrosComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(NosotrosComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
