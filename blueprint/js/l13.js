(function(){
var s=12; /* px per foot at this drawing; plan is 40 x 28 ft */
function W(x,y,w,h){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" class="fillc"/>';}
var ox=40,oy=40,Wd=40*s,Hd=28*s,tw=6;
var plan="";
/* exterior walls */
plan+='<rect x="'+ox+'" y="'+oy+'" width="'+Wd+'" height="'+Hd+'" class="thick" style="stroke-width:'+tw+'"/>';
/* interior walls */
plan+=D.l(ox+16*s,oy,ox+16*s,oy+Hd,"med",'style="stroke-width:3.5"')+D.l(ox+16*s,oy+14*s,ox+Wd,oy+14*s,"med",'style="stroke-width:3.5"')+D.l(ox+28*s,oy+14*s,ox+28*s,oy+Hd,"med",'style="stroke-width:3.5"');
/* door openings (paper gaps) + swings */
function door(x,y,w,dir){ /* horizontal wall opening at y from x to x+w; swing down (dir=1) or up (-1) */
  return '<rect x="'+x+'" y="'+(y-4)+'" width="'+w+'" height="8" style="fill:var(--paper)"/>'+D.l(x,y,x,y+dir*w,"med")+'<path d="M'+x+' '+(y+dir*w)+' A'+w+' '+w+' 0 0 '+(dir>0?0:1)+' '+(x+w)+' '+y+'" class="thin"/>';}
function vdoor(x,y,h,dir){return '<rect x="'+(x-4)+'" y="'+y+'" width="8" height="'+h+'" style="fill:var(--paper)"/>'+D.l(x,y,x+dir*h,y,"med")+'<path d="M'+(x+dir*h)+' '+y+' A'+h+' '+h+' 0 0 '+(dir>0?1:0)+' '+x+' '+(y+h)+'" class="thin"/>';}
plan+=door(ox+5*s,oy+Hd,3*s,-1); /* front door */
plan+=vdoor(ox+16*s,oy+18*s,2.6*s,1)+door(ox+20*s,oy+14*s,2.6*s,1)+door(ox+31*s,oy+14*s,2.6*s,1);
/* windows */
function win(x,y,w){return '<rect x="'+x+'" y="'+(y-4)+'" width="'+w+'" height="8" style="fill:var(--paper)" class="thin"/>'+D.l(x,y,x+w,y,"thin");}
plan+=win(ox+4*s,oy,5*s)+win(ox+22*s,oy,4*s)+win(ox+32*s,oy,4*s)+win(ox+20*s,oy+Hd,4*s)+win(ox+33*s,oy+Hd,3*s);
plan+=D.t(ox+8*s,oy+12*s,"LIVING / KITCHEN","sm b","middle")+D.t(ox+8*s,oy+13.4*s,"16\'-0\" x 28\'-0\"","xs","middle")+
 D.t(ox+28*s,oy+7*s,"BEDROOM 1","sm b","middle")+D.t(ox+28*s,oy+8.4*s,"24\'-0\" x 14\'-0\"","xs","middle")+
 D.t(ox+22*s,oy+21*s,"BATH","sm b","middle")+D.t(ox+34*s,oy+21*s,"BEDROOM 2","sm b","middle")+D.t(ox+34*s,oy+22.4*s,"12\'-0\" x 14\'-0\"","xs","middle");
plan+=D.dim(ox,oy,ox+Wd,oy,"40\'-0\"","h",-22)+D.dim(ox+Wd,oy,ox+Wd,oy+Hd,"28\'-0\"","v",24);
plan+='<g transform="translate(600,60)"><circle cx="0" cy="0" r="16" class="thin"/><path d="M0 -14 L6 8 L0 4 L-6 8 Z" class="fillc"/>'+D.t(0,-20,"N","sm b","middle")+'</g>';
plan+=D.t(300,440,"FLOOR PLAN  1/4\" = 1\'-0\" (as printed)  ·  1,120 SQ FT (40 x 28 outside)","sm b","middle");
var floor=D.svg("0 0 640 450",plan,"Simple two-bedroom floor plan with walls, door swings, windows, room labels, dimensions and north arrow");
var site=D.svg("0 0 640 420",
 '<path d="M60 40 H580 V380 H60 Z" class="phan" style="stroke-width:2"/>'+D.t(320,32,"PROPERTY LINE 260.00\'","xs","middle")+
 '<rect x="90" y="70" width="460" height="280" class="thin" style="stroke-dasharray:4 4"/>'+D.t(320,86,"BUILDING SETBACK LINES","xs acct","middle")+
 D.t(320,366,"FRONT SETBACK (e.g. 25\')","xs acct","middle")+D.t(75,210,"SIDE","xs acct","middle")+D.t(565,210,"SIDE","xs acct","middle")+D.t(560,400,"NTS","xs b")+
 '<rect x="230" y="150" width="200" height="140" class="steel"/>'+D.t(330,220,"PROPOSED HOUSE","sm b","middle")+D.t(330,236,"40\' x 28\'","xs","middle")+
 '<path d="M300 290 V380" class="thick" style="stroke-width:26;opacity:.18"/>'+D.t(300,340,"DRIVE","xs","middle")+
 '<rect x="60" y="40" width="520" height="22" class="hatch" style="opacity:.6"/>'+D.t(320,56,"10\' UTILITY EASEMENT","xs b","middle")+
 '<rect x="470" y="300" width="60" height="40" class="thin"/>'+D.t(500,324,"WELL","xs","middle")+'<rect x="130" y="290" width="70" height="40" class="thin" style="stroke-dasharray:3 3"/>'+D.t(165,314,"SEPTIC","xs","middle")+
 D.t(320,404,"ROAD (FRONT)","sm b","middle")+
 '<g transform="translate(610,80)"><circle r="16" class="thin"/><path d="M0 -14 L6 8 L0 4 L-6 8 Z" class="fillc"/>'+D.t(0,-20,"N","sm b","middle")+'</g>',
 "Site plan showing property lines, setbacks, utility easement, proposed house, driveway, well and septic, and north arrow");
var twp="";for(var r=0;r<6;r++)for(var c=0;c<6;c++){var n=r%2===0?r*6+(6-c):r*6+c+1;twp+='<rect x="'+(40+c*40)+'" y="'+(30+r*40)+'" width="40" height="40" class="thin"/>'+D.t(60+c*40,55+r*40,String(n),"sm","middle");}
var plss=D.svg("0 0 640 300",twp+D.t(160,22,"ONE TOWNSHIP: 6 x 6 miles, 36 sections","sm b","middle")+
 
 D.t(320,60,"Each section ≈ 1 mile x 1 mile = 640 acres","sm")+D.t(320,82,"1 acre = 43,560 sq ft","sm")+D.t(320,104,"Numbering starts at 1 in the NE corner,","sm")+D.t(320,122,"snakes back and forth, ends at 36 in the SE.","sm")+
 D.t(320,160,"A quarter section = 160 acres.","sm")+D.t(320,178,"\u201CNE 1/4 of SE 1/4\u201D = 40 acres.","sm")+D.t(320,220,"Florida land is described on this grid","sm b")+D.t(320,238,"(plus lot & block on recorded plats,","sm")+D.t(320,256,"and metes and bounds).","sm"),
 "Public Land Survey System township grid with 36 numbered sections");
window.LESSONS.push({
id:"bonus-realestate",module:"m5",minutes:25,title:"13. Bonus: floor plans and site plans for real estate",
blurb:"The same print-reading skills on house plans, surveys and land descriptions.",
objectives:["Read a residential floor plan: walls, doors, windows, room sizes, scale and north arrow.","Read a site plan: property lines, setbacks, easements and improvements.","Work out square footage and acreage, and decode a township and section description."],
body:`
<p>You're starting real estate school, and everything you just learned carries over. House plans and site plans use the same ideas: views from above, scale, dimensions, line types and a title block. The difference is what's on them. Instead of weld symbols you get walls, door swings and property lines.</p>
<h2>Floor plans</h2>
${D.fig(floor,"Fig 13.1: A floor plan is a horizontal cut through the house about 4 ft above the floor, looking down. It's really a section view.")}
<ul>
<li><strong>Thick lines</strong> are walls that were cut. Gaps with an arc are <strong>doors</strong>, and the arc shows which way the door swings. Thin double lines in a wall are <strong>windows</strong>.</li>
<li><strong>Room sizes</strong> are written width x length, like 12'-0" x 14'-0". Residential plans are often drawn at <strong>1/4" = 1'-0"</strong>, but always use the written numbers. Copies and screens don't keep scale.</li>
<li>The <strong>north arrow</strong> tells you which way the house faces. That matters for sun, heat and buyer questions.</li>
<li><strong>Square footage</strong> of a rectangle = length x width: 40 x 28 = 1,120 sq ft outside dimensions. For L shapes, split them into rectangles and add. How "living area" is measured (heated only, which walls count) varies. In a listing, say where your number came from.</li>
</ul>
<h2>Site plans</h2>
${D.fig(site,"Fig 13.2: A site plan shows the whole lot from above: where the house sits relative to the property lines and the rules.")}
<ul>
<li><strong>Property lines</strong> are often drawn as heavy long-dash lines, labeled with bearings and distances. Check the legend, because conventions vary.</li>
<li><strong>Setbacks</strong> are the minimum distances from the property lines to a building, set by the local zoning code. A shed or gate post in the setback can be a problem at closing.</li>
<li><strong>Easements</strong> give someone else (the utility company, a neighbor) the right to use part of the lot. You usually can't build permanent things on them.</li>
<li><strong>Well and septic</strong> are common on rural lots and come with their own required distances. Check with the county and health department.</li>
<li>City permit offices list what a site plan must show. The Tacoma tip sheet in the sources is a clear example. Check your own county's version.</li>
</ul>
<h2>Land descriptions: township and section</h2>
${D.fig(plss,"Fig 13.3: The Public Land Survey System grid. Florida is a PLSS state.")}
<p>Rural land is often described like "the NE 1/4 of the SE 1/4 of Section 12, Township 27 South, Range 25 East." Read it <strong>backwards</strong>: find the township and range, then section 12 (640 acres), then its SE quarter (160 acres), then that quarter's NE quarter (40 acres). The other two methods you'll study are <strong>lot and block</strong> (a lot on a recorded subdivision plat) and <strong>metes and bounds</strong> (walking the boundary by bearings and distances from a starting point). A survey drawing shows them all with the same line, dimension and scale rules you learned here.</p>
<div class="callout"><strong>Where the two worlds meet</strong>A gate and fencing business is a real estate add-on. Buyers of rural land often need gates, cattle guards and fence repairs. Knowing where the property line and easements are keeps you from building a customer's gate on the neighbor's land.</div>
`,
terms:[["Floor plan","Horizontal section view of a building showing walls, doors and windows."],["Site plan","Top view of a lot showing property lines, setbacks, easements and improvements."],["Setback","Minimum required distance between a building and a property line."],["Easement","A right for someone else to use part of a property."],["Section (PLSS)","About 1 mile square, 640 acres; 36 make a township."],["Acre","43,560 square feet."]],
quiz:[
{q:"On a floor plan, what does an arc next to a wall gap show?",c:["A window","Which way the door swings","A ceiling fan","A curved wall"],a:1,why:"The arc traces the door's swing, and the straight line is the door itself."},
{q:"What's the area of a 40' x 28' rectangle?",c:["68 sq ft","1,120 sq ft","1,400 sq ft","2,240 sq ft"],a:1,why:"40 × 28 = 1,120 square feet."},
{q:"A setback is…",c:["A delay in closing","The minimum distance from a property line to a building","An easement for utilities","A type of door"],a:1,why:"Setbacks are minimum distances set by zoning between buildings and property lines."},
{q:"How many acres are in a standard PLSS section?",c:["160","320","640","43,560"],a:2,why:"A section is about 1 mile square, which is 640 acres. A township holds 36 sections."},
{q:"How many acres is the NE 1/4 of the SE 1/4 of a section?",c:["160","80","40","10"],a:2,why:"640 ÷ 4 = 160 for the SE quarter, then ÷ 4 again = 40 acres."},
{q:"How many square feet are in an acre?",c:["5,280","10,000","43,560","640"],a:2,why:"One acre = 43,560 square feet. A useful number for lot sizes and pricing per acre."},
{q:"Why use the written dimensions instead of measuring a floor plan with a scale?",c:["Scale rulers are illegal","Copies, PDFs and screens change the size; the numbers don't","Floor plans have no scale","Because it's metric"],a:1,why:"Same as shop prints: build and quote from the written dimensions."}
],
sources:["tacoma","blm","usgs","bennett"]
});
})();
