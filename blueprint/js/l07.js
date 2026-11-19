(function(){
function cell(x,y,shape,name,call){return '<g transform="translate('+x+','+y+')">'+shape+D.t(60,118,name,"sm b","middle")+D.t(60,134,call,"xs","middle")+'</g>';}
var sqT='<rect x="25" y="15" width="70" height="70" rx="6" class="steel"/><rect x="33" y="23" width="54" height="54" rx="2" style="fill:var(--paper)" class="med"/>';
var recT='<rect x="30" y="5" width="60" height="90" rx="6" class="steel"/><rect x="38" y="13" width="44" height="74" rx="2" style="fill:var(--paper)" class="med"/>';
var ang='<path d="M30 10 V90 H100 V80 H40 V10 Z" class="steel"/>';
var flat='<rect x="10" y="45" width="100" height="14" class="steel"/>';
var plate='<rect x="10" y="30" width="100" height="40" class="steel"/><text x="60" y="54" text-anchor="middle" class="xs">PL</text>';
var chan='<path d="M30 10 H90 V20 H42 V80 H90 V90 H30 Z" class="steel"/>';
var pipe='<circle cx="60" cy="50" r="42" class="steel"/><circle cx="60" cy="50" r="33" style="fill:var(--paper)" class="med"/>';
var rtube='<circle cx="60" cy="50" r="36" class="steel"/><circle cx="60" cy="50" r="30" style="fill:var(--paper)" class="med"/>';
var rbar='<circle cx="60" cy="50" r="28" class="steel"/>';
var shapes=D.svg("0 0 640 470",
 cell(0,0,sqT,"Square tube","2 x 2 x 11GA · HSS2x2x1/8")+cell(160,0,recT,"Rectangular tube","HSS3x2x3/16 · 3 x 2 x 11GA")+cell(320,0,ang,"Angle","L2x2x1/4")+cell(480,0,flat,"Flat bar","FB 1/4 x 2")+
 cell(0,160,plate,"Plate","PL 1/4 x 6 x 8")+cell(160,160,chan,"Channel","C3x4.1")+cell(320,160,pipe,"Pipe","2 SCH 40 (2.375 OD)")+cell(480,160,rtube,"Round tube","2.000 OD x .120 W")+
 cell(0,320,rbar,"Round bar","Ø 3/4 RD")+
 '<g transform="translate(170,330)">'+D.t(0,10,"Order of numbers:","sm b")+D.t(0,30,"Tube: width x height x wall","sm")+D.t(0,48,"Angle: leg x leg x thickness","sm")+D.t(0,66,"Flat bar: thickness x width (shops vary; check)","sm")+D.t(0,84,"Plate: thickness x width x length","sm")+D.t(0,102,"Channel/beam: depth x weight per foot (lb/ft)","sm")+D.t(0,120,"Pipe: nominal size + schedule (not the real OD)","sm")+'</g>',
 "Cross sections of common steel shapes with example callouts");
var pt=D.svg("0 0 640 200",
 '<circle cx="140" cy="100" r="60" class="steel"/><circle cx="140" cy="100" r="52" style="fill:var(--paper)" class="med"/>'+D.dim(80,100,200,100,"2.375","h",-78)+D.t(140,190,"2\u2033 PIPE (NPS 2, SCH 40)","sm b","middle")+D.t(140,100,"wall .154","xs","middle")+
 '<circle cx="460" cy="100" r="50" class="steel"/><circle cx="460" cy="100" r="44" style="fill:var(--paper)" class="med"/>'+D.dim(410,100,510,100,"2.000","h",-68)+D.t(460,190,"2\u2033 ROUND TUBE (2.000 OD)","sm b","middle")+D.t(460,100,"wall .120","xs","middle")+
 D.t(320,60,"same \u201C2 inch\u201D,","sm","middle")+D.t(320,78,"different steel","sm","middle"),
 "Two inch pipe versus two inch tube: pipe nominal size is not its outside diameter");
window.LESSONS.push({
id:"shapes",module:"m2",minutes:25,title:"7. Steel shapes and material callouts",
blurb:"Square tube, angle, flat bar, pipe vs tube, plate and gauge vs inches.",
objectives:["Recognize common structural shapes by their cross sections.","Read callouts like 2x2x11GA, HSS2x2x1/8, L2x2x1/4, PL 1/4 and 2 SCH 40.","Convert gauge to decimal thickness, and explain why sheet gauge and tube gauge differ.","Order the right material from a BOM."],
body:`
${D.fig(shapes,"Fig 7.1: Common shapes in cross section, each with a typical callout.")}
<h2>Tube</h2>
<p><strong>Square and rectangular tube</strong> are the backbone of gates, trailers and frames. Shops call them out two ways:</p>
<ul>
<li><strong>By gauge:</strong> <code>2 x 2 x 11GA</code> is a 2" square with an 11 gauge wall. <code>2 x 2 x .120</code> is the same tube. On tube, 11 gauge is <strong>0.120"</strong>, just under 1/8. Farm-store and steel-yard tube is usually sold this way.</li>
<li><strong>As HSS</strong> (hollow structural section): <code>HSS2x2x1/8</code> is a 2x2 with a 1/8 <em>nominal</em> wall. AISC lists it at 3.05 lb/ft and uses a slightly thinner design wall (0.116"). Engineered structural steel is called out this way.</li>
</ul>
<p>The numbers go <strong>width x height x wall</strong>. For a rectangle, read the drawing to see which way the long side runs.</p>
<h2>Gauge: higher number = thinner</h2>
<div class="tablewrap"><table><tr><th>Gauge</th><th>Tube wall (in.)</th><th>Sheet steel (in.)</th><th>Rough fraction</th></tr>
<tr><td>7</td><td>.180</td><td>.1793</td><td>≈ 3/16</td></tr>
<tr><td>10</td><td>.134</td><td>.1345</td><td>≈ 9/64</td></tr>
<tr><td>11</td><td>.120</td><td>.1196</td><td>just under 1/8</td></tr>
<tr><td>12</td><td>.109</td><td>.1046</td><td>≈ 7/64</td></tr>
<tr><td>13</td><td>.095</td><td>.0897</td><td>≈ 3/32</td></tr>
<tr><td>14</td><td>.083</td><td>.0747</td><td>≈ 5/64</td></tr></table></div>
<p class="meta">Tube walls are nominal. Heidtman notes that ASTM A500 and A513 both allow about 10% either way on square and rectangular tube wall.</p>
<p>Tube wall gauge and sheet gauge use <strong>different tables</strong>. Tube uses the Birmingham Wire Gauge, and sheet uses the Manufacturers' Standard Gauge. They're close at 11 gauge (.120 vs .1196) but not at 14 (.083 vs .0747). When it matters, give the decimal, and ask the supplier for the actual wall.</p>
<h2>Angle, flat bar, plate, channel</h2>
<ul>
<li><strong>Angle</strong> <code>L2x2x1/4</code>: two 2" legs, 1/4 thick. For unequal legs, like <code>L3x2x1/4</code>, the long leg is listed first.</li>
<li><strong>Flat bar</strong> <code>FB 1/4 x 2</code>: 1/4 thick by 2 wide. Suppliers don't all list it in the same order, but it's easy to tell which number is the thickness. Hinge and latch tabs are usually flat bar.</li>
<li><strong>Plate</strong> <code>PL 1/4 x 6 x 8</code>: 1/4 thick, 6 x 8. Anything 3/16 or thicker is generally called plate, and thinner stuff is sheet, but the cutoff isn't the same everywhere.</li>
<li><strong>Channel</strong> <code>C3x4.1</code>: 3" deep, 4.1 lb per foot. Beams are the same idea: <code>W8x18</code> is about 8" deep, 18 lb/ft.</li>
</ul>
<h2>Pipe vs tube: the classic trap</h2>
${D.fig(pt,"Fig 7.2: \"2 inch pipe\" is not 2 inches across.")}
<p><strong>Pipe</strong> is sized by <em>nominal pipe size</em> (NPS) and <em>schedule</em>. A 2" schedule 40 pipe is <strong>2.375" OD</strong> with a .154" wall, and every schedule of 2" pipe has the same 2.375 OD. A higher schedule only makes the wall thicker. <strong>Tube</strong> is sized by its actual OD and wall, so 2" tube really is 2.000" OD. If you design a gate latch around "2 inch," know which one you're buying.</p>
<div class="callout"><strong>Material on gate prints</strong>Most farm gates use mild steel square tube. The print or the title block might name a spec, such as ASTM A500 for structural tube or ASTM A513 for mechanical tube. Galvanized tube needs the zinc ground off at weld areas, plus good ventilation. Zinc fumes can make you sick.</div>
`,
terms:[["HSS","Hollow structural section: structural square, rectangular or round tube."],["Gauge (GA)","Number for thickness. Higher = thinner. Tube and sheet use different tables."],["NPS","Nominal pipe size: a trade size, not the actual OD."],["Schedule","Pipe wall thickness series (SCH 40, SCH 80)."],["Plate vs sheet","Plate is thick (commonly 3/16\"+), sheet is thinner."]],
quiz:[
{q:"What does 2 x 2 x 11GA describe?",c:["2\" angle, 11 lb/ft","2\" square tube with 0.120\" wall","2\" pipe schedule 11","Flat bar 2 x 11"],a:1,why:"Width x height x wall gauge. On tube, 11 gauge is .120\"."},
{q:"Which is thicker: 11 gauge or 14 gauge?",c:["11 gauge","14 gauge","They're the same","Depends on color"],a:0,why:"With gauge, a higher number is thinner. On tube, 11 GA = .120 and 14 GA = .083."},
{q:"What is the outside diameter of 2\" schedule 40 pipe?",c:["2.000\"","2.375\"","1.900\"","2.067\""],a:1,why:"NPS 2 pipe is 2.375\" OD for every schedule. 2.067 is the inside diameter of schedule 40."},
{q:"How do you read L3x2x1/4?",c:["Angle, 3\" and 2\" legs, 1/4\" thick","Channel 3\" deep","Plate 3 x 2","Tube 3 x 2 x 1/4"],a:0,why:"L = angle. The legs are listed first, long leg first, then the thickness."},
{q:"What does C3x4.1 mean?",c:["Channel, 3\" deep, 4.1 lb/ft","Channel, 3\" wide flanges, 4.1\" long","Square tube 3\" at 4.1 gauge","Pipe 3\" schedule 4.1"],a:0,why:"Channels and beams are called out by depth x weight per foot."},
{q:"Why can 14 GA tube and 14 GA sheet have different thicknesses?",c:["They're the same, .0747","Tube uses Birmingham Wire Gauge (.083), sheet uses Manufacturers' Standard (.0747)","Tube is always metric","Sheet is measured with paint on"],a:1,why:"They're two different gauge tables. Give the decimal when it matters."},
{q:"A tab is called out FB 1/4 x 2 x 3. What stock do you grab?",c:["1/4\" thick, 2\" wide flat bar, cut 3\" long","2\" square tube","1/4\" round bar","3\" angle"],a:0,why:"FB = flat bar: thickness x width, then cut length."}
],
sources:["aiscShapes","heidtman","londer","boyer","pipeTube","etb","bennett"]
});
})();
