(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports=[{title:"Patient Plus",featured:!0,deployedLink:"https://patientplus.herokuapp.com/",githubLink:"https://github.com/cafeamericano/UNC-Project02",description:"Manage patients, identify health trends, and schedule appointments with this electronic patient management system. Demonstrates understanding of NodeJS, MySQL, Heroku, Sequelize, Handlebars, Express, Bootstrap, jQuery, Moment, Nodemailer, animate.css, Firebase Authentication, UUID, Materialize, ChartsJS, and Google Charts API.",techsUsed:"NodeJS, MySQL, JavaScript, Sequelize, Nodemailer, User Authentication, Express, HandlebarsJS, jQuery",imagePath:"appImages/patientPlus.png",language:"JavaScript"},{title:"Career Coach",featured:!0,deployedLink:"https://careercoach.herokuapp.com/",githubLink:"https://github.com/cafeamericano/careerCoach",description:"Apply for jobs, track applications, and gain insights with this powerful, career-oriented application. Demonstrates understanding of NodeJS, MongoDB, Express, Handlebars, AJAX, and more.",techsUsed:"NodeJS, MongoDB, Heroku, JavaScript, User Authentication, Express, HandlebarsJS, jQuery",imagePath:"appImages/careerCoach.png",language:"JavaScript"},{title:"Study Helper",featured:!0,deployedLink:"https://mystudyhelper.herokuapp.com/",githubLink:"https://github.com/cafeamericano/studyHelper",description:"Keep track of your study habits with this elegantly designed application. Demonstrates understanding of NodeJS, PostgreSQL, Express, Handlebars, AJAX, and more.",techsUsed:"NodeJS, PostgreSQL, Heroku, JavaScript, User Authentication, Express, HandlebarsJS, jQuery",imagePath:"appImages/studyhelper.png",language:"JavaScript"},{title:"Dashboard",featured:!0,deployedLink:"https://cafeamericano.github.io/UNC-Project01/index.html",githubLink:"https://github.com/cafeamericano/UNC-Project01",description:"Quickly get information on stocks, weather, news, and more in this one-stop application. Demonstrates understanding of APIs, jQuery, AJAX, Firebase Authentication, and collaborative development.",techsUsed:"JavaScript, Firebase Realtime Database, User Authentication, API Consumption, ChartsJS, jQuery",imagePath:"appImages/dashboard.png",language:"JavaScript"}]},16:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(8),l=a.n(s),r=a(2),c=a(3),o=a(5),u=a(4),h=a(6),m=a(1),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={visible:a.props.visibility,selfClickCounter:0,content:{headerText:"Meet Matthew Farmer.",paragraphOne:"I'm a full-stack web developer with a keen eye for design and a passion for developing applications to solve real-world problems. In addition to more than a year of experience with programming on both the front and back end, I possess more than five years of professional experience with creative problem solving (such as creating departmental knowledge repositories with search capability and writing code to determine refund amounts for thousands of accounts at a large bank).",paragraphTwo:"My higher education includes a Bachelor\u2019s Degree in Business Management as well as the (pending) completion of the UNC Chapel Hill Coding Bootcamp. Technical skills include HTML/CSS, JavaScript, NodeJS, ReactJS, and database manipulation. Certified by the American Society of Quality in process improvement, I am highly skilled with process flowcharting (an invaluable tool in application development). In a collaborative environment, I enjoy teaching others and sharing my knowledge for the benefit of the team."}},a.tallySelfClicks=a.tallySelfClicks.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"tallySelfClicks",value:function(){var e=this.state.selfClickCounter;this.setState({selfClickCounter:e+1})}},{key:"componentDidUpdate",value:function(){var e=this.props.visibility;e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){return this.state.visible?n.a.createElement("section",{onClick:this.props.cumulativeClicker,class:"card mb-4"},n.a.createElement("subsection",{onClick:this.tallySelfClicks},n.a.createElement("div",{className:"card-header text-right"},n.a.createElement("span",{class:"badge badge-primary"},this.state.selfClickCounter)),n.a.createElement("div",{className:"card-body"},n.a.createElement("h3",{class:"mb-4"},this.state.content.headerText),n.a.createElement("p",null,this.state.content.paragraphOne),n.a.createElement("p",{id:"extraAboutText"},this.state.content.paragraphTwo)))):null}}]),t}(i.Component),d=a(15),b={height:"200px"},f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).drawCards=function(e){return n.a.createElement("div",{className:"col-xl-4 col-md-6"},n.a.createElement("div",{className:"card shadow mb-3"},n.a.createElement("h5",{className:"p-3"},e.title),n.a.createElement("img",{src:e.imagePath,style:b}),n.a.createElement("div",{className:"card-footer text-right"},n.a.createElement("a",{href:e.githubLink},n.a.createElement("i",{class:"fab fa-github"})),n.a.createElement("span",null," | "),n.a.createElement("a",{href:e.deployedLink},n.a.createElement("i",{class:"fas fa-external-link-alt"})))))},a.state={visible:a.props.visibility,selfClickCounter:0,applications:d},a.tallySelfClicks=a.tallySelfClicks.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"tallySelfClicks",value:function(){var e=this.state.selfClickCounter;this.setState({selfClickCounter:e+1})}},{key:"componentDidUpdate",value:function(){var e=this.props.visibility;e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){var e=this.state.applications;return this.state.visible?n.a.createElement("section",{onClick:this.props.cumulativeClicker,class:"card mb-4"},n.a.createElement("subsection",{onClick:this.tallySelfClicks},n.a.createElement("div",{className:"card-header text-right"},n.a.createElement("span",{class:"badge badge-primary"},this.state.selfClickCounter)),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},e.map(this.drawCards))))):null}}]),t}(i.Component),g=[{title:"R\xe9sum\xe9",icon:"fas fa-file-invoice fa-5x",href:"https://drive.google.com/uc?export=download&id=1HOcFhOlveROqNYVoJIyTxzg6UWnjzxaY"},{title:"GitHub",icon:"fab fa-github fa-5x",href:"https://github.com/cafeamericano"},{title:"LinkedIn",icon:"fab fa-linkedin fa-5x",href:"https://www.linkedin.com/in/matthew-farmer-204930182"},{title:"Email",icon:"fas fa-envelope fa-5x",href:"#",text:"mfarmer5102@gmail.com"},{title:"Phone",icon:"fas fa-phone fa-5x",href:"#",text:"252-289-2937"}],v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).drawConnectBlocks=function(e){return n.a.createElement("div",{className:"col-xl-4 col-lg-4 col-xs-6"},n.a.createElement("div",{className:"card shadow mb-3 text-center"},n.a.createElement("div",{className:"p-3"},n.a.createElement("h5",null,e.title)),n.a.createElement("div",{className:"p-3"},n.a.createElement("a",{href:e.href},n.a.createElement("i",{class:e.icon})))))},a.state={visible:a.props.visibility,selfClickCounter:0,connectBlocks:g},a.tallySelfClicks=a.tallySelfClicks.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"tallySelfClicks",value:function(){var e=this.state.selfClickCounter;this.setState({selfClickCounter:e+1})}},{key:"componentDidUpdate",value:function(){var e=this.props.visibility;e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){var e=this.state.connectBlocks;return this.state.visible?n.a.createElement("section",{onClick:this.props.cumulativeClicker,class:"card mb-4"},n.a.createElement("subsection",{onClick:this.tallySelfClicks},n.a.createElement("div",{className:"card-header text-right"},n.a.createElement("span",{class:"badge badge-primary"},this.state.selfClickCounter)),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},e.map(this.drawConnectBlocks))))):null}}]),t}(i.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={totalClicks:0,subComponentVisibilityToggler:{AboutMe:!0,Applications:!0,Connect:!0}},a.tallyCumulativeClicks=a.tallyCumulativeClicks.bind(Object(m.a)(Object(m.a)(a))),a.toggleVisibilityForAll=a.toggleVisibilityForAll.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"tallyCumulativeClicks",value:function(){var e=this.state.totalClicks;this.setState({totalClicks:e+1})}},{key:"toggleVisibilityForAll",value:function(){this.state.subComponentVisibilityToggler.AboutMe?this.setState({subComponentVisibilityToggler:{AboutMe:!1,Applications:!1,Connect:!1}}):this.setState({subComponentVisibilityToggler:{AboutMe:!0,Applications:!0,Connect:!0}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"p-3"},n.a.createElement("div",{onClick:this.toggleVisibilityForAll,class:"text-right mb-3"},n.a.createElement("i",{class:"fas fa-eye-slash fa-2x"})),n.a.createElement("div",{class:"alert alert-secondary",role:"alert"},"Total Clicks Across All Components: ",this.state.totalClicks),n.a.createElement(p,{visibility:this.state.subComponentVisibilityToggler.AboutMe,cumulativeClicker:this.tallyCumulativeClicks}),n.a.createElement(f,{visibility:this.state.subComponentVisibilityToggler.Applications,cumulativeClicker:this.tallyCumulativeClicks}),n.a.createElement(v,{visibility:this.state.subComponentVisibilityToggler.Connect,cumulativeClicker:this.tallyCumulativeClicks}))}}]),t}(i.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar navbar-dark bg-dark text-center"},n.a.createElement("span",{className:"navbar-brand mb-0 h1"},n.a.createElement("i",{className:"fab fa-react"}),n.a.createElement("span",null," Portfolio")))}}]),t}(i.Component),y=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"bg-light"},n.a.createElement(k,null),n.a.createElement("div",{className:"container animated fadeInUpBig"},n.a.createElement(C,null)))}}]),t}(i.Component);l.a.render(n.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.cd5f2e64.chunk.js.map