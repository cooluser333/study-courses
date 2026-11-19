(function(){
var rows=[["Object (visible)","thick","Thick solid. Edges you can see."],["Hidden","hid","Thin dashes. Edges hidden behind material."],["Center","ctr","Thin long-short-long. Centers of holes and symmetry."],["Dimension","dimx","Thin, with arrowheads, plus the size."],["Extension","thin","Thin. Carries an edge out to the dimension. Small gap at the part."],["Leader","lead","Thin, with an arrow pointing at a feature, for notes."],["Cutting plane","cut","Thick, with long and short dashes. Arrows show which way you look."],["Section lining","hat","Thin hatch. Marks the cut face of a section."],["Short break","brk","Thick freehand squiggle. Part is cut short to fit the sheet."],["Long break","lbrk","Thin line with zigzags, for long parts."],["Phantom","phan","Thin long-short-short. Shows alternate positions or neighboring parts."]];
var inner="",y=30;
rows.forEach(function(r){
  var x1=200,x2=400,s="";
  if(r[1]==="dimx")s='<line x1="'+x1+'" y1="'+y+'" x2="'+x2+'" y2="'+y+'" class="thin" marker-start="url(#ah)" marker-end="url(#ah)"/><rect x="285" y="'+(y-8)+'" width="30" height="15" style="fill:var(--paper)"/>'+D.t(300,y+4,"12","xs","middle");
  else if(r[1]==="lead")s='<path d="M'+x1+' '+(y+8)+' L'+(x1+40)+' '+(y-6)+' H'+(x1+70)+'" class="thin"/><line x1="'+(x1+40)+'" y1="'+(y-6)+'" x2="'+x1+'" y2="'+(y+8)+'" class="thin" marker-end="url(#ah)"/>'+D.t(x1+74,y-2,"Ø 13/16 THRU","xs");
  else if(r[1]==="hat")s='<rect x="'+x1+'" y="'+(y-9)+'" width="200" height="18" class="hatch"/><rect x="'+x1+'" y="'+(y-9)+'" width="200" height="18" class="thick"/>';
  else if(r[1]==="cut")s='<line x1="'+(x1+10)+'" y1="'+y+'" x2="'+(x2-10)+'" y2="'+y+'" class="cut"/><line x1="'+(x1+10)+'" y1="'+y+'" x2="'+(x1+10)+'" y2="'+(y+14)+'" class="thick" marker-end="url(#ah)"/><line x1="'+(x2-10)+'" y1="'+y+'" x2="'+(x2-10)+'" y2="'+(y+14)+'" class="thick" marker-end="url(#ah)"/>'+D.t(x1,y+4,"A","sm b","end")+D.t(x2+4,y+4,"A","sm b");
  else if(r[1]==="brk")s='<path d="M'+x1+' '+y+' H290 q5 -9 10 0 q5 9 10 0 H'+x2+'" class="thick"/>';
  else if(r[1]==="lbrk")s='<path d="M'+x1+' '+y+' H290 l5 -9 l10 18 l5 -9 H'+x2+'" class="thin"/>';
  else s=D.l(x1,y,x2,y,r[1]);
  inner+=D.t(16,y+4,r[0],"sm b")+s+D.t(415,y+4,r[2],"xs");
  y+=34;
});
var chart=D.svg("0 0 760 "+(y-6),inner,"Chart of the alphabet of lines: object, hidden, center, dimension, extension, leader, cutting plane, section lining, short break, long break and phantom");
/* Applied example: L-bracket front view with hole */
var app=D.svg("0 0 640 300",
 '<path d="M120 70 H170 V200 H320 V240 H120 Z" class="thick"/>'+
 /* hole seen in front as hidden lines (hole through vertical leg goes sideways) -> show hole in horizontal leg as hidden vertical lines */
 D.l(240,200,240,240,"hid")+D.l(256,200,256,240,"hid")+D.l(248,190,248,250,"ctr")+
 /* dims */
 D.dim(120,240,320,240,"8","h",34)+D.dim(320,200,320,240,"1-1/2","v",30)+D.dim(120,70,120,240,"6-1/2","v",-40)+D.dim(120,70,170,70,"2","h",-22)+
 '<path d="M252 202 L290 150 H320" class="thin"/><line x1="290" y1="150" x2="253" y2="201" class="thin" marker-end="url(#ah)"/>'+D.t(324,154,"Ø 1/2 THRU","sm")+
 /* labels */
 D.t(420,80,"thick solid = object line","sm acct")+'<line x1="418" y1="78" x2="172" y2="120" class="acc" marker-end="url(#ahh)"/>'+
 D.t(420,110,"dashes = hidden hole","sm acct")+'<line x1="418" y1="108" x2="243" y2="215" class="acc" marker-end="url(#ahh)"/>'+
 D.t(420,135,"long-short = hole center","sm acct")+'<line x1="418" y1="133" x2="249" y2="248" class="acc" marker-end="url(#ahh)"/>'+
 D.t(420,240,"leader → note","sm acct")+'<line x1="418" y1="236" x2="274" y2="178" class="acc" marker-end="url(#ahh)"/>'+
 D.t(420,290,"thin lines: dimension + extension","sm acct")+'<line x1="418" y1="285" x2="330" y2="276" class="acc" marker-end="url(#ahh)"/>',
 "Front view of an L-bracket showing object lines, hidden lines for a hole, a center line, dimension and extension lines and a leader note");
var phan=D.svg("0 0 640 220",
 '<rect x="60" y="40" width="18" height="160" class="thick"/>'+D.t(69,214,"post","xs","middle")+
 '<path d="M78 70 H330 V170 H78" class="thick"/>'+D.t(270,150,"GATE (closed)","sm","middle")+
 '<path d="M78 70 L190 22 V122 L78 170" class="phan"/>'+
 '<path d="M330 170 Q300 128 190 122" class="phan"/>'+D.t(200,16,"phantom = open position / swing","sm acct")+
 '<rect x="400" y="60" width="200" height="40" class="thick"/><path d="M400 140 H470" class="thick"/><path d="M470 130 q6 10 0 20" class="thick"/><path d="M478 130 q6 10 0 20" class="thick"/><path d="M478 140 H600" class="thick"/>'+
 '<rect x="400" y="134" width="70" height="12" class="hatch"/><rect x="478" y="134" width="122" height="12" class="hatch"/>'+
 D.t(500,85,"plate seen whole","xs","middle")+D.t(500,175,"long bar with a break:","xs","middle")+D.t(500,190,"the dimension still gives full length","xs","middle"),
 "Phantom lines showing a gate's open position, and a break line shortening a long bar");
window.LESSONS.push({
id:"lines",module:"m1",minutes:20,title:"3. The alphabet of lines",
blurb:"Solid, dashed, long-short: every line type means something specific.",
objectives:["Name the 11 common line types by sight.","Tell visible edges from hidden ones and find centers of holes.","Know which lines carry information (dimension, leader) and which show shape."],
body:`
<p>Drafters use a standard set of line types called the <strong>alphabet of lines</strong>. In the US the governing standard is <strong>ASME Y14.2, Line Conventions and Lettering</strong>. It uses two line widths, thick and thin. Thick lines show the part itself; thin lines carry information about it. Learn these and half the print is already readable.</p>
${D.fig('<div class="scroll-x">'+chart+'</div>',"Fig 3.1: The alphabet of lines. Scroll sideways on a phone.")}
<h2>Seeing them on a part</h2>
${D.fig(app,"Fig 3.2: An L-bracket. The hole goes down through the bottom leg, so in the front view you can't see it, and it shows as hidden lines with a center line through it.")}
<h3>How to read lines fast</h3>
<ul>
<li><strong>Thick solid</strong> = real edges you'd see. Trace these first to get the outline.</li>
<li><strong>Dashes</strong> = something's in there that you can't see, like a hole, the inside wall of a tube, or a part behind another.</li>
<li><strong>Long-short-long</strong> = the center of a hole, a pipe or a symmetric part. Hinge pins line up on a center line.</li>
<li><strong>Thin with arrowheads</strong> = a size (dimension line), or a pointer to a note (leader).</li>
<li><strong>Thick dash-dot with arrows and letters</strong> = a cutting plane. Go find "SECTION A-A" on the sheet (Lesson 8).</li>
<li><strong>Long-short-short</strong> = phantom: where something moves to, or a neighboring part that isn't part of this weldment, like the gate post.</li>
</ul>
${D.fig(phan,"Fig 3.3: Phantom lines show the gate's swing and open position. A break line lets a long part fit on the sheet.")}
<div class="callout"><strong>Tube walls show up as hidden lines</strong>Look at 2x2 tube from the side and the inside wall surfaces are hidden lines 0.120" in from each edge (for 11 gauge). Most shop drawings leave them out to keep things clean. Section views (Lesson 8) show the wall clearly.</div>
<p>When lines overlap, the visible line wins, then hidden, then center. So a visible edge is drawn on top of a center line that sits in the same spot.</p>
`,
terms:[["Object line","Thick continuous line showing visible edges."],["Hidden line","Thin dashed line for edges behind material."],["Center line","Thin long-short-long line marking centers and symmetry."],["Extension line","Thin line extending from a feature to a dimension line."],["Leader","Thin line with an arrowhead that connects a note to a feature."],["Phantom line","Thin long-short-short line for alternate positions, repeated detail or adjacent parts."],["Cutting-plane line","Thick line showing where a section is cut and, with arrows, which way you look."]],
quiz:[
{q:"A thin dashed line on a print shows…",c:["A cut face","An edge you can't see from this view","A weld","The center of a hole"],a:1,why:"Hidden lines are thin dashes. They show edges behind material, like a hole through the far side."},
{q:"Which line marks the center of a hinge-pin hole?",c:["Phantom (long-short-short)","Center (long-short-long)","Hidden (dashes)","Object (thick solid)"],a:1,why:"Center lines are thin long-short-long. They mark the axis of holes, pins and round parts."},
{q:"What does the thick solid line around a part show?",c:["The outline you'd see: visible edges","The dimension","A weld bead","A hidden edge"],a:0,why:"Object (visible) lines are thick and solid, and they give you the part's shape."},
{q:"Thick dash-dot lines with arrows at each end and the letters A … A show…",c:["A phantom position","Where a section view is cut and which way to look","A break","A field weld"],a:1,why:"That's a cutting-plane line. The arrows point the way you look at the cut, and the letters match SECTION A-A."},
{q:"The swing of a gate is drawn as an arc of long-short-short dashes. What line type is that?",c:["Center","Hidden","Phantom","Section lining"],a:2,why:"Phantom lines show alternate positions, the range of motion and neighboring parts."},
{q:"Which lines are drawn THIN?",c:["Object and cutting-plane","Dimension, extension, leader and center","Only hidden","All lines are the same width"],a:1,why:"ASME Y14.2 uses two widths. Object, cutting-plane and short-break lines are thick; dimension, extension, leader, center, hidden, phantom and section lining are thin."},
{q:"Why is there a small gap between an extension line and the part?",c:["It's a mistake","So you can tell the extension line from the object's own edge","To show a weld","To mark the tolerance"],a:1,why:"The gap keeps extension lines from looking like part of the object outline."}
],
sources:["y142","bennett","gw","fab","hobart"]
});
})();
