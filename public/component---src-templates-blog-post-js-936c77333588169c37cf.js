(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogPostTemplate",function(){return d}),n.d(t,"pageQuery",function(){return E});var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=n(235),s=n(186),i=n.n(s),m=n(167),p=n(159),u=n(202),d=function(e){var t=e.content,n=e.contentComponent,a=e.description,c=e.tags,l=e.title,s=e.helmet,i=n||u.b;return r.a.createElement("section",{className:"section"},s||"",r.a.createElement("div",{className:"container content"},r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column is-10 is-offset-1"},r.a.createElement("h1",{className:"title is-size-2 has-text-weight-bold is-bold-light"},l),r.a.createElement("p",null,a),r.a.createElement(i,{content:t}),c&&c.length?r.a.createElement("div",{style:{marginTop:"4rem"}},r.a.createElement("h4",null,"Tags"),r.a.createElement("ul",{className:"taglist"},c.map(function(e){return r.a.createElement("li",{key:e+"tag"},r.a.createElement(m.Link,{to:"/tags/"+Object(o.kebabCase)(e)+"/"},e))}))):null))))};d.propTypes={content:l.a.node.isRequired,contentComponent:l.a.func,description:l.a.string,title:l.a.string,helmet:l.a.object};var f=function(e){var t=e.data.markdownRemark;return r.a.createElement(p.a,null,r.a.createElement(d,{content:t.html,contentComponent:u.a,description:t.frontmatter.description,helmet:r.a.createElement(i.a,{titleTemplate:"%s | Blog"},r.a.createElement("title",null,""+t.frontmatter.title),r.a.createElement("meta",{name:"description",content:""+t.frontmatter.description})),tags:t.frontmatter.tags,title:t.frontmatter.title}))};f.propTypes={data:l.a.shape({markdownRemark:l.a.object})},t.default=f;var E="1562462377"},202:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=function(e){var t=e.content,n=e.className;return r.a.createElement("div",{className:n,dangerouslySetInnerHTML:{__html:t}})},s=function(e){var t=e.content,n=e.className;return r.a.createElement("div",{className:n},t)};s.propTypes={content:l.a.node,className:l.a.string},o.propTypes=s.propTypes,t.b=s}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-936c77333588169c37cf.js.map