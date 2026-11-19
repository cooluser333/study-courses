(function(){
var k=4.6,X0=150,Y0=130,L=142,H=50,t=2,b=1.5;
function px(i){return X0+i*k;} function py(i){return Y0+i*k;}
function R(x,y,w,h,cls,ex){return '<rect x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'" width="'+w.toFixed(1)+'" height="'+h.toFixed(1)+'" class="'+(cls||"thick")+'" '+(ex||"")+'/>';}
function balloon(n,x,y,tx,ty){return '<line x1="'+tx+'" y1="'+ty+'" x2="'+x+'" y2="'+y+'" class="thin" marker-start="url(#dot)"/><circle cx="'+x+'" cy="'+y+'" r="10" class="thin" style="fill:var(--paper)"/>'+D.t(x,y+4,String(n),"sm b","middle");}
function brace(x1,y1,x2,y2,id){
  var dx=x2-x1,dy=y2-y1,len=Math.hypot(dx,dy),nx=-dy/len*b*k/2,ny=dx/len*b*k/2,ex=dx/len*40,ey=dy/len*40;
  var p=[[x1-ex+nx,y1-ey+ny],[x2+ex+nx,y2+ey+ny],[x2+ex-nx,y2+ey-ny],[x1-ex-nx,y1-ey-ny]].map(function(q){return q[0].toFixed(1)+","+q[1].toFixed(1);}).join(" ");
  return '<clipPath id="'+id+'"><rect x="'+x1.toFixed(1)+'" y="'+y2.toFixed(1)+'" width="'+(x2-x1).toFixed(1)+'" height="'+(y1-y2).toFixed(1)+'"/></clipPath><polygon points="'+p+'" class="thick" clip-path="url(#'+id+')" style="fill:var(--paper)"/>';
}
function gate(){
  var g="";
  var stileY=py(t),stileH=(H-2*t)*k;
  /* post (phantom) */
  g+='<g id="g-post">'+R(96,110,26,280,"phan")+D.t(109,402,"EXISTING POST","xs","middle")+D.t(109,413,"(REF, NOT IN BOM)","xs","middle")+
     R(122,py(6)-5,14,10,"phan")+R(122,py(H-6)-5,14,10,"phan")+
     D.ws({x:22,y:72,len:96,arrow:"right",ax:124,ay:py(6)-6,below:{type:"fillet",size:"3/16"},allAround:true,field:true})+D.t(70,100,"HINGE HDWE TO POST","xs","middle")+D.t(70,110,"SEE NOTE 6","xs","middle")+'</g>';
  /* frame */
  g+='<g id="g-frame">'+R(px(0),py(0),L*k,t*k)+R(px(0),py(H-t),L*k,t*k)+
     R(px(0),stileY,t*k,stileH)+R(px(71-t/2),stileY,t*k,stileH)+R(px(L-t),stileY,t*k,stileH)+
     D.l(px(71),py(-3),px(71),py(H+3),"ctr")+D.t(px(71)+4,py(-3)+2,"℄","sm")+
     balloon(1,px(30),py(-6),px(30),py(1))+balloon(2,px(L-12),py(H/2+6),px(L-1),py(H/2+2))+'</g>';
  /* braces */
  g+='<g id="g-brace">'+brace(px(t),py(H-t),px(71-t/2),py(t),"cb1")+brace(px(71+t/2),py(H-t),px(L-t),py(t),"cb2")+
     balloon(3,px(40),py(30),px(37),py(24))+
     '<line x1="'+px(82)+'" y1="'+py(11)+'" x2="'+px(89.5)+'" y2="'+(py(H-t)-(px(89.5)-px(71+t/2))*(46/68)-4).toFixed(1)+'" class="thin" marker-end="url(#ah)"/>'+D.t(px(80),py(10)-6,"(82) REF, CUT TO FIT","xs")+D.t(px(80),py(10)+6,"2 PL","xs")+'</g>';
  /* hinge tabs */
  g+='<g id="g-hinge">'+[6,H-6].map(function(c){return R(px(-3),py(c-1),3*k,2*k)+'<circle cx="'+px(-1.75).toFixed(1)+'" cy="'+py(c).toFixed(1)+'" r="'+(13/32*k).toFixed(1)+'" class="thin"/>';}).join("")+
     balloon(4,px(-4),py(H)+18,px(-2),py(H-5.5))+
     '<circle cx="'+px(-1.5)+'" cy="'+py(6)+'" r="22" class="thin" style="stroke-dasharray:8 4"/>'+D.t(px(-1.5)-30,py(6)+30,"B","lbl b")+
     D.dim(px(-3),py(0),px(-3),py(6),"6","v",-82)+D.dim(px(-3),py(H-6),px(-3),py(H),"6","v",-82)+'</g>';
  /* latch tab */
  g+='<g id="g-latch">'+R(px(L),py(H-24-0.75),3*k,1.5*k)+'<circle cx="'+px(L+1.5)+'" cy="'+py(H-24)+'" r="'+(9/32*k).toFixed(1)+'" class="thin"/>'+
     balloon(5,px(L+7.5),py(H-36),px(L+2),py(H-24.5))+
     '<path d="M'+(px(L)+4)+' '+(py(H-24)+20)+' l7 -12 l7 12 z" class="thin"/>'+D.t(px(L)+11,py(H-24)+18,"B","xs b","middle")+
     D.dim(px(L+3),py(H-24),px(L+3),py(H),"24","v",22)+
     D.ws({x:px(L-40),y:py(H-12),len:120,arrow:"right",ax:px(L)+1,ay:py(H-24)+2,below:{type:"fillet",size:"1/8"},above:{type:"fillet",size:"1/8"},tail:""})+'</g>';
  /* weld W1 frame */
  g+='<g id="g-w1">'+D.ws({x:px(8),y:py(11),len:80,arrow:"left",ax:px(t)+2,ay:py(t)+2,below:{type:"fillet",size:"1/8"},allAround:true,tail:"GMAW TYP 6 PL"})+'</g>';
  /* weld W2 braces */
  g+='<g id="g-w2">'+D.ws({x:px(41),y:py(5.5),len:86,arrow:"right",ax:px(70-t/2)-4,ay:py(t)+3,below:{type:"fillet",size:"1/8"},allAround:true,tail:"TYP 4 PL"})+'</g>';
  /* weld W5 end caps */
  g+='<g id="g-w5">'+D.ws({x:px(L-50),y:py(-7),len:130,arrow:"right",ax:px(L)+1,ay:py(0.6),below:{type:"fillet",size:"1/8",contour:"flat",finish:"G"},allAround:true,tail:"END CAPS TYP 4 PL"})+
     balloon(6,px(L+8),py(-6),px(L)+1,py(1))+'</g>';
  /* section cut A-A through top rail */
  g+='<g id="g-cut">'+D.l(px(20),py(-4),px(20),py(5),"cut")+'<line x1="'+px(20)+'" y1="'+py(-4)+'" x2="'+(px(20)-26)+'" y2="'+py(-4)+'" class="med" marker-end="url(#ah)"/><line x1="'+px(20)+'" y1="'+py(5)+'" x2="'+(px(20)-26)+'" y2="'+py(5)+'" class="med" marker-end="url(#ah)"/>'+D.t(px(20)+4,py(-4)+4,"A","sm b")+D.t(px(20)+4,py(5)+8,"A","sm b")+'</g>';
  /* dimensions */
  g+='<g id="g-dims">'+D.dim(px(0),py(H),px(L),py(H),"142 (11\'-10\")","h",44)+D.dim(px(0),py(H),px(71),py(H),"71","h",22)+
     D.dim(px(L),py(t),px(L),py(H-t),"46","v",58)+D.dim(px(L),py(0),px(L),py(H),"50","v",92)+
     D.t(px(L/2),py(H)+70,"DIAGONALS EQUAL WITHIN 1/8 (≈150-9/16 EACH)","xs b","middle")+'</g>';
  g+=D.t(px(L/2),py(H)+86,"FRONT VIEW (HINGE SIDE LEFT, VIEWED FROM PASTURE SIDE)","sm b","middle");
  return g;
}
function bottom(){
  var g="";
  /* Detail B */
  g+='<g id="g-detB" transform="translate(20,470)">'+R(150,0,40,200,"thick")+R(30,60,120,80,"thick")+'<circle cx="80" cy="100" r="16" class="thick"/>'+D.l(56,100,104,100,"ctr")+D.l(80,76,80,124,"ctr")+
     D.dim(30,140,150,140,"3","h",36)+D.dim(80,140,150,140,"1-3/4","h",18)+D.dim(30,60,30,140,"2","v",-22)+
     '<path d="M92 89 L120 40 H150" class="thin"/><line x1="120" y1="40" x2="91" y2="90" class="thin" marker-end="url(#ah)"/>'+D.t(100,30,"Ø 13/16 THRU","sm")+
     D.ws({x:200,y:150,len:60,arrow:"left",ax:152,ay:139,below:{type:"fillet",size:"1/8"},above:{type:"fillet",size:"1/8"},tail:""})+
     D.t(170,16,"HINGE STILE","xs","middle")+D.t(110,250,"DETAIL B  SCALE 1:4","lbl b","middle")+D.t(110,266,"ITEM 4, FB 1/4 x 2 x 3, 2 PL","xs","middle")+D.t(110,280,"HINGE PIN Ø 3/4 (HARDWARE)","xs","middle")+'</g>';
  /* Section A-A */
  g+='<g id="g-secA" transform="translate(330,490)"><path d="M0 0 H100 V100 H0 Z M10 10 V90 H90 V10 Z" fill-rule="evenodd" class="hatch"/>'+R(0,0,100,100,"thick",'rx="8"')+R(10,10,80,80,"thick",'rx="2"')+
     D.dim(0,0,100,0,"2","h",-18)+D.dim(100,0,100,10,".120","v",26)+D.t(50,140,"SECTION A-A","lbl b","middle")+D.t(50,156,"SCALE 1:1 · ITEM 1","xs","middle")+D.t(50,170,"2 x 2 x 11GA (.120 WALL)","xs","middle")+'</g>';
  /* Notes */
  var notes=["1. MATERIAL: MILD STEEL SQ TUBE (ASTM A500 OR A513) AND HR FLAT BAR / SHEET.","2. ALL DIMS IN INCHES TO OUTSIDE OF TUBE UNLESS NOTED.","3. RAILS (1) RUN FULL LENGTH. STILES (2) FIT BETWEEN RAILS.","4. REMOVE MILL SCALE, OIL AND ZINC AT WELD AREAS. GRIND OFF GALV.","5. ALL WELDS GMAW OR FCAW, E70 CLASS FILLER. SEAL ALL TUBE ENDS.","6. HINGE HARDWARE PER MFR. HINGE PINS ON ONE AXIS. VERIFY POST WALL.","7. TACK, CHECK DIAGONALS, THEN WELD. ALTERNATE SIDES TO LIMIT PULL.","8. BREAK SHARP EDGES. PRIME AND PAINT. DO NOT SCALE DRAWING."];
  g+='<g id="g-notes">'+D.t(500,470,"NOTES:","sm b")+notes.map(function(n,i){return D.t(500,486+i*14,n,"xs");}).join("")+'</g>';
  /* BOM */
  var bom=[["ITEM","QTY","DESCRIPTION","LENGTH"],["1","2","SQ TUBE 2 x 2 x 11GA (RAIL)","142"],["2","3","SQ TUBE 2 x 2 x 11GA (STILE)","46"],["3","2","SQ TUBE 1-1/2 x 1-1/2 x 14GA (BRACE)","(82) CTF"],["4","2","FB 1/4 x 2 (HINGE TAB)","3"],["5","1","FB 1/4 x 1-1/2 (LATCH TAB)","3"],["6","4","11GA SHEET 2 x 2 (END CAP)","—"]];
  g+='<g id="g-bom">'+R(500,622,340,140,"med")+bom.map(function(r,i){var y=638+i*20;return D.t(508,y,r[0],"xs"+(i?"":" b"))+D.t(545,y,r[1],"xs"+(i?"":" b"))+D.t(580,y,r[2],"xs"+(i?"":" b"))+D.t(790,y,r[3],"xs"+(i?"":" b"));}).join("")+[642,662].map(function(y){return D.l(500,y,840,y,"thin");}).join("")+D.t(670,775,"BILL OF MATERIALS","xs b","middle")+'</g>';
  /* Title block */
  g+='<g id="g-title">'+R(850,600,240,170,"thick")+D.l(850,630,1090,630,"med")+D.l(850,665,1090,665,"med")+D.l(850,700,1090,700,"med")+D.l(850,735,1090,735,"med")+D.l(970,700,970,770,"med")+
     D.t(858,621,"SAMPLE FAB SHOP · ANYTOWN","sm b")+D.t(858,645,"TITLE:","xs")+D.t(858,659,"12 FT FARM SWING GATE, 50 H","sm b")+
     D.t(858,680,"UNLESS OTHERWISE SPECIFIED:","xs b")+D.t(858,694,"CUTS ±1/16 · OVERALL ±1/8 · ANGLES ±1°","xs")+
     D.t(858,716,"DWG G-1250","sm b")+D.t(858,729,"REV B","sm b")+D.t(978,716,"SCALE 1:24","xs")+D.t(978,729,"SHEET 1 OF 1","xs")+
     D.t(858,752,"DRAWN DFT 11/19/26","xs")+D.t(858,764,"FOR 12\'-0\" OPENING","xs")+
     '<circle cx="990" cy="752" r="8" class="thin"/><circle cx="990" cy="752" r="4" class="thin"/><path d="M1003 748 L1022 743 L1022 761 L1003 756 Z" class="thin"/>'+D.t(1030,756,"3RD ∠","xs")+'</g>';
  /* Rev block */
  g+='<g id="g-rev">'+R(850,10,240,62,"med")+D.l(850,26,1090,26,"thin")+D.l(850,49,1090,49,"thin")+D.t(970,22,"REVISIONS","xs b","middle")+
     D.t(856,41,"A  INITIAL RELEASE              11/12/26 DFT","xs")+D.t(856,64,"B  LATCH TAB 25→24 FROM BTM   11/19/26 DFT","xs")+'</g>';
  return g;
}
window.GATE_PRINT=function(){return D.svg("0 0 1100 790",gate()+bottom(),"Shop drawing of a 12 foot by 50 inch farm swing gate: front view with dimensions, welding symbols and balloons; detail B of hinge tab; section A-A of tube; notes; bill of materials; title block and revision block",'',"gatePrint");};
var STEPS=[
 ["g-title","<strong>Step 1: Title block.</strong> 12 FT FARM SWING GATE, drawing G-1250, <strong>Rev B</strong>, scale 1:24, third-angle projection. Defaults: cuts ±1/16, overall ±1/8. It's built for a 12'-0\" opening between posts, so the gate itself is shorter to leave room for hardware."],
 ["g-rev","<strong>Step 2: Revisions.</strong> Rev B moved the latch tab from 25\" to 24\" off the bottom. The △B next to the latch tab marks the change. If your copy shows 25, it's outdated."],
 ["g-notes","<strong>Step 3: Notes.</strong> Read all eight before touching steel. Key ones: dimensions are to the <em>outside</em> of the tube (2), rails run full length and stiles fit between them (3), clean and grind galvanizing off at weld areas (4), seal all tube ends (5), tack and check diagonals before final welding (7)."],
 ["g-frame","<strong>Step 4: Frame.</strong> Balloon 1 = two rails at 142. Balloon 2 = three stiles at 46: one at the hinge end, one at the latch end, and one centered on the ℄ (center line). Rails are full length, and stiles fit between them: 50 − 2 − 2 = 46."],
 ["g-dims","<strong>Step 5: Dimensions.</strong> Overall 142 (11'-10\") long, 50 tall. Center stile ℄ is at 71 from the hinge end, which is a baseline dimension, so measure from the end. Clear height between rails is 46. Diagonals have to match within 1/8, about 150-9/16 each."],
 ["g-brace","<strong>Step 6: Braces.</strong> Balloon 3 = two 1-1/2\" square braces, one per bay, running from the <strong>bottom on the hinge side up to the top on the latch side</strong>. That way the gate's weight pushes on the brace (compression) and it holds the latch end up. (82) is a reference dimension: cut to fit and miter the ends."],
 ["g-w1","<strong>Step 7: Frame welds.</strong> 1/8 fillet, arrow side, weld-all-around circle, tail \"GMAW TYP 6 PL\". Each stile end (3 stiles × 2 ends = 6 places) gets welded all the way around where it meets the rail."],
 ["g-w2","<strong>Step 8: Brace welds.</strong> 1/8 fillet all around, TYP 4 PL: both ends of both braces. A 1/8 fillet suits 11 gauge (.120) and 14 gauge walls. A much bigger weld just adds heat, distortion and burn-through risk."],
 ["g-hinge","<strong>Step 9: Hinge tabs.</strong> Balloon 4 = two FB 1/4 x 2 x 3 tabs on the hinge stile, centered 6 from the top and 6 from the bottom. The dashed circle B sends you to Detail B for the small dimensions."],
 ["g-detB","<strong>Step 10: Detail B.</strong> The tab sticks out 3, and the Ø 13/16 THRU hole is 1-3/4 from the stile face. That's AISC standard hole size for a 3/4 pin. Weld: 1/8 fillet on <em>both</em> sides (above and below the line), meaning the top and bottom edges of the tab."],
 ["g-latch","<strong>Step 11: Latch tab.</strong> Balloon 5 = FB 1/4 x 1-1/2 x 3 at 24 from the bottom (Rev B). 1/8 fillet both sides. Check it against your actual latch or chain before you weld."],
 ["g-w5","<strong>Step 12: End caps.</strong> Balloon 6 = four 11GA 2 x 2 caps on the open rail ends. 1/8 fillet all around, flat contour, G = grind it smooth. Sealed ends keep water from rusting the tube from the inside (note 5)."],
 ["g-post","<strong>Step 13: Post (phantom).</strong> Phantom lines = the existing post, which isn't part of this weldment and isn't in the BOM. The flag means <strong>field weld</strong>: the hinge hardware gets welded to the post on site, 3/16 fillet all around, after you verify the post wall (note 6)."],
 ["g-secA","<strong>Step 14: Section A-A.</strong> The cut through the top rail shows the 2 x 2 tube with a .120 wall (11 gauge), hatched where it's solid steel. Use it to confirm the stock before you buy."],
 ["g-bom","<strong>Step 15: BOM → cut list.</strong> Every balloon matches a BOM line. Next, turn this into a cut list and figure out your sticks (below)."]
];
window.LESSONS.push({
id:"capstone-gate",module:"m4",minutes:45,title:"12. Capstone: decode the farm gate print",
blurb:"A full shop drawing of a 12 ft swing gate: decode it step by step, make the cut list, then draw your own.",
objectives:["Read a full shop drawing from title block to BOM without help.","Turn a BOM into a cut list and a stock order with kerf.","Explain every weld symbol on the gate and why it's sized the way it is.","Draw your own gate print with all the required parts."],
body:`
<p>This is the whole course on one sheet. Use the step buttons to walk through it, and each step highlights part of the drawing. On a phone, scroll the drawing sideways or use the zoom buttons. Try to read each area <em>before</em> you open its step.</p>
<div class="zoomctl no-print"><button class="btn small secondary" id="zIn">Zoom +</button><button class="btn small secondary" id="zOut">Zoom −</button><button class="btn small secondary" id="zFit">Fit</button></div>
<div class="scroll-x zoomwrap" id="gateWrap">${window.GATE_PRINT()}</div>
<div class="stepper no-print" id="stepper"><div class="stxt" id="stxt"></div><div class="row"><button class="btn small secondary" id="sPrev">◀ Back</button><button class="btn small" id="sNext">Next ▶</button><span class="meta" id="sCount"></span><button class="btn small secondary" id="sAll">Show all</button></div></div>
<h2>The cut list</h2>
<div class="tablewrap"><table><tr><th>Mark</th><th>Qty</th><th>Stock</th><th>Cut length</th><th>Notes</th></tr>
<tr><td>1</td><td>2</td><td>2 x 2 x 11GA sq tube</td><td>142</td><td>Square ends, full length rails</td></tr>
<tr><td>2</td><td>3</td><td>2 x 2 x 11GA sq tube</td><td>46</td><td>Must be identical, so cut all 3 at one saw-stop setting</td></tr>
<tr><td>3</td><td>2</td><td>1-1/2 x 1-1/2 x 14GA sq tube</td><td>~83 rough, then fit</td><td>Cut long, mark the miters off the tacked frame, trim</td></tr>
<tr><td>4</td><td>2</td><td>FB 1/4 x 2</td><td>3</td><td>Drill Ø 13/16 at 1-3/4 from the weld edge, centered</td></tr>
<tr><td>5</td><td>1</td><td>FB 1/4 x 1-1/2</td><td>3</td><td>Hole per latch hardware</td></tr>
<tr><td>6</td><td>4</td><td>11GA sheet</td><td>2 x 2</td><td>Can be cut from scrap</td></tr></table></div>
<h3>Stock order (with 1/8 kerf)</h3>
<ul>
<li><strong>2x2x11GA:</strong> 2 × 142 + 3 × 46 = 422" ≈ 35.2 ft. From 24 ft (288") sticks: stick 1 = two rails, 284-1/4 with kerf, 3-3/4 left. Stick 2 = three stiles, 138-3/8 with kerf, about 149-5/8 left for the next job. <strong>Buy 2 sticks.</strong> 20 ft (240") sticks also work: one rail plus two stiles on the first (about 5-5/8 left), one rail plus one stile on the second. You'll have less usable drop, though. Check what your yard stocks before you go.</li>
<li><strong>1-1/2 x 14GA:</strong> 2 × ~83 = 166". <strong>One 20 ft stick.</strong></li>
<li>Flat bar: about 12" of 1/4 x 2 and 6" of 1/4 x 1-1/2, often from the yard's drop (scrap) bin.</li>
<li>Weight: 2x2 at .120 wall is roughly 3 lb/ft (AISC lists the similar HSS2x2x1/8 at 3.05 lb/ft), so the frame tube alone is about 100 lb. Plan on two people and strong hinges.</li>
</ul>
<p>Use the <a href="#/cutlist">gate cut-list calculator</a> to redo this for any size gate, like a 10 ft or a 16 ft.</p>
<h2>Build order the print implies</h2>
<ol><li>Cut and deburr everything. Label pieces with soapstone (1, 2, 3…).</li><li>Lay the rails and stiles flat on a level surface. Clamp, check 142 and 50, and <strong>check the diagonals</strong>.</li><li>Tack the corners and center stile. Recheck the diagonals.</li><li>Fit the braces bottom-hinge to top-latch. Scribe the miters, trim and tack.</li><li>Weld per the symbols, alternating sides and corners so the frame doesn't pull (note 7).</li><li>Weld the tabs (Detail B, 1/8 both sides) and caps (all around, grind G).</li><li>Clean up, prime and paint. Install the hardware, and field-weld it to the post if steel.</li></ol>
<div class="callout safety"><strong>Shop safety</strong>Clear dry grass, hay and anything else that can burn from the area before you weld or grind outside. OSHA's hot-work rules (1910.252) exist because sparks travel. Keep water or an extinguisher close, and wear eye protection for cutting and grinding (1910.133).</div>
<h2>Your turn: sketch your own gate print</h2>
<p>Pick a real gate you need on the farm, or the scrap fence you want to practice on, and draw it by hand on the <a href="#/sketch">printable sketch sheet</a> or graph paper. It doesn't have to be pretty. It has to be complete enough that someone else could build it. Check each box when your drawing has it:</p>
<div class="checklist card" id="sketchChecks"></div>
<p>When you're done, take a photo of it. Having someone check your print is how you'd do it in a real shop.</p>
`,
terms:[["Weldment","An assembly of parts joined by welding, drawn as one unit."],["Compression brace","Rigid diagonal from bottom hinge corner to top latch corner that holds the latch end up."],["CTF","Cut to fit."],["Drop","Leftover piece of stock after cutting."]],
quiz:[
{q:"Which way does the rigid diagonal brace run on this gate?",c:["Top hinge side to bottom latch side","Bottom hinge side to top latch side","Horizontal","It doesn't matter"],a:1,why:"A rigid brace from the bottom hinge corner to the top latch corner is in compression and holds the latch end up. Cable or rod braces in tension run the other way."},
{q:"Why are the stiles 46\" and not 50\"?",c:["Typo","They fit between two 2\" rails: 50 − 2 − 2 = 46","They're the brace","Kerf allowance"],a:1,why:"Note 3: rails run full length and stiles fit between them, so subtract both rail thicknesses."},
{q:"The frame weld symbol shows a 1/8 fillet with a circle and \"TYP 6 PL\". What do you do?",c:["Weld 6 inches","Weld all around each of the 6 stile-to-rail joints with a 1/8 fillet","Weld 6 tacks","Weld only the hinge stile"],a:1,why:"The circle means weld all around, and TYP 6 PL means the same weld at 6 locations: 3 stiles × 2 ends."},
{q:"The hinge-to-post symbol has a flag. What does it mean?",c:["Weld it in the shop","Weld it on site at the post","Paint it red","Optional weld"],a:1,why:"The flag means a field weld. The post is already in the ground, so it gets welded on site."},
{q:"How many 24 ft sticks of 2x2x11GA do you need for this gate?",c:["1","2","3","4"],a:1,why:"422\" total. One stick gives two 142\" rails (284-1/4 with kerf), and the second gives three 46\" stiles."},
{q:"Your copy of the print shows the latch tab at 25\" from the bottom. What's wrong?",c:["Nothing","It's Rev A; the current Rev B moved it to 24\"","25 is a reference dimension","Scale error"],a:1,why:"The revision block says Rev B moved the latch tab from 25 to 24. Get the current print."},
{q:"The end-cap symbol shows a flat contour line and G. What's the finish?",c:["Leave as welded","Ground smooth and flat","Galvanized","Gas weld"],a:1,why:"A flat contour with G = finish flat by grinding."},
{q:"The brace is dimensioned (82). How do you cut it?",c:["Exactly 82.000","Cut it long, then mark and trim it to fit the tacked frame","82 ±1/16","Don't cut it; it's optional"],a:1,why:"Parentheses mark a reference dimension. Fit the braces to the real frame (CTF = cut to fit)."}
],
sources:["a24","miller","y145","y143","brace1","brace2","aiscShapes","aiscConn","osha252","osha133","bennett"],
init:function(root){
  var svg=root.querySelector("#gatePrint"),wrap=root.querySelector("#gateWrap"),i=-1,z=1;
  function setZ(v){z=Math.max(0,Math.min(3,v));if(z===0){svg.style.minWidth="0";svg.style.width="100%";}else{svg.style.minWidth=(900*z)+"px";svg.style.width=(900*z)+"px";}}
  root.querySelector("#zIn").onclick=function(){setZ(z+0.5);};root.querySelector("#zOut").onclick=function(){setZ(z<=1?0:z-0.5);};root.querySelector("#zFit").onclick=function(){setZ(0);};
  function show(n){i=n;STEPS.forEach(function(s,j){var g=svg.querySelector("#"+s[0]);if(g)g.classList.toggle("hl",j===n);});
    if(n>=0){var tg=svg.querySelector("#"+STEPS[n][0]);if(tg&&tg.scrollIntoView&&window.__userStep)try{tg.scrollIntoView({behavior:"smooth",block:"center",inline:"center"});}catch(e){}}
    if(STEPS[n]&&STEPS[n][0]==="g-latch"){var w4=svg.querySelector("#g-latch");if(w4)w4.classList.add("hl");}
    root.querySelector("#stxt").innerHTML=n<0?"Press <strong>Next</strong> to start decoding the print one area at a time.":STEPS[n][1];
    root.querySelector("#sCount").textContent=n<0?"":(n+1)+" / "+STEPS.length;
    var p=window.PROG.get();p.capstoneStep=Math.max(p.capstoneStep||0,n+1);window.PROG.save();}
  root.querySelector("#sNext").onclick=function(){window.__userStep=1;show(Math.min(STEPS.length-1,i+1));};
  root.querySelector("#sPrev").onclick=function(){window.__userStep=1;show(Math.max(-1,i-1));};
  root.querySelector("#sAll").onclick=function(){i=-1;STEPS.forEach(function(s){var g=svg.querySelector("#"+s[0]);if(g)g.classList.remove("hl");});root.querySelector("#stxt").innerHTML="All steps cleared. Press Next to start again.";root.querySelector("#sCount").textContent="";};
  show(-1);
  var items=["Title block: name, drawing number, rev, scale, date, your name","Tolerance block (e.g. cuts ±1/16)","Projection symbol or note (third angle)","Front view (elevation) of the whole gate","Overall length and height dimensions","Location of every stile, hinge and latch (from one end: baseline)","Brace direction drawn correctly (bottom hinge → top latch)","Weld symbol for frame joints, with size and all-around","Weld symbol for tabs, both sides","A detail view of one hinge tab, with hole callout","General notes (material, cleaning, seal ends, do not scale)","Balloons on every part","BOM with item, qty, description, length","Cut list with total footage and number of sticks"];
  var p=window.PROG.get();p.sketch=p.sketch||{};
  var box=root.querySelector("#sketchChecks");
  box.innerHTML=items.map(function(s,j){return '<label><input type="checkbox" data-j="'+j+'"'+(p.sketch[j]?" checked":"")+'><span>'+s+'</span></label>';}).join("")+'<p class="meta" id="skCount"></p>';
  function cnt(){var c=items.filter(function(_,j){return p.sketch[j];}).length;box.querySelector("#skCount").textContent=c+" of "+items.length+" done"+(c===items.length?". That's a complete print.":"");}
  box.querySelectorAll("input").forEach(function(inp){inp.onchange=function(){p.sketch[inp.dataset.j]=inp.checked;window.PROG.save();cnt();};});cnt();
}
});
})();
