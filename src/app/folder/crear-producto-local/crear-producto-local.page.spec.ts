import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearProductoLocalPage } from './crear-producto-local.page';

describe('CrearProductoLocalPage', () => {
  let component: CrearProductoLocalPage;
  let fixture: ComponentFixture<CrearProductoLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProductoLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearProductoLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
