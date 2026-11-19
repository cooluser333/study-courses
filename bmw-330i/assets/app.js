const S=window.SOURCES,L=window.LESSONS,KEY='bmw330i-done';let done=JSON.parse(localStorage.getItem(KEY)||'{}');
function cite(ids){return ids.map(i=>{const s=S[i];return `<li><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a> — ${s.pub}${s.flag?` <span class="tag">${s.flag}</span>`:''}</li>`}).join('')}
function nav(f=''){document.getElementById('nav').innerHTML=L.filter(l=>(l.title+l.body).toLowerCase().includes(f)).map(l=>`<a href="#${l.id}" class="${done[l.id]?'done':''} ${location.hash.slice(1)===l.id?'active':''}"><span class="dot"></span>${l.n}. ${l.title}</a>`).join('');
const c=L.filter(l=>done[l.id]).length;document.getElementById('ptxt').textContent=`${c} / ${L.length} complete`;document.getElementById('pbar').style.width=(100*c/L.length)+'%'}
function render(){const id=location.hash.slice(1)||L[0].id,i=Math.max(0,L.findIndex(l=>l.id===id)),l=L[i];
const quiz=l.quiz.map((q,qi)=>`<div class="q"><b>${qi+1}. ${q.q}</b>${q.a.map((a,ai)=>`<label><input type="radio" name="q${qi}" value="${ai}"> ${a}</label>`).join('')}<div class="ex" hidden>${q.ex}</div></div>`).join('');
document.getElementById('main').innerHTML=`<small class="sub">Module ${l.n} of ${L.length}</small><h2>${l.title}</h2>
<div class="card obj"><b>Objectives</b><ul>${l.obj.map(o=>`<li>${o}</li>`).join('')}</ul></div>${l.body}
<h3>Quick quiz</h3><div class="card quiz" id="quiz">${quiz}<button id="chk">Check answers</button> <span id="score"></span></div>
<h3>Sources</h3><ul class="src">${cite(l.src)}</ul>
<div class="navbtns">${i>0?`<a href="#${L[i-1].id}"><button class="sec">← ${L[i-1].title}</button></a>`:'<span></span>'}${i<L.length-1?`<a href="#${L[i+1].id}"><button>${L[i+1].title} →</button></a>`:''}</div>`;
document.getElementById('chk').onclick=()=>{let s=0;l.quiz.forEach((q,qi)=>{document.querySelectorAll(`[name=q${qi}]`).forEach(r=>{const lb=r.parentElement;lb.className='';if(+r.value===q.c)lb.className='right';else if(r.checked)lb.className='wrong'});
const p=document.querySelector(`[name=q${qi}]:checked`);if(p&&+p.value===q.c)s++;document.querySelectorAll('.ex')[qi].hidden=false});
document.getElementById('score').textContent=`${s}/${l.quiz.length}`;if(s===l.quiz.length){done[l.id]=1;localStorage.setItem(KEY,JSON.stringify(done));nav()}};
nav(document.getElementById('search').value.toLowerCase());window.scrollTo(0,0)}
document.getElementById('search').oninput=e=>nav(e.target.value.toLowerCase());window.onhashchange=render;render();
