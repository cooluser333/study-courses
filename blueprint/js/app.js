(function(){
var L=window.LESSONS,M=window.MODULES,S=window.SOURCES,main=document.getElementById("main"),side=document.getElementById("sidebar");
var KEY="bpcourse.progress.v1";
function load(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
function save(p){try{localStorage.setItem(KEY,JSON.stringify(p));}catch(e){}}
var prog=load();prog.lessons=prog.lessons||{};
window.PROG={get:function(){return prog;},save:function(){save(prog);}};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function lp(id){return prog.lessons[id]||(prog.lessons[id]={});}
function doneCount(){return L.filter(function(l){return lp(l.id).done;}).length;}
var totalQ=L.reduce(function(a,l){return a+l.quiz.length;},0);
window.COURSE_STATS={lessons:L.length,questions:totalQ};
/* theme */
try{var th=localStorage.getItem("bpcourse.theme");if(th)document.documentElement.dataset.theme=th;}catch(e){}
document.getElementById("themeBtn").onclick=function(){var d=document.documentElement;d.dataset.theme=d.dataset.theme==="dark"?"light":"dark";try{localStorage.setItem("bpcourse.theme",d.dataset.theme);}catch(e){}};
var mb=document.getElementById("menuBtn"),scrim=document.getElementById("scrim");
function nav(open){document.body.classList.toggle("nav-open",open);mb.setAttribute("aria-expanded",open);scrim.hidden=!open;}
mb.onclick=function(){nav(!document.body.classList.contains("nav-open"));};
scrim.onclick=function(){nav(false);};
function sidebar(cur){
  var pct=Math.round(100*doneCount()/L.length);
  var h='<a href="#/" class="'+(cur==="home"?"active":"")+'"><span class="chk">⌂</span>Course home</a>';
  h+='<div class="progressbar" title="'+pct+'% complete"><span style="width:'+pct+'%"></span></div><div class="meta" style="margin:0 8px">'+doneCount()+' of '+L.length+' lessons passed</div>';
  M.forEach(function(m){h+='<h4>'+esc(m.title)+'</h4>';L.filter(function(l){return l.module===m.id;}).forEach(function(l){h+='<a href="#/lesson/'+l.id+'" class="'+(cur===l.id?"active":"")+'"><span class="chk">'+(lp(l.id).done?"✓":"·")+'</span>'+esc(l.title)+'</a>';});});
  h+='<h4>Tools</h4>';
  [["tape","Tape measure trainer"],["builder","Weld symbol builder"],["cutlist","Gate cut-list calculator"],["cheatsheet","Printable cheat sheet"],["sketch","Printable sketch sheet"],["sources","Sources"]].forEach(function(t){h+='<a href="#/'+t[0]+'" class="'+(cur===t[0]?"active":"")+'"><span class="chk">›</span>'+t[1]+'</a>';});
  side.innerHTML=h;
}
function home(){
  var next=L.find(function(l){return !lp(l.id).done;});
  var h='<p class="meta">Blueprint reading for welding and fabrication</p><h1>Read the Print</h1>';
  h+='<div class="card"><p style="margin-top:0"><strong>What this is:</strong> a hands-on course on reading shop drawings, the prints fab shops build from, and AWS welding symbols. Everything here builds toward one real print: a <strong>12-foot farm swing gate</strong> that you can decode, cut and weld yourself.</p>'+
  '<p><strong>How it works:</strong> '+L.length+' lessons, '+totalQ+' quiz questions with explanations, and drawings in every lesson. Score 80% or better on a quiz and that lesson is marked passed. Your progress is saved on this device, and the course works offline.</p>'+
  '<p style="margin-bottom:0"><strong>Gear for practice:</strong> a 25 ft tape measure, a pencil, graph paper or the <a href="#/sketch">sketch sheet</a>, and a piece of scrap tube or angle.</p></div>';
  h+='<div class="row">'+(next?'<a class="btn" href="#/lesson/'+next.id+'">'+(doneCount()?"Continue: ":"Start: ")+esc(next.title)+'</a>':'<span class="btn">All lessons passed. Go build a gate.</span>')+'<a class="btn secondary" href="#/cheatsheet">Cheat sheet</a><button class="btn secondary" id="resetBtn">Reset progress</button></div>';
  M.forEach(function(m){
    h+='<h2>'+esc(m.title)+'</h2><div class="grid">';
    L.filter(function(l){return l.module===m.id;}).forEach(function(l){var p=lp(l.id);
      h+='<div class="card"><a href="#/lesson/'+l.id+'"><strong>'+esc(l.title)+'</strong></a><p class="meta" style="margin:.3em 0">'+esc(l.blurb)+'</p><span class="pill">'+l.minutes+' min</span><span class="pill">'+l.quiz.length+' Qs</span>'+(p.done?'<span class="pill done">✓ '+p.best+'/'+l.quiz.length+'</span>':(p.best!=null?'<span class="pill">best '+p.best+'/'+l.quiz.length+'</span>':''))+'</div>';});
    h+='</div>';
  });
  h+='<h2>Tools</h2><div class="grid">'+
   '<div class="card"><a href="#/tape"><strong>Tape measure trainer</strong></a><p class="meta">Read a tape to the 1/16". Unlimited reps.</p></div>'+
   '<div class="card"><a href="#/builder"><strong>Weld symbol builder</strong></a><p class="meta">Build a symbol and see it read out in plain words.</p></div>'+
   '<div class="card"><a href="#/cutlist"><strong>Gate cut-list calculator</strong></a><p class="meta">Enter a gate size and get cut lengths and how many sticks to buy.</p></div>'+
   '<div class="card"><a href="#/cheatsheet"><strong>Cheat sheet</strong></a><p class="meta">Line types, weld symbols and abbreviations. Print it and hang it in the shop.</p></div></div>';
  main.innerHTML=h;
  document.getElementById("resetBtn").onclick=function(){if(confirm("Reset all progress and quiz scores?")){prog={lessons:{}};save(prog);route();}};
}
function srcList(ids){return '<ul class="sources">'+ids.map(function(id){var s=S[id];if(!s)return "";return '<li><a href="'+s.url+'" target="_blank" rel="noopener">'+esc(s.title)+'</a> — '+esc(s.org)+'</li>';}).join("")+'</ul>';}
function lesson(l){
  var i=L.indexOf(l),m=M.find(function(x){return x.id===l.module;});
  var h='<p class="meta">'+esc(m.title)+' · Lesson '+(i+1)+' of '+L.length+' · '+l.minutes+' min</p><h1>'+esc(l.title)+'</h1>';
  h+='<div class="card objectives"><strong>By the end you can:</strong><ul>'+l.objectives.map(function(o){return '<li>'+esc(o)+'</li>';}).join("")+'</ul></div>';
  h+='<article class="lesson-body">'+l.body+'</article>';
  if(l.terms){h+='<h2>Key terms</h2><dl class="keyterms">'+l.terms.map(function(t){return '<dt>'+esc(t[0])+'</dt><dd>'+esc(t[1])+'</dd>';}).join("")+'</dl>';}
  h+='<h2>Quiz</h2><p class="meta">'+l.quiz.length+' questions. Pass at 80% ('+Math.ceil(l.quiz.length*0.8)+' right).</p><form class="quiz" id="quiz">';
  l.quiz.forEach(function(q,qi){
    h+='<div class="q" data-i="'+qi+'"><div class="qt">'+(qi+1)+'. '+q.q+'</div>'+(q.fig||"");
    q.c.forEach(function(c,ci){h+='<label><input type="radio" name="q'+qi+'" value="'+ci+'"><span>'+c+'</span></label>';});
    h+='<div class="why"></div></div>';
  });
  h+='<button type="submit" class="btn">Check answers</button> <button type="button" class="btn secondary" id="retry">Clear and retry</button><div id="score" class="score" aria-live="polite"></div></form>';
  h+='<h2>Sources for this lesson</h2>'+srcList(l.sources);
  var prev=L[i-1],next=L[i+1];
  h+='<div class="pager">'+(prev?'<a class="btn secondary" href="#/lesson/'+prev.id+'">← '+esc(prev.title)+'</a>':'<span></span>')+(next?'<a class="btn" href="#/lesson/'+next.id+'">'+esc(next.title)+' →</a>':'<a class="btn" href="#/cheatsheet">Cheat sheet →</a>')+'</div>';
  main.innerHTML=h;
  var f=document.getElementById("quiz");
  f.onsubmit=function(e){e.preventDefault();
    var right=0,unanswered=0;
    l.quiz.forEach(function(q,qi){
      var box=f.querySelector('.q[data-i="'+qi+'"]'),pick=f.querySelector('input[name="q'+qi+'"]:checked');
      box.classList.remove("right","wrong","answered");
      box.querySelectorAll("label").forEach(function(lb){lb.classList.remove("is-correct","is-picked-wrong");});
      if(!pick){unanswered++;return;}
      var v=+pick.value,ok=v===q.a;if(ok)right++;
      box.classList.add("answered",ok?"right":"wrong");
      var labs=box.querySelectorAll("label");labs[q.a].classList.add("is-correct");if(!ok)labs[v].classList.add("is-picked-wrong");
      box.querySelector(".why").innerHTML=(ok?"✓ Right. ":"✗ Not quite. The answer is: <strong>"+q.c[q.a]+"</strong>. ")+q.why;
    });
    var p=lp(l.id),n=l.quiz.length,pass=right>=Math.ceil(n*0.8);
    if(unanswered===n){document.getElementById("score").textContent="Pick an answer first.";return;}
    p.best=Math.max(p.best||0,right);p.last=right;if(pass&&!unanswered)p.done=true;save(prog);
    document.getElementById("score").innerHTML=right+" / "+n+" correct"+(unanswered?" ("+unanswered+" unanswered)":"")+(pass&&!unanswered?" · Passed ✓":" · Need "+Math.ceil(n*0.8)+" to pass");
    sidebar(l.id);
  };
  document.getElementById("retry").onclick=function(){f.reset();f.querySelectorAll(".q").forEach(function(b){b.classList.remove("right","wrong","answered");b.querySelectorAll("label").forEach(function(lb){lb.classList.remove("is-correct","is-picked-wrong");});});document.getElementById("score").textContent="";};
  if(l.init)l.init(main);
}
function sourcesPage(){
  var h='<h1>Sources</h1><p>The facts in this course come from the standards bodies, manufacturers and textbooks below. The standards themselves (AWS A2.4, ASME Y14.x) are paid documents, so this course summarizes the basics and points you to them. When a print and this course disagree, <strong>the print and the standard it calls out win</strong>. Links were checked on Nov 19, 2026.</p>';
  var groups={};Object.keys(S).forEach(function(k){var g=S[k].group||"Other";(groups[g]=groups[g]||[]).push(k);});
  Object.keys(groups).forEach(function(g){h+='<h2>'+esc(g)+'</h2>'+srcList(groups[g]);});
  h+='<h2>Which lesson uses what</h2><div class="tablewrap"><table><tr><th>Lesson</th><th>Sources</th></tr>'+L.map(function(l){return '<tr><td>'+esc(l.title)+'</td><td>'+l.sources.map(function(id){return S[id]?esc(S[id].org):id;}).join(", ")+'</td></tr>';}).join("")+'</table></div>';
  main.innerHTML=h;
}
var pages={tape:"tapePage",builder:"builderPage",cutlist:"cutlistPage",cheatsheet:"cheatPage",sketch:"sketchPage"};
function route(){
  var hsh=location.hash.replace(/^#\/?/,""),parts=hsh.split("/");
  nav(false);
  if(parts[0]==="lesson"){var l=L.find(function(x){return x.id===parts[1];});if(l){sidebar(l.id);lesson(l);}else{sidebar("home");home();}}
  else if(parts[0]==="sources"){sidebar("sources");sourcesPage();}
  else if(pages[parts[0]]&&window.TOOLS){sidebar(parts[0]);window.TOOLS[pages[parts[0]]](main);}
  else{sidebar("home");home();}
  window.scrollTo(0,0);main.focus({preventScroll:true});
  document.title=(main.querySelector("h1")?main.querySelector("h1").textContent+" · ":"")+"Read the Print";
}
window.addEventListener("hashchange",route);
route();
})();
