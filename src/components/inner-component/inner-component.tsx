import { Component, Host, h, Prop, Watch, Element, Listen } from '@stencil/core';

@Component( {
  tag: 'inner-component',
  styleUrl: 'inner-component.css',
  shadow: true,
} )
export class InnerComponent {

  @Element() element: HTMLElement;

  foo2: boolean = false;

  @Prop() foo: boolean;

  connectedCallback () {
    console.log( "connected-callback" );
    this.foo2 = !this.foo2;
    console.log( this.foo2 );
  }

  componentWillLoad () {
    console.log( "component-will-mount" );
    this.foo2 = !this.foo2;
    console.log( this.foo2 );
  }

  componentWillRender () {
    console.log( "component-will-render" );
    console.log( this.foo2 );
  }

  componentDidRender () {
    console.log( "component-did-render" );
    console.log( this.foo2 );
  }

  componentDidLoad () {
    console.log( "component-did-load" );
  }

  disconnectedCallback () {
    console.log( "disconnected-callback" );
    this.foo2 = true;
    console.log( this.foo2 );
  }

  @Watch( "foo" )
  handleFooChange () {
    console.log( "FOO JUST CHANGED" );
  }

  componentShouldUpdate () {
    console.log( "component-should-update" );
  }

  componentWillUpdate () {
    console.log( "component-should-update" );
  }

  componentDidUpdate () {
    console.log( "component-should-update" );
  }

  dispatchFooEvent () {
    this.element.dispatchEvent( new Event( "foo", { bubbles: true, composed: true } ) );
    this.element.dispatchEvent( new Event( "foo2", { bubbles: true } ) );
  }

  @Listen( 'foo2' )
  onFoo2 () {
    console.log( "VULPEA VECINA" );
  }

  render () {
    return (
      <Host>
        <div>Foo2 is { this.foo2.toString() }</div>
        <button onClick={ () => this.foo = !this.foo }>CHANGE FOO!</button>
        <button onClick={ this.dispatchFooEvent.bind( this ) }>Dispatch foo Event</button>
      </Host>
    );
  }

}
