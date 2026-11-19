window.LESSONS.push({
 id: "metallurgy-basics", module: "m3", title: "3.1 Metallurgy Basics for Welders", minutes: 30,
 objectives: ["Define the weld metal, fusion line, HAZ, and base metal.","Explain how carbon content affects weldability.","Describe hydrogen cracking and the role of preheat and low-hydrogen consumables."],
 body: `
<p>Every weld is a tiny casting surrounded by metal that has been heat-treated whether you meant to or not. Understanding those zones explains most cracking and strength problems.</p>
<svg class="diagram" viewBox="0 0 420 170" role="img" aria-labelledby="th"><title id="th">Weld cross-section showing weld metal, fusion line, heat-affected zone, and unaffected base metal</title>
 <rect x="10" y="60" width="400" height="70" class="metal"/>
 <path d="M130 60 Q210 160 290 60 Z" class="haz"/>
 <path d="M160 60 Q210 125 260 60 Z" class="weld"/>
 <text x="210" y="80" text-anchor="middle" font-size="11">weld metal</text>
 <text x="210" y="122" text-anchor="middle" font-size="11">HAZ</text>
 <text x="40" y="100" font-size="11">base metal</text><text x="320" y="100" font-size="11">base metal</text>
 <line x1="250" y1="75" x2="320" y2="35" stroke="currentColor"/><text x="322" y="32" font-size="11">fusion line</text>
</svg>
<ul>
 <li><strong>Weld metal:</strong> filler plus melted base metal that solidified.</li>
 <li><strong>Fusion line:</strong> the boundary between melted and unmelted metal.</li>
 <li><strong>Heat-affected zone (HAZ):</strong> base metal that didn't melt, but whose microstructure and properties changed from the heat. It is often where cracking and toughness problems show up.</li>
 <li><strong>Base metal:</strong> unaffected parent material.</li>
</ul>
<h3>Steel and carbon</h3>
<p>Steel is iron plus carbon (and other alloys). <strong>More carbon means more hardenability.</strong> When steel cools quickly from welding heat, the HAZ can form <em>martensite</em>, a hard, brittle structure. Low-carbon "mild" steel is very weldable. Higher-carbon and many alloy steels need <strong>preheat</strong> and controlled cooling. Engineers use a <em>carbon equivalent</em> (CE) formula to roll the effect of manganese, chromium and other alloys into one number.</p>
<h3>Hydrogen (cold) cracking</h3>
<p>TWI describes hydrogen cracking in C-Mn and low-alloy steels as needing three things at once: <strong>hydrogen</strong> (from moisture, oil, rust, or damp flux), a <strong>susceptible hard microstructure</strong>, and <strong>tensile stress</strong>. It can appear hours after welding. Remove any one factor to prevent it:</p>
<ul>
 <li>Use <strong>low-hydrogen</strong> consumables (e.g., E7018), stored dry. H4/H8 designators cap diffusible hydrogen.</li>
 <li><strong>Preheat</strong> to slow cooling and let hydrogen diffuse out.</li>
 <li>Clean joints: no rust, oil, paint, or moisture.</li>
</ul>
<h3>Other metals at a glance</h3>
<p><strong>Stainless steel</strong> contains enough chromium to form a protective passive oxide. Avoid overheating it, and use matching filler. <strong>Aluminum</strong> conducts heat quickly, has a tough oxide skin, and doesn't change color before it melts. Clean it thoroughly and use AC TIG or spray/pulsed MIG.</p>`,
 terms: [["HAZ","Heat-affected zone: base metal altered by heat but not melted."],["Fusion line","The boundary between weld metal and HAZ."],["Martensite","A hard, brittle steel microstructure formed by rapid cooling."],["Preheat","Heating base metal before welding to slow cooling and reduce cracking risk."],["Carbon equivalent","A formula estimating a steel's hardenability and weldability from its chemistry."],["Hydrogen cracking","Delayed cold cracking caused by hydrogen, a hard microstructure, and stress."],["Diffusible hydrogen","Hydrogen able to move through the weld metal, measured in mL per 100 g."]],
 quiz: [
  {q:"The heat-affected zone is:", o:["The melted filler","Base metal changed by heat but not melted","The slag layer","The area under the work clamp"], a:1, why:"The HAZ never melts, but its microstructure changes."},
  {q:"Raising a steel's carbon content generally:", o:["Improves weldability","Increases hardenability and cracking risk","Has no effect","Makes it non-magnetic"], a:1, why:"Higher carbon makes hard martensite more likely in the HAZ."},
  {q:"Which three factors combine to cause hydrogen cracking?", o:["Hydrogen, susceptible microstructure, stress","Heat, light, sound","Argon, CO₂, oxygen","Slag, spatter, porosity"], a:0, why:"Remove any one and cracking is prevented."},
  {q:"Why preheat high-carbon steel?", o:["To make it shiny","To slow cooling and allow hydrogen to escape","To lower the arc voltage","To avoid needing filler"], a:1, why:"Slower cooling reduces hard microstructures and allows hydrogen to diffuse out."},
  {q:"Which electrode is classified as low-hydrogen?", o:["E6010","E6013","E7018","E6011"], a:2, why:"A last digit of 8 means low-hydrogen potassium with iron powder."}
 ],
 sources: ["wHAZ","twiCMn","hobart7018","lincolnAWS"]
});
