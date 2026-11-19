(function(){
var anat=D.svg("0 0 680 250",
 D.ws({x:200,y:130,len:260,below:{type:"fillet",size:"3/16",len:"2-6"},above:{type:"fillet",size:"3/16",len:"2-6"},allAround:false,field:true,tail:"GMAW",ax:130,ay:200})+
  '<line x1="420" y1="60" x2="420" y2="126" class="acc"/>'+D.t(420,52,"reference line (always horizontal)","sm acct","middle")+
 D.t(60,225,"arrow → points at the joint","sm acct")+
 D.t(220,195,"size (leg) on the LEFT","sm acct")+D.t(380,195,"length-pitch on the RIGHT","sm acct")+
 D.t(470,90,"tail: process, spec, notes","sm acct")+
 D.t(150,80,"field flag","sm acct")+
 D.t(560,125,"above = OTHER side","xs acct")+D.t(560,145,"below = ARROW side","xs acct"),
 "Anatomy of a welding symbol: arrow, reference line, fillet weld symbols above and below, size on left, length and pitch on right, field weld flag and tail");
/* T joint cross sections */
function tjoint(x,y,arrowSide,otherSide){
  var g='<rect x="'+(x-60)+'" y="'+(y+60)+'" width="160" height="14" class="steel"/><rect x="'+(x+12)+'" y="'+(y-10)+'" width="14" height="70" class="steel"/>';
  if(arrowSide)g+='<path d="M'+(x+12)+' '+(y+60)+' l0 -14 l-14 14 z" class="accf"/>';
  if(otherSide)g+='<path d="M'+(x+26)+' '+(y+60)+' l0 -14 l14 14 z" class="accf"/>';
  return g;
}
var sides=D.svg("0 0 680 260",
 tjoint(90,40,true,false)+D.t(30,180,"Arrow points at the LEFT side","xs")+D.t(30,194,"of the stiffener = arrow side","xs")+
 D.ws({x:5,y:30,len:70,arrow:"right",ax:100,ay:94,below:{type:"fillet",size:"1/4"}})+
 '<g transform="translate(230,0)">'+tjoint(90,40,false,true)+D.ws({x:5,y:30,len:70,arrow:"right",ax:100,ay:94,above:{type:"fillet",size:"1/4"}})+D.t(30,180,"Symbol ABOVE the line =","xs")+D.t(30,194,"weld the far (other) side","xs")+'</g>'+
 '<g transform="translate(460,0)">'+tjoint(90,40,true,true)+D.ws({x:5,y:30,len:70,arrow:"right",ax:100,ay:94,above:{type:"fillet",size:"1/4"},below:{type:"fillet",size:"1/4"}})+D.t(30,180,"Both sides of the line =","xs")+D.t(30,194,"weld both sides","xs")+'</g>'+
 D.t(340,240,"Orange = where the weld goes. Same joint, three different symbols.","sm","middle"),
 "Arrow side, other side and both sides fillet welds on a T-joint and their welding symbols");
var flip=D.svg("0 0 680 150",
 D.ws({x:60,y:60,len:180,below:{type:"fillet",size:"1/4"},tail:"",arrow:"left"})+D.t(150,135,"arrow on left, symbol below","xs","middle")+
 D.ws({x:420,y:60,len:180,below:{type:"fillet",size:"1/4"},tail:"",arrow:"right"})+D.t(510,135,"arrow on right, symbol below","xs","middle")+
 D.t(340,20,"Both mean the same thing: 1/4 fillet on the ARROW side.","sm b","middle")+D.t(340,38,"The fillet's vertical leg is always drawn on the left.","xs","middle"),
 "Arrow on either end of the reference line; the below = arrow side rule still holds");
var inter=D.svg("0 0 680 270",
 D.ws({x:80,y:50,len:170,below:{type:"fillet",size:"3/16",len:"2-6"},above:{type:"fillet",size:"3/16",len:"2-6"},ax:40,ay:95})+D.t(165,20,"CHAIN intermittent","sm b","middle")+
 D.ws({x:420,y:50,len:190,below:{type:"fillet",size:"3/16",len:"2-6"},above:{type:"fillet",size:"3/16",len:"2-6"},stagger:true,ax:380,ay:95})+D.t(515,20,"STAGGERED intermittent","sm b","middle")+
 /* plan views of welds */
 (function(){var g="";[0,1].forEach(function(k){var ox=k?380:40;g+='<rect x="'+ox+'" y="140" width="260" height="10" class="thick"/>'+D.t(ox+130,168,"stiffener (top view)","xs","middle");
   for(var i=0;i<4;i++){var x=ox+5+i*60;g+='<rect x="'+x+'" y="130" width="20" height="8" class="accf"/>';var x2=k?x+30:x;g+='<rect x="'+x2+'" y="152" width="20" height="8" class="accf"/>';}
   g+=D.dim(ox+5,130,ox+65,130,"6 pitch","h",-14,"xs")+D.dim(ox+5,160,ox+25,160,"2","h",30,"xs");});return g;})()+
 D.t(340,230,"2-6 = welds 2\u2033 long, spaced 6\u2033 center to center (pitch), NOT 6\u2033 gaps.","sm","middle")+D.t(340,250,"Chain: welds line up across the joint. Staggered: they alternate.","sm","middle"),
 "Chain versus staggered intermittent fillet welds with 2-6 length and pitch");
var leg=D.svg("0 0 640 190",
 '<rect x="40" y="130" width="200" height="16" class="steel"/><rect x="40" y="30" width="16" height="100" class="steel"/><path d="M56 130 V90 H56 L96 130 Z" class="accf"/>'+
 D.dim(56,130,96,130,"leg","h",34,"xs")+D.dim(56,90,56,130,"leg","v",-40,"xs")+D.t(120,100,"size = leg length","sm")+D.t(120,116,"1/4 fillet = 1/4 legs","xs")+
 '<rect x="360" y="130" width="200" height="16" class="steel"/><rect x="360" y="30" width="16" height="100" class="steel"/><path d="M376 130 V70 L406 130 Z" class="accf"/>'+
 D.ws({x:440,y:60,len:150,below:{type:"fillet",size:"1/4 x 1/2"},ax:410,ay:100})+D.t(470,170,"unequal legs: drawing shows which is long","xs","middle"),
 "Fillet weld size is the leg length; unequal leg fillet callout");
var aa=D.svg("0 0 640 170",
 '<rect x="60" y="110" width="200" height="14" class="steel"/><rect x="130" y="60" width="50" height="50" class="steel"/><rect x="138" y="68" width="34" height="34" style="fill:var(--paper)" class="med"/>'+
 '<path d="M125 110 h60" class="acc" style="stroke-width:5"/>'+D.t(160,150,"tube to plate, welded all the way around","xs","middle")+
 D.ws({x:330,y:70,len:180,below:{type:"fillet",size:"1/8"},allAround:true,tail:"TYP",ax:190,ay:95})+
 D.t(420,135,"circle at the elbow = ALL AROUND","sm acct","middle"),
 "Weld-all-around symbol on a tube welded to a plate");
window.LESSONS.push({
id:"weld-symbols-1",module:"m3",minutes:30,title:"9. Welding symbols I: anatomy, sides and fillets",
blurb:"Reference line, arrow side vs other side, fillet size, length-pitch, all-around, field, tail.",
objectives:["Name every part of an AWS welding symbol.","Apply the rule: below the line = arrow side, above = other side.","Read fillet size, length, pitch, chain vs staggered, and unequal legs.","Read the weld-all-around circle, field flag and tail."],
body:`
<p>The standard for welding symbols in the US is <strong>AWS A2.4, Standard Symbols for Welding, Brazing, and Nondestructive Examination</strong>. The current edition is 2020. AWS also sells A2.1 wall and desk charts. This lesson covers what you'll use every day. The standard has the full set and all the edge cases.</p>
<div class="callout"><strong>Two words people mix up</strong>The <em>weld symbol</em> is the little shape, like the fillet triangle. The <em>welding symbol</em> is the whole thing: arrow, reference line, weld symbol, numbers, tail and flags.</div>
${D.fig(anat,"Fig 9.1: Every part of a welding symbol. Only the reference line and arrow are required. Everything else is added as needed.")}
<h2>The big rule: which side</h2>
<ul>
<li>The <strong>arrow</strong> touches the joint. The side of the joint it touches is the <strong>arrow side</strong>.</li>
<li>Weld symbol <strong>below</strong> the reference line = weld the <strong>arrow side</strong>.</li>
<li>Weld symbol <strong>above</strong> the line = weld the <strong>other side</strong>, the side opposite the arrow.</li>
<li>On <strong>both</strong> sides of the line = weld <strong>both</strong> sides.</li>
</ul>
${D.fig(sides,"Fig 9.2: A T-joint with three different symbols.")}
${D.fig(flip,"Fig 9.3: The arrow can come off either end and point up or down. The rule doesn't change. What's written on the line reads left to right as usual, and the fillet's vertical leg stays on the left.")}
<h2>Fillet welds</h2>
${D.fig(leg,"Fig 9.4: Fillet size is the leg length. For unequal legs, both are given, and the drawing shows which leg goes where.")}
<ul>
<li><strong>Size</strong> goes to the <strong>left</strong> of the triangle: <code>1/4</code> means 1/4" legs.</li>
<li><strong>Length</strong> goes to the <strong>right</strong>. No length means weld the full length of the joint, or up to where the joint changes direction.</li>
<li><strong>Length-pitch</strong> like <code>2-6</code> means an <strong>intermittent</strong> weld: 2" welds every 6", measured <strong>center to center</strong>. The gap between welds is 4", not 6.</li>
</ul>
${D.fig(inter,"Fig 9.5: Chain intermittent welds line up across the joint. Staggered ones are offset, and the symbol shows that by offsetting the triangles.")}
<h2>All-around, field and tail</h2>
${D.fig(aa,"Fig 9.6: The circle means weld all the way around, like a tube end sitting on a plate or a post on a base plate.")}
<ul>
<li><strong>Weld-all-around</strong>: a circle where the arrow meets the reference line. Weld the whole way around the joint. This is very common on tube frames.</li>
<li><strong>Field weld</strong>: a flag at the same spot. The weld is made on site, during installation, not in the shop. Older prints sometimes used a filled black dot instead. No flag means a shop weld.</li>
<li><strong>Tail</strong>: the "&lt;" at the end. It holds whatever doesn't fit on the symbol: process (GMAW, FCAW, SMAW), a procedure number, "TYP", or an inspection note. No information = leave the tail off.</li>
<li><strong>Multiple arrows</strong> off one reference line mean every joint they point at gets the same weld.</li>
</ul>
<div class="callout"><strong>Reading order</strong>Arrow: which joint? → Above or below: which side? → Shape: what kind of weld? → Left number: how big? → Right numbers: how long, and how far apart? → Circle and flag: all around, field? → Tail: process and notes.</div>
`,
terms:[["Welding symbol","The complete symbol: reference line, arrow, weld symbol, dimensions, tail and supplementary symbols."],["Weld symbol","The shape that shows the weld type, like the fillet triangle."],["Arrow side","The side of the joint the arrow touches. Its instructions go below the reference line."],["Other side","The side opposite the arrow. Its instructions go above the line."],["Pitch","Center-to-center spacing of intermittent welds."],["Field weld","Weld made at the installation site, shown by a flag."]],
quiz:[
{q:"A fillet triangle is drawn BELOW the reference line. Where do you weld?",c:["Other side","Arrow side","Both sides","Anywhere"],a:1,why:"Below = arrow side. Above = other side. That's true no matter which way the arrow points."},
{q:"What does 1/4 to the left of a fillet symbol mean?",c:["1/4\" long weld","1/4\" leg size","1/4\" throat only","Weld every 1/4\""],a:1,why:"For fillets, the number on the left is the size, meaning the leg length."},
{q:"A fillet symbol reads 3/16 ◺ 2-6. How far apart are the welds, edge to edge?",fig:D.wsSvg({below:{type:"fillet",size:"3/16",len:"2-6"}},360,150,"3/16 fillet 2-6"),c:["6\"","4\"","2\"","8\""],a:1,why:"Pitch is center to center. With 2\" welds at 6\" pitch, the gap is 6 − 2 = 4\"."},
{q:"What does a circle where the arrow meets the reference line mean?",c:["Spot weld","Weld all around","Grind flush","Field weld"],a:1,why:"The circle at the junction is the weld-all-around symbol."},
{q:"What does a flag at the arrow/reference-line junction mean?",c:["Weld in the field (on site)","Rush job","Inspect with flag test","Weld on the other side"],a:0,why:"The flag means a field weld, made at the installation site instead of in the shop."},
{q:"What normally goes in the tail?",c:["Weld size","Process, procedure or other notes","Arrow side info","Nothing; the tail is required to be empty"],a:1,why:"The tail carries supplementary info like the process (GMAW, FCAW), a WPS number or notes. Leave it off when there's nothing to say."},
{q:"Fillet symbols appear on BOTH sides of the reference line, lined up. What does that mean?",c:["Weld both sides","Weld twice on the arrow side","Choose a side","Field weld"],a:0,why:"Symbols on both sides mean both sides of the joint get welded."},
{q:"No length is shown to the right of a fillet symbol. How long is the weld?",c:["1 inch","Full length of the joint","Welder's choice","Same as the size"],a:1,why:"With no length given, the weld runs the full length of the joint, or up to an abrupt change in direction, unless the drawing says otherwise."}
],
sources:["a24","a2c","miller","millerChart","lincolnFsm","cwi","bennett"]
});
})();
