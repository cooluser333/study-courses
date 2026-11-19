(function(){
var tb=D.svg("0 0 640 260",
 '<rect x="20" y="20" width="600" height="220" class="thick"/>'+
 D.l(20,70,620,70,"med")+D.l(20,120,620,120,"med")+D.l(20,170,620,170,"med")+D.l(320,70,320,240,"med")+D.l(470,170,470,240,"med")+D.l(320,205,620,205,"thin")+
 D.t(30,40,"SAMPLE FAB","lbl b")+D.t(30,58,"ANYTOWN, USA","sm")+D.t(330,40,"TITLE:","xs")+D.t(330,60,"12 FT FARM SWING GATE","lbl b")+
 D.t(30,86,"UNLESS OTHERWISE SPECIFIED:","xs b")+D.t(30,100,"DIMENSIONS IN INCHES","xs")+D.t(30,113,"FRACTIONS ±1/16   ANGLES ±1°","xs")+
 D.t(330,86,"MATERIAL:","xs")+D.t(330,106,"MILD STEEL SQ TUBE","sm")+
 D.t(30,136,"DRAWN: DFT    11/19/26","xs")+D.t(30,152,"CHECKED: —","xs")+D.t(30,165,"APPROVED: CUSTOMER","xs")+
 D.t(330,136,"FINISH:","xs")+D.t(330,156,"PRIMER + ENAMEL, BLACK","sm")+
 D.t(30,190,"PROJECTION:","xs")+
 /* third angle symbol: circles left, cone side view right, narrow end toward circles */
 '<circle cx="150" cy="205" r="14" class="thin"/><circle cx="150" cy="205" r="7" class="thin"/><path d="M175 198 L205 191 L205 219 L175 212 Z" class="thin"/>'+D.t(215,209,"THIRD ANGLE","xs")+
 D.t(330,190,"DWG NO:","xs")+D.t(390,192,"G-1250","lbl b")+D.t(480,190,"REV:","xs")+D.t(515,192,"B","lbl b")+
 D.t(330,226,"SCALE: 1:24","sm")+D.t(480,226,"SHEET 1 OF 1","sm")+
 D.t(250,255,"Tolerance block · projection symbol · drawing number · rev · scale","xs","middle"),
 "Detailed title block for a gate drawing with tolerance block, material, finish, projection symbol, drawing number, revision and scale");
var scale=D.svg("0 0 640 200",
 '<rect x="30" y="60" width="96" height="48" class="thick"/>'+D.t(78,130,"1:1 full size","sm","middle")+D.t(78,148,"1 in. on paper = 1 in. real","xs","middle")+
 '<rect x="200" y="72" width="48" height="24" class="thick"/>'+D.t(224,130,"1:2 half size","sm","middle")+D.t(224,148,"1 in. = 2 in.","xs","middle")+
 '<rect x="320" y="36" width="192" height="96" class="thick"/>'+D.t(416,150,"2:1 double size","sm","middle")+D.t(416,168,"2 in. on paper = 1 in. real","xs","middle")+
 D.t(320,22,"Same 4 x 2 plate drawn at three scales. The dimension (4.00) never changes; only the picture size does.","sm","middle")+
 D.t(78,85,"4 x 2","xs","middle")+D.t(224,88,"4 x 2","xs","middle")+D.t(416,88,"4 x 2","sm","middle")+
 D.t(530,60,"Architectural:","xs b")+D.t(530,76,"1/4\u2033=1\u2032-0\u2033 (1:48)","xs")+D.t(530,90,"1/2\u2033=1\u2032-0\u2033 (1:24)","xs")+D.t(530,104,"1\u2033=1\u2032-0\u2033 (1:12)","xs")+D.t(530,118,"3\u2033=1\u2032-0\u2033 (1:4)","xs")+D.t(530,140,"NTS = not to scale","xs b"),
 "Comparison of full size, half size and double size scales with common architectural scales");
var rev=D.svg("0 0 640 165",
 '<rect x="20" y="20" width="600" height="110" class="thick"/>'+D.l(20,45,620,45,"med")+D.l(20,75,620,75)+D.l(20,105,620,105)+
 D.l(80,20,80,130)+D.l(430,20,430,130)+D.l(520,20,520,130)+
 D.t(50,37,"REV","xs b","middle")+D.t(255,37,"DESCRIPTION","xs b","middle")+D.t(475,37,"DATE","xs b","middle")+D.t(570,37,"BY","xs b","middle")+
 D.t(50,65,"A","sm","middle")+D.t(90,65,"INITIAL RELEASE","sm")+D.t(475,65,"11/12/26","sm","middle")+D.t(570,65,"DFT","sm","middle")+
 D.t(50,95,"B","sm","middle")+D.t(90,95,"LATCH TAB MOVED 25 → 24 FROM BOTTOM (ZONE B1)","sm")+D.t(475,95,"11/19/26","sm","middle")+D.t(570,95,"DFT","sm","middle")+
 '<path d="M40 156 l10 -14 l10 14 z" class="acc"/>'+D.t(70,154,"← revision triangle: the same △B appears on the sheet next to what changed","xs acct"),
 "Revision block with two revisions and a revision triangle marker");
window.LESSONS.push({
id:"title-block",module:"m1",minutes:20,title:"2. Title block, revisions, scale, notes and BOM",
blurb:"The boxes that hold the rules: tolerances, scale, revs and the parts list.",
objectives:["Read every field in a title block, including the default tolerances.","Use a revision block to confirm you have the current drawing.","Explain scale and why you never measure a print to get a size.","Turn a bill of materials into a cut list."],
body:`
<h2>The title block</h2>
${D.fig(tb,"Fig 2.1: A title block for the capstone gate print. Field names vary by shop, but the information doesn't.")}
<ul>
<li><strong>Company and title:</strong> who made the drawing and what the part is.</li>
<li><strong>Drawing number (DWG NO):</strong> the part's ID. Two parts can look alike, but they never share a number.</li>
<li><strong>Rev:</strong> the current revision letter. It has to match the latest line in the revision block.</li>
<li><strong>Scale:</strong> how big the picture is compared to the real part.</li>
<li><strong>Material and finish:</strong> what it's made of and how it's coated, such as paint or galvanizing.</li>
<li><strong>Tolerance block ("UNLESS OTHERWISE SPECIFIED"):</strong> how far off a dimension can be when it has no tolerance of its own. Every shop sets its own values, so read them on every print.</li>
<li><strong>Projection symbol:</strong> the little cone icon. It tells you how the views are arranged (Lesson 4). US prints normally use third-angle projection.</li>
<li><strong>Drawn / checked / approved:</strong> who's accountable. On a customer gate, get their sign-off right here.</li>
</ul>
<h2>Scale</h2>
${D.fig(scale,"Fig 2.2: Scale changes the picture, not the part.")}
<p>Scale is written as <em>drawing : real</em>. 1:2 means the drawing is half size, and 2:1 means it's twice size. Building and site drawings often use architectural scales like <strong>1/4" = 1'-0"</strong>, where a quarter inch on paper equals one real foot. <strong>NTS</strong> means not to scale: the picture is only there to show shape.</p>
<div class="callout"><strong>Build to the numbers, not the picture</strong>Even when the scale is listed, the written dimension is what counts. Scale only helps you picture how big the part is.</div>
<h2>Revision block</h2>
${D.fig(rev,"Fig 2.3: Every change gets a letter, a description, a date and initials.")}
<p>When a drawing changes, the drafter adds a line to the revision block, bumps the rev letter in the title block, and often puts a small triangle with the rev letter next to whatever changed. If you're holding Rev A and the shop's on Rev B, you're building the wrong part.</p>
<h2>General notes</h2>
<p>Notes apply to the whole drawing unless a specific callout says otherwise. Typical ones:</p>
<ul><li>ALL DIMENSIONS IN INCHES UNLESS NOTED</li><li>ALL WELDS 1/8 FILLET ALL AROUND UNLESS NOTED</li><li>REMOVE MILL SCALE AT WELD AREAS</li><li>BREAK ALL SHARP EDGES</li><li>DO NOT SCALE DRAWING</li></ul>
<p>A <strong>flag note</strong> is a numbered note with the number in a small triangle or box, placed next to the feature it applies to. Read that note number in the notes list.</p>
<h2>Bill of materials to cut list</h2>
<div class="tablewrap"><table><tr><th>Item</th><th>Qty</th><th>Description</th><th>Length</th></tr>
<tr><td>1</td><td>2</td><td>SQ TUBE 2 x 2 x 11GA (rails)</td><td>142</td></tr>
<tr><td>2</td><td>3</td><td>SQ TUBE 2 x 2 x 11GA (stiles)</td><td>46</td></tr>
<tr><td>3</td><td>2</td><td>SQ TUBE 1-1/2 x 1-1/2 x 14GA (braces)</td><td>(82) CUT TO FIT</td></tr></table></div>
<p>The item numbers in the BOM match <strong>balloons</strong> on the drawing: circled numbers with a leader pointing at the part. To make a cut list, group pieces by stock size, then figure out how many sticks you need. Remember each saw cut eats about 1/16" to 1/8" of material (kerf). The cut-list calculator in Tools does this for gates.</p>
`,
terms:[["Tolerance block","Default allowed variation for any dimension without its own tolerance."],["Scale","Ratio of drawing size to real size, e.g. 1:24 or 1/2\" = 1'-0\"."],["NTS","Not to scale."],["Balloon","Circled item number on the drawing that matches a BOM line."],["Kerf","Width of material removed by a saw or cutting tool."],["Flag note","Numbered note symbol placed next to the feature it applies to."]],
quiz:[
{q:"The title block says FRACTIONS ±1/16. A rail is dimensioned 142 with no tolerance. What range is acceptable?",c:["141-15/16 to 142-1/16","141 to 143","142 exactly","141-7/8 to 142-1/8"],a:0,why:"±1/16 means 1/16 under to 1/16 over: 141-15/16 to 142-1/16."},
{q:"What does a scale of 1:2 mean?",c:["Drawing is twice the real size","Drawing is half the real size","Two sheets","1 inch = 2 feet"],a:1,why:"Drawing : real. One unit on paper equals two real units, so it's half size."},
{q:"On an architectural print, 1/4\" = 1'-0\". A wall measures 3\" on the paper. How long is it (in theory)?",c:["3 ft","12 ft","4 ft","0.75 ft"],a:1,why:"Every 1/4\" is one foot, and 3\" holds 12 quarter-inches, so 12 ft. In practice you'd still use the written dimension."},
{q:"What does NTS mean?",c:["New tube stock","Not to scale","No tolerance specified","Next to section"],a:1,why:"NTS = not to scale. The picture shows shape, and only the numbers count."},
{q:"A balloon with a 3 in it points at a brace. Where do you find the brace size?",c:["Revision block, line 3","General note 3","BOM item 3","Zone 3"],a:2,why:"Balloon numbers match item numbers in the bill of materials."},
{q:"You need two 142\" rails from one 24-ft (288\") stick, and your saw kerf is 1/8\". Will it work?",c:["Yes, with about 3-3/4\" left over","No, you're short","Only with zero kerf","Yes, with exactly zero left"],a:0,why:"142 + 142 = 284, and two cuts at 1/8\" = 1/4\", for 284-1/4\" total. 288 − 284-1/4 = 3-3/4\" left. Mill length can vary, so measure your stick first."},
{q:"A small triangle with a B in it sits next to a dimension. What does it tell you?",c:["That dimension changed in revision B","Use bolt grade B","It's a basic dimension","Weld on side B"],a:0,why:"Revision triangles mark what changed, and the letter matches the line in the revision block."}
],
sources:["bennett","gw","y145","gdt","hobart"]
});
})();
