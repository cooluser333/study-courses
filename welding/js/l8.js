window.LESSONS.push({
 id: "joints-positions", module: "m4", title: "4.1 Joint Types & Welding Positions (1G–4G, 1F–4F)", minutes: 20,
 objectives: ["Identify the five basic joint types.","Distinguish fillet from groove welds.","Decode position designations 1G–4G and 1F–4F (plus pipe 5G/6G)."],
 body: `
<h3>The five basic joints</h3>
<svg class="diagram" viewBox="0 0 500 120" role="img" aria-labelledby="tj"><title id="tj">Five basic joints: butt, tee, corner, lap, edge</title>
 <g><rect x="10" y="50" width="40" height="10" class="metal"/><rect x="54" y="50" width="40" height="10" class="metal"/><text x="52" y="100" text-anchor="middle" font-size="12">Butt</text></g>
 <g><rect x="110" y="60" width="80" height="10" class="metal"/><rect x="145" y="20" width="10" height="40" class="metal"/><text x="150" y="100" text-anchor="middle" font-size="12">Tee</text></g>
 <g><rect x="215" y="60" width="60" height="10" class="metal"/><rect x="215" y="20" width="10" height="40" class="metal"/><text x="245" y="100" text-anchor="middle" font-size="12">Corner</text></g>
 <g><rect x="300" y="55" width="60" height="10" class="metal"/><rect x="330" y="45" width="60" height="10" class="metal"/><text x="345" y="100" text-anchor="middle" font-size="12">Lap</text></g>
 <g><rect x="415" y="40" width="70" height="10" class="metal"/><rect x="415" y="52" width="70" height="10" class="metal"/><text x="450" y="100" text-anchor="middle" font-size="12">Edge</text></g>
</svg>
<p>A <strong>joint</strong> is how the parts meet. A <strong>weld type</strong> is what you deposit. Miller defines a <strong>fillet weld</strong> as one that joins two pieces that are perpendicular or at an angle (tee, lap, corner), and a <strong>groove weld</strong> as one made in a groove between workpieces or workpiece edges (typically butt joints). Groove preps include square, V, bevel, U and J.</p>
<h3>Position designations</h3>
<p>The number is the position and the letter is the weld type: <strong>1 = flat, 2 = horizontal, 3 = vertical, 4 = overhead; G = groove, F = fillet.</strong> So <strong>3G</strong> is a vertical groove weld and <strong>2F</strong> is a horizontal fillet.</p>
<svg class="diagram" viewBox="0 0 480 125" role="img" aria-labelledby="tp"><title id="tp">Plate positions: 1 flat, 2 horizontal, 3 vertical, 4 overhead</title>
 <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
 <g><rect x="20" y="70" width="80" height="8" class="metal"/><line x1="60" y1="35" x2="60" y2="66" stroke="currentColor" marker-end="url(#ar)"/><text x="60" y="110" text-anchor="middle" font-size="12">1 Flat</text></g>
 <g><rect x="150" y="30" width="8" height="60" class="metal"/><line x1="200" y1="60" x2="162" y2="60" stroke="currentColor" marker-end="url(#ar)"/><text x="170" y="110" text-anchor="middle" font-size="12">2 Horizontal</text></g>
 <g><rect x="270" y="30" width="8" height="60" class="metal"/><line x1="300" y1="85" x2="300" y2="35" stroke="currentColor" stroke-dasharray="3 3" marker-end="url(#ar)"/><text x="290" y="110" text-anchor="middle" font-size="12">3 Vertical</text></g>
 <g><rect x="370" y="30" width="80" height="8" class="metal"/><line x1="410" y1="75" x2="410" y2="42" stroke="currentColor" marker-end="url(#ar)"/><text x="410" y="110" text-anchor="middle" font-size="12">4 Overhead</text></g>
</svg>
<ul>
 <li><strong>Flat:</strong> generally the easiest position, because you're not fighting gravity. You can run hotter with higher deposition.</li>
 <li><strong>Horizontal:</strong> 2G is harder than 2F because there's no bottom shelf to support the puddle. Favor the top edge slightly.</li>
 <li><strong>Vertical:</strong> uphill (more common on thick material) or downhill. Reduce wire speed and voltage to fight sag.</li>
 <li><strong>Overhead:</strong> keep the puddle small. Wear full leathers and a welding cap.</li>
 <li><strong>Pipe:</strong> 1G (pipe rolled), 2G (vertical axis), <strong>5G</strong> (horizontal axis, fixed, so you weld all the way around), and <strong>6G</strong> (axis fixed at 45°). The 6G is the classic "all-position" pipe test.</li>
</ul>
<p>You'll see these designations in Welding Procedure Specifications (WPS) and on filler-metal data sheets, which call out positional capability.</p>`,
 terms: [["Joint","The configuration in which members meet (butt, tee, corner, lap, edge)."],["Fillet weld","A weld joining two pieces that are perpendicular or at an angle."],["Groove weld","A weld made in a groove between workpieces or workpiece edges."],["1G/2G/3G/4G","Groove welds in flat, horizontal, vertical, and overhead positions."],["6G","A pipe test with the axis fixed at 45°, covering all positions."],["WPS","Welding Procedure Specification: written, qualified instructions for making a weld."]],
 quiz: [
  {q:"What does \"3G\" mean?", o:["Third groove pass","Vertical groove weld","Overhead fillet weld","Horizontal groove weld"], a:1, why:"3 = vertical, G = groove."},
  {q:"A T-shaped joint welded in the corner is typically a:", o:["Groove weld on a butt joint","Fillet weld on a tee joint","Plug weld","Edge weld"], a:1, why:"Tee joints are commonly fillet welded."},
  {q:"Why is 2G harder than 2F, according to Miller?", o:["2G uses more amperage","2F has a bottom shelf that supports the puddle","2G is always overhead","2F needs no filler"], a:1, why:"The fillet's bottom plate supports the puddle. A horizontal groove weld has no shelf."},
  {q:"Which position is generally easiest?", o:["1 (flat)","2 (horizontal)","3 (vertical)","4 (overhead)"], a:0, why:"Gravity holds the puddle in the joint."},
  {q:"Which pipe test position has the axis fixed at 45°?", o:["1G","2G","5G","6G"], a:3, why:"6G is inclined and fixed, so it covers all positions."}
 ],
 sources: ["millerPos","wJoint"]
});
