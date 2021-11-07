import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBusModule } from '../command-bus/command-bus.module';
import { CommandLineComponent } from './containers/command-line/command-line.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  imports: [
    CommonModule,
    CommandBusModule,
    ReactiveFormsModule,
    NzCodeEditorModule,
    NzMessageModule,
  ],
  declarations: [CommandLineComponent],
  exports: [CommandLineComponent],
})
export class CommandLineModule { }
