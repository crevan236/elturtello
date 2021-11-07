import { NO_ERRORS_SCHEMA } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of } from 'rxjs';
import { CommandLineService } from '../../services/command-line.service';
import { CommandLineComponent } from './command-line.component';

describe('CommandLineComponent', () => {
  let component: CommandLineComponent;
  let fixture: ComponentFixture<CommandLineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ CommandLineComponent ],
      providers: [
        {
          provide: CommandLineService,
          useValue: {
            errors$: of(''),
          },
        },
        {
          provide: NzMessageService,
          useValue: {
            create: () => {},
          },
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
