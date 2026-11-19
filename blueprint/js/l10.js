(function(){
var types=[["square","Square groove"],["V","V-groove"],["bevel","Bevel groove"],["U","U-groove"],["J","J-groove"],["flareV","Flare-V"],["flareBevel","Flare-bevel"],["backing","Back / backing weld"],["melt","Melt-through"],["plug","Plug / slot"],["spot","Spot"],["fillet","Fillet (for comparison)"]];
var grid='<div class="cheat-grid">'+types.map(function(t){return '<figure>'+D.svg("0 0 200 90",D.ws({x:40,y:40,len:130,below:{type:t[0]},ax:12,ay:78}),t[1]+" weld symbol on the arrow side")+'<figcaption>'+t[1]+'</figcaption></figure>';}).join("")+'</div>';
function plates(kind){
  if(kind==="V")return '<path d="M20 60 H110 L122 30 V60 Z" class="steel" transform="translate(0,0)"/>';
  return "";
}
var joints=D.svg("0 0 680 200",
 /* square */ '<rect x="20" y="60" width="90" height="24" class="steel"/><rect x="116" y="60" width="90" height="24" class="steel"/>'+D.t(113,110,"SQUARE: no prep, small gap","xs","middle")+
 /* V */ '<path d="M250 60 H330 L340 84 H250 Z" class="steel"/><path d="M366 60 H446 V84 H356 Z" class="steel"/>'+D.t(348,110,"V: both edges beveled","xs","middle")+
 /* bevel */ '<path d="M480 60 H560 V84 H480 Z" class="steel"/><path d="M576 60 H660 V84 H566 Z" class="steel"/>'+D.t(570,110,"BEVEL: only one edge prepped","xs","middle")+
 D.t(340,150,"The weld symbol is a little picture of the groove.","sm","middle")+D.t(340,170,"Bevel and J have a vertical leg, always drawn on the left side of the symbol.","sm","middle"),
 "Square, V and bevel groove joint preparations");
var gdims=D.svg("0 0 680 230",
 '<g transform="translate(-130,-75) scale(1.8)">'+D.ws({x:150,y:100,len:200,below:{type:"V",size:"1/4(5/16)",root:"1/8",angle:"60°"},ax:110,ay:140,tail:"FCAW"})+'</g>'+
 D.t(40,60,"depth of groove S = 1/4","sm acct")+D.t(40,76,"(groove weld size E) = 5/16","sm acct")+
 D.t(400,150,"root opening inside: 1/8","sm acct")+D.t(400,170,"groove angle outside: 60°","sm acct")+
 D.t(340,30,"Groove numbers: S(E) on the left · root opening in the symbol · angle beyond it","sm b","middle")+
 D.t(340,205,"No size on a single groove symbol = complete joint penetration (CJP)","sm","middle"),
 "V-groove welding symbol with depth, weld size, root opening and groove angle");
var broken=D.svg("0 0 680 200",
 '<rect x="380" y="110" width="120" height="22" class="steel"/><path d="M508 110 H640 V132 H520 Z" class="steel"/>'+
 D.ws({x:150,y:60,len:160,arrow:"right",broken:true,ax:512,ay:112,below:{type:"bevel",angle:"45°"}})+
 D.t(200,150,"The break in the arrow points at","sm")+D.t(200,166,"the piece that gets beveled.","sm")+D.t(200,182,"Here it's the RIGHT plate.","sm b"),
 "Broken arrow on a bevel groove symbol pointing to the member to be beveled");
var cont=D.svg("0 0 680 190",
 '<g transform="translate(-30,-40) scale(1.5)">'+D.ws({x:40,y:70,len:120,below:{type:"fillet",size:"1/4",contour:"flat",finish:"G"},ax:28,ay:115})+'</g>'+D.t(115,175,"flat, finish by grinding (G)","sm","middle")+
 '<g transform="translate(-140,-40) scale(1.5)">'+D.ws({x:260,y:70,len:120,below:{type:"fillet",size:"1/4",contour:"convex"},ax:248,ay:115})+'</g>'+D.t(340,175,"convex","sm","middle")+
 '<g transform="translate(-250,-40) scale(1.5)">'+D.ws({x:480,y:70,len:120,below:{type:"V",contour:"flat",finish:"G"},ax:468,ay:115})+'</g>'+D.t(565,175,"groove: flush, ground (G)","sm","middle")+
 D.t(340,20,"Contour symbol sits on the weld symbol's face. A letter adds the finish method.","sm b","middle"),
 "Contour symbols: flat fillet with grind finish, convex fillet, flush groove with grind finish");
var multi=D.svg("0 0 680 200",
 '<line x1="160" y1="70" x2="380" y2="70" class="ws"/><line x1="160" y1="120" x2="380" y2="120" class="ws"/><line x1="160" y1="70" x2="160" y2="120" class="ws"/><line x1="160" y1="120" x2="100" y2="180" class="ws" marker-end="url(#ah)"/>'+
 '<path d="M258 120 L270 138 L282 120" class="ws"/>'+D.t(300,136,"① V-groove first (line nearest the arrow)","sm acct")+
 '<path d="M261 70 A9 9 0 0 1 279 70" class="ws"/>'+D.t(300,58,"② then back weld on other side","sm acct")+
 D.t(400,180,"Read reference lines from the arrow outward. That's the order you weld in.","sm","middle"),
 "Multiple reference lines showing sequence of operations");
window.LESSONS.push({
id:"weld-symbols-2",module:"m3",minutes:30,title:"10. Welding symbols II: grooves, contour and extras",
blurb:"Groove types and their numbers, CJP, the broken arrow, backing, contour and finish, multiple reference lines.",
objectives:["Recognize the groove weld symbols and the joint prep each one means.","Read groove depth, weld size, root opening and groove angle.","Use the broken arrow to find the member to bevel.","Read contour/finish symbols and multiple reference lines."],
body:`
<p>Fillets are the most common welds in gate and frame work. Grooves come up on thicker plate, butt joints, trailer tongues and structural steel. The same rules from Lesson 9 apply: below = arrow side, above = other side, and the vertical leg goes on the left.</p>
<h2>The weld symbol shapes</h2>
${grid}
<p class="meta">All drawn on the arrow side, below the line. Above the line, they flip to the other side.</p>
${D.fig(joints,"Fig 10.1: Each groove symbol is a little picture of how the edges are prepped.")}
<h2>Groove numbers</h2>
${D.fig(gdims,"Fig 10.2: Where each number goes on a groove symbol.")}
<ul>
<li><strong>Left of the symbol:</strong> depth of groove prep (S), with the <strong>groove weld size</strong> (E) in parentheses: <code>1/4(5/16)</code>.</li>
<li><strong>Inside the symbol:</strong> the <strong>root opening</strong>, meaning the gap between the pieces.</li>
<li><strong>Outside, beyond the symbol:</strong> the <strong>groove angle</strong>, like 60° for a V.</li>
<li><strong>No size</strong> on a single groove or symmetrical double groove means <strong>complete joint penetration (CJP)</strong>: weld all the way through.</li>
<li><strong>Flare grooves</strong> (flare-V, flare-bevel) are for rounded edges, like two round bars or tube corners side by side. AWS added more detail on these in A2.4:2020.</li>
</ul>
<h2>The broken arrow</h2>
${D.fig(broken,"Fig 10.3: The arrow bends toward the member that gets the prep.")}
<p>Bevel and J grooves only prep one member. When it's not obvious which one, the arrow has a break, and it points to the member that gets beveled. No break means either one is fine, or it's obvious from the drawing.</p>
<h2>Backing, back welds and melt-through</h2>
<ul>
<li>The half-circle on the opposite side from the groove is a <strong>back weld</strong> (made after the groove) or a <strong>backing weld</strong> (made before it). Which one it is comes from the tail or from multiple reference lines.</li>
<li>A <strong>filled</strong> half-circle is <strong>melt-through</strong>: visible root reinforcement on the back side from welding one side only.</li>
<li>A <strong>backing</strong> strip, which is a separate piece behind the joint, is shown with a rectangle. "R" means remove it after welding.</li>
</ul>
<h2>Contour and finish</h2>
${D.fig(cont,"Fig 10.4: Contour symbols sit on the face of the weld symbol. A finish letter says how to get there.")}
<p>Contour symbols are <strong>flat/flush</strong> (a straight line), <strong>convex</strong> (an arc bulging out) and <strong>concave</strong> (an arc bulging in). A letter next to it gives the finishing method: <strong>C</strong> chip, <strong>G</strong> grind, <strong>H</strong> hammer, <strong>M</strong> machine, <strong>R</strong> roll. A2.4 has the full list. Under the 2020 edition, a contour symbol without a letter can be reached any way that works, by welding or by finishing. The "flat" contour name is now only used for fillets, and "flush" is used for groove, plug and slot welds. On a gate, a common use is grinding the top corners flush so nobody snags a hand or a horse.</p>
<h2>Multiple reference lines</h2>
${D.fig(multi,"Fig 10.5: Stacked reference lines give the order of operations.")}
<p>When there's more than one step at one joint, the drafter stacks reference lines. The line nearest the arrow is the first operation. Inspection can show up here too: A2.4 includes nondestructive examination symbols, like VT for visual and UT for ultrasonic, in a tail or on its own reference line.</p>
<div id="builderEmbed"></div>
`,
terms:[["CJP","Complete joint penetration: weld metal goes all the way through the joint."],["Root opening","Gap between members at the root of the joint."],["Groove angle","Total included angle of the groove."],["Depth of bevel (S)","How deep the edge prep goes."],["Groove weld size (E)","Effective penetration of the groove weld, shown in parentheses."],["Melt-through","Visible root reinforcement from welding one side."],["Broken arrow","Arrow with a jog pointing to the member to be beveled."]],
quiz:[
{q:"Which groove symbol has one vertical leg and one slanted leg?",c:["V-groove","Bevel groove","Square groove","Flare-V"],a:1,why:"A bevel is half a V: one member is prepped, so one leg is vertical, always on the left."},
{q:"A V-groove symbol shows 60° beyond the symbol. What is that?",c:["Groove angle","Root opening","Weld length","Heat setting"],a:0,why:"The groove angle goes outside, beyond the symbol. The root opening goes inside it."},
{q:"A single V-groove symbol has NO size given. What does AWS A2.4 call for?",c:["Any size","Complete joint penetration","1/8 weld","Partial penetration"],a:1,why:"With no size on a single groove (or symmetrical double groove), complete joint penetration is required."},
{q:"A bevel groove symbol has a broken (jogged) arrow pointing at the right plate. Which piece gets beveled?",c:["Left plate","Right plate","Both","Neither; it's a fillet"],a:1,why:"The break in the arrow points to the member that gets the prep."},
{q:"A fillet symbol has a straight line on its face and the letter G. What do you do?",c:["Weld it convex","Finish it flat by grinding","Gouge it out","Use GMAW"],a:1,why:"A straight line is the flat contour, and G = grind. That's a flat face, finished by grinding."},
{q:"In multiple reference lines, which operation comes first?",c:["The line farthest from the arrow","The line nearest the arrow","The longest line","The one with the tail"],a:1,why:"Read outward from the arrow. The line nearest the arrow is the first operation."},
{q:"What does a FILLED half-circle opposite the groove symbol mean?",c:["Back weld","Melt-through","Spot weld","Field weld"],a:1,why:"A filled half-circle is melt-through. An open half-circle is a back or backing weld."},
{q:"What does 1/4(5/16) to the left of a groove symbol mean?",c:["1/4 root, 5/16 angle","Depth of bevel 1/4, groove weld size 5/16","Two welds","Length 1/4, pitch 5/16"],a:1,why:"For grooves, the depth of bevel (S) is shown with the groove weld size (E) in parentheses."}
],
sources:["a24","a24pv","ansi","miller","millerChart","lincolnFsm","cwi","gw"],
init:function(root){window.TOOLS&&window.TOOLS.builder(root.querySelector("#builderEmbed"));}
});
})();
