import { Node, input, Input, EventMouse, Component, _decorator } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
  start() {
    input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
  }

  update(deltaTime: number) {}

  onMouseUp(e: EventMouse) {
    if (e.getButton() === 0) {
      this.jumpStep(1);
    } else if (e.getButton() === 2) {
      this.jumpStep(2);
    }
  }

  jumpStep(step: number) {}
}
