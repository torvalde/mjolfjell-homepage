webpackJsonp([5],{"./app/containers/HomePage/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a="boilerplate/Home/CHANGE_USERNAME"},"./app/containers/HomePage/reducer.js":function(e,n,t){"use strict";function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments[1];switch(n.type){case s.a:return e.set("username",n.name.replace(/@/gi,""));default:return e}}var s=t("./app/containers/HomePage/constants.js"),r=t("./node_modules/immutable/dist/immutable.js"),o=(t.n(r),t.i(r.fromJS)({username:""}));n.default=a}});