window.LESSONS.push({
 id: "electrodes-filler", module: "m5", title: "5.1 Electrode & Filler Classification (AWS A5.x)", minutes: 25,
 objectives: ["Decode an AWS A5.1 stick electrode number such as E7018.","Recognize optional designators (-1, H4, R).","Map common filler specs to processes (A5.1, A5.18, A5.20, A5.9, A5.10)."],
 body: `
<p>AWS publishes filler-metal specifications in the <strong>A5</strong> series. Carbon-steel stick electrodes fall under <strong>AWS A5.1</strong>. Here's how to read one, per Lincoln Electric and Hobart:</p>
<svg class="diagram" viewBox="0 0 440 130" role="img" aria-labelledby="te"><title id="te">E7018 decoded: E electrode, 70 is 70 ksi minimum tensile, 1 is all positions, last two digits 18 give coating and current</title>
 <text x="60" y="60" font-size="44" font-family="monospace">E</text><text x="110" y="60" font-size="44" font-family="monospace">70</text><text x="200" y="60" font-size="44" font-family="monospace">1</text><text x="250" y="60" font-size="44" font-family="monospace">8</text>
 <text x="72" y="95" text-anchor="middle" font-size="11">Electrode</text>
 <text x="137" y="95" text-anchor="middle" font-size="11">70 ksi min</text><text x="137" y="110" text-anchor="middle" font-size="11">tensile</text>
 <text x="212" y="95" text-anchor="middle" font-size="11">All</text><text x="212" y="110" text-anchor="middle" font-size="11">positions</text>
 <text x="250" y="95" font-size="11">coating + current</text><text x="250" y="110" font-size="11">(last 2 digits together)</text>
</svg>
<ul>
 <li><strong>E:</strong> arc-welding electrode.</li>
 <li><strong>First two digits</strong> (three for 100+ ksi): minimum tensile strength. E6010 = 60,000 psi, and E10018 = 100,000 psi.</li>
 <li><strong>Next-to-last digit:</strong> 1 = all positions, 2 = flat and horizontal only, 4 = flat, horizontal, vertical-down and overhead.</li>
 <li><strong>Last two digits together:</strong> coating type and current.</li>
</ul>
<table><thead><tr><th>Electrode</th><th>Coating / current (Lincoln chart)</th><th>Personality</th></tr></thead><tbody>
<tr><td>E6010</td><td>High-cellulose sodium, DC+</td><td>Most penetrating arc. Pipe roots and dirty steel, and hard for beginners.</td></tr>
<tr><td>E6011</td><td>High-cellulose potassium, AC/DC</td><td>Deep penetrating arc on AC. Repair and maintenance work.</td></tr>
<tr><td>E6013</td><td>High-titania potassium, AC/DC+</td><td>Soft arc on clean sheet metal, easy-to-clean slag.</td></tr>
<tr><td>E7018</td><td>Low-hydrogen potassium + iron powder</td><td>Used where quality matters. Smooth, with better impact properties. Keep it dry.</td></tr>
<tr><td>E7024</td><td>Iron powder, titania</td><td>Large downhand welds on thick plate.</td></tr>
</tbody></table>
<h3>Optional designators</h3>
<ul>
 <li><strong>-1</strong> (E7018-1): improved low-temperature impact toughness. Hobart cites 20 ft·lb at −50 °F, vs. −20 °F for standard E7018.</li>
 <li><strong>H4 / H8</strong>: maximum diffusible hydrogen (H4 = 4 mL or less per 100 g of weld metal).</li>
 <li><strong>R</strong>: moisture-resistant coating that passed a test exposure at 80 °F and 80% relative humidity for nine hours.</li>
 <li>Alloy suffixes like <strong>-B2</strong> (E8018-B2) give the chemical composition of the deposit.</li>
</ul>
<h3>Other common specs</h3>
<p>A5.18 covers carbon-steel GMAW/GTAW wire and rod (e.g., <strong>ER70S-6</strong>, where "ER" = electrode or rod and "S" = solid). A5.20 covers carbon-steel flux-cored wire (e.g., E71T-1, E71T-11). A5.9 covers stainless filler (e.g., ER308L), and A5.10 covers aluminum (e.g., ER4043, ER5356). Always confirm the classification against the current spec or the manufacturer's data sheet.</p>`,
 terms: [["AWS A5.1","Specification for carbon-steel electrodes for shielded metal arc welding."],["ksi","Thousands of pounds per square inch (70 ksi = 70,000 psi)."],["Low-hydrogen electrode","An electrode such as EXX18 with a low-moisture coating, used to reduce hydrogen cracking."],["ER70S-6","A common carbon-steel solid wire/rod for MIG and TIG (A5.18)."],["Rod oven","A heated storage oven that keeps low-hydrogen electrodes dry."]],
 quiz: [
  {q:"In E6013, what does \"60\" mean?", o:["60 amps","60 ksi minimum tensile strength","1/60 inch diameter","60% iron powder"], a:1, why:"The first two digits give minimum tensile strength in ksi."},
  {q:"A next-to-last digit of \"2\" means the electrode is for:", o:["All positions","Flat and horizontal only","Vertical-down only","Overhead only"], a:1, why:"Per Lincoln: 1 = all, 2 = flat & horizontal, 4 = flat, horizontal, vertical-down and overhead."},
  {q:"Which rod does Lincoln describe as having the most penetrating arc, loved by pipeline welders?", o:["E6010","E6013","E7024","E7018"], a:0, why:"E6010 runs on DC only, digs through rust, oil and paint, and is the classic pipe-root rod."},
  {q:"\"H4\" on an electrode label indicates:", o:["4 hours max out of the oven","Diffusible hydrogen ≤ 4 mL/100 g","Hardness 4","4 positions"], a:1, why:"H-designators cap diffusible hydrogen."},
  {q:"ER70S-6 is used with which processes?", o:["SMAW only","GMAW and GTAW","Oxy-fuel only","FCAW-S"], a:1, why:"ER = electrode or rod, S = solid. It is used as MIG wire and TIG rod (AWS A5.18)."}
 ],
 sources: ["lincolnAWS","hobart7018","hobartClass"]
});
