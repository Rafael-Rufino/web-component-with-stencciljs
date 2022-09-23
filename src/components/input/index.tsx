import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-app',
  styleUrl: 'styles.css',
  shadow: true,
})
export class Heading {
  @Prop() id: string;
  @Prop() label?: string;
  @Prop() type: 'text' | 'number' | 'date' | 'email' | 'password' | 'checkbox';
  @Prop() placeholder?: string;
  @Prop() onChange: (event: CustomEvent<HTMLInputElement>) => void;
  @Prop() value?: string;

  render() {
    return (
      <div class="container">
        <label class="label" htmlFor={this.id}>
          {this.label && this.label}
        </label>
        <input class="input" type={this.type} onChange={this.onChange} placeholder={this.placeholder} value={this.value} />
      </div>
    );
  }
}
