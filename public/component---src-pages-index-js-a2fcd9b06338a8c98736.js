(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{152:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return p}),t.d(a,"pageQuery",function(){return u});var n=t(7),r=t.n(n),l=t(0),s=t.n(l),c=t(4),i=t.n(c),o=t(167),m=t(159),p=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return s.a.createElement(m.a,null,s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"content"},s.a.createElement("h1",{className:"has-text-weight-bold is-size-2"},"Latest Stories")),e.map(function(e){var a=e.node;return s.a.createElement("div",{className:"content",style:{border:"1px solid #333",padding:"2em 4em"},key:a.id},s.a.createElement("p",null,s.a.createElement(o.Link,{className:"has-text-primary",to:a.fields.slug},a.frontmatter.title),s.a.createElement("span",null," • "),s.a.createElement("small",null,a.frontmatter.date)),s.a.createElement("p",null,a.excerpt,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(o.Link,{className:"button is-small",to:a.fields.slug},"Keep Reading →")))}))))},a}(s.a.Component);p.propTypes={data:i.a.shape({allMarkdownRemark:i.a.shape({edges:i.a.array})})};var u="848929140"}}]);
//# sourceMappingURL=component---src-pages-index-js-a2fcd9b06338a8c98736.js.map