(function(){
var anat=D.svg("0 0 640 290",
 '<path d="M80 200 H420 V120 H340 V80 H80 Z" class="thick"/>'+
 '<circle cx="380" cy="160" r="14" class="thick"/>'+D.l(358,160,402,160,"ctr")+D.l(380,138,380,182,"ctr")+
 '<circle cx="150" cy="140" r="9" class="thick"/><circle cx="270" cy="140" r="9" class="thick"/>'+D.l(134,140,166,140,"ctr")+D.l(254,140,286,140,"ctr")+
 D.dim(80,200,420,200,"12","h",40)+D.dim(150,140,270,140,"4.00","h",-80)+D.dim(420,80,420,200,"(5)","v",36)+D.dim(80,200,150,200,"2-1/2","h",18)+
 D.l(150,149,150,214,"thin")+
 '<path d="M394 150 L470 110 H500" class="thin"/><line x1="470" y1="110" x2="391" y2="152" class="thin" marker-end="url(#ah)"/>'+D.t(504,114,"Ø 1 THRU","sm")+
 '<path d="M276 133 L300 50 H330" class="thin"/><line x1="300" y1="50" x2="277" y2="132" class="thin" marker-end="url(#ah)"/>'+D.t(334,54,"2X Ø 5/8 THRU","sm")+
 '<path d="M340 80 L340 80"/>'+D.t(560,150,"(5) = reference","xs acct","middle")+D.t(560,163,"for info only","xs acct","middle")+
 D.t(250,282,"overall 12 · hole spacing 4.00 · location 2-1/2 · \u201C2X\u201D = two places","xs","middle"),
 "Dimensioned plate showing dimension lines, extension lines, a reference dimension in parentheses, diameter callouts and a 2X callout");
var chain=D.svg("0 0 640 250",
 D.t(20,24,"CHAIN (point to point): errors stack up","sm b")+
 '<line x1="40" y1="60" x2="600" y2="60" class="thick"/>'+[40,180,320,460,600].map(function(x){return D.l(x,50,x,70,"thick");}).join("")+
 D.dim(40,70,180,70,"12","h",20)+D.dim(180,70,320,70,"12","h",20)+D.dim(320,70,460,70,"12","h",20)+D.dim(460,70,600,70,"12","h",20)+
 D.t(320,120,"Each mark off by +1/16 → last mark is +1/4 off","sm acct","middle")+
 D.t(20,150,"BASELINE (all from one end): errors don't add","sm b")+
 '<line x1="40" y1="180" x2="600" y2="180" class="thick"/>'+[40,180,320,460,600].map(function(x){return D.l(x,170,x,190,"thick");}).join("")+
 D.dim(40,190,180,190,"12","h",14)+D.dim(40,190,320,190,"24","h",28)+D.dim(40,190,460,190,"36","h",42)+D.dim(40,190,600,190,"48","h",56)+
 '',"Chain dimensioning compared with baseline dimensioning, showing how errors stack up");
var tol=D.svg("0 0 640 170",
 [["BILATERAL","46 ±1/16","45-15/16 to 46-1/16"],["UNILATERAL","46 +0 / −1/8","45-7/8 to 46"],["LIMITS","46.06 / 45.94","45.94 to 46.06 (read it straight)"],["DECIMAL",".750 ±.005","0.745 to 0.755"]].map(function(r,i){var x=20+i*155;return '<rect x="'+x+'" y="30" width="145" height="110" rx="8" class="med"/>'+D.t(x+72,52,r[0],"sm b","middle")+D.t(x+72,88,r[1],"lbl","middle")+D.t(x+72,120,r[2],"xs","middle");}).join("")+
 D.t(320,160,"Tolerance = how far off you can be and still pass.","sm","middle"),
 "Four ways tolerances are written: bilateral, unilateral, limit dimensions and decimal");
var sq=D.svg("0 0 640 220",
 '<rect x="80" y="40" width="360" height="140" class="thick"/>'+D.l(80,40,440,180,"acc")+D.l(80,180,440,40,"acc")+
 D.t(470,80,"Measure both diagonals.","sm b")+D.t(470,100,"Equal = square.","sm")+D.t(470,120,"Not equal = push the","sm")+D.t(470,136,"long diagonal shorter.","sm")+
 D.t(260,30,"142 x 50 gate frame: diagonal ≈ 150-9/16","sm","middle")+D.t(260,206,"√(142² + 50²) = 150.55\u2033","xs","middle"),
 "Checking a rectangular frame for square by comparing diagonals");
window.LESSONS.push({
id:"dims",module:"m2",minutes:25,title:"5. Dimensions and tolerances",
blurb:"Read sizes, feet-and-inches, Ø, R, TYP, REF and ± so your parts pass.",
objectives:["Read dimension lines, extension lines and leaders, and tell which feature a number belongs to.","Decode callouts like Ø, R, 2X, TYP, REF and EQ SP.","Apply bilateral, unilateral and limit tolerances.","Avoid tolerance stack-up and check a frame for square with diagonals."],
body:`
<p>Dimensions tell you size and location. Tolerances tell you how close you have to get. The US standard for both is <strong>ASME Y14.5, Dimensioning and Tolerancing</strong>. Fab prints mostly use the basics below. The advanced part of Y14.5, GD&amp;T, shows up mainly on machined parts.</p>
${D.fig(anat,"Fig 5.1: The parts of a dimension. Each number sits on a thin dimension line with arrowheads, and extension lines carry the edges out to it.")}
<h2>How dimensions are written</h2>
<ul>
<li><strong>Inches only:</strong> on most fab prints, <code>46</code> means 46 inches. Check the title block for UNITS: INCHES.</li>
<li><strong>Feet-inches:</strong> <code>11'-10"</code> is 11 feet 10 inches = 142". Common on gates, buildings and site work.</li>
<li><strong>Fractions vs decimals:</strong> <code>2-1/2</code> and <code>2.50</code> are the same size, but a decimal with more places usually means a tighter tolerance (see the title block).</li>
<li><strong>Ø</strong> = diameter. <strong>R</strong> = radius. <strong>SQ</strong> = square. <strong>THRU</strong> = goes all the way through.</li>
<li><strong>2X</strong> (or 2 PLCS) = this applies in 2 places. <strong>TYP</strong> = typical: the same at every similar feature.</li>
<li><strong>(5)</strong> in parentheses = <strong>reference dimension</strong>. Under Y14.5 it's for information only and is usually figured from other dimensions. Don't build to it or inspect it. A brace length marked (82) means "about 82, cut to fit".</li>
<li><strong>EQ SP</strong> = equally spaced. <strong>O.C.</strong> = on center: measured center to center.</li>
<li>A dimension in a box, like <code>[4.00]</code>, is a <strong>basic dimension</strong> from GD&amp;T. It's an exact theoretical value, and its tolerance comes from a feature control frame. You'll rarely see these on gate work.</li>
</ul>
<h2>Tolerances</h2>
${D.fig(tol,"Fig 5.2: Four common ways to write a tolerance.")}
<p>If a dimension has no tolerance written next to it, the <strong>title block default</strong> applies. For a farm gate, ±1/16 on cuts and ±1/8 overall is realistic. A machined pin might need ±.005. Tighter tolerances cost more time, so don't hold ±.005 on a gate rail, and don't hold ±1/4 on a hinge-pin hole.</p>
<h2>Chain vs baseline</h2>
${D.fig(chain,"Fig 5.3: Measure every mark from the same end whenever you can.")}
<p>If the print gives chain dimensions (12, 12, 12, 12), add them up and <strong>mark everything from one end</strong> with your tape hooked there: 12, 24, 36, 48. Moving the tape for every mark adds up small errors. That's called <strong>tolerance stack-up</strong>.</p>
<h2>Square: check the diagonals</h2>
${D.fig(sq,"Fig 5.4: If a rectangle's two diagonals are equal, it's square.")}
<p>Before you tack the last corner of a frame, measure corner to corner both ways. For a 142 x 50 gate, each diagonal should be about 150-9/16 (from √(142² + 50²) = 150.55). A good gate print will have a note like "DIAGONALS EQUAL WITHIN 1/8". If they're off, tap the frame along the long diagonal until they match, then tack.</p>
<div class="callout"><strong>Outside vs centerline vs inside</strong>Frame prints can dimension to the outside of the tube, the inside, or the centerline. A 2" tube makes a 2" difference over the frame if you get it wrong. The note or the extension lines tell you which. When in doubt, ask before you cut.</div>
`,
terms:[["Reference dimension","Dimension in parentheses, for information only; not inspected."],["Basic dimension","Boxed exact value used in GD&T."],["TYP","Typical: applies to all similar features."],["2X","Applies in two places."],["Tolerance stack-up","Errors adding up across chained dimensions."],["Bilateral tolerance","Variation allowed in both directions, e.g. ±1/16."],["Unilateral tolerance","Variation allowed in one direction only, e.g. +0/−1/8."]],
quiz:[
{q:"What does 11'-10\" equal in inches?",c:["110","118","142","130"],a:2,why:"11 ft × 12 = 132, plus 10 = 142 inches."},
{q:"A brace is dimensioned (82). What does the parentheses mean?",c:["Critical dimension; hold ±.005","Reference only; for information, not inspection","Metric","Two places"],a:1,why:"Parentheses mark a reference dimension. It's for information only, and the brace gets cut to fit."},
{q:"A hole callout reads 2X Ø 13/16 THRU. What do you drill?",c:["One hole 13/16 deep","Two holes, 13/16 diameter, all the way through","A 2\" hole","A slot"],a:1,why:"2X = two places. Ø = diameter. THRU = all the way through."},
{q:"A dimension reads 46 +0/−1/8. Which length passes?",c:["46-1/16","45-15/16","46-1/8","45-3/4"],a:1,why:"Allowed range is 45-7/8 to 46. Only 45-15/16 falls inside."},
{q:"You have to mark 4 holes at 12\" chain spacing. What's the most accurate way?",c:["Hook the tape at each new mark","Hook once and mark at 12, 24, 36, 48","Use a ruler on the print","Eyeball it"],a:1,why:"Marking everything from one end (baseline) keeps small errors from stacking up."},
{q:"A frame's diagonals measure 150-1/2 and 150-7/8. What's the problem?",c:["Nothing; that's within 1/16","The frame is out of square by 3/8 between diagonals","The tube is the wrong gauge","The scale is wrong"],a:1,why:"Diagonals should match. A 3/8 difference means it's racked, so push the long diagonal in."},
{q:"What does Ø mean?",c:["Zero","Diameter","Radius","Optional"],a:1,why:"Ø is the diameter symbol. R is radius."}
],
sources:["y145","bennett","gw","tape","hobart"]
});
})();
