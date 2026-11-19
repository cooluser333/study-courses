window.LESSONS.push({
 id: "defects-inspection", module: "m6", title: "6.1 Weld Defects & Inspection", minutes: 30,
 objectives: ["Identify common discontinuities and their causes.","Distinguish a discontinuity from a defect.","Describe visual, destructive, and nondestructive (NDT) testing methods."],
 body: `
<p>A <strong>discontinuity</strong> is any interruption in the weld's structure. It becomes a <strong>defect</strong> (or rejectable imperfection) when it exceeds the acceptance criteria of the governing code, such as AWS D1.1. That is why inspectors carry gauges, not opinions.</p>
<svg class="diagram" viewBox="0 0 480 140" role="img" aria-labelledby="td"><title id="td">Defects in cross-section: porosity, undercut, incomplete penetration, crack</title>
 <g><rect x="10" y="60" width="100" height="40" class="metal"/><path d="M35 60 Q60 40 85 60Z" class="weld"/><circle cx="52" cy="56" r="3" class="void"/><circle cx="64" cy="52" r="2.5" class="void"/><circle cx="72" cy="57" r="3" class="void"/><text x="60" y="125" text-anchor="middle" font-size="12">Porosity</text></g>
 <g><rect x="130" y="60" width="100" height="40" class="metal"/><path d="M155 60 Q180 40 205 60Z" class="weld"/><path d="M146 60 Q151 70 156 60Z" class="void"/><text x="180" y="125" text-anchor="middle" font-size="12">Undercut</text></g>
 <g><rect x="250" y="60" width="47" height="40" class="metal"/><rect x="303" y="60" width="47" height="40" class="metal"/><path d="M285 60 Q300 40 315 60 L310 75 L290 75Z" class="weld"/><text x="300" y="125" text-anchor="middle" font-size="12">Incomplete pen.</text></g>
 <g><rect x="370" y="60" width="100" height="40" class="metal"/><path d="M395 60 Q420 40 445 60Z" class="weld"/><path d="M420 46 L416 52 L423 56 L418 62" fill="none" stroke="#d33" stroke-width="2"/><text x="420" y="125" text-anchor="middle" font-size="12">Crack</text></g>
</svg>
<table><thead><tr><th>Discontinuity</th><th>What it is</th><th>Typical causes</th></tr></thead><tbody>
<tr><td>Porosity</td><td>Gas pores trapped in weld metal</td><td>Loss of shielding (draughts, wrong flow), moisture, oil, rust, surface coatings</td></tr>
<tr><td>Lack of sidewall / inter-run fusion</td><td>Weld metal not fused to the joint face or previous pass</td><td>Too little heat, travel too fast, poor torch angle, narrow joint, arc blow</td></tr>
<tr><td>Incomplete root penetration</td><td>Root not fully fused through</td><td>Root gap too small, root face too large, current too low, poor technique</td></tr>
<tr><td>Undercut</td><td>A groove melted into the base metal at the toe and left unfilled</td><td>Excessive current or arc length, fast travel, poor angle</td></tr>
<tr><td>Slag inclusion</td><td>Trapped non-metallic slag</td><td>Poor inter-pass cleaning, bad bead shape</td></tr>
<tr><td>Cracks</td><td>Fractures: the most serious discontinuity</td><td>Hydrogen, restraint, hard microstructure, crater cracks from abrupt stops</td></tr>
<tr><td>Overlap / cold lap</td><td>Weld metal rolled onto the surface without fusing</td><td>Low heat or slow travel, short-circuit MIG on thick plate</td></tr>
</tbody></table>
<h3>Inspection methods</h3>
<ul>
 <li><strong>Visual (VT):</strong> the first and most-used method. Check bead profile, size (with a fillet gauge), undercut, cracks and surface porosity, before, during and after welding.</li>
 <li><strong>Destructive:</strong> <strong>bend tests</strong> (face, root, side), which welder qualification tests commonly use; macro-etch; tensile tests.</li>
 <li><strong>Nondestructive (NDT):</strong> dye penetrant (PT) and magnetic particle (MT) find surface or near-surface flaws. Ultrasonic (UT) and radiographic (RT) testing find internal flaws.</li>
</ul>`,
 terms: [["Discontinuity","An interruption in the typical structure of a weld."],["Defect","A discontinuity that exceeds code acceptance criteria."],["Porosity","Gas pockets trapped in the weld."],["Undercut","A groove melted into the base metal at the weld toe and left unfilled."],["Bend test","A destructive test that bends a weld coupon to reveal lack of fusion or other flaws."],["NDT","Nondestructive testing (VT, PT, MT, UT, RT)."],["Arc blow","Magnetic deflection of the arc, most common with DC."]],
 quiz: [
  {q:"A discontinuity becomes a defect when it:", o:["Is visible","Exceeds the code's acceptance criteria","Is any size","Is internal"], a:1, why:"Codes define how much imperfection is acceptable."},
  {q:"Porosity is most commonly caused by:", o:["Lost gas shielding or contamination","A too-wide bead","Using a fillet gauge","Low carbon"], a:0, why:"TWI lists poor shielding, moisture, oil, rust and coatings."},
  {q:"Which test is commonly used in welder performance qualification?", o:["Hardness test","Bend test","Salt-spray test","Paint adhesion test"], a:1, why:"Bend tests reveal lack of fusion and other flaws in a test coupon."},
  {q:"Which NDT methods detect INTERNAL flaws?", o:["PT and VT","UT and RT","MT only","None"], a:1, why:"Ultrasonic and radiographic testing see inside the weld."},
  {q:"A groove melted into the base metal at the weld toe is:", o:["Overlap","Undercut","Porosity","Crater"], a:1, why:"Undercut is usually caused by excessive current, a long arc or fast travel."}
 ],
 sources: ["twiPor","twiLOF","twiRoot","wDefect"]
});
