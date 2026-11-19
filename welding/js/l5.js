window.LESSONS.push({
 id: "process-gtaw", module: "m2", title: "2.3 GTAW — Gas Tungsten Arc (TIG) Welding", minutes: 20,
 objectives: ["Describe the TIG torch, tungsten, and filler arrangement.","Choose shielding gas and polarity for steel vs. aluminum.","Explain why TIG is the precision process."],
 body: `
<p>In <strong>GTAW</strong>, a <strong>non-consumable tungsten electrode</strong> carries the arc while an inert gas, usually <strong>100% argon</strong>, shields the puddle. Filler metal is added by hand from a separate rod, and heat is often controlled with a foot pedal or a torch-mounted control. You use both hands, which is why it's the hardest process to learn and the most precise.</p>
<svg class="diagram" viewBox="0 0 400 190" role="img" aria-labelledby="tt"><title id="tt">TIG setup: torch with tungsten and cup, separate filler rod fed into the puddle</title>
 <polygon points="200,20 230,20 240,110 190,110" class="box"/><text x="250" y="60" font-size="11">torch body / cup</text>
 <rect x="211" y="110" width="8" height="35" class="metal"/><text x="230" y="135" font-size="11">tungsten</text>
 <ellipse cx="215" cy="160" rx="40" ry="12" class="gas"/>
 <line x1="80" y1="90" x2="190" y2="160" stroke="currentColor" stroke-width="5"/><text x="40" y="85" font-size="11">filler rod</text>
 <path d="M20 170 H380" stroke="currentColor" stroke-width="2"/><circle cx="215" cy="166" r="6" class="hot"/>
</svg>
<ul>
 <li><strong>Steel and stainless:</strong> DCEN, with a pointed tungsten (2% lanthanated or ceriated are common choices).</li>
 <li><strong>Aluminum and magnesium:</strong> AC. The electrode-positive half of the cycle breaks up the tough oxide layer ("cleaning action"). Ceriated or lanthanated tungsten holds up better on AC than thoriated.</li>
 <li><strong>Gas flow:</strong> Miller recommends the lowest flow that gives smooth, laminar coverage. Excess flow causes turbulence that pulls in air.</li>
 <li><strong>Cleanliness is everything:</strong> acetone-wipe the base and filler, and use a dedicated stainless brush for aluminum. Dipping the tungsten into the puddle contaminates it, so stop and regrind.</li>
</ul>
<p><strong>Where TIG wins:</strong> thin material, stainless, aluminum, root passes on pipe, aerospace and food-grade work. <strong>Where it loses:</strong> it is slow, with low deposition, and sensitive to wind and dirt.</p>`,
 terms: [["GTAW","Gas Tungsten Arc Welding (TIG)."],["Non-consumable electrode","An electrode that carries the arc but doesn't melt into the weld (tungsten)."],["Cleaning action","Oxide removal during the electrode-positive part of the AC cycle."],["Laminar flow","Smooth, non-turbulent gas flow that shields properly."],["Tungsten inclusion","A defect from tungsten fragments that break off into the weld."]],
 quiz: [
  {q:"In GTAW, the tungsten electrode is:", o:["Consumed as filler","Non-consumable","Flux-coated","Tubular"], a:1, why:"Tungsten carries the arc. Filler is added separately."},
  {q:"Which current is normally used to TIG weld aluminum?", o:["DCEN","DCEP","AC","Pulsed DCEN only"], a:2, why:"AC gives oxide-cleaning action on the positive half-cycle."},
  {q:"The most common TIG shielding gas is:", o:["100% CO₂","75/25 Ar/CO₂","100% argon","Oxygen"], a:2, why:"Miller describes 100% argon as the best all-around TIG gas."},
  {q:"You dip the tungsten into the puddle. What should you do?", o:["Keep welding","Increase amperage","Stop and regrind or replace the tungsten","Switch to AC"], a:2, why:"Contaminated tungsten gives an erratic arc and risks inclusions."},
  {q:"Turning gas flow way up usually:", o:["Improves coverage indefinitely","Can cause turbulence that pulls in air","Cools the tungsten for higher amps","Has no effect"], a:1, why:"Laminar flow matters more than volume. Too much flow causes turbulence."}
 ],
 sources: ["millerTIG","millerTIGgas","wGTAW"]
});
