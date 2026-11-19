window.LESSONS.push({
 id: "safety-shock-gas", module: "m1", title: "1.2 Electrical Shock & Compressed-Gas Safety", minutes: 20,
 objectives: [
  "Describe how the welding circuit can shock you and how to prevent it.",
  "State OSHA open-circuit-voltage limits for manual arc welding machines.",
  "Store, move and open gas cylinders correctly, including the acetylene 15 psig limit."
 ],
 body: `
<h3>The welding circuit</h3>
<p>Current flows from the machine through the <strong>electrode lead</strong>, across the arc, into the workpiece, and back through the <strong>work lead</strong> (often wrongly called the "ground"). If your body becomes a better path than the work lead, you are part of the circuit.</p>
<svg class="diagram" viewBox="0 0 420 175" role="img" aria-labelledby="tc"><title id="tc">Welding circuit: power source, electrode lead, arc, workpiece, work lead back to the source</title>
 <rect x="20" y="50" width="90" height="70" class="box"/><text x="65" y="90" text-anchor="middle" font-size="12">Power source</text>
 <path d="M110 65 H260 V95" fill="none" stroke="currentColor" stroke-width="2"/><text x="185" y="58" text-anchor="middle" font-size="11">electrode lead</text>
 <line x1="260" y1="95" x2="260" y2="112" class="hotline"/>
 <rect x="200" y="115" width="180" height="18" class="metal"/><text x="290" y="148" text-anchor="middle" font-size="11">workpiece</text>
 <path d="M380 124 H400 V160 H65 V120" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 3"/><text x="230" y="172" text-anchor="middle" font-size="11">work lead (return)</text>
 <text x="268" y="108" font-size="11">arc</text>
</svg>
<ul>
 <li>OSHA §1910.254(b)(3) caps open-circuit voltage for <strong>manual</strong> machines at <strong>80 V AC</strong> and <strong>100 V DC</strong>. That is plenty to hurt you when you're wet.</li>
 <li>Don't use cables with splices within 10 ft of the holder. Don't coil leads around your body. Replace cables with damaged insulation.</li>
 <li>Attach the work clamp firmly, close to the weld, on clean metal. Never use conduit, chains, cranes or hoists to carry welding current.</li>
 <li>When you stop for a break, remove the electrode from the holder and place the holder where it can't touch anything.</li>
 <li>Wet or high-humidity work requires special protection against shock (§1910.252(d)(1)(iii)). Stand on a dry insulating mat and wear dry gloves.</li>
</ul>
<h3>Compressed-gas cylinders</h3>
<p>A full high-pressure cylinder holds over 2,000 psi. A snapped-off valve can turn it into a missile. OSHA §1910.253 rules worth memorizing:</p>
<ul>
 <li>Secure cylinders upright. Keep valve caps on when not in use, and close valves before moving a cylinder.</li>
 <li>In storage, separate oxygen from fuel gas by <strong>20 ft</strong> or by a 5-ft-high non-combustible barrier rated ½ hour.</li>
 <li>Keep oil and grease away from oxygen equipment. Oxygen regulator gauges are marked "USE NO OIL."</li>
 <li>Crack the valve briefly to clear dirt before attaching a regulator, and <strong>stand to the side</strong> of the outlet.</li>
 <li><strong>Never use acetylene above 15 psig.</strong> Open an acetylene valve no more than 1½ turns, preferably ¾ turn, and leave the wrench on it.</li>
 <li>Never strike an arc on a cylinder, and never use one as a roller.</li>
</ul>`,
 terms: [["Work lead","The cable that returns current from the workpiece to the power source. It is often mis-called the ground."],["Open-circuit voltage (OCV)","Voltage between electrode and work when no arc is burning."],["DCEP / DCEN","Direct current electrode positive (reverse polarity) and electrode negative (straight polarity)."],["Regulator","A device that reduces high cylinder pressure to a steady working pressure."],["Flashback arrestor","A safety device that stops a flame from traveling back into the hose or regulator."]],
 quiz: [
  {q:"What is the maximum OSHA open-circuit voltage for a manual AC arc welding machine?", o:["50 V","80 V","100 V","120 V"], a:1, why:"§1910.254(b)(3)(i)(A): 80 volts for manual AC. DC manual is 100 V."},
  {q:"Acetylene must never be used at pressures above:", o:["5 psig","15 psig","30 psig","50 psig"], a:1, why:"§1910.253(a)(2): never above 15 psig gauge pressure."},
  {q:"Oxygen and fuel-gas cylinders in storage must be separated by:", o:["5 ft","10 ft","20 ft or a 5-ft fire-rated barrier","They may be stored together"], a:2, why:"§1910.253(b)(4)(iii)."},
  {q:"Before connecting a regulator, you crack the cylinder valve. Where do you stand?", o:["Directly in front","To the side of the outlet","Behind the cylinder with a hand on the valve","It doesn't matter"], a:1, why:"OSHA requires standing to one side of the outlet, never in front of it."},
  {q:"Which is an acceptable welding current return path?", o:["A building's electrical conduit","A crane chain","A properly attached work lead","A hoist cable"], a:2, why:"§1910.254(c)(2): conduit, chains, cranes and hoists must not carry welding current."}
 ],
 sources: ["osha254","osha253","osha252","awsSafety"]
});
