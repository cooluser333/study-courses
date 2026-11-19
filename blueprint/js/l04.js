(function(){
var c30=Math.cos(Math.PI/6),s30=0.5;
function iso(ox,oy,s){return function(x,y,z){return [(ox+(x+y)*c30*s).toFixed(1),(oy+(x-y)*s30*s-z*s).toFixed(1)];};}
function poly(P,pts,cls){return '<polygon points="'+pts.map(function(p){return P(p[0],p[1],p[2]).join(",");}).join(" ")+'" class="'+(cls||"steel")+'"/>';}
function isoPart(ox,oy,s){
  var P=iso(ox,oy,s),g="";
  g+=poly(P,[[0,0,0],[2,0,0],[2,0,3],[0,0,3]]);          /* tall front */
  g+=poly(P,[[2,0,0],[4,0,0],[4,0,1],[2,0,1]]);          /* low front */
  g+=poly(P,[[4,0,0],[4,2,0],[4,2,1],[4,0,1]]);          /* low right */
  g+=poly(P,[[2,0,1],[4,0,1],[4,2,1],[2,2,1]]);          /* low top */
  g+=poly(P,[[2,0,1],[2,2,1],[2,2,3],[2,0,3]]);          /* tall right */
  g+=poly(P,[[0,0,3],[2,0,3],[2,2,3],[0,2,3]]);          /* tall top */
  var e=[];for(var i=0;i<36;i++){var a=i/36*2*Math.PI;e.push(P(3+0.4*Math.cos(a),1+0.4*Math.sin(a),1).join(","));}
  g+='<polygon points="'+e.join(" ")+'" class="thick" style="fill:var(--paper)"/>';
  return g;
}
var s=36,fx=60,fy=330; /* front view origin (x=0,z=0) */
function F(x,z){return [fx+x*s,fy-z*s];}
var views="";
/* FRONT: x-z */
views+='<path d="M'+F(0,0)+' L'+F(4,0)+' L'+F(4,1)+' L'+F(2,1)+' L'+F(2,3)+' L'+F(0,3)+' Z" class="thick"/>';
views+=D.l(fx+2.6*s,fy,fx+2.6*s,fy-s,"hid")+D.l(fx+3.4*s,fy,fx+3.4*s,fy-s,"hid")+D.l(fx+3*s,fy+8,fx+3*s,fy-s-8,"ctr");
views+=D.t(fx+2*s,fy+24,"FRONT","sm b","middle");
/* TOP: x-y above front. y=0 (front) at bottom */
var ty=fy-3*s-30; function T(x,y){return [fx+x*s,ty-y*s];}
views+='<path d="M'+T(0,0)+' L'+T(4,0)+' L'+T(4,2)+' L'+T(0,2)+' Z" class="thick"/>'+D.l(fx+2*s,ty,fx+2*s,ty-2*s,"thick");
views+='<circle cx="'+(fx+3*s)+'" cy="'+(ty-s)+'" r="'+(0.4*s)+'" class="thick"/>'+D.l(fx+3*s-22,ty-s,fx+3*s+22,ty-s,"ctr")+D.l(fx+3*s,ty-s-22,fx+3*s,ty-s+22,"ctr");
views+=D.t(fx+2*s,ty-2*s-8,"TOP","sm b","middle");
/* RIGHT SIDE: y-z, to the right of front; y=0 at left */
var rx=fx+4*s+40; function R(y,z){return [rx+y*s,fy-z*s];}
views+='<path d="M'+R(0,0)+' L'+R(2,0)+' L'+R(2,3)+' L'+R(0,3)+' Z" class="thick"/>'+D.l(rx,fy-s,rx+2*s,fy-s,"thick");
views+=D.l(rx+0.6*s,fy,rx+0.6*s,fy-s,"hid")+D.l(rx+1.4*s,fy,rx+1.4*s,fy-s,"hid")+D.l(rx+s,fy+8,rx+s,fy-s-8,"ctr");
views+=D.t(rx+s,fy+24,"RIGHT SIDE","sm b","middle");
/* projection lines */
views+='<g opacity=".35">'+D.l(fx+4*s,fy-s,rx,fy-s,"thin",'stroke-dasharray="2 3"')+D.l(fx+2*s,fy-3*s,fx+2*s,ty,"thin",'stroke-dasharray="2 3"')+D.l(fx+3*s,fy-s,fx+3*s,ty-0.6*s,"thin",'stroke-dasharray="2 3"')+'</g>';
var ortho=D.svg("0 0 680 370",views+isoPart(430,250,40)+D.t(560,350,"ISOMETRIC (picture)","sm b","middle")+D.t(560,365,"the same block","xs","middle"),
 "Three orthographic views of a stepped block with a vertical hole, arranged in third-angle projection, plus an isometric picture");
var box=D.svg("0 0 640 230",
 '<rect x="250" y="80" width="120" height="70" class="thick"/>'+D.t(310,120,"FRONT","sm b","middle")+
 '<rect x="250" y="10" width="120" height="60" class="med"/>'+D.t(310,44,"TOP","sm","middle")+
 '<rect x="250" y="160" width="120" height="60" class="med"/>'+D.t(310,194,"BOTTOM","sm","middle")+
 '<rect x="380" y="80" width="70" height="70" class="med"/>'+D.t(415,120,"RIGHT","sm","middle")+
 '<rect x="170" y="80" width="70" height="70" class="med"/>'+D.t(205,120,"LEFT","sm","middle")+
 '<rect x="460" y="80" width="120" height="70" class="med"/>'+D.t(520,120,"REAR","sm","middle")+
 D.t(20,40,"Third angle (US):","sm b")+D.t(20,58,"each view sits on the","xs")+D.t(20,72,"side you look from.","xs")+D.t(20,92,"Top goes above front,","xs")+D.t(20,106,"right goes right of front.","xs")+
 D.t(20,190,"Most prints only use 2 or 3","xs")+D.t(20,204,"of these six views.","xs"),
 "Unfolded glass box showing the six principal views in third-angle arrangement");
var sym=D.svg("0 0 640 120",
 '<circle cx="80" cy="60" r="22" class="thin"/><circle cx="80" cy="60" r="11" class="thin"/><path d="M118 49 L170 37 L170 83 L118 71 Z" class="thin"/>'+D.t(125,110,"THIRD ANGLE: narrow end points AT the circles","sm b","middle")+
 '<circle cx="530" cy="60" r="22" class="thin"/><circle cx="530" cy="60" r="11" class="thin"/><path d="M440 49 L492 37 L492 83 L440 71 Z" class="thin"/>'+D.t(500,110,"FIRST ANGLE: narrow end points AWAY","sm b","middle"),
 "Third-angle versus first-angle projection symbols");
window.LESSONS.push({
id:"views",module:"m1",minutes:25,title:"4. Views: orthographic and isometric",
blurb:"Turn flat front, top and side views into a 3D part in your head.",
objectives:["Explain third-angle projection and where each view sits.","Match front, top and right-side views to a 3D part.","Tell an orthographic view from an isometric picture, and know which one to measure from."],
body:`
<p>A print shows a 3D part on flat paper by drawing it straight on from several directions. Each one is an <strong>orthographic view</strong>: you look square at one face, with no perspective, so every edge facing you is shown true length. The rules are in <strong>ASME Y14.3, Orthographic and Pictorial Views</strong>.</p>
<h2>The glass box</h2>
<p>Picture the part sitting inside a glass box. Trace what you see on each wall, then unfold the box flat. In <strong>third-angle projection</strong>, used on US drawings, each view lands on the side you looked from: the top view goes above the front, and the right side view goes to the right of the front.</p>
${D.fig(box,"Fig 4.1: The six principal views unfolded in third-angle order.")}
${D.fig(ortho,"Fig 4.2: A stepped block with a drilled hole. The front, top and right-side views line up with each other. The isometric picture on the right helps you see it, but you build from the views.")}
<h3>How to read Fig 4.2</h3>
<ol>
<li><strong>Front view:</strong> an L shape. The tall part is on the left, and the step is on the right.</li>
<li><strong>Top view:</strong> sits directly above, so widths line up. The line across the middle is the edge of the step. The circle is the hole seen from above, with a center line through it both ways.</li>
<li><strong>Right side:</strong> sits directly to the right, so heights line up. The horizontal line is the step edge. The dashes are the hole, which you can't see from the side.</li>
<li>Faint projection lines show how features line up between views. A width you find in the front view is the same width in the top view.</li>
</ol>
<div class="callout"><strong>The trick:</strong> Width is shared by the front and top views, height by the front and side views, and depth by the top and side views. If you're lost on a feature, follow it straight across into the next view.</div>
<h2>Third angle vs first angle</h2>
${D.fig(sym,"Fig 4.3: The projection symbol is in the title block. US prints are normally third angle. European and Asian prints are often first angle, where the views are swapped.")}
<p>If you ever build from an imported print, check the symbol. In first angle, the top view goes <em>below</em> the front, and the right side view goes on the <em>left</em>. Get that backwards and you'll build a mirror image.</p>
<h2>Isometric and other pictorials</h2>
<p>An <strong>isometric</strong> drawing shows three faces at once, with the width and depth edges drawn at 30° from horizontal. It's great for understanding a part or showing a customer, and assembly prints often include one. But the faces aren't shown at their true shape, so take your sizes from the orthographic views and their dimensions, not from the picture.</p>
<p>For a gate, the front view (elevation) carries almost everything. A side or end view shows thickness and how the hinge tabs stick out. Many simple fab prints only have one or two views. Use what's there.</p>
`,
terms:[["Orthographic view","A view drawn looking straight at one side, with no perspective."],["Third-angle projection","US view arrangement: top above front, right side to the right."],["First-angle projection","View arrangement common outside the US: top below front, right side on the left."],["Isometric","Pictorial view with three faces showing and axes 120° apart."],["Elevation","A view of the front or side, often used for gates, frames and buildings."]],
quiz:[
{q:"In third-angle projection, where does the top view go?",c:["Below the front view","Above the front view","Left of the front view","Anywhere"],a:1,why:"In third angle, each view goes on the side you looked from, so the top view sits above the front."},
{q:"In third-angle projection, the right-side view goes…",c:["To the right of the front view","To the left of the front view","Above the top view","On the next sheet"],a:0,why:"The right side is drawn to the right of the front. In first angle it would be on the left."},
{q:"Which two views share the part's HEIGHT?",c:["Top and side","Front and side","Front and top","None of them"],a:1,why:"The front and side views are both drawn looking horizontally, so heights line up across them."},
{q:"In Fig 4.2, why is the hole drawn with dashes in the front view?",c:["It's a threaded hole","It's inside the part, so you can't see it from the front","It's a weld","It's optional"],a:1,why:"The hole goes down through the low step. From the front you can't see it, so its sides are hidden lines."},
{q:"The projection symbol shows two circles, with the cone's narrow end pointing at them. Which projection is it?",c:["First angle","Third angle","Isometric","Not to scale"],a:1,why:"For third angle, the narrow end of the cone side view points toward the circles. In first angle it points away."},
{q:"Why shouldn't you measure sizes off an isometric picture?",c:["Isometrics are always in metric","Faces aren't shown at their true shape, and angles are distorted","Isometrics don't show edges","You can measure them; it's fine"],a:1,why:"Isometric axes are drawn at 30°, so faces aren't true shape and angles are distorted. Build from orthographic views and the written dimensions."},
{q:"A print from a German supplier shows the top view BELOW the front. What's likely going on?",c:["The drafter made a mistake","It's first-angle projection","It's a section view","It's an isometric"],a:1,why:"First-angle projection places the top view below the front. Check the projection symbol in the title block."}
],
sources:["y143","gdt","bennett","gw"]
});
})();
