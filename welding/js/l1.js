window.LESSONS.push({
 id: "safety-fire-eyes-fumes", module: "m1", title: "1.1 Hot-Work Safety: Fire, Radiation & Fumes", minutes: 25,
 objectives: [
  "Explain how OSHA 29 CFR 1910 Subpart Q and ANSI Z49.1 relate to each other.",
  "Apply the 35-foot rule and fire-watch requirements to a real job site.",
  "Choose a filter-lens shade for a given process using the OSHA guide table.",
  "Describe the health risk of welding fume, especially manganese, and how to control it."
 ],
 body: `
<p>Welding concentrates thousands of degrees of heat, intense ultraviolet/infrared light, and a plume of metal fume into a space smaller than your hand. Almost every serious welding injury comes from one of three things: <strong>fire</strong>, <strong>radiation</strong> (arc flash and burns), or <strong>fume and gas</strong>. Electric shock and compressed gas are covered in Lesson 1.2.</p>
<h3>The rulebook: Subpart Q and Z49.1</h3>
<p>In US general industry, welding is regulated by <strong>OSHA 29 CFR 1910 Subpart Q</strong>: §1910.252 (general requirements: fire, PPE, ventilation), §1910.253 (oxygen-fuel gas), and §1910.254 (arc welding). OSHA's standard itself points to the consensus standard <strong>ANSI Z49.1, <em>Safety in Welding, Cutting, and Allied Processes</em></strong>, published by the American Welding Society. Filler-metal containers must carry a notice to use adequate ventilation and see ANSI Z49.1. AWS offers Z49.1 as a free download from its safety page. Read it once cover to cover. It is the single best safety document in the trade.</p>
<div class="callout"><strong>Law vs. best practice:</strong> OSHA regulations are legally enforceable for employers. Z49.1 is a consensus standard: best practice that OSHA references. Construction sites use 29 CFR 1926 Subpart J, which is similar but separate.</div>
<h3>Fire prevention: the 35-foot rule</h3>
<p>Per §1910.252(a), if the work can't be moved, move the fire hazards. If you can't move them, guard them. If you can't do either, <strong>don't weld</strong>. Key numbers:</p>
<ul>
 <li>Where practicable, relocate combustibles at least <strong>35 ft (10.7 m)</strong> from the work, or shield them.</li>
 <li>A <strong>fire watch</strong> is required when appreciable combustibles are within 35 ft, or when sparks could reach combustibles through wall/floor openings or by conduction through metal walls.</li>
 <li>The fire watch must stay at least <strong>30 minutes after</strong> welding stops, to catch smoldering fires.</li>
 <li>Never weld on used drums, tanks, or containers until they are thoroughly cleaned of flammable or toxic residues. Vent hollow spaces before heating.</li>
</ul>
<svg class="diagram" viewBox="0 0 400 220" role="img" aria-labelledby="t35"><title id="t35">The 35-foot rule: combustibles relocated outside a 35-foot radius around the weld</title>
 <circle cx="200" cy="110" r="95" fill="none" stroke="currentColor" stroke-dasharray="6 5"/>
 <circle cx="200" cy="110" r="10" class="hot"/>
 <text x="200" y="140" text-anchor="middle" font-size="12">weld</text>
 <line x1="200" y1="110" x2="295" y2="110" stroke="currentColor"/>
 <text x="248" y="104" text-anchor="middle" font-size="12">35 ft</text>
 <rect x="330" y="90" width="40" height="40" class="box"/><text x="350" y="150" text-anchor="middle" font-size="11">combustibles</text>
 <text x="200" y="215" text-anchor="middle" font-size="12">Inside the circle: swept clean, shielded, or fire watch</text>
</svg>
<h3>Arc radiation and eye protection</h3>
<p>The arc emits UV strong enough to sunburn skin in minutes and cause "arc eye" (photokeratitis). OSHA requires helmets or hand shields for all arc welding, and goggles for gas welding and cutting. Helpers need eye protection too. Bystanders should be protected with non-combustible screens. OSHA's guide shade numbers (§1910.252(b)(2)(ii)(H)) include:</p>
<table><thead><tr><th>Operation</th><th>Guide shade</th></tr></thead><tbody>
<tr><td>SMAW, 1/16"–5/32" electrodes</td><td>10</td></tr>
<tr><td>Gas-shielded arc (ferrous), 1/16"–5/32"</td><td>12</td></tr>
<tr><td>SMAW, 3/16"–1/4" electrodes</td><td>12</td></tr>
<tr><td>SMAW, 5/16"–3/8" electrodes</td><td>14</td></tr>
<tr><td>Torch brazing / light cutting (&lt;1")</td><td>3 or 4</td></tr>
<tr><td>Medium cutting (1"–6")</td><td>4 or 5</td></tr>
</tbody></table>
<p>Start darker, then lighten until you can see the puddle clearly. Wear flame-resistant clothing (cotton or wool, never synthetics that melt), leather gloves, high-top boots, and safety glasses <em>under</em> the helmet.</p>
<h3>Fume and gas</h3>
<p>Welding fume is a mix of metal oxides. NIOSH notes that most welding fumes contain some <strong>manganese</strong>. Prolonged exposure to high concentrations (&gt;1 mg/m³) can lead to <em>manganism</em>, a Parkinson-like syndrome. Even low exposures have been linked to effects on mood, memory, reaction time, and coordination. Confined spaces dramatically increase exposure. Galvanized (zinc-coated) steel causes metal fume fever. Cadmium, lead, beryllium, and mercury coatings require local exhaust or supplied-air respirators under §1910.252(c).</p>
<ul>
 <li><strong>Keep your head out of the plume.</strong> This is the cheapest control there is.</li>
 <li>Use local exhaust (a fume extractor hood) placed close to the arc. OSHA's table calls for 150 cfm at 4–6 in. from the arc.</li>
 <li>OSHA requires mechanical ventilation in spaces under 10,000 ft³ per welder or with ceilings under 16 ft. <strong>Never</strong> use oxygen for ventilation.</li>
 <li>Remove paint and coatings before welding. Read the Safety Data Sheet (SDS) for your filler metal.</li>
</ul>
<div class="callout warn"><strong>Florida note:</strong> Heat and humidity mean sweat, and sweat makes you a better conductor. Combine this lesson with 1.2 on shock. Hydrate, and change into dry gloves.</div>`,
 terms: [["Subpart Q","OSHA 29 CFR 1910.251–.255, the general-industry welding, cutting and brazing regulations."],["ANSI Z49.1","AWS-published consensus standard: Safety in Welding, Cutting, and Allied Processes."],["Fire watch","A trained person with extinguishing equipment who watches for fires during hot work and for at least 30 minutes afterward."],["Hot work","Any work producing flame, sparks or heat that could ignite materials: welding, cutting, brazing, grinding."],["Arc eye","Photokeratitis: a painful UV burn of the cornea caused by unprotected exposure to an arc."],["Manganism","A Parkinson-like neurological syndrome linked to high manganese fume exposure."],["Metal fume fever","Flu-like illness from inhaling zinc oxide or other metal fumes, common when welding galvanized steel."]],
 quiz: [
  {q:"Under OSHA 1910.252, how long must a fire watch be maintained after welding is completed?", o:["5 minutes","15 minutes","At least 30 minutes","Until the end of the shift"], a:2, why:"§1910.252(a)(2)(iii)(B) requires a fire watch for at least a half hour after hot work, to catch smoldering fires."},
  {q:"Combustibles should, where practicable, be relocated at least how far from the work?", o:["10 ft","20 ft","35 ft","100 ft"], a:2, why:"35 ft (10.7 m) is the distance used throughout §1910.252(a)."},
  {q:"OSHA's guide shade for SMAW with 1/8\" electrodes is:", o:["Shade 5","Shade 8","Shade 10","Shade 14"], a:2, why:"The table lists shade 10 for SMAW with 1/16\"–5/32\" electrodes. Adjust to suit your eyes."},
  {q:"Which metal in welding fume does NIOSH highlight for neurological effects?", o:["Aluminum","Manganese","Copper","Titanium"], a:1, why:"NIOSH's Welding Fumes and Manganese page links manganese exposure to manganism and neurobehavioral effects."},
  {q:"Which is NEVER acceptable for ventilating a confined space?", o:["Local exhaust","Fresh compressed air","Pure oxygen","A blower with clean air"], a:2, why:"§1910.252(c)(4)(v): oxygen shall never be used for ventilation, because it makes clothing and materials burn violently."}
 ],
 sources: ["osha252","oshaTopic","awsSafety","niosh"]
});
