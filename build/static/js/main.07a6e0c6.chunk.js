(this.webpackJsonptodolisttasks=this.webpackJsonptodolisttasks||[]).push([[0],{212:function(e,t,a){e.exports=a(428)},217:function(e,t,a){},218:function(e,t,a){},423:function(e,t,a){},428:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(11),s=a.n(l),r=(a(217),a(218),a(31)),c=a(32),i=a(22),u=a(34),d=a(33),m=a(30),h=a.n(m),p=a(79),g=a.n(p),E=a(66),f=a.n(E),k=a(37),b=a.n(k),v=a(26),y=a.n(v),C="https://task-todo-list.herokuapp.com",T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t={userName:n.state.username,password:n.state.password};y.a.post(C+"/api/logins",t).then(function(e){200===e.status?(this.setState({id:e.data.user._id}),localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("token",JSON.stringify(e.data.token)),this.props.history.push("/todoList"),console.log("Login successfull")):204===e.status?console.log("Username password do not match"):console.log("Username does not exists")}.bind(Object(i.a)(n))).catch((function(e){console.log(e)}))},n.handleClick=n.handleClick.bind(Object(i.a)(n)),n.state={username:"",password:"",id:""},n}return Object(c.a)(a,[{key:"signUp",value:function(){this.props.history.push("/signup")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(g.a,{title:"Login"}),o.a.createElement("div",{style:{padding:100,paddingLeft:500,backgroundColor:"#FFF"}},o.a.createElement(b.a,{hintText:"Enter your Username",floatingLabelText:"Username",onChange:function(t,a){return e.setState({username:a})}}),o.a.createElement("br",null),o.a.createElement(b.a,{type:"password",hintText:"Enter your Password",floatingLabelText:"Password",onChange:function(t,a){return e.setState({password:a})}}),o.a.createElement("br",null),o.a.createElement(f.a,{label:"Login",primary:!0,style:L,onClick:function(t){return e.handleClick(t)}}),o.a.createElement(f.a,{label:"SignUp",primary:!0,style:L,onClick:function(){return e.signUp()}})))))}}]),a}(n.Component),L={margin:15},N=a(15),D=(a(423),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).editData=function(e){console.log("edit",e),n.props.history.push("/edit",{data:e})},n.getAllTodoList=n.getAllTodoList.bind(Object(i.a)(n)),n.deleteData=n.deleteData.bind(Object(i.a)(n)),n.state={taskName:"",description:"",status:"",value:"",taskList:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.documentData=JSON.parse(localStorage.getItem("user")),localStorage.getItem("user")&&localStorage.getItem("token")?this.getAllTodoList():this.props.history.push("/")}},{key:"getAllTodoList",value:function(){try{var e={loginId:this.documentData._id};y.a.post(C+"/api/todoLists/id",e).then(function(e){console.log(e.data.length),200===e.status?(this.setState({taskList:e.data}),console.log("Login successfull",e.data)):204===e.status?(console.log("Username password do not match"),alert("username password do not match")):(console.log("Username does not exists"),alert("Username does not exist"))}.bind(this)).catch((function(e){console.log(e)}))}catch(t){console.log("err",t)}}},{key:"deleteData",value:function(e){try{var t={_id:e._id};y.a.put(C+"/api/todoLists",t).then(function(e){200===e.status&&this.getAllTodoList()}.bind(this)).catch((function(e){console.log("err",e)}))}catch(a){console.log("err",a)}}},{key:"addTask",value:function(){this.props.history.push("/add")}},{key:"statusChange",value:function(e,t){console.log("save ",e.target.value,t);try{var a={_id:t._id,status:e.target.value};y.a.patch(C+"/api/todoLists/status",a).then(function(e){200===e.status&&this.getAllTodoList()}.bind(this)).catch((function(e){console.log("err",e)}))}catch(n){console.log("err",n)}}},{key:"logOut",value:function(){localStorage.clear(),this.props.history.push("/")}},{key:"renderTableData",value:function(){var e=this;return this.state.taskList.map((function(t,a){var n=t.taskName,l=t.description,s=t.status;return o.a.createElement("tr",{key:n,style:"complete"===s?O.completed:O.incompleted},o.a.createElement("td",null,n),o.a.createElement("td",null,l),o.a.createElement("td",null,s),o.a.createElement("td",null,o.a.createElement("select",{className:"col-md-8 col-offset-4",value:t.status,onChange:function(a){e.statusChange(a,t)},disabled:"complete"===s},o.a.createElement("option",{value:"incomplete"},"Incomplete"),o.a.createElement("option",{value:"complete"},"Complete"))),o.a.createElement("td",null,o.a.createElement("button",{className:"edit",disabled:"complete"===s,style:{backgroundColor:"green"},onClick:function(){return e.editData(t)}},"Edit")),o.a.createElement("td",null,o.a.createElement("button",{className:"delete",style:{backgroundColor:"red"},onClick:function(){return e.deleteData(t)}},"Delete")))}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(N.a,{title:"ToDoList"}),o.a.createElement("div",{align:"right"},o.a.createElement("button",{className:"logout",onClick:function(){return e.logOut()}},"LogOut ")),o.a.createElement("div",{style:{padding:10,paddingLeft:20,backgroundColor:"#FFF"}},o.a.createElement("h1",null,"TaskList"),o.a.createElement("div",{align:"right"},o.a.createElement("button",{className:"add",onClick:function(){return e.addTask()}},"Add Task ")),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"TaskName"),o.a.createElement("th",null,"Description"),o.a.createElement("th",null,"Status"),o.a.createElement("th",null,"ChangeStatus"),o.a.createElement("th",null,"Edit"),o.a.createElement("th",null,"Delete"))),o.a.createElement("tbody",null,this.renderTableData()))))))}}]),a}(n.Component)),O={completed:{backgroundColor:"#D3D3D3"},incompleted:{backgroundColor:"#fff"}},S=a(210),j=a(12),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(i.a)(n)),n.state={taskName:"",description:"",status:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.documentData=JSON.parse(localStorage.getItem("user")),localStorage.getItem("user")&&localStorage.getItem("token")||this.props.history.push("/")}},{key:"handleClick",value:function(e){try{var t={taskName:this.state.taskName,description:this.state.description,loginId:this.documentData._id,status:"incomplete"};y.a.post(C+"/api/todoLists",t).then(function(e){console.log(e),200===e.status?(this.props.history.push("/todoList"),console.log("save successfull")):(e.status,console.log(""))}.bind(this)).catch((function(e){console.log(e)}))}catch(a){console.log("login",a)}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement(N.a,{title:"Add ToDo"}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{padding:100,paddingLeft:500,backgroundColor:"#FFF"}},o.a.createElement("h2",null,"ADD Task"),o.a.createElement(N.c,{hintText:"Enter your TaskName",floatingLabelText:"TaskName",onChange:function(t,a){return e.setState({taskName:a})}}),o.a.createElement("br",null),o.a.createElement(N.c,{hintText:"Enter your Description",floatingLabelText:"Description",onChange:function(t,a){return e.setState({description:a})}}),o.a.createElement("br",null),o.a.createElement(N.b,{label:"Add",primary:!0,style:x,onClick:function(t){return e.handleClick(t)}})))))}}]),a}(n.Component),x={margin:15},U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(i.a)(n)),n.getEditData=n.getEditData.bind(Object(i.a)(n)),n.state={taskName:"",description:"",status:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.documentData=JSON.parse(localStorage.getItem("user")),localStorage.getItem("user")&&localStorage.getItem("token")?this.getEditData():this.props.history.push("/")}},{key:"getEditData",value:function(){this.setState({taskName:this.props.location.state.data.taskName,description:this.props.location.state.data.description,status:this.props.location.state.data.status})}},{key:"handleClick",value:function(e){try{var t={_id:this.props.location.state.data._id,taskName:this.state.taskName,description:this.state.description,loginId:this.documentData._id,status:this.state.status};y.a.patch(C+"/api/todoLists",t).then(function(e){console.log(e),200===e.status?(this.props.history.push("/todoList"),console.log("Update successfull")):(e.status,console.log(""))}.bind(this)).catch((function(e){console.log(e)}))}catch(a){}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement(N.a,{title:"Edit Todo"}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{style:{padding:100,paddingLeft:500,backgroundColor:"#FFF"}},o.a.createElement("h2",null,"Edit Task"),o.a.createElement(N.c,{hintText:"Enter your TaskName",floatingLabelText:"TaskName",value:this.state.taskName,onChange:function(t,a){return e.setState({taskName:a})}}),o.a.createElement("br",null),o.a.createElement(N.c,{hintText:"Enter your Description",floatingLabelText:"Description",value:this.state.description,onChange:function(t,a){return e.setState({description:a})}}),o.a.createElement("br",null),o.a.createElement(N.b,{label:"Update",primary:!0,style:I,onClick:function(t){return e.handleClick(t)}})))))}}]),a}(n.Component),I={margin:15},F=a(209),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={userName:"",password:""},n}return Object(c.a)(a,[{key:"saveNewUser",value:function(){try{var e={userName:this.state.username,password:this.state.password,status:"active"};y.a.post(C+"/api/logins/save",e).then(function(e){200===e.status?(this.props.history.push("/"),console.log("SignUp successfull")):(e.status,console.log(""))}.bind(this)).catch((function(e){console.log(e)}))}catch(t){console.log("err",t)}}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(F.MuiThemeProvider,null,o.a.createElement("div",{className:"container"},o.a.createElement(N.a,{title:"SignUp"}),o.a.createElement("div",{style:{padding:100,paddingLeft:500,backgroundColor:"#FFF"}},o.a.createElement(N.c,{hintText:"Enter your Username",floatingLabelText:"Username",onChange:function(t,a){return e.setState({username:a})}}),o.a.createElement("br",null),o.a.createElement(N.c,{type:"password",hintText:"Enter your Password",floatingLabelText:"Password",onChange:function(t,a){return e.setState({password:a})}}),o.a.createElement("br",null),o.a.createElement(N.b,{label:"Signup",primary:!0,style:_,onClick:function(){return e.saveNewUser()}})))))}}]),a}(n.Component),_={margin:15};var J=function(){return o.a.createElement("div",null,o.a.createElement(S.a,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{exact:!0,path:"/",component:T}),o.a.createElement(j.a,{exact:!0,path:"/signup",component:A}),o.a.createElement(j.a,{exact:!0,path:"/todoList",component:D}),o.a.createElement(j.a,{exact:!0,path:"/add",component:w}),o.a.createElement(j.a,{exact:!0,path:"/edit",component:U}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[212,1,2]]]);
//# sourceMappingURL=main.07a6e0c6.chunk.js.map