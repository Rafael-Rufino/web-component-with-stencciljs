import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'checktext-app',
  styleUrl: 'styles.css',
  shadow: true,
})
export class CheckText {
  @Prop() id: string;
  @Prop() name: string;
  @Prop() value?: string;
  @Prop() onChange: (event: CustomEvent<HTMLInputElement>) => void;

  render() {
    return (
      <div class="container">
        <input type="checkbox" id={this.id} value={this.value} onChange={this.onChange} />
        <label class="text" id={this.id}>
          {this.name}
        </label>
      </div>
    );
  }
}
