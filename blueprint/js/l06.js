(function(){
function tapeSvg(start,len,mark,w){
  w=w||640;var pad=20,ppi=(w-2*pad)/len,g='<rect x="10" y="20" width="'+(w-20)+'" height="80" rx="6" style="fill:#f6d23b;stroke:#7a6510"/>';
  for(var i=0;i<=len*16;i++){var x=pad+i*ppi/16,h=i%16===0?42:i%8===0?32:i%4===0?25:i%2===0?18:12;
    g+='<line x1="'+x.toFixed(1)+'" y1="20" x2="'+x.toFixed(1)+'" y2="'+(20+h)+'" stroke="#111" stroke-width="'+(i%16===0?2:1)+'"/>';
    if(i%16===0&&i>0)g+='<text x="'+(x-3)+'" y="88" text-anchor="end" style="fill:#111;font-size:18px;font-weight:700">'+(start+i/16)+'</text>';}
  if(mark!=null){var mx=pad+(mark-start*16)*ppi/16;g+='<line x1="'+mx+'" y1="8" x2="'+mx+'" y2="110" stroke="#d00" stroke-width="2.5"/><path d="M'+(mx-7)+' 4 L'+(mx+7)+' 4 L'+mx+' 14 Z" fill="#d00"/>';}
  return g;
}
window.TAPE_SVG=tapeSvg;
var ticks=D.svg("0 0 640 200",tapeSvg(0,2,null)+
 D.t(20,140,"Tallest = whole inch · next = 1/2 · then 1/4 · then 1/8 · shortest = 1/16","sm b")+
 D.t(20,162,"Count sixteenths past the last inch, then reduce: 6/16 = 3/8, 12/16 = 3/4, 10/16 = 5/8","sm")+
 D.t(20,184,"Every inch has 16 spaces. Halfway = 8/16 = 1/2.","sm"),"Two inches of tape with tick lengths for 1, 1/2, 1/4, 1/8 and 1/16");
var ex=D.svg("0 0 640 130",tapeSvg(5,2,5*16+11),"Example: pointer at 5 and 11/16 inches");
var hook=D.svg("0 0 640 180",
 '<rect x="10" y="50" width="44" height="90" class="steel"/>'+D.t(32,158,"part","xs","middle")+
 '<rect x="54" y="40" width="7" height="40" class="steel"/>'+D.t(58,32,"hook","xs","middle")+
 '<rect x="61" y="58" width="300" height="22" style="fill:#f6d23b;stroke:#7a6510"/>'+
 D.t(380,70,"The hook slides about the thickness","sm")+D.t(380,88,"of the hook itself:","sm")+D.t(380,110,"pulled out → hooked on an edge","sm")+D.t(380,128,"pushed in → butted against a wall","sm")+D.t(380,150,"Both give true zero. Don't bend it.","sm b"),
 "Tape measure hook slides to give true zero when hooking or butting");
window.LESSONS.push({
id:"tape",module:"m2",minutes:25,title:"6. Reading a tape to 1/16\" and converting fractions",
blurb:"The skill every cut depends on. Includes an unlimited practice drill.",
objectives:["Read any mark on a tape measure to the nearest 1/16\".","Convert between fractions, decimals, feet-inches and inches.","Use the hook correctly, \"burn an inch\" when you need to, and measure the same way every time."],
body:`
<p>Prints give you numbers, and the tape turns them into steel. Most fab work holds ±1/16", so you have to read a tape to sixteenths quickly and without thinking about it.</p>
${D.fig(ticks,"Fig 6.1: Each tick length means something different.")}
<h2>Reading a mark</h2>
<ol><li>Read the last whole inch before the mark.</li><li>Count the sixteenths past it.</li><li>Reduce the fraction: divide the top and bottom by 2 until the top number is odd.</li></ol>
${D.fig(ex,"Fig 6.2: The last whole inch is 5. The mark is 11 sixteenths past it, so 5-11/16\". Since 11 is odd, it doesn't reduce.")}
<div id="tapeDrill"></div>
<h2>Fractions ↔ decimals</h2>
<div class="tablewrap"><table>
<tr><th>1/16</th><th>1/8</th><th>3/16</th><th>1/4</th><th>5/16</th><th>3/8</th><th>7/16</th><th>1/2</th></tr>
<tr><td>.0625</td><td>.125</td><td>.1875</td><td>.250</td><td>.3125</td><td>.375</td><td>.4375</td><td>.500</td></tr>
<tr><th>9/16</th><th>5/8</th><th>11/16</th><th>3/4</th><th>13/16</th><th>7/8</th><th>15/16</th><th>1</th></tr>
<tr><td>.5625</td><td>.625</td><td>.6875</td><td>.750</td><td>.8125</td><td>.875</td><td>.9375</td><td>1.000</td></tr></table></div>
<p>To turn a decimal into sixteenths, multiply the decimal part by 16 and round. For example, .55 × 16 = 8.8, which rounds to 9/16. So 150.55 is about 150-9/16. Every sixteenth is .0625, so 11 gauge tube wall (.120) is just under 1/8 (.125).</p>
<h2>Feet-inches ↔ inches</h2>
<p>Inches = feet × 12 + inches. 11'-10" = 132 + 10 = 142". Going the other way, 50" ÷ 12 = 4 with 2 left over, so 4'-2". Most fab prints are in inches only, and building and site prints use feet-inches.</p>
<h2>Using the tape right</h2>
${D.fig(hook,"Fig 6.3: The loose hook is on purpose. It moves to give you true zero whether you hook an edge or butt against a wall.")}
<ul>
<li><strong>Hook it</strong> on square edges, and keep the blade flat and straight. A sagging tape reads long.</li>
<li><strong>Burn an inch:</strong> on a rough or damaged end, line up the 1" mark with the edge and subtract 1 from your reading. People forget to subtract. Write "−1" on your hand if you have to.</li>
<li><strong>Mark with a sharp soapstone or scribe</strong> and make a "V" or tick, with the point on the exact spot. A fat line can be 1/16 wide by itself.</li>
<li><strong>Mark which side of the line to cut on.</strong> The kerf takes 1/16 to 1/8 with a chop saw or band saw, so cut on the waste side.</li>
<li><strong>Use one tape for the whole job.</strong> Two tapes can disagree by a sixteenth.</li>
<li>Red marks every 16" are for wall studs. On some tapes, small diamonds mark 19.2" spacing for joists. You can ignore both in fab work.</li>
</ul>
`,
terms:[["Sixteenth","1/16\" = 0.0625\". The smallest mark on most tapes."],["True zero","The tape's hook moves so the reading is right hooked or butted."],["Burn an inch","Measuring from the 1\" mark and subtracting 1\"."],["Kerf","Material removed by the blade."]],
quiz:[
{q:"The mark is 6 sixteenths past the 9. What's the reading?",c:["9-6/16 = 9-3/8","9-1/6","9-3/4","9-5/8"],a:0,why:"6/16 reduces to 3/8 (divide both by 2)."},
{q:"How many sixteenths are in 3/4\"?",c:["8","10","12","14"],a:2,why:"3/4 = 12/16."},
{q:"0.1875\" as a fraction is…",c:["1/8","3/16","1/4","5/32"],a:1,why:"0.1875 × 16 = 3, so 3/16."},
{q:"You burned an inch and the tape reads 47-5/8 at the mark. What's the real length?",c:["47-5/8","48-5/8","46-5/8","47"],a:2,why:"You started at 1\", so subtract 1: 46-5/8."},
{q:"4'-2\" equals how many inches?",c:["42","50","48","52"],a:1,why:"4 × 12 = 48, plus 2 = 50."},
{q:"Why is the hook on a tape loose?",c:["It's worn out","It slides the hook's thickness so hooking and butting both read true","It's for hanging","To measure diagonals"],a:1,why:"The hook moves its own thickness to give true zero both ways. Don't bend or 'fix' it."},
{q:"Which reading is the shortest?",c:["5/8","9/16","11/16","3/4"],a:1,why:"Compare in sixteenths: 5/8 = 10/16, 9/16, 11/16, 3/4 = 12/16. So 9/16 is the shortest."}
],
sources:["tape","bennett","gw"],
init:function(root){window.TOOLS&&window.TOOLS.tapeDrill(root.querySelector("#tapeDrill"));}
});
})();
