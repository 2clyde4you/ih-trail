define(["lodash","coreUtils"],function(n,t){return function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=29)}({0:function(n,t,e){"use strict";function r(n){return U.get(n,["conversionData","desktopOnly"],!1)}function o(n){return"text"===U.get(n,["conversionData","category"])}function i(n){return"graphic"===U.get(n,["conversionData","category"])||c(n)}function u(n){return n&&"wysiwyg.viewer.components.Group"===n.componentType}function a(n){return"columns"===U.get(n,["conversionData","category"])}function c(n){return"photo"===U.get(n,["conversionData","category"])}function s(n){return"masterPage"===U.get(n,"id")}function f(n){var t=function(n){return U.get(n.conversionData,"isScreenWidth",!1)||U.get(n.conversionData,"stretchHorizontally",!1)||U.some(n.components,t)};return T(n)||t(n)}function l(n){return U.get(n.conversionData,"isScreenWidth",!1)||U.some(n.components,l)}function m(n,t,e){void 0===t&&(t=0),void 0===e&&(e=0),U.forEach(n,function(n){n.layout.x+=t,n.layout.y+=e})}function v(n,t,e){p(n,[t],e),m([t],-n.layout.x,-n.layout.y)}function p(n,t,e){var r=S(n);t.length&&r&&(e=void 0!==e?e:r.length,r.splice.apply(r,[e,0].concat(t)))}function g(n,t){var e=S(n);U.remove(e,function(n){return U.includes(t,n)})}function y(n,t){if(u(n)){var e=U.findIndex(t.components,{id:n.id});U.forEach(n.components.reverse(),function(r){p(t,[r],e),m([r],n.layout.x,n.layout.y)}),U.remove(t.components,n)}}function d(n,t){return U.some(S(n),function(n){return t(n)||n&&d(n,t)})}function E(n,t,e){if(!s(n)&&t&&(e||!U.isEmpty(t))){var r=U(t).reject(["conversionData.isInvisible",!0]).reduce(function(n,t){return U.max([n,t.layout.y+t.layout.height,0])},0);if(U.get(n,["conversionData","hasTightYMargin"])||U.get(n,["conversionData","hasTightBottomMargin"]))return r;return r+(f(n)?w.conversionConfig.SECTION_MOBILE_MARGIN_Y:w.conversionConfig.COMPONENT_MOBILE_MARGIN_Y+U.get(n.conversionData,"borderWidth",0))}}function h(n,t,e,r){void 0===r&&(r=0);var o=E(n,t,e);if(U.isNumber(o)){var i=U.get(n,["conversionData","minHeight"],r);n.layout.height=Math.max(i,o)}}function T(n){return C(n)||x(n)}function C(n){return"Page"===n.type}function _(n){return"Container"===n.type}function x(n){return U.has(n.conversionData,"siteSegmentRole")}function R(n){var t=Y.objectUtils.cloneDeep(n),e=U.has(t,"components")?"components":"children";return U.set(t,e,n.mobileComponents||[])}function D(n,t){if(t.id===n)return t;var e=null;return U.find(S(t),function(t){return e=D(n,t)}),e}function I(n,t){if(n.length>t)return void(n.length=0);for(var e=function(n,t){return U.size(U.intersection(n,t))>0},r=n.length-1;r>=0;r--)!function(t){var r=U.findLastIndex(n,function(r,o){return o<t&&e(n[t],r)});-1!==r&&(n[r]=n[r].concat(U.difference(n[t],n[r])),n.splice(t,1))}(r)}function N(n,t){var e=S(n);return U.map(t,function(n){return U.find(e,{id:n})||null})}function O(n,t){var e=S(t);if(U.find(e,{id:n}))return t;var r=null;return U.find(e,function(t){return r=O(n,t)}),r}function P(n){if(n&&0!==n.length){var t=U.min(U.map(n,"layout.x")),e=U.min(U.map(n,"layout.y"));return{x:t,y:e,width:U.max(U.map(n,function(n){return n.layout.x+n.layout.width}))-t,height:U.max(U.map(n,function(n){return n.layout.y+n.layout.height}))-e,rotationInDegrees:0}}}function M(){return{x:w.conversionConfig.MOBILE_WIDTH-(w.conversionConfig.TINY_MENU_SIZE+w.conversionConfig.SITE_SEGMENT_PADDING_X),y:w.conversionConfig.SECTION_MOBILE_MARGIN_Y,rotationInDegrees:0}}function S(n){return n.components||n.children}function A(n,t){void 0===n&&(n=[]),void 0===t&&(t=[]);var e=function(n,t){return Math.min(n[1],t[1])-t[0]};return n[0]<=t[0]?e(n,t):e(t,n)}function G(n,t){var e=function(n){return[n.layout.y,n.layout.height+n.layout.y]};return A(e(n),e(t))}function L(n,t){if(l(n))return t.layout.width;if(l(t))return n.layout.width;var e=function(n){return[n.layout.x,n.layout.width+n.layout.x]};return A(e(n),e(t))}function V(n,t){return l(n)?n.layout.height>=t.layout.height||X(n)>X(t):!l(t)&&X(n)>X(t)}function b(n,t,e){var r=L(n,t),o=G(n,t);if(r<=0||o<=0)return!1;var i=r*o,u=Math.min(X(n),X(t));return i>0&&i/u>=e}function B(n){return!!_(n)&&("columns"===n.conversionData.category?1===U.size(n.components)&&U.isEmpty(n.components[0].components):U.isEmpty(n.components))}function F(n,t){return a(t)&&U.get(n,["conversionData","isInvisible"],!1)}function z(n,t,e){void 0===t&&(t=!1);for(var r=[[n]],o=0;o<r.length;o++){var i=r[o];U.forEach(i,function(n){var e=t?U.get(n,"mobileComponents"):S(n);U.isEmpty(e)||r.push(e)})}return U(r).flatten().remove(e).keyBy("id").value()}Object.defineProperty(t,"__esModule",{value:!0});var U=e(1),w=e(2),Y=e(3),H=function(n){return U.get(n,"componentType")===w.conversionConfig.VIRTUAL_GROUP_TYPES.MERGE};t.isMergeVirtualGroup=H;var j=function(n){return U.get(n,"componentType")===w.conversionConfig.VIRTUAL_GROUP_TYPES.RESCALE};t.isRescaleVirtualGroup=j;var W=function(n){return j(n)||H(n)};t.isVirtualGroup=W,t.isDesktopOnlyComponent=r,t.isTextComponent=o,t.isGraphicComponent=i,t.isGroupComponent=u,t.isColumnsContainerComponent=a,t.isImageComponent=c,t.isMasterPage=s,t.shouldStretchToScreenWidth=f,t.isScreenWidthComponent=l,t.translateComps=m,t.reparentComponent=v,t.addComponentsTo=p,t.removeChildrenFrom=g,t.removeGroup=y,t.containsComponent=d,t.getHeightAccordingToChildren=E,t.ensureContainerTightlyWrapsChildren=h,t.isSiteSegmentOrPage=T,t.isPageComponent=C,t.isContainerComponent=_,t.isSiteSegment=x,t.extractMobilePage=R,t.getComponentByIdFromStructure=D,t.unifyGroups=I,t.getComponentsByIds=N,t.getParent=O,t.getSnugLayout=P,t.getTinyMenuDefaultPosition=M,t.getChildren=S,t.getRangesOverlap=A,t.getYOverlap=G,t.getXOverlap=L;var X=function(n){return n.layout.width*n.layout.height};t.hasGreaterArea=V,t.haveSufficientOverlap=b,t.isEmptyContainer=B,t.shouldReparentCompToChildOfContainer=F,t.getAllCompsInStructure=z},1:function(t,e){t.exports=n},2:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={MOBILE_WIDTH:320,MARGIN_BETWEEN_TEXT_AND_NON_TEXT:20,COMPONENT_MOBILE_MARGIN_X:10,COMPONENT_MOBILE_MARGIN_Y:10,SECTION_MOBILE_MARGIN_Y:20,SITE_SEGMENT_PADDING_X:20,TINY_MENU_SIZE:50,TEXT_MAX_LENGTH_FOR_RESCALING:25,MIN_WIDTH_FOR_ENLARGE:140,DEFAULT_TEXT_HEIGHT:10,VIRTUAL_GROUP_TYPES:{RESCALE:"RESCALE_VIRTUAL_GROUP",MERGE:"MERGE_VIRTUAL_GROUP"}};t.conversionConfig=r},29:function(n,t,e){"use strict";function r(n,t){var e=o.createEventsQueue(n,t);return o.createFragments(e)}var o=e(6),i=e(0),u={translateComponents:i.translateComps,getSnugLayout:i.getSnugLayout,splitToFragments:r};n.exports=u},3:function(n,e){n.exports=t},4:function(n,t,e){"use strict";function r(n,t,e,r){void 0===r&&(r=f);var o=c.get(n,["layout",e]),i=c.get(t,["layout",e]);return Math.abs(o-i)<=r*c.min([m(n,e),m(t,e)])}function o(n,t,e,r){void 0===r&&(r=f);var o=c.get(n,e),i=c.get(t,e);return Math.abs(o-i)<=r*c.min([o,i])}function i(n,t,e){return n===t||c.size(n)===c.size(t)&&!u(n,e)&&!u(t,e)&&c.every(n,function(n,i){var u=t[i];return n.componentType===u.componentType&&r(n,u,e)&&("text"===n.conversionData.category?o(n,u,["conversionData","averageNormalizedFontSize"]):o(n,u,["layout","height"])&&o(n,u,["layout","width"]))})}function u(n,t){var e=c.findIndex(n,function(e,r){if(0===r)return!1;var o=v(n[r-1],t),i=e.layout[t]-o;return i<0||i>c.min([m(n[r-1],t),m(e,t)])});return-1!==e&&e!==n.length-1}function a(n){var t=s.getChildren(n);return c.map(n.conversionData.componentsOrder,function(n){return c.find(t,{id:n})})}Object.defineProperty(t,"__esModule",{value:!0});var c=e(1),s=e(0),f=.1,l=function(n){return 0===n?0:n/Math.abs(n)};t.getSign=l;var m=function(n,t){return"x"===t?n.layout.width:n.layout.height},v=function(n,t){return n.layout[t]+m(n,t)};t.getComponentEndCoordinate=v;var p=function(n,t){return l(n.layout.y-t.layout.y)};t.compareComponentsByY=p,t.areSimilarFragments=i,t.getOrderedComponents=a;var g=function(n){return s.isRescaleVirtualGroup(n)&&"reorder"!==n.conversionData.rescaleMethod||n.conversionData.structuralContainer};t.shouldUseNaturalOrder=g},6:function(n,t,e){"use strict";function r(n,t){var e=R(t.y).partition({eventType:O.START_EVENT}).map(function(n){return R.map(n,"coordinate")}).value(),r=R.max(e[0]),o=R.min(e[1]);return R.findIndex(n,function(n){var t=n.comps[0];return 1===n.comps.length&&t.conversionData.keepIfVerticalDivider&&t.layout.y<=o&&I.getComponentEndCoordinate(t,"y")>=r})}function o(n,t){return R.transform(n,function(n,e,r){var o=t(r);return n[o]=n[o]||{comps:[],distanceToPreviousFragment:e.distanceToPreviousFragment},n[o].comps=n[o].comps.concat(e.comps),n},[])}function i(n,t,e){return R.assign(e,{fragments:[{comps:n,distanceToPreviousFragment:-1}],fragmentsEvents:[t]})}function u(n,t){var e=n.coordinate-t.coordinate;return 0!==e?I.getSign(e):n.compRef===t.compRef?n.eventType===O.START_EVENT?-1:1:n.eventType===O.END_EVENT?-1:1}function a(n,t){var e=R.transform(n,function(n,e){var r=e.layout[t],o=I.getComponentEndCoordinate(e,t);return n.push({eventType:O.START_EVENT,compRef:e,coordinate:r}),n.push({eventType:O.END_EVENT,compRef:e,coordinate:o}),n},[]);return e.sort(u),e}function c(n){var t=[],e=[];return R.forEach(n,function(n){var r=R.last(e);if(n.eventType===O.START_EVENT){if(R.isEmpty(t)){var o=r?n.coordinate-R.last(r.events).coordinate:-1,i={events:[n],distanceToPreviousFragment:o};e.push(i)}else r.events.push(n);t.push(n)}else R.remove(t,{compRef:n.compRef}),r.events.push(n)}),R.map(e,function(n){return{comps:A(n.events),distanceToPreviousFragment:n.distanceToPreviousFragment}})}function s(n,t,e){var r=R.maxBy(n,"distanceToPreviousFragment"),i=R.findIndex(n,r),u=function(n){return n<i?0:1},a=o(n,u),c=[n[i-1],r],s=R.filter(t[G(e)],function(n){return R.some(c,function(t){return R.includes(t.comps,n.compRef)})}),f={fragmentsEvents:v(t,a),fragments:a},m=l(c,s,e);return R.assign(f,{maxCompsDistance:m})}function f(n,t){return R(n).map(function(n,e){return e?R.map(n,function(n){return R.defaults({closestPoint:n.compRef.layout[t]},n)}):R.map(n,function(n){return R.defaults({closestPoint:I.getComponentEndCoordinate(n.compRef,t)},n)})}).map(function(n,t){return R.reduce(n,function(n,e){var r=R.last(n);return r&&r.eventType!==O.END_EVENT?r.compRef===e.compRef?n.concat([e]):((t&&e.closestPoint<r.closestPoint||!t&&e.closestPoint>r.closestPoint)&&n.splice(n.length-1,1,e),n):n.concat(e.eventType===O.START_EVENT?[e]:[])},[])}).value()}function l(n,t,e){for(var r=R.partition(t,function(t){return R.includes(n[0].comps,t.compRef)}),o=f(r,e),i=[0,0],u=[[],[]],a=-1/0;i[0]<o[0].length||i[1]<o[1].length;){var c=function(){return i[0]===o[0].length||i[1]===o[1].length?i[0]===o[0].length?1:0:o[0][i[0]].coordinate<=o[1][i[1]].coordinate?0:1}(),s=o[c][i[c]++];if(s.eventType!==O.END_EVENT){u[c].push(s);var l=[R.maxBy(u[0],"closestPoint"),R.minBy(u[1],"closestPoint")],m=R.get(l,[1,"closestPoint"])-R.get(l,[0,"closestPoint"]);!R.isNaN(m)&&m>a&&(a=m)}else R.remove(u[c],{compRef:s.compRef})}return a}function m(n,t){return R.transform(n,function(n,e){var r=R.findIndex(t,function(n){return R.includes(n.comps,e.compRef)});return n[r]=(n[r]||[]).concat([e]),n},[])}function v(n,t){var e=m(n.x,t),r=m(n.y,t);return R.map(R.keys(t),function(n){return R.assign({},{x:e[n],y:r[n]})})}function p(n,t,e){var r=null;return R.forEach(S,function(o,i){if(!e[i])return!0;var u=o(t.y,n,"y"),a=o(t.x,n,"x");return null===(r=u&&a?null:u||a)}),r}function g(n,t){var e=R.size(t.x)>1?s(t.x,n,"x"):null,r=R.size(t.y)>1?s(t.y,n,"y"):null;if(e&&r){var o=M.HORIZONTAL*e.maxCompsDistance>M.VERTICAL*r.maxCompsDistance?e:r;return R.pick(o,["fragments","fragmentsEvents"])}return e||r}function y(n,t,e){return p(n,t,e)||g(n,t)}function d(n,t){t=_(n,t);var e="overlayGroup_"+t[0].id;return R.forEach(t,function(n){return R.set(n,["conversionData","overlayGroupId"],e)}),t}function E(n,t,e,r){if(R.size(t)<2)return t||[];var o=R.mapValues(e,c);if(1===R.size(o.x)&&1===R.size(o.y))return r.detectSemanticGroups&&r.useOverlapRules?d(n,t):h(n,t,r);var i=y(e,o,{mirrorPattern:!0,verticalDivider:!0,chessPattern:!0,singleCompRow:!0});return 1===R.size(i.fragments)?i.fragments[0].comps:R.flatMap(i.fragments,function(t,e){return E(n,t.comps,i.fragmentsEvents[e],r)})}function h(n,t,e){var r=function(n){return R.some(n,"conversionData.originalLayout")};if(r(t)||R.some(t,function(n){return r(n)}))return C(t),t;T(t);var o=a(t,"y"),i=a(t,"x"),u=E(n,t,{y:o,x:i},e);return C(u),u}function T(n){R.forEach(n,function(n){var t=n.layout,e=R.assign(N.objectUtils.cloneDeep(t),{height:t.height*P,width:t.width*P});n.layout=e,R.set(n,["conversionData","originalLayout"],t)})}function C(n,t){void 0===t&&(t=!0),R.forEach(n,function(n){var t=R.get(n,["conversionData","originalLayout"]);t&&(n.layout=N.objectUtils.cloneDeep(t),delete n.conversionData.originalLayout)}),t&&R.forEach(n,function(n){return C(n.components,!1)})}function _(n,t){var e=R.map(D.getChildren(n),"id");return R.sortBy(t,function(n){return e.indexOf(n.id)})}function x(n,t,e){var r=a(t,"y"),o=a(t,"x"),i=E(n,t,{y:r,x:o},e);n.conversionData.componentsOrder=R.map(i,"id")}Object.defineProperty(t,"__esModule",{value:!0});var R=e(1),D=e(0),I=e(4),N=e(3),O={START_EVENT:"start",END_EVENT:"end"},P=.9,M={HORIZONTAL:1,VERTICAL:1.25},S={singleCompRow:function(n,t,e){if("x"===e)return null;var r=R.findIndex(n,function(n){return 1===R.size(n.comps)});if(-1===r)return null;var i=function(n){return I.getSign(n-r)+I.getSign(r)},u=o(n,i);return{type:"singleCompRow",fragments:u,fragmentsEvents:v(t,u)}},verticalDivider:function(n,t,e){var i=function(n){return 1===R.size(n.comps)};if(R.size(n)<3||R.every(n,i)||"y"===e)return null;var u=r(n,t);if(-1===u)return null;R.set(n[u].comps[0],["conversionData","isVerticalDivider"],!0);var a=function(n){return I.getSign(n-u)+I.getSign(u)},c=o(n,a);return{type:"verticalDivider",fragments:c,fragmentsEvents:v(t,c)}},mirrorPattern:function(n,t,e){if(R.size(n)<2)return null;var r=v(t,n),o=G(e),u=R.map(r,function(n){return A(n[o])}),a=R.every(u,function(n){return I.areSimilarFragments(n,u[0],o)});return a&&a?i(R.flatten(u),t,{type:"mirrorPattern"}):null},chessPattern:function(n,t,e){var r=function(n){return 2===R.size(n.comps)};if("y"!==e||R.size(n)<2||!R.every(n,r))return null;var o=v(t,n),u=R.map(o,function(n){return A(n.x)}),a=R.flatMap(u,function(n,t){return L(t)?n:R.reverse(n)}),c=a[0].conversionData.category,s="text"===c?"photo":"text",f=function(n,t){return n.conversionData.category===(L(t)?c:s)};return R.every(a,f)?i(a,t,{type:"chessPattern"}):null}},A=function(n){return R(n).map("compRef").uniq().value()},G=function(n){return"x"===n?"y":"x"},L=function(n){return n%2==0};t.createEventsQueue=a,t.createFragments=c,t.setComponentsOrder=x;var V={isEven:L,transformLayouts:T,restoreLayouts:C,extractCompsFromEvents:A,getPerpendicularAxis:G,compareEvents:u,refragment:o,splitAxisEventsByFragments:m,splitAllEventsByFragments:v,calculateMaxCompsDistance:l,sortComponentsByNaturalOrder:_};t.testAPI=V}})});
//# sourceMappingURL=mobileLayoutUtils.js.map