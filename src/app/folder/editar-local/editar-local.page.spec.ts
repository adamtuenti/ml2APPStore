import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarLocalPage } from './editar-local.page';

describe('EditarLocalPage', () => {
  let component: EditarLocalPage;
  let fixture: ComponentFixture<EditarLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
