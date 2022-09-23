import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'heading-app',
  styleUrl: 'styles.css',
  shadow: true,
})
export class Heading {
  @Prop() title: string;

  @Prop() description: string;

  render() {
    return (
      <div>
        <h1 class="title">{this.title}</h1>
        <p class="description"> {this.description ? this.description : ''} </p>
      </div>
    );
  }
}
