import { Component, Host, h, Prop, Watch, Listen } from '@stencil/core';

@Component( {
  tag: 'test-component',
  styleUrl: 'test-component.css',
  shadow: true,
} )
export class TestComponent {

  @Prop() foo: boolean;


  @Watch( "foo" )
  handleFooChange () {
    console.log( "FOO CHANGED HERE TOO! WTF???!!!" );
  }

  @Listen( "foo2" )
  onFoo2 () {
    console.log( "VULPE LA RADACINA!" );
  }

  render () {
    return (
      <Host>
        <h1><slot></slot></h1>
        <h1><slot name="title"></slot></h1>
        <slot name="note"></slot>
        <button onClick={ () => this.foo = !this.foo }>Foo</button>
        {
          this.foo ? <inner-component foo={ this.foo } /> : null
        }
      </Host>
    );
  }

}
