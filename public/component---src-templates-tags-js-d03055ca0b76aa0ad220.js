(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"tagPageQuery",function(){return d});var n=a(7),s=a.n(n),l=a(0),r=a.n(l),i=a(183),o=a.n(i),c=a(166),m=a(158),u=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges.map(function(e){return r.a.createElement("li",{key:e.node.fields.slug},r.a.createElement(c.Link,{to:e.node.fields.slug},r.a.createElement("h2",{className:"is-size-2"},e.node.frontmatter.title)))}),t=this.props.pageContext.tag,a=this.props.data.site.siteMetadata.title,n=this.props.data.allMarkdownRemark.totalCount,s=n+" post"+(1===n?"":"s")+" tagged with “"+t+"”";return r.a.createElement(m.a,null,r.a.createElement("section",{className:"section"},r.a.createElement(o.a,{title:t+" | "+a}),r.a.createElement("div",{className:"container content"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1",style:{marginBottom:"6rem"}},r.a.createElement("h3",{className:"title is-size-4 is-bold-light"},s),r.a.createElement("ul",{className:"taglist"},e),r.a.createElement("p",null,r.a.createElement(c.Link,{to:"/tags/"},"Browse all tags")))))))},t}(r.a.Component);t.default=u;var d="4202630850"}}]);
//# sourceMappingURL=component---src-templates-tags-js-d03055ca0b76aa0ad220.js.map