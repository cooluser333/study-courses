(function(){
var T={};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function f16(x){var n=Math.round(x*16),w=Math.floor(n/16),r=n%16;if(!r)return w+'"';var g=r,d=16;while(g%2===0){g/=2;d/=2;}return (w?w+"-":"")+g+"/"+d+'"';}
T.f16=f16;
/* ---------- Tape drill ---------- */
T.tapeDrill=function(el){
  if(!el)return;var p=window.PROG.get();p.tape=p.tape||{best:0};
  el.innerHTML='<div class="tool"><h3>Tape drill: read the red line</h3><div id="tdSvg"></div><div class="choices" id="tdCh"></div><p class="meta" id="tdStat"></p><button class="btn small secondary" id="tdNext">Next one</button></div>';
  var streak=0,total=0,right=0;
  function round(){
    var start=Math.floor(Math.random()*40)+1,pos;do{pos=Math.floor(Math.random()*31)+1;}while(pos%16===0);
    var mark=start*16+pos,ans=D.frac16(mark);
    el.querySelector("#tdSvg").innerHTML=D.svg("0 0 640 120",window.TAPE_SVG(start,2,mark),"Tape measure segment with a red pointer");
    var opts=[mark];[1,-1,2,-2,4,-4,8].sort(function(){return Math.random()-.5;}).forEach(function(d){if(opts.length<4&&opts.indexOf(mark+d)<0&&(mark+d)>start*16&&(mark+d)<(start+2)*16)opts.push(mark+d);});
    opts.sort(function(){return Math.random()-.5;});
    var ch=el.querySelector("#tdCh");ch.innerHTML=opts.map(function(o){return '<button type="button" data-v="'+o+'">'+D.frac16(o)+'</button>';}).join("");
    var done=false;
    ch.querySelectorAll("button").forEach(function(b){b.onclick=function(){if(done)return;done=true;total++;var ok=+b.dataset.v===mark;
      if(ok){right++;streak++;b.classList.add("good");}else{streak=0;b.classList.add("badc");ch.querySelector('[data-v="'+mark+'"]').classList.add("good");}
      p.tape.best=Math.max(p.tape.best||0,streak);window.PROG.save();
      el.querySelector("#tdStat").innerHTML=(ok?"✓ ":"✗ It was "+ans+". ")+"Score "+right+"/"+total+" · streak "+streak+" · best streak "+p.tape.best;};});
  }
  el.querySelector("#tdNext").onclick=round;round();
  el.querySelector("#tdStat").textContent="Best streak so far: "+(p.tape.best||0);
};
T.tapePage=function(main){main.innerHTML='<h1>Tape measure trainer</h1><p>Read the red line to the nearest 1/16". The goal is 20 in a row without thinking. Lesson 6 explains the marks.</p><div id="td"></div>';T.tapeDrill(main.querySelector("#td"));};
/* ---------- Weld symbol builder ---------- */
var TYPES=[["none","None"],["fillet","Fillet"],["square","Square groove"],["V","V-groove"],["bevel","Bevel groove"],["U","U-groove"],["J","J-groove"],["flareV","Flare-V groove"],["flareBevel","Flare-bevel groove"],["backing","Back/backing weld"],["melt","Melt-through"],["plug","Plug/slot"]];
var NAMES={};TYPES.forEach(function(t){NAMES[t[0]]=t[1].toLowerCase();});
function sideText(sd,label){
  if(!sd||sd.type==="none")return "";
  var s="<li><strong>"+label+":</strong> "+NAMES[sd.type]+" weld";
  if(sd.size)s+=sd.type==="fillet"?", "+esc(sd.size)+"\" leg size":", size/depth "+esc(sd.size);
  else if(["V","bevel","U","J","square"].indexOf(sd.type)>=0)s+=", no size given = complete joint penetration (single groove)";
  if(sd.len){var m=String(sd.len).split("-");s+=m.length===2?", intermittent: "+esc(m[0])+"\" long welds at "+esc(m[1])+"\" pitch (center to center)":", "+esc(sd.len)+"\" long";}
  else if(sd.type==="fillet")s+=", full length of the joint";
  if(sd.contour)s+=", "+sd.contour+" contour"+(sd.finish?" finished by "+({C:"chipping",G:"grinding",H:"hammering",M:"machining",R:"rolling"}[sd.finish]):"");
  return s+".</li>";
}
T.describe=function(o){
  var h="<ul>"+sideText(o.below,"Arrow side (below the line)")+sideText(o.above,"Other side (above the line)");
  if((!o.below||o.below.type==="none")&&(!o.above||o.above.type==="none"))h+="<li>No weld symbol yet. Pick a weld type for one side.</li>";
  if(o.stagger)h+="<li>Staggered: welds on the two sides alternate instead of lining up.</li>";
  if(o.allAround)h+="<li>Circle: weld all the way around the joint.</li>";
  if(o.field)h+="<li>Flag: field weld. Done on site, not in the shop.</li>";
  if(o.tail)h+="<li>Tail: "+esc(o.tail)+"</li>";
  return h+"</ul>";
};
T.builder=function(el){
  if(!el)return;
  function sel(id,opts,v){return '<select id="'+id+'">'+opts.map(function(o){return '<option value="'+o[0]+'"'+(o[0]===v?" selected":"")+'>'+o[1]+'</option>';}).join("")+'</select>';}
  var C=[["","none"],["flat","flat / flush"],["convex","convex"],["concave","concave"]],F=[["","none"],["G","G grind"],["C","C chip"],["M","M machine"],["H","H hammer"],["R","R roll"]];
  el.innerHTML='<div class="tool"><h3>Weld symbol builder</h3><p class="meta">Set each part and watch the symbol and its plain-English reading update.</p><div class="fields">'+
   '<label>Arrow side weld'+sel("bB",TYPES,"fillet")+'</label><label>Arrow side size<input type="text" id="bBs" value="3/16"></label><label>Arrow side length or length-pitch<input type="text" id="bBl" value="" placeholder="e.g. 2-6"></label>'+
   '<label>Arrow side contour'+sel("bBc",C,"")+'</label><label>Arrow side finish'+sel("bBf",F,"")+'</label>'+
   '<label>Other side weld'+sel("bA",TYPES,"none")+'</label><label>Other side size<input type="text" id="bAs" value=""></label><label>Other side length-pitch<input type="text" id="bAl" value=""></label>'+
   '<label>Arrow comes off'+sel("bDir",[["left","left end"],["right","right end"]],"left")+'</label><label>Tail note<input type="text" id="bT" value="GMAW"></label>'+
   '<label><span><input type="checkbox" id="bAA"> Weld all around</span></label><label><span><input type="checkbox" id="bFW"> Field weld</span></label><label><span><input type="checkbox" id="bSt"> Staggered</span></label></div>'+
   '<div id="bOut" style="margin-top:10px"></div><div class="readout" id="bRead"></div></div>';
  function v(id){return el.querySelector("#"+id).value.trim();}function c(id){return el.querySelector("#"+id).checked;}
  function draw(){
    var o={x:120,y:90,len:200,arrow:v("bDir"),below:{type:v("bB"),size:v("bBs"),len:v("bBl"),contour:v("bBc"),finish:v("bBf")},above:{type:v("bA"),size:v("bAs"),len:v("bAl")},allAround:c("bAA"),field:c("bFW"),stagger:c("bSt"),tail:v("bT")||undefined};
    if(o.arrow==="right"){o.x=100;}
    el.querySelector("#bOut").innerHTML=D.wsSvg(o,440,180,"Welding symbol you built");
    el.querySelector("#bRead").innerHTML="<strong>Reads as:</strong>"+T.describe(o);
  }
  el.querySelectorAll("select,input").forEach(function(i){i.addEventListener("input",draw);i.addEventListener("change",draw);});draw();
};
T.builderPage=function(main){main.innerHTML='<h1>Weld symbol builder</h1><p>Build any common AWS A2.4 symbol and see it read out in plain words. Lessons 9 and 10 explain every part.</p><div id="bb"></div>';T.builder(main.querySelector("#bb"));};
/* ---------- Gate cut list ---------- */
T.cutlist=function(o){
  var t=o.t,n=o.bays,rail=o.L,stile=o.H-2*t,bay=(o.L-(n+1)*t)/n,brace=Math.sqrt(bay*bay+stile*stile);
  var pieces=[];for(var i=0;i<2;i++)pieces.push(rail);for(i=0;i<n+1;i++)pieces.push(stile);
  pieces.sort(function(a,b){return b-a;});
  var sticks=[];pieces.forEach(function(p){var s=sticks.find(function(s){return s.left>=p+o.kerf;});if(!s){if(p>o.stick)return sticks.push({left:-1,cuts:[p],tooLong:true});s={left:o.stick,cuts:[]};sticks.push(s);}s.cuts.push(p);s.left-=p+o.kerf;});
  return {rail:rail,stile:stile,bay:bay,brace:brace,frameIn:2*rail+(n+1)*stile,braceIn:n*brace,sticks:sticks,tooLong:sticks.some(function(s){return s.tooLong;})};
};
T.cutlistPage=function(main){
  main.innerHTML='<h1>Gate cut-list calculator</h1><p>For the style of gate on the capstone print: rails run full length, stiles fit between them, and there\'s one diagonal brace per bay. All sizes in inches. Braces are estimated corner to corner, so cut them long and fit them.</p>'+
  '<div class="tool"><div class="fields"><label>Overall length<input type="number" id="cL" value="142" step="0.0625"></label><label>Overall height<input type="number" id="cH" value="50" step="0.0625"></label><label>Frame tube size<input type="number" id="cT" value="2" step="0.25"></label><label>Bays (stiles − 1)<input type="number" id="cN" value="2" min="1" max="6"></label><label>Stick length<select id="cS"><option value="288">24 ft (288)</option><option value="240">20 ft (240)</option></select></label><label>Kerf<select id="cK"><option value="0.125">1/8</option><option value="0.0625">1/16</option></select></label></div><div class="readout" id="cOut"></div></div>'+
  '<div class="callout"><strong>Before you buy</strong>Confirm the opening between posts and how much gap your hinge and latch hardware need. Then set the overall length. Measure the actual sticks at the yard, too. Mill lengths vary.</div>';
  function run(){
    var o={L:+main.querySelector("#cL").value,H:+main.querySelector("#cH").value,t:+main.querySelector("#cT").value,bays:Math.max(1,Math.round(+main.querySelector("#cN").value)),stick:+main.querySelector("#cS").value,kerf:+main.querySelector("#cK").value};
    if(!(o.L>0&&o.H>2*o.t)){main.querySelector("#cOut").innerHTML="Enter a length and a height bigger than two tube widths.";return;}
    var r=T.cutlist(o);
    var h='<table><tr><th>Part</th><th>Qty</th><th>Cut</th></tr><tr><td>Rail</td><td>2</td><td>'+f16(r.rail)+'</td></tr><tr><td>Stile</td><td>'+(o.bays+1)+'</td><td>'+f16(r.stile)+'</td></tr><tr><td>Brace (ref, cut to fit)</td><td>'+o.bays+'</td><td>≈ '+f16(r.brace)+'</td></tr></table>';
    h+='<p>Bay clear width: '+f16(r.bay)+'. Frame tube total: '+f16(r.frameIn)+' ('+(r.frameIn/12).toFixed(1)+' ft). Braces total: ≈ '+f16(r.braceIn)+'. Diagonal check: '+f16(Math.sqrt(o.L*o.L+o.H*o.H))+' each.</p>';
    if(r.tooLong)h+='<p><strong>Rails are longer than one stick.</strong> Use longer stock or splice per your print.</p>';
    else h+='<p><strong>Frame sticks needed: '+r.sticks.length+'</strong></p><ol>'+r.sticks.map(function(s){return '<li>'+s.cuts.map(f16).join(" + ")+' → about '+f16(Math.max(0,s.left))+' left</li>';}).join("")+'</ol>';
    main.querySelector("#cOut").innerHTML=h;
  }
  main.querySelectorAll("input,select").forEach(function(i){i.addEventListener("input",run);});run();
};
/* ---------- Cheat sheet ---------- */
T.cheatPage=function(main){
  var lt=[["Object","thick"],["Hidden","hid"],["Center","ctr"],["Phantom","phan"],["Cutting plane","cut"],["Dimension / extension / leader","thin"]];
  var lines=D.svg("0 0 640 "+(lt.length*28+10),lt.map(function(r,i){var y=22+i*28;return D.t(10,y+4,r[0],"sm b")+D.l(260,y,620,y,r[1]);}).join(""),"Line types");
  var anat=D.svg("0 0 640 200",D.ws({x:200,y:110,len:260,below:{type:"fillet",size:"3/16",len:"2-6"},above:{type:"fillet",size:"3/16",len:"2-6"},allAround:true,field:true,tail:"GMAW",ax:130,ay:180})+
    D.t(330,30,"ABOVE = OTHER SIDE","sm b","middle")+D.t(330,190,"BELOW = ARROW SIDE","sm b","middle")+D.t(80,70,"flag = field","xs")+D.t(80,84,"circle = all around","xs")+D.t(500,70,"tail = process/notes","xs")+D.t(170,150,"size left","xs")+D.t(380,150,"length-pitch right","xs"),"Weld symbol anatomy");
  var types=[["fillet","Fillet"],["square","Square"],["V","V-groove"],["bevel","Bevel"],["U","U-groove"],["J","J-groove"],["flareV","Flare-V"],["flareBevel","Flare-bevel"],["backing","Back/backing"],["melt","Melt-through"],["plug","Plug/slot"],["spot","Spot"]];
  var grid='<div class="cheat-grid">'+types.map(function(t){return '<figure>'+D.svg("0 0 200 80",D.ws({x:40,y:34,len:130,below:{type:t[0]},ax:12,ay:72}),t[1])+'<figcaption>'+t[1]+'</figcaption></figure>';}).join("")+'</div>';
  var sup='<div class="cheat-grid">'+[["All around",{allAround:true,below:{type:"fillet"}}],["Field weld",{field:true,below:{type:"fillet"}}],["Both sides",{below:{type:"fillet"},above:{type:"fillet"}}],["Staggered",{below:{type:"fillet",len:"2-6"},above:{type:"fillet",len:"2-6"},stagger:true}],["Flat + grind",{below:{type:"fillet",contour:"flat",finish:"G"}}],["Convex",{below:{type:"fillet",contour:"convex"}}]].map(function(s){var o=s[1];o.x=40;o.y=40;o.len=130;o.ax=12;o.ay=78;return '<figure>'+D.svg("0 0 200 90",D.ws(o),s[0])+'<figcaption>'+s[0]+'</figcaption></figure>';}).join("")+'</div>';
  main.innerHTML='<div class="cheat"><div class="row no-print"><button class="btn" onclick="window.print()">🖨 Print cheat sheet</button></div><h1>Print-reading cheat sheet</h1>'+
  '<h2>Line types (ASME Y14.2)</h2>'+lines+
  '<h2>Welding symbol (AWS A2.4)</h2>'+anat+
  '<p><strong>Reading order:</strong> arrow → which joint · above/below → which side · shape → weld type · left number → size · right numbers → length-pitch (center to center) · circle → all around · flag → field · tail → process/notes. No size on a single groove = CJP. Broken arrow → bevel that member. Stacked reference lines → nearest the arrow is first.</p>'+
  '<h3>Weld symbols (shown on the arrow side)</h3>'+grid+'<h3>Supplementary</h3>'+sup+
  '<p>Finish letters: <strong>C</strong> chip · <strong>G</strong> grind · <strong>H</strong> hammer · <strong>M</strong> machine · <strong>R</strong> roll. Flat contour = fillets. Flush = groove, plug, slot (A2.4:2020).</p>'+
  '<h2>Abbreviations</h2><div class="tablewrap"><table><tr><th>Ø</th><td>diameter</td><th>R</th><td>radius</td><th>THRU</th><td>through</td></tr><tr><th>2X</th><td>2 places</td><th>TYP</th><td>typical</td><th>( )</th><td>reference dim</td></tr><tr><th>EQ SP</th><td>equally spaced</td><th>O.C.</th><td>on center</td><th>NTS</th><td>not to scale</td></tr><tr><th>CBORE ⌴</th><td>counterbore</td><th>CSK ⌵</th><td>countersink</td><th>↧</th><td>depth</td></tr><tr><th>℄</th><td>center line</td><th>CTF</th><td>cut to fit</td><th>GA</th><td>gauge</td></tr></table></div>'+
  '<h2>Fractions ↔ decimals</h2><div class="tablewrap"><table><tr>'+[1,2,3,4,5,6,7,8].map(function(i){return '<th>'+f16(i/16).replace('"',"")+'</th>';}).join("")+'</tr><tr>'+[1,2,3,4,5,6,7,8].map(function(i){return '<td>'+(i/16).toFixed(4).replace(/0+$/,"")+'</td>';}).join("")+'</tr><tr>'+[9,10,11,12,13,14,15,16].map(function(i){return '<th>'+f16(i/16).replace('"',"")+'</th>';}).join("")+'</tr><tr>'+[9,10,11,12,13,14,15,16].map(function(i){return '<td>'+(i/16).toFixed(4).replace(/0+$/,"").replace(/\.$/,".0")+'</td>';}).join("")+'</tr></table></div>'+
  '<h2>Tube gauge → wall</h2><p>7 GA .180 · 10 GA .134 · 11 GA .120 · 12 GA .109 · 13 GA .095 · 14 GA .083 (tube; sheet gauges differ). 2" SCH 40 pipe = 2.375 OD. Clearance hole = bolt + 1/16.</p>'+
  '<p class="meta">Summary for study. The full rules are in AWS A2.4:2020 and ASME Y14.2 / Y14.5. When a print says otherwise, follow the print.</p></div>';
};
/* ---------- Sketch sheet ---------- */
T.sketchPage=function(main){
  var g="",W=760,H=980;for(var x=20;x<=W-20;x+=18)g+=D.l(x,20,x,H-150,"thin",'style="opacity:.25"');for(var y=20;y<=H-150;y+=18)g+=D.l(20,y,W-20,y,"thin",'style="opacity:.25"');
  g+='<rect x="20" y="20" width="'+(W-40)+'" height="'+(H-40)+'" class="thick"/>';
  var tb='<rect x="380" y="'+(H-140)+'" width="360" height="120" class="thick"/>'+D.l(380,H-110,740,H-110,"thin")+D.l(380,H-80,740,H-80,"thin")+D.l(380,H-50,740,H-50,"thin")+D.l(560,H-80,560,H-20,"thin")+
    D.t(386,H-120,"TITLE:","xs")+D.t(386,H-90,"MATERIAL:","xs")+D.t(386,H-60,"DWG NO:","xs")+D.t(566,H-60,"REV:","xs")+D.t(386,H-30,"SCALE:","xs")+D.t(566,H-30,"DRAWN / DATE:","xs")+
    '<rect x="20" y="'+(H-140)+'" width="350" height="120" class="thin"/>'+D.t(26,H-124,"NOTES / TOLERANCES (UNLESS OTHERWISE SPECIFIED):","xs b")+
    '<rect x="'+(W-240)+'" y="20" width="220" height="60" class="thin"/>'+D.t(W-232,34,"REV   DESCRIPTION        DATE","xs b");
  main.innerHTML='<div class="row no-print"><button class="btn" onclick="window.print()">🖨 Print sketch sheet</button><a class="btn secondary" href="#/lesson/capstone-gate">Back to capstone</a></div><h1 class="no-print">Sketch sheet</h1><p class="no-print">Print on letter paper. Each grid square can be whatever scale you choose. Write it in the title block (for example, 1 square = 6").</p>'+D.svg("0 0 "+W+" "+H,g+tb,"Blank grid sketch sheet with title block, notes box and revision block");
};
window.TOOLS=T;
})();
