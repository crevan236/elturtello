import { Injectable } from '@angular/core';
import { CommandService } from '../../command-bus/command.service';
import { CommandResolver } from '../command-resolver/command-resolver';
import { ENTITY_INITIAL_STATE } from '../consts';
import { PlaygroundEntity } from '../entities/playground-entity';
import { PlaygroundSize } from '../interfaces/playground-size';

@Injectable({
  providedIn: 'root',
})
export class PlaygroundService {
  private entity: PlaygroundEntity;

  constructor(
    private readonly commandBus: CommandService,
    private readonly commandResolver: CommandResolver
  ) {}

  initialize(ctx: CanvasRenderingContext2D, playgroundSize: PlaygroundSize, image: HTMLImageElement) {
    this.entity = new PlaygroundEntity(
      {
        ...ENTITY_INITIAL_STATE,
        playgroundSize,
        image,
      },
      ctx
    );

    this.commandBus.commandStream$.subscribe((command) =>
      this.commandResolver.resolveCommand(command, this.entity)
    );
  }
}
