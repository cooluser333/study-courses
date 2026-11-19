window.LESSONS.push({
 id: "process-smaw", module: "m2", title: "2.1 SMAW — Shielded Metal Arc (Stick) Welding", minutes: 20,
 objectives: ["Explain how a coated electrode shields the weld.","List SMAW's advantages and limitations.","Describe arc length, travel speed, and angle basics."],
 body: `
<p><strong>SMAW</strong> uses a consumable electrode (a "rod") covered in <strong>flux</strong>. The arc melts the core wire, which becomes filler metal. The burning flux produces a <strong>shielding gas</strong> and a layer of <strong>slag</strong> that protect the molten puddle from oxygen and nitrogen in the air.</p>
<svg class="diagram" viewBox="0 0 400 200" role="img" aria-labelledby="ts"><title id="ts">SMAW cross-section: core wire, flux coating, gas shield, arc, slag, weld metal</title>
 <rect x="170" y="10" width="40" height="110" class="flux" transform="rotate(20 190 65)"/>
 <rect x="184" y="10" width="12" height="118" class="metal" transform="rotate(20 190 65)"/>
 <ellipse cx="225" cy="150" rx="45" ry="18" class="gas"/>
 <path d="M30 170 H370" stroke="currentColor" stroke-width="2"/>
 <path d="M60 170 Q120 150 200 162 L200 170 Z" class="slag"/>
 <path d="M60 170 Q130 182 220 172 L220 170Z" class="weld"/>
 <circle cx="225" cy="158" r="6" class="hot"/>
 <text x="290" y="40" font-size="11">core wire</text><text x="290" y="58" font-size="11">flux coating</text>
 <text x="280" y="140" font-size="11">gas shield</text><text x="70" y="145" font-size="11">slag</text><text x="100" y="195" font-size="11">weld metal</text>
 <text x="250" y="195" font-size="11">travel →</text>
</svg>
<h3>Why stick is still everywhere</h3>
<ul>
 <li><strong>Portable and simple:</strong> no gas bottle, so it works outdoors in wind. Engine-drive machines run on farms and pipelines.</li>
 <li><strong>Forgiving on dirty steel:</strong> deep-penetrating cellulosic rods like E6010/E6011 dig through rust and paint.</li>
 <li><strong>Limitations:</strong> lower productivity (you stop to change rods and chip slag), harder on thin sheet metal, and more spatter and fume.</li>
</ul>
<h3>Technique fundamentals</h3>
<ul>
 <li><strong>Arc length:</strong> roughly equal to the core wire diameter. Too long causes spatter, porosity and undercut.</li>
 <li><strong>Drag angle:</strong> tilt the rod roughly 5–15° in the direction of travel ("if there's slag, you drag").</li>
 <li><strong>Travel speed:</strong> keep the bead width about 2–3 times the core diameter. Too fast gives a skinny, ropey bead. Too slow gives a wide bead and slag trouble.</li>
 <li>Chip and brush slag between passes. Slag left behind becomes an <em>inclusion</em> defect.</li>
</ul>
<p>OSHA requires all connections to the machine to be checked before starting operations (§1910.254(d)(2)).</p>`,
 terms: [["SMAW","Shielded Metal Arc Welding (stick)."],["Flux","A coating that melts to form shielding gas and slag, and may add alloys."],["Slag","A glassy protective layer left on top of the weld that must be removed."],["Arc length","The distance between the electrode tip and the weld puddle."],["Drag angle","Tilting the electrode back toward the finished weld while moving forward."]],
 quiz: [
  {q:"In SMAW, what protects the molten weld from air?", o:["A separate argon bottle","Gas and slag from the burning flux","A water spray","Nothing; stick welds aren't shielded"], a:1, why:"The flux coating decomposes into shielding gas and slag."},
  {q:"A good rule of thumb for SMAW arc length is:", o:["About the core-wire diameter","1 inch","Touching the puddle","Five times the rod diameter"], a:0, why:"Arc length about equal to the core diameter. Too long causes spatter and porosity."},
  {q:"Why is stick often chosen for outdoor repair work?", o:["Highest deposition rate","No external shielding gas to blow away","Best for thin aluminum","No slag"], a:1, why:"Wind blows away external shielding gas. Flux shielding tolerates it far better."},
  {q:"Leaving slag between passes most likely causes:", o:["Undercut","Slag inclusions","Arc strikes","Distortion"], a:1, why:"Trapped slag becomes a non-metallic inclusion."},
  {q:"\"If there's slag, you ___.\"", o:["push","drag","weave","stop"], a:1, why:"Slag-producing processes (SMAW, FCAW) generally use a drag (backhand) angle."}
 ],
 sources: ["wSMAW","lincolnAWS","osha254"]
});
