import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PlaygroundService } from '../../services/playground.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements AfterViewInit {
  @ViewChild('board') board: ElementRef<HTMLCanvasElement>;
  @ViewChild('playground') playground: ElementRef<HTMLDivElement>;
  @ViewChild('dino') dino: ElementRef<HTMLImageElement>;


  constructor(private readonly playgroundService: PlaygroundService) {}

  ngAfterViewInit() {
    const boxWidth = this.playground.nativeElement.offsetWidth;
    const boxHeight = this.playground.nativeElement.offsetHeight;
    this.board.nativeElement.width = boxWidth;
    this.board.nativeElement.height = boxHeight;
    this.playgroundService.initialize(
      this.board.nativeElement.getContext('2d') as CanvasRenderingContext2D,
      {
        width: boxWidth,
        height: boxHeight,
      },
      this.dino.nativeElement,
    );
  }
}
