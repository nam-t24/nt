(this.webpackJsonpnt=this.webpackJsonpnt||[]).push([[0],{11:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(12),n=s.n(i),l=(s(18),s(19),s(2)),r=s(8),A=s.p+"static/media/pfp.d95fe5f3.jpg",m=(s(20),s(11),s.p+"static/media/N.222b5199.png"),o=s(3),d=s(6),g=s(0);var j=function(){return Object(g.jsxs)("div",{className:"bg-EnglishLavender flex justify-between items-center py-4",children:[Object(g.jsx)(o.b,{to:"/",className:"sm:ml-16 ml-6",children:Object(g.jsx)("img",{alt:"HomeButton",src:m,className:"sm:w-12 w-10"})}),Object(g.jsxs)("div",{id:"MenuItems",className:"sm:mr-16 mr-6 flex items-center md:text-xl text-sm",children:[Object(g.jsx)(d.a,{smooth:!0,to:"#about",className:"MenuHover",scroll:function(e){return function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-60,behavior:"smooth"})}(e)},children:"About"}),Object(g.jsx)(d.a,{smooth:!0,to:"#projects",className:"MenuHover md:mx-20 sm:mx-12 mx-6",children:"Projects"}),Object(g.jsx)(o.b,{to:"/resume",className:"ResumeHover md:py-2 sm:py-1 md:px-4 px-2",children:"Resume"})]})]})},x=(s.p,s.p+"static/media/goteem.e919f265.mp3");var h=function(){return new Audio(x),Object(g.jsxs)("div",{id:"socials_bottom",className:"socials_bottom fixed bottom-0 flex justify-between items-center w-full md:p-4 p-1",children:[Object(g.jsxs)("div",{className:"socials_left flex lg:flex-row flex-col md:mx-0 mx-3",children:[Object(g.jsx)("a",{href:"https://github.com/nam-t24",target:"_blank",rel:"noreferrer","data-toggle":"tooltip","data-placement":"top",title:"nam-t24",className:"lg:text-2xl md:text-xl text-lg",children:Object(g.jsx)("i",{class:"fab fa-github"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/namtruongcs/",target:"_blank",rel:"noreferrer","data-toggle":"tooltip","data-placement":"top",title:"namtruongcs",className:"lg:mx-6 lg:text-2xl md:text-xl text-lg",children:Object(g.jsx)("i",{class:"fab fa-linkedin"})}),Object(g.jsx)("a",{href:"mailto:namtruong831@gmail.com",rel:"noopener noreferrer",target:"_blank","data-toggle":"tooltip","data-placement":"top",title:"namtruong831@gmail.com",className:"lg:text-2xl md:text-xl text-lg",children:Object(g.jsx)("i",{class:"fas fa-envelope"})})]}),Object(g.jsx)(d.a,{to:"#top",smooth:!0,className:"up lg:text-5xl text-3xl md:mx-0 mx-1",children:Object(g.jsx)("i",{class:"fa-regular fa-circle-up"})})]})};var b=function(e){return Object(g.jsx)("a",{href:e.path,target:"_blank",rel:"noreferrer",children:Object(g.jsxs)("div",{className:"project bg-white rounded-md w-72 min-h-22rem lg:my-4 my-2 lg:mx-4 mx-2",children:[Object(g.jsx)("div",{className:"",children:Object(g.jsx)("img",{src:e.pic,alt:"ProjectPic",className:"rounded-t-sm"})}),Object(g.jsxs)("div",{className:"p-3",children:[Object(g.jsx)("h1",{className:"text-2xl my-3",children:e.title}),Object(g.jsx)("div",{children:e.description})]})]})})},p=s(13),f=s.n(p),w=s(5),B=s.n(w),u=s.p+"static/media/c++.6e731ebc.svg",P=s.p+"static/media/java.fdabd4e1.png",D=s.p+"static/media/ruby.0b422d19.png",v=s.p+"static/media/javascript.2e10b2a2.png",O=s.p+"static/media/typescript.c2eef6df.png",I=s.p+"static/media/html.8b111011.dms",y=s.p+"static/media/css.f6d3aaa3.png",C=s.p+"static/media/tailwind.2bf831e6.jpg",M=s.p+"static/media/sql.664a0ec2.png",N=s.p+"static/media/react.e67fc797.png",k=s.p+"static/media/rails.5cfa93ed.png",E=s.p+"static/media/vscode.1db21e08.png",z=s.p+"static/media/terminal.1aa800fe.png",G=s.p+"static/media/CookAlong.68fa7a65.png",F=s.p+"static/media/tobor.ebd42a8f.jpg",Y=s.p+"static/media/Minos.f02888c0.png",H=s.p+"static/media/blink.bf081828.png",T=s.p+"static/media/hackutdVIII.8bbd157f.png",Z=s.p+"static/media/hackutdVII.f935fdc0.png";f.a.polyfill();var U=function(){B()(document).ready((function(){B()(window).scroll((function(){B()("#socials").css("opacity",1-B()(window).scrollTop()/500)}))})),B()(document).ready((function(){B()(window).scroll((function(){B()("#socials_bottom").css("opacity",B()(window).scrollTop()/250);var e=B()("#toolsNtech").offset().top-B()(window).scrollTop();console.log(e),B()("#toolsNtech").css("opacity",1-e/325+.9)}))})),B()(document).ready((function(){document.location.hash&&(window.location=""),B()("#socials_bottom").css("opacity",0)}));var e=function(e,t,s){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(s,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return e.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,c=80;this.isDeleting&&(c/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,c=500):(c=this.period,this.isDeleting=!0),setTimeout((function(){s.tick()}),c)},window.onload=function(){var t,s=document.getElementsByClassName("typewrite"),c=Object(r.a)(s);try{for(c.s();!(t=c.n()).done;){var a=t.value,i=a.getAttribute("data-type"),n=a.getAttribute("data-period");i&&new e(a,JSON.parse(i),n)}}catch(l){c.e(l)}finally{c.f()}},Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j,{}),Object(g.jsxs)("div",{className:"lg:flex hidden min-h-screen bg-gradient-to-b from-EnglishLavender to-PastelPink flex-row items-center content-center",children:[Object(g.jsxs)("div",{className:"flex flex-col ml-16 w-1/2",children:[Object(g.jsx)("h1",{id:"fadein",className:"text-7xl my-6 fadein",children:"Nam Truong"}),Object(g.jsx)("p",{children:Object(g.jsx)("span",{"data-period":"1500",className:"typewrite typeBlink text-3xl","data-type":'["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Ardent Explorer and Hiker","Casual Volleyball Player", "A\xe7a\xed Enthusiast", "Thanks for reading!"]'})}),Object(g.jsxs)("div",{id:"socials",className:"socials text-4xl my-6",children:[Object(g.jsx)("a",{href:"https://github.com/nam-t24",target:"_blank",rel:"noreferrer","data-toggle":"tooltip","data-placement":"bottom",title:"nam-t24",children:Object(g.jsx)("i",{class:"fab fa-github"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/namtruongcs/",target:"_blank",rel:"noreferrer","data-toggle":"tooltip","data-placement":"bottom",title:"namtruongcs",className:"mx-6",children:Object(g.jsx)("i",{class:"fab fa-linkedin"})}),Object(g.jsx)("a",{href:"mailto:namtruong831@gmail.com",rel:"noopener noreferrer",target:"_blank","data-toggle":"tooltip","data-placement":"bottom",title:"namtruong831@gmail.com",children:Object(g.jsx)("i",{class:"fas fa-envelope"})})]})]}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{alt:"ProfilePicture",src:A,className:"PFP w-64 border-2 border-white"})})]}),Object(g.jsxs)("div",{className:"lg:hidden inline min-h-screen bg-gradient-to-b from-EnglishLavender to-PastelPink flex flex-col justify-center items-center content-center",onload:"typewrite()",children:[Object(g.jsx)("img",{alt:"ProfilePicture",src:A,className:"PFP sm:w-56 w-40 border-2 border-white"}),Object(g.jsx)("h1",{className:"md:text-5xl text-2xl text-center md:my-4 mb-1 mt-4",children:"Nam Truong"}),Object(g.jsx)("p",{children:Object(g.jsx)("span",{className:"md:text-2xl text-lg typewrite typeBlink","data-period":"1000","data-type":'["Student at the University of Texas at Dallas", "B.S. in Computer Science", "Incoming SWE Intern at StateFarm", "Ardent Explorer and Hiker","Casual Volleyball Player", "A\xe7a\xed Enthusiast", "Thanks for reading!"]'})}),Object(g.jsxs)("div",{id:"socials",className:"socials lg:text-2xl md:text-xl text-lg md:my-4 my-1",children:[Object(g.jsx)("a",{href:"https://github.com/nam-t24",target:"_blank",rel:"noreferrer","data-toggle":"tooltip","data-placement":"bottom",title:"nam-t24",children:Object(g.jsx)("i",{class:"fab fa-github"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/namtruongcs/",target:"_blank",rel:"noreferrer","data-toggle":"tooltip","data-placement":"bottom",title:"namtruongcs",className:"mx-6",children:Object(g.jsx)("i",{class:"fab fa-linkedin"})}),Object(g.jsx)("a",{href:"mailto:namtruong831@gmail.com",rel:"noopener noreferrer",target:"_blank","data-toggle":"tooltip","data-placement":"bottom",title:"namtruong831@gmail.com",children:Object(g.jsx)("i",{class:"fas fa-envelope"})})]})]}),Object(g.jsx)("div",{className:"about bg-gradient-to-b from-PastelPink to-white flex justify-center",children:Object(g.jsxs)("div",{className:"md:my-40 my-32 md:w-3/5 w-4/5 flex flex-col items-center justify-center",children:[Object(g.jsx)("h1",{id:"about",className:"md:text-4xl text-3xl my-4",children:"Howdy!"}),Object(g.jsx)("div",{children:Object(g.jsxs)("p3",{className:"lg:text-lg md:text-md text-sm",children:["My name is Nam Truong and I am a second year student from the University of Texas at Dallas studying computer science. I created this site to not only highlight my work and accomplishments but to exhibit my growth and development within computer science.",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),"Currently, I am involved in the"," ",Object(g.jsx)("a",{href:"https://www.acmutd.co/index.html",className:"underline",target:"-blank",children:"Association for Computing Machinery"}),", having participated in its"," ",Object(g.jsx)("a",{href:"https://www.acmutd.co/projects",className:"underline",target:"-blank",children:"projects"})," ","division, and now part of the"," ",Object(g.jsx)("a",{href:"https://www.hackutd.co/",className:"underline",target:"-blank",children:"HackUTD"})," ","division. After participating in my first hackathon, I became a technical officer for HackUTD to help organize and enrich the experience of the many new students who decide to partake in HackUTD in the future.",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),"When I'm not coding or learning, I enjoy weight training, playing guitar and volleyball, testing my typing speed on"," ",Object(g.jsx)("a",{href:"https://typings.gg/",className:"underline",target:"-blank",children:"typings.gg"}),", and eating mint chocolate chip ice cream :)"]})})]})}),Object(g.jsx)("div",{className:"bg-white flex justify-center mt-8 mb-32",children:Object(g.jsxs)("div",{id:"toolsNtech",className:"toolsNtech md:w-3/5 w-4/5 border-2 rounded-lg border-OldLavender flex flex-col items-center p-4",children:[Object(g.jsx)("h1",{className:"md:text-4xl text-3xl md:mb-4 mb-2 text-center",children:"Tools and Technologies"}),Object(g.jsxs)("div",{className:"icons flex flex-wrap justify-center",children:[Object(g.jsx)("img",{src:u,alt:"c++",className:"smallIcon"}),Object(g.jsx)("img",{src:P,alt:"java",className:"smallIcon"}),Object(g.jsx)("img",{src:D,alt:"ruby",className:"smallIcon"}),Object(g.jsx)("img",{src:v,alt:"javascript",className:"smallIcon"}),Object(g.jsx)("img",{src:O,alt:"typescript",className:"smallIcon"}),Object(g.jsx)("img",{src:I,alt:"html",className:"smallIcon"}),Object(g.jsx)("img",{src:y,alt:"css",className:"smallIcon"}),Object(g.jsx)("img",{src:C,alt:"tailwindcss",className:"largeIcon"}),Object(g.jsx)("img",{src:M,alt:"sql",className:"smallIcon"}),Object(g.jsx)("img",{src:N,alt:"react",className:"smallIcon"}),Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"nextjs",className:"largeIcon"}),Object(g.jsx)("img",{src:k,alt:"rubyonrails",className:"largeIcon"}),Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"git",className:"smallIcon"}),Object(g.jsx)("img",{src:E,alt:"vscode",className:"smallIcon"}),Object(g.jsx)("img",{src:z,alt:"terminal",className:"smallIcon"})]})]})}),Object(g.jsx)("div",{id:"projects",className:"min-h-screen bg-EnglishLavender flex justify-center",children:Object(g.jsxs)("div",{className:"md:w-4/5 w-11/12 my-8",children:[Object(g.jsx)("h1",{className:"md:text-4xl text-3xl md:mb-4 mb-2 text-center",children:"Projects"}),Object(g.jsxs)("div",{className:"w-full flex flex-wrap justify-center",children:[Object(g.jsx)(b,{path:"https://github.com/acm-projects/CookAlong",pic:G,title:"CookAlong",description:"Digital sous chef web application for ACM Projects Fall 2020. First place project winner"}),Object(g.jsx)(b,{path:"https://github.com/KendalUTD/GamerJamProject",pic:F,title:"Tobor's Treasure Troph",description:"3D Puzzle and adventure game created through Unity for HackUTD GameJam 2020"}),Object(g.jsx)(b,{path:"https://github.com/KevinCai319/TAMUHacks2021",pic:Y,title:"Minos' Quest",description:"Real-time multiplayer tile based labrynth game using Processing for TAMUHack 2021"}),Object(g.jsx)(b,{path:"https://github.com/acmutd/hackutd-vii-site",pic:Z,title:"HackUTD VII",description:"Developed HackUTD VII event site with a team of HackUTD technical officers for Spring HackUTD 2021"}),Object(g.jsx)(b,{path:"https://github.com/zzeneric/Blink",pic:H,title:"Blink",description:"Real-time video conference platform that mimics an engaging classroom environment using integrated activities for HackDFW 2021"}),Object(g.jsx)(b,{path:"https://github.com/acmutd/hackportal-hackutd",pic:T,title:"HackUTD VIII",description:"Developed HackUTD VIII event site with a team of HackUTD technical officers for Fall HackUTD 2021"})]})]})}),Object(g.jsx)("div",{className:"w-full bg-EnglishLavender flex justify-center",children:Object(g.jsx)("div",{className:"copyright w-3/5 border-t-1 border-OldLavender text-center text-xs p-2",children:"\xa9 2021 Nam Truong"})}),Object(g.jsx)(h,{})]})},J=s.p+"static/media/NamTruong_Resume.b2e55f2a.jpg",W=s.p+"static/media/NamTruong_Resume.bc578698.pdf",Q=(s(25),s.p+"static/media/roblox.5fa9f287.mp3");var K=function(){return new Audio(Q),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"bg-OldLavender p-4 flex items-center",children:Object(g.jsx)(o.b,{to:"/",className:"sm:ml-16 ml-6",children:Object(g.jsx)("img",{alt:"HomeButton",src:m,className:"sm:w-12 w-10"})})}),Object(g.jsx)("div",{className:"w-full min-h-screen bg-gradient-to-b from-OldLavender to-EnglishLavender flex justify-center",children:Object(g.jsx)("a",{href:W,target:"_blank",rel:"noopener noreferrer",className:"md:w-1/2 sm:w-3/4 w-full md:my-14 my-10",children:Object(g.jsx)("img",{src:J,alt:"Resume",className:"resume mx-auto"})})}),Object(g.jsx)("div",{className:"w-full bg-EnglishLavender flex justify-center",children:Object(g.jsx)("div",{className:"copyright w-3/5 border-t-1 border-OldLavender text-center text-xs p-2",children:"\xa9 2021 Nam Truong"})})]})};var X=function(){return Object(g.jsxs)("div",{className:"bg-EnglishLavender flex justify-center items-center py-4",children:[Object(g.jsxs)("div",{id:"MenuItems",className:"flex justify-end md:text-xl text-sm w-1/6",children:[Object(g.jsx)(d.a,{smooth:!0,to:"#about",className:"MenuHover mr-14",scroll:function(e){return function(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-60,behavior:"smooth"})}(e)},children:"About"}),Object(g.jsx)(d.a,{smooth:!0,to:"#projects",className:"MenuHover mr-20",children:"Projects"})]}),Object(g.jsx)("div",{children:Object(g.jsx)(o.b,{to:"/",className:"",children:Object(g.jsx)("img",{alt:"HomeButton",src:m,className:"sm:w-16 w-10"})})}),Object(g.jsx)("div",{id:"MenuItems",className:"flex md:text-xl text-sm w-1/6 pl-18px",children:Object(g.jsx)(o.b,{to:"/resume",className:"ResumeHover md:py-2 sm:py-1 md:px-4 px-2 ml-20",children:"Resume"})})]})};var V=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(X,{}),Object(g.jsx)("div",{className:"flex text-center justify-center",children:"|"}),Object(g.jsx)("div",{className:"text-center",children:"ignore this page if you find it lol"})]})};var L=function(){return Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{exact:!0,path:"/",element:Object(g.jsx)(U,{})}),Object(g.jsx)(l.a,{path:"/resume",element:Object(g.jsx)(K,{})}),Object(g.jsx)(l.a,{path:"testpage",element:Object(g.jsx)(V,{})})]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,27)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(o.a,{children:Object(g.jsx)(L,{})})}),document.getElementById("root")),R()}},[[26,1,2]]]);
//# sourceMappingURL=main.e4e6b51c.chunk.js.map