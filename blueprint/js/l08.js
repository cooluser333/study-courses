(function(){
var sec=D.svg("0 0 640 260",
 /* front view of a tube length with cutting plane */
 '<rect x="40" y="80" width="300" height="50" class="thick"/>'+D.l(40,86,340,86,"hid")+D.l(40,124,340,124,"hid")+
 D.l(190,55,190,155,"cut")+'<line x1="190" y1="55" x2="210" y2="55" class="thick" marker-end="url(#ah)"/><line x1="190" y1="155" x2="210" y2="155" class="thick" marker-end="url(#ah)"/>'+D.t(214,59,"A","lbl b")+D.t(214,159,"A","lbl b")+
 D.t(190,190,"front view, tube 2 x 2 x 11GA","sm","middle")+D.t(190,206,"arrows = look this way","xs","middle")+
 /* section */
 '<g transform="translate(430,50)"><path d="M0 0 H130 V130 H0 Z M14 14 V116 H116 V14 Z" fill-rule="evenodd" class="hatch"/><rect x="0" y="0" width="130" height="130" rx="10" class="thick"/><rect x="14" y="14" width="102" height="102" rx="3" class="thick"/></g>'+
 D.dim(430,50,560,50,"2","h",-20)+D.dim(560,50,560,64,".120","v",30)+
 D.t(495,212,"SECTION A-A","lbl b","middle")+D.t(495,228,"SCALE 2:1","sm","middle")+D.t(495,244,"hatch = cut solid steel","xs","middle"),
 "Cutting plane A-A through a square tube and the resulting section view showing hatched walls");
var det=D.svg("0 0 640 260",
 '<rect x="60" y="40" width="20" height="190" class="thick"/><rect x="80" y="40" width="180" height="20" class="thick"/>'+
 '<rect x="30" y="70" width="30" height="20" class="thick"/><circle cx="42" cy="80" r="4" class="thin"/>'+
 '<circle cx="50" cy="80" r="34" class="thin" style="stroke-dasharray:10 4"/>'+D.t(10,128,"B","lbl b")+
 D.t(150,150,"gate (partial)","sm","middle")+
 /* detail */
 '<g transform="translate(330,30)"><rect x="150" y="0" width="80" height="180" class="thick"/><rect x="0" y="40" width="150" height="100" class="thick"/><circle cx="62.5" cy="90" r="20" class="thick"/>'+D.l(32,90,93,90,"ctr")+D.l(62.5,60,62.5,120,"ctr")+
 D.dim(0,140,150,140,"3","h",36)+D.dim(62.5,140,150,140,"1-3/4","h",16)+D.dim(0,40,0,140,"2","v",-26)+
 '<path d="M78 76 L120 14 H150" class="thin"/><line x1="120" y1="14" x2="77" y2="77" class="thin" marker-end="url(#ah)"/>'+D.t(122,10,"Ø 13/16 THRU","sm")+'</g>'+
 D.t(470,250,"DETAIL B  SCALE 1:4","lbl b","middle"),
 "Detail view: a circle labeled B on the gate is redrawn larger as Detail B showing hinge tab sizes");
var types=D.svg("0 0 640 200",
 '<rect x="20" y="60" width="180" height="40" class="thick"/><g transform="translate(95,60)"><rect x="0" y="0" width="30" height="40" class="hatch"/><rect x="0" y="0" width="30" height="40" class="thin"/></g>'+D.t(110,130,"REVOLVED: section turned","xs","middle")+D.t(110,144,"90° and drawn in place","xs","middle")+
 '<rect x="240" y="60" width="160" height="40" class="thick"/>'+D.l(320,45,320,115,"cut")+D.t(326,44,"C","sm b")+D.t(326,124,"C","sm b")+
 '<g transform="translate(420,55)"><rect x="0" y="0" width="30" height="50" class="hatch"/><rect x="0" y="0" width="30" height="50" class="thin"/></g>'+D.t(400,130,"REMOVED: drawn somewhere","xs","middle")+D.t(400,144,"else, labeled SECTION C-C","xs","middle")+
 '<rect x="490" y="50" width="130" height="60" class="thick"/><path d="M520 50 q10 15 -2 30 q-12 15 2 30" class="thick"/><rect x="490" y="56" width="29" height="10" class="hatch"/><rect x="490" y="94" width="29" height="10" class="hatch"/>'+D.t(555,130,"BROKEN-OUT: peel back","xs","middle")+D.t(555,144,"one spot to see inside","xs","middle"),
 "Revolved, removed and broken-out section types");
window.LESSONS.push({
id:"sections",module:"m2",minutes:20,title:"8. Section views and detail views",
blurb:"See inside parts, and zoom in on the small stuff.",
objectives:["Follow a cutting-plane line to its section view and read which way you're looking.","Read section lining (hatch) as cut material.","Find a detail view from its circle-and-letter callout and use its scale."],
body:`
<p>Some things don't show well in the regular views, like the wall of a tube, the inside of a pipe joint, or a tiny hinge tab on a 12-foot gate. Prints handle this with <strong>sections</strong>, where you cut the part open and look at the cut, and <strong>details</strong>, where you circle a spot and draw it bigger. ASME Y14.3 covers both.</p>
<h2>Sections</h2>
${D.fig(sec,"Fig 8.1: Cut along A-A, look in the direction of the arrows, and draw what you see. Hatching marks where the saw went through solid steel.")}
<ul>
<li>The <strong>cutting-plane line</strong> is thick, with letters at each end. The arrows point the way you're looking.</li>
<li>The section is labeled with the same letters: <strong>SECTION A-A</strong>. On big sets it may list the sheet and zone where the cut is.</li>
<li><strong>Section lining</strong> (hatch) shows cut solid material. The hollow middle of the tube stays blank.</li>
<li>Sections are often drawn at a bigger scale so you can dimension a thin wall like .120.</li>
</ul>
${D.fig(types,"Fig 8.2: Other section types you'll run into.")}
<h2>Detail views</h2>
${D.fig(det,"Fig 8.3: The circle labeled B points to a spot on the main view. DETAIL B redraws it at 1:4 with its own dimensions.")}
<p>A <strong>detail view</strong> is a blown-up copy of one area. The main view has a circle (often a thin dashed or phantom line) with a letter. Find the matching <strong>DETAIL B</strong>, check its own scale, and take the small dimensions from there. The detail's dimensions win over anything you might guess from the main view.</p>
<div class="callout"><strong>Sections on weldments</strong>On fab drawings, sections often show the joint itself: how two tubes meet, which one runs through, and where the weld goes. If you're not sure which member gets cut short (butts) and which one runs full length, look for a section or detail at that corner. On the capstone gate, the rails run full length and the stiles fit between them.</div>
`,
terms:[["Cutting-plane line","Thick line with arrows and letters showing where a section is taken."],["Section lining","Hatching that shows cut solid material."],["Full section","Cut all the way through the part."],["Revolved section","Section rotated 90° and drawn on the view."],["Removed section","Section drawn away from the view and labeled."],["Detail view","An enlarged view of a small area, keyed by letter."]],
quiz:[
{q:"In a section view, what does the hatching show?",c:["Paint","Solid material the cut went through","Welds","Hidden lines"],a:1,why:"Section lining (hatch) marks cut solid material. Empty space, like the inside of a tube, isn't hatched."},
{q:"The cutting-plane arrows on A-A point to the right. What does that tell you?",c:["Section A-A shows what you see looking to the right from the cut","The part moves right","Weld on the right","Nothing"],a:0,why:"The arrows show your line of sight for the section."},
{q:"Where do you find DETAIL B?",c:["In the revision block","Look for a circle labeled B on a view, then find the view titled DETAIL B","In the BOM","On the back"],a:1,why:"The circle and letter mark the area, and the detail view with the same letter shows it enlarged."},
{q:"Detail B is drawn at SCALE 1:4 and the main view at 1:24. Which dimension do you trust for the tab hole?",c:["The detail's written dimension","Measure the main view","Average both","Neither"],a:0,why:"Use the written dimension, and the detail is where the small features get dimensioned. Never scale the drawing."},
{q:"Why are tube sections often drawn at 2:1 or bigger?",c:["To waste paper","So the thin wall can be seen and dimensioned","Because tube is metric","It's required by OSHA"],a:1,why:"A .120 wall is tiny at gate scale. Enlarging makes it readable."},
{q:"A section turned 90° and drawn right on top of a bar's view is called…",c:["Removed section","Revolved section","Broken-out section","Phantom view"],a:1,why:"A revolved section is rotated in place. A removed section is drawn elsewhere and labeled."}
],
sources:["y143","y142","bennett","gw"]
});
})();
