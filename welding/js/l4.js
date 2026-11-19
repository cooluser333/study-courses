window.LESSONS.push({
 id: "process-gmaw-fcaw", module: "m2", title: "2.2 GMAW (MIG) & FCAW (Flux-Cored)", minutes: 25,
 objectives: ["Compare solid-wire GMAW to self- and gas-shielded FCAW.","Name the GMAW metal-transfer modes.","Explain voltage vs. wire-feed speed."],
 body: `
<p><strong>GMAW</strong> feeds a continuous solid wire through a gun while a <strong>shielding gas</strong> flows from the nozzle. For steel that is commonly 75% argon/25% CO₂ or 100% CO₂, and for aluminum it is pure argon. <strong>FCAW</strong> uses a <em>tubular</em> wire filled with flux. <strong>Self-shielded</strong> (FCAW-S) wire needs no gas. <strong>Gas-shielded</strong> (FCAW-G, "dual shield") wire uses flux plus gas.</p>
<table><thead><tr><th></th><th>GMAW (solid)</th><th>FCAW-S</th><th>FCAW-G</th></tr></thead><tbody>
<tr><td>Shielding</td><td>External gas</td><td>Flux only</td><td>Flux + gas</td></tr>
<tr><td>Slag</td><td>None</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Wind tolerance</td><td>Poor</td><td>Good</td><td>Moderate</td></tr>
<tr><td>Typical use</td><td>Shop fab, sheet metal</td><td>Outdoor, structural, farm</td><td>Heavy fab, shipyards</td></tr>
<tr><td>Polarity (typical)</td><td>DCEP</td><td>Often DCEN (check the wire)</td><td>DCEP</td></tr>
</tbody></table>
<h3>Metal-transfer modes (GMAW)</h3>
<ul>
 <li><strong>Short-circuit:</strong> low heat, and the wire touches the puddle many times a second. Good for thin metal and out-of-position work, but prone to cold lap on thick plate.</li>
 <li><strong>Globular:</strong> large, irregular droplets with lots of spatter. Typical with 100% CO₂ at higher currents.</li>
 <li><strong>Spray:</strong> a fine stream of droplets that needs argon-rich gas and high current. Smooth and deep, but mostly limited to flat and horizontal positions.</li>
 <li><strong>Pulsed spray:</strong> the machine pulses the current to get spray-like transfer at lower average heat, so it works in all positions.</li>
</ul>
<h3>The two knobs</h3>
<p>On a constant-voltage (CV) machine, <strong>wire-feed speed sets amperage</strong> (and deposition), and <strong>voltage sets arc length</strong> and bead width. Tune them together until you hear a steady "bacon frying" crackle in short-circuit mode.</p>
<p><strong>Stickout</strong> (contact-tip-to-work distance) matters. Self-shielded flux-cored wires generally run with longer stickout than solid wire. Check the wire manufacturer's data sheet.</p>
<div class="callout">The inexpensive 120 V "flux-core" machines sold at hardware stores run FCAW-S. They are great for learning outdoors in Florida wind, but expect slag and spatter.</div>`,
 terms: [["GMAW","Gas Metal Arc Welding (MIG/MAG)."],["FCAW","Flux-Cored Arc Welding, using tubular wire with flux inside."],["CV power source","A constant-voltage machine, standard for wire processes."],["Wire-feed speed (WFS)","The rate the wire is fed. On CV machines it controls amperage."],["Stickout / CTWD","Contact-tip-to-work distance."],["Spray transfer","A fine-droplet, high-energy GMAW mode that needs argon-rich gas."]],
 quiz: [
  {q:"On a CV wire welder, which setting primarily controls amperage?", o:["Voltage","Wire-feed speed","Gas flow","Stickout only"], a:1, why:"Feeding wire faster draws more current. Voltage mainly controls arc length."},
  {q:"Which process needs NO external shielding gas?", o:["GMAW","FCAW-G","FCAW-S","GTAW"], a:2, why:"Self-shielded flux-cored wire makes its own shielding."},
  {q:"Conventional (non-pulsed) spray transfer is generally limited to which positions?", o:["Overhead only","Vertical only","Flat and horizontal","All positions"], a:2, why:"The large, fluid puddle is hard to control out of position. Pulsed spray solves this."},
  {q:"Short-circuit transfer on thick plate is most prone to:", o:["Cold lap / lack of fusion","Burn-through","Tungsten inclusions","Excess penetration"], a:0, why:"Its low heat input can fail to fuse thick sidewalls."},
  {q:"Which leaves slag that must be removed?", o:["GMAW solid wire","FCAW","Both","Neither"], a:1, why:"FCAW wire contains flux, which forms slag. Solid-wire GMAW does not."}
 ],
 sources: ["wGMAW","wFCAW","millerFCAW"]
});
