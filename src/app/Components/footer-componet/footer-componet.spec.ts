import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponet } from './footer-componet';

describe('FooterComponet', () => {
  let component: FooterComponet;
  let fixture: ComponentFixture<FooterComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
