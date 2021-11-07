import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandService } from './command.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CommandService],
})
export class CommandBusModule { }
