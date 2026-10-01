import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResenasComponet } from './resenas-componet';

describe('ResenasComponet', () => {
  let component: ResenasComponet;
  let fixture: ComponentFixture<ResenasComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenasComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(ResenasComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
