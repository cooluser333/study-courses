(function(){
var sheet=D.svg("0 0 640 420",
 '<rect x="10" y="10" width="620" height="400" class="thick"/><rect x="24" y="24" width="592" height="372" class="med"/>'+
 /* zone marks */
 [1,2,3,4].map(function(i){return D.t(24+148*(i-0.5),20,String(5-i),"xs","middle")+D.l(24+148*i,10,24+148*i,24);}).join("")+
 ["D","C","B","A"].map(function(c,i){return D.t(17,24+93*(i+0.5)+3,c,"xs","middle")+D.l(10,24+93*(i+1),24,24+93*(i+1));}).join("")+
 /* views */
 '<rect x="70" y="200" width="230" height="90" class="thick"/><rect x="70" y="80" width="230" height="70" class="thick"/><rect x="340" y="200" width="70" height="90" class="thick"/>'+
 D.t(185,310,"FRONT VIEW","sm","middle")+D.t(185,170,"TOP VIEW","sm","middle")+D.t(375,310,"RIGHT SIDE","sm","middle")+
 /* rev block */
 '<rect x="430" y="24" width="186" height="60" class="med"/>'+D.l(430,40,616,40)+D.t(523,36,"REVISIONS","xs b","middle")+D.t(436,56,"REV  DESCRIPTION      DATE  BY","xs")+D.t(436,72,"A    INITIAL RELEASE  11/26  DFT","xs")+
 /* notes */
 D.t(440,120,"NOTES:","xs b")+D.t(440,134,"1. ALL MATERIAL MILD STEEL","xs")+D.t(440,147,"2. BREAK SHARP EDGES","xs")+D.t(440,160,"3. DO NOT SCALE DRAWING","xs")+
 /* BOM */
 '<rect x="430" y="232" width="186" height="66" class="med"/>'+D.l(430,248,616,248)+D.t(523,244,"BILL OF MATERIALS","xs b","middle")+D.t(436,262,"ITEM QTY DESCRIPTION  LENGTH","xs")+D.t(436,276,"1    2   2x2x11GA TUBE  142","xs")+D.t(436,290,"2    3   2x2x11GA TUBE   46","xs")+
 /* title block */
 '<rect x="400" y="306" width="216" height="90" class="thick"/>'+D.l(400,330,616,330)+D.l(400,354,616,354)+D.l(400,375,616,375)+D.l(508,354,508,396)+
 D.t(406,322,"SAMPLE FAB SHOP · ANYTOWN","sm b")+D.t(406,347,"TITLE: SAMPLE BRACKET","sm")+D.t(406,368,"DWG NO: B-101","xs")+D.t(514,368,"REV: A","xs")+D.t(406,390,"SCALE: 1:4","xs")+D.t(514,390,"SHEET 1 OF 1","xs")+
 /* callouts */
 D.t(56,58,"① Border + zones (4-3-2-1 / A-B-C-D): \u201Csee zone B3\u201D","sm acct")+
 D.t(395,388,"② Title block →","sm acct","end")+
 D.t(470,100,"③ Revision block","sm acct")+
 D.t(440,190,"④ General notes","sm acct")+D.t(440,226,"⑤ Bill of materials","sm acct")+D.t(70,345,"⑥ Views of the part, drawn to scale","sm acct"),
 "Layout of a typical shop drawing sheet: border with zones, views, revision block, notes, bill of materials and title block");
var flow=D.svg("0 0 640 120",
 [["Print",10],["Cut list",136],["Cut & prep",262],["Fit-up & tack",388],["Weld & check",514]].map(function(b,i){return '<rect x="'+b[1]+'" y="35" width="104" height="46" rx="8" class="med"/>'+D.t(b[1]+52,63,b[0],"sm b","middle")+(i<4?'<line x1="'+(b[1]+106)+'" y1="58" x2="'+(b[1]+124)+'" y2="58" class="med" marker-end="url(#ah)"/>':'');}).join("")+
 D.t(320,22,"Every step reads from the print. Mistakes made at step 1 get welded in at step 5.","sm","middle")+D.t(320,108,"Check the print again before you cut, before you tack and before you burn it in.","sm","middle"),
 "Workflow from print to finished weldment");
window.LESSONS.push({
id:"why-prints",module:"m1",minutes:15,title:"1. Why prints matter and how a sheet is laid out",
blurb:"What a shop drawing is, who uses it, and where everything lives on the sheet.",
objectives:["Explain what a shop drawing tells a welder and why you build to it, not to memory.","Find the title block, revision block, notes, bill of materials and views on any sheet.","Follow a print-first routine before you cut steel."],
body:`
<p>A print, also called a blueprint, drawing or shop drawing, is the contract between whoever designed the part and whoever builds it. It tells you <strong>what shape</strong> to make, <strong>what size</strong>, <strong>what material</strong>, <strong>where to weld and how much</strong>, and <strong>what changed since the last version</strong>. If you can read one, you can build things you didn't design, quote jobs accurately, and work in any fab shop. If you can't, you're stuck as a helper.</p>
<p>The name "blueprint" comes from an old copying process that made white lines on blue paper. Today prints are printed on white paper or shown on a tablet, but everybody still says blueprint.</p>
${D.fig(sheet,"Fig 1.1: Where things live on a typical sheet. Layouts vary by shop, but the title block is almost always in the lower right corner.")}
<h2>What's on every sheet</h2>
<ul>
<li><strong>Views:</strong> drawings of the part seen from different directions (Lessons 4 and 6).</li>
<li><strong>Dimensions:</strong> the sizes, in inches or in feet and inches (Lesson 5).</li>
<li><strong>Title block:</strong> the part name, drawing number, scale, who drew it, material and default tolerances (Lesson 2).</li>
<li><strong>Revision block:</strong> what changed and when. Always check that you're building from the current rev.</li>
<li><strong>General notes:</strong> rules that apply to the whole drawing, such as "ALL WELDS 3/16 FILLET UNLESS NOTED".</li>
<li><strong>Bill of materials (BOM):</strong> every piece, with quantity, size and material.</li>
<li><strong>Welding symbols:</strong> the exact weld type, size, side and length (Lessons 9 and 10).</li>
</ul>
<h2>Why build to the print instead of eyeballing it</h2>
<p>A gate you eyeball might look fine and then not fit between the posts, sag in a year, or come out with the latch on the wrong side. A print takes the guessing out. It also protects you when you're doing paid work: if the customer signed off on the print and you built to it, the argument is settled.</p>
${D.fig(flow,"Fig 1.2: The print drives every step of the job.")}
<h2>The print-first routine</h2>
<ol>
<li><strong>Read the title block first:</strong> part name, drawing number, rev, scale, material and tolerances.</li>
<li><strong>Read every general note</strong> before looking at a single dimension. A note like "ALL DIMENSIONS TO OUTSIDE OF TUBE" changes how you measure everything.</li>
<li><strong>Figure out the views</strong> and picture the part in 3D.</li>
<li><strong>Go through the BOM</strong> and make your cut list.</li>
<li><strong>Find every welding symbol</strong> and note which joints get welded, on which side and how big.</li>
<li><strong>Mark up your copy</strong> (highlight what's done) but never change the dimensions on it yourself. If something looks wrong, ask whoever owns the drawing.</li>
</ol>
<div class="callout"><strong>"DO NOT SCALE DRAWING"</strong>Many prints say this. It means you never measure the paper with a ruler to get a size. Paper shrinks, copiers distort, and screens zoom. If a dimension is missing, ask; don't measure the picture.</div>
<div class="callout safety"><strong>Safety lives on prints too</strong>Notes may call out things like coatings that must be removed before welding. Galvanized coating gives off zinc fumes when welded. Federal rules (OSHA 1910.252) also require moving or shielding anything that can burn before hot work. Read the notes before you strike an arc.</div>
`,
terms:[["Shop drawing","A drawing made for fabricators that shows exactly how to build one part or assembly."],["Title block","The box, usually in the lower right corner, with the part name, number, scale, material, tolerances and approvals."],["Revision (rev)","A tracked change to a drawing, usually labeled A, B, C… or 1, 2, 3…"],["BOM","Bill of materials: the parts list with quantities and sizes."],["Zone","Grid letters and numbers around the border used to point at an area of the sheet."]],
quiz:[
{q:"Where is the title block usually found?",c:["Top left","Lower right corner","Center of the sheet","On the back"],a:1,why:"Most drawing sheets put the title block in the lower right corner so it's visible when prints are folded or flipped through."},
{q:"A print says DO NOT SCALE DRAWING and one length has no dimension. What do you do?",c:["Measure the paper with a ruler and multiply by the scale","Guess from the other sizes","Ask whoever owns the drawing for the dimension","Leave the piece out"],a:2,why:"Paper and screens distort. A missing dimension is a question for the drafter or engineer, not something to measure off the paper."},
{q:"What should you read FIRST on a new print?",c:["The biggest dimension","The welding symbols","The title block and general notes","The BOM quantities"],a:2,why:"The title block tells you which part and rev you're looking at, plus the scale, material and default tolerances. Notes set rules for the whole sheet. Everything else depends on them."},
{q:"The revision block shows Rev C, but your printed copy says Rev B. What's the right move?",c:["Build from Rev B since that's what you have","Get the Rev C print before you cut","Average the two","Build from Rev B and fix it later"],a:1,why:"Building from an old rev is one of the most common ways shops scrap parts. Always confirm you have the current revision."},
{q:"What does the BOM tell you?",c:["Weld sizes","Each part, its quantity, size and material","The drawing scale","Who approved the drawing"],a:1,why:"The bill of materials is the parts list, and you build your cut list from it."},
{q:"A note says ALL WELDS 3/16 FILLET UNLESS NOTED. A joint has a welding symbol calling for 1/4 fillet. What size do you weld?",c:["3/16","1/4","Whichever is easier","Both, one over the other"],a:1,why:"UNLESS NOTED (or UNLESS OTHERWISE SPECIFIED) sets the default. A specific callout on the joint overrides the general note."}
],
sources:["bennett","gw","hobart","fab","osha252"]
});
})();
