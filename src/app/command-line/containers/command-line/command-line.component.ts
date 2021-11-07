import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommandLineService } from '../../services/command-line.service';
import { debounceTime, filter, takeUntil, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-command-line',
  templateUrl: './command-line.component.html',
  styleUrls: ['./command-line.component.css'],
})
export class CommandLineComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  commands = new FormControl('');
  errors$: Observable<string> = this.commandLineService.errors$;

  @Output()
  reloading = new EventEmitter<boolean>();

  constructor(
    private readonly commandLineService: CommandLineService,
    private readonly message: NzMessageService
  ) {}

  ngOnInit() {
    this.commands.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.reloading.emit(true)),
        debounceTime(2000),
        tap(() => this.reloading.emit(false))
      )
      .subscribe((stringifiedCommands: string) =>
        this.commandLineService.interpretCommands(stringifiedCommands)
      );

    this.commandLineService.errors$
      .pipe(
        filter((error) => !!error),
        takeUntil(this.destroy$)
      )
      .subscribe((error) => {
        this.message.create('error', error);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
