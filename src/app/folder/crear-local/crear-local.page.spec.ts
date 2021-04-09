import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearLocalPage } from './crear-local.page';

describe('CrearLocalPage', () => {
  let component: CrearLocalPage;
  let fixture: ComponentFixture<CrearLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
