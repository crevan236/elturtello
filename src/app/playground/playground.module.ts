import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './containers/playground/playground.component';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule
  ],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule { }
