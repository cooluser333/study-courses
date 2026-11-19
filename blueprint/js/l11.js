(function(){
var holes=D.svg("0 0 680 240",
 '<rect x="20" y="40" width="640" height="120" rx="6" class="thick"/>'+
 '<circle cx="90" cy="100" r="16" class="thick"/>'+D.l(66,100,114,100,"ctr")+D.l(90,76,90,124,"ctr")+D.t(90,190,"Ø 1/2 THRU","sm","middle")+D.t(90,206,"all the way through","xs","middle")+
 '<circle cx="230" cy="100" r="12" class="thick"/>'+D.l(210,100,250,100,"ctr")+D.l(230,80,230,120,"ctr")+D.t(230,190,"Ø 3/8 ↧ 1/2","sm","middle")+D.t(230,206,"blind hole 1/2 deep","xs","middle")+
 '<circle cx="370" cy="100" r="22" class="thick"/><circle cx="370" cy="100" r="11" class="thick"/>'+D.t(370,186,"Ø 7/16 THRU","sm","middle")+D.t(370,202,"CBORE Ø 3/4 ↧ 1/4","sm","middle")+D.t(370,218,"counterbore: head sits flush","xs","middle")+
 '<circle cx="510" cy="100" r="22" class="thick"/><circle cx="510" cy="100" r="10" class="thick"/>'+D.t(510,186,"Ø 3/8 THRU","sm","middle")+D.t(510,202,"CSK Ø 3/4 X 82°","sm","middle")+D.t(510,218,"countersink: flat head","xs","middle")+
 '<rect x="585" y="88" width="60" height="24" rx="12" class="thick"/>'+D.l(597,100,633,100,"ctr")+D.t(615,140,"SLOT","sm","middle")+D.t(615,156,"9/16 x 1-1/4","xs","middle")+
 D.t(340,26,"Hole callouts: Ø diameter · ↧ depth · CBORE (⌴) counterbore · CSK (⌵) countersink","sm b","middle"),
 "Hole callouts: through hole, blind hole with depth, counterbore, countersink and slot");
var bolt=D.svg("0 0 680 230",
 '<rect x="60" y="80" width="40" height="60" class="steel"/><rect x="100" y="94" width="260" height="32" class="steel"/>'+[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(function(i){return D.l(180+i*10,94,186+i*10,126,"thin");}).join("")+
 D.dim(100,126,360,126,"2 (length under head)","h",34,"xs")+
 D.t(380,70,"1/2-13 UNC-2A x 2","lbl b")+D.t(380,92,"1/2 = major diameter","sm")+D.t(380,110,"13 = threads per inch","sm")+D.t(380,128,"UNC = Unified coarse","sm")+D.t(380,146,"2A = class of fit (A outside, B inside)","sm")+D.t(380,164,"x 2 = length","sm")+
 '<g transform="translate(60,190)"><polygon points="20,0 40,0 50,15 40,30 20,30 10,15" class="thick" transform="translate(0,-15)"/></g>'+
 '<g transform="translate(160,175)"><polygon points="20,0 40,0 50,15 40,30 20,30 10,15" class="thick"/>'+[0,120,240].map(function(a){return '<line x1="30" y1="15" x2="'+(30+12*Math.cos(a*Math.PI/180)).toFixed(1)+'" y2="'+(15+12*Math.sin(a*Math.PI/180)).toFixed(1)+'" class="med"/>';}).join("")+'</g>'+
 '<g transform="translate(260,175)"><polygon points="20,0 40,0 50,15 40,30 20,30 10,15" class="thick"/>'+[0,60,120,180,240,300].map(function(a){return '<line x1="30" y1="15" x2="'+(30+12*Math.cos(a*Math.PI/180)).toFixed(1)+'" y2="'+(15+12*Math.sin(a*Math.PI/180)).toFixed(1)+'" class="med"/>';}).join("")+'</g>'+
 D.t(90,222,"no lines","xs","middle")+D.t(190,222,"3 lines = GR 5","xs","middle")+D.t(290,222,"6 lines = GR 8","xs","middle"),
 "Bolt callout anatomy and SAE grade head markings");
var hinge=D.svg("0 0 680 300",
 '<rect x="60" y="20" width="26" height="270" class="steel"/>'+D.t(73,14,"POST","xs","middle")+
 '<rect x="130" y="40" width="20" height="230" class="thick"/>'+D.l(150,40,520,40,"thick")+D.l(150,60,520,60,"thick")+D.l(150,250,520,250,"thick")+D.l(150,270,520,270,"thick")+D.t(330,160,"GATE (hinge end)","sm","middle")+
 /* hinge 1 */
 '<rect x="86" y="62" width="44" height="14" class="med"/><rect x="100" y="54" width="12" height="30" class="thick"/>'+
 '<rect x="86" y="214" width="44" height="14" class="med"/><rect x="100" y="206" width="12" height="30" class="thick"/>'+
 D.l(106,30,106,280,"ctr")+D.t(112,300,"hinge axis","xs acct")+
 D.t(530,80,"Both hinge pins sit on","sm b")+D.t(530,98,"ONE vertical center line.","sm b")+D.t(530,124,"If they're off, the gate","sm")+D.t(530,140,"binds, sags or swings","sm")+D.t(530,156,"open by itself.","sm")+
 D.dim(150,40,150,69,"6","v",40)+D.dim(150,221,150,270,"6","v",40)+
 D.t(330,300,"Hinge locations are dimensioned to the pin center, not the tab edge.","xs","middle"),
 "Two gate hinges aligned on a single vertical axis center line, dimensioned from the top and bottom");
window.LESSONS.push({
id:"hardware",module:"m4",minutes:20,title:"11. Holes, fasteners and hinges",
blurb:"Hole and thread callouts, bolt grades, clearance holes and hanging a gate right.",
objectives:["Read hole callouts: THRU, depth, counterbore, countersink and slots.","Decode a bolt/thread callout and recognize Grade 5 and Grade 8 heads.","Pick a clearance hole size for a bolt or pin.","Read hinge and latch callouts and keep hinges on one axis."],
body:`
<h2>Hole callouts</h2>
${D.fig('<div class="scroll-x">'+holes+'</div>',"Fig 11.1: Hole callouts use symbols from ASME Y14.5. They're on the leader note, and the hole location comes from dimensions to its center line.")}
<ul>
<li>Hole <strong>locations</strong> are dimensioned to the <strong>center</strong>, the crossing of the center lines. Center-punch there before you drill.</li>
<li><strong>2X</strong> or <strong>4X</strong> in front means that many identical holes.</li>
<li><strong>Clearance holes:</strong> for steel connections, AISC's standard hole for bolts under 1" is the bolt size + 1/16". So a 1/2 bolt gets a 9/16 hole, and a 3/4 bolt or pin gets a 13/16 hole. That's why the gate print calls Ø 13/16 for a 3/4 hinge pin.</li>
<li><strong>Slots</strong> let you adjust. They're dimensioned by width x overall length, or by center-to-center plus width.</li>
</ul>
<h2>Bolt callouts</h2>
${D.fig(bolt,"Fig 11.2: Reading a bolt callout, and checking the grade by the head marks.")}
<p><strong>1/2-13 UNC-2A x 2</strong> = 1/2" diameter, 13 threads per inch, Unified coarse, class 2 fit (A = bolt, B = nut or tapped hole), 2" long. Inch bolts graded under SAE J429 are marked with radial lines: <strong>3 lines = Grade 5</strong>, <strong>6 lines = Grade 8</strong>. Higher grades are stronger, but don't weld on hardened bolts. Welding heat ruins the heat treatment.</p>
<h2>Hinges and latches</h2>
${D.fig(hinge,"Fig 11.3: Hinges dimensioned from the top and bottom of the gate to the pin centers, on one axis.")}
<ul>
<li><strong>Weld-on hinges</strong> (barrel or bullet style) are welded to a steel post and a gate tab or stile. The post half is often a <strong>field weld</strong> because the post is already set.</li>
<li><strong>J-bolt or lag hinges</strong> go through or into a wood post. The gate side uses a strap or tab with an eye. The print will call out the pin size and tab hole.</li>
<li>The print shows hinge tabs with a hole callout and a location from the top and bottom of the gate. Both pins have to share one center line, or the gate fights itself.</li>
<li><strong>Latch tab:</strong> usually a flat bar tab with a hole for a chain, bolt or drop latch. Its height is set by the latch hardware and the post.</li>
<li><strong>Hardware gap:</strong> leave room between the gate and the posts for hinges and latch. How much depends on the hardware, so check its instructions before you finalize the overall gate length on your print.</li>
</ul>
<div class="callout safety"><strong>Drilling and grinding</strong>OSHA 1910.133 requires eye protection against flying particles. Wear safety glasses under your hood or face shield, and clamp the part. A 1/4 tab spinning on a drill bit will cut you.</div>
`,
terms:[["THRU","Hole goes completely through."],["Counterbore ⌴","Flat-bottom enlarged hole so a bolt head sits flush."],["Countersink ⌵","Cone-shaped opening for a flat-head screw."],["UNC / UNF","Unified coarse / fine thread series."],["Clearance hole","Hole slightly bigger than the bolt so it slips through."],["Hinge axis","The shared center line the hinge pins rotate on."]],
quiz:[
{q:"What does 1/2-13 UNC mean?",c:["1/2\" long, 13 mm","1/2\" diameter, 13 threads per inch, coarse thread","Grade 13","13 bolts, 1/2 each"],a:1,why:"Diameter, then threads per inch, then thread series. UNC = Unified coarse."},
{q:"A bolt head has 6 radial lines. What grade is it?",c:["Grade 2","Grade 5","Grade 8","Metric 8.8"],a:2,why:"Under SAE J429, 3 lines = Grade 5 and 6 lines = Grade 8."},
{q:"For a 3/4\" hinge pin, what's the AISC standard clearance hole?",c:["3/4","13/16","7/8","1"],a:1,why:"For bolts under 1\", the AISC standard hole is the bolt size + 1/16, so 3/4 + 1/16 = 13/16."},
{q:"What does the ⌴ symbol mean?",c:["Countersink","Counterbore","Depth","Diameter"],a:1,why:"⌴ is counterbore. ⌵ is countersink, and ↧ is depth."},
{q:"Hinge tab holes are dimensioned to…",c:["The tab's outside edge","The hole center (center lines)","Whatever is easiest","The weld toe"],a:1,why:"Holes are located by their centers, where the center lines cross."},
{q:"Why must both hinge pins share one center line?",c:["Looks better","Otherwise the gate binds or swings on its own","It's an OSHA rule","It isn't needed"],a:1,why:"Pins that aren't on one axis twist the gate as it swings. You get binding, wear and gates that won't stay put."},
{q:"Can you weld a Grade 8 bolt to a hinge tab to make a pin?",c:["Yes, it's stronger","Avoid it. Welding heat ruins the heat treatment.","Only with 7018","Only in the field"],a:1,why:"Grade 5 and 8 strength comes from heat treatment. Welding changes it. Use plain round bar or a weld-on hinge made for the job."}
],
sources:["y145","aiscConn","bolt","osha133","bennett","gw"]
});
})();
