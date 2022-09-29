import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'button-app',
  styleUrl: 'styles.css',
  shadow: true,
})
export class Button {
  @Prop() name: string;

  @Prop() onClick: (event: MouseEvent) => void;

  @Prop() type?: 'button' | 'submit' | 'reset';

  render() {
    return (
      <button class="button" type={this.type} onClick={this.onClick}>
        {this.name}
      </button>
    );
  }
}
