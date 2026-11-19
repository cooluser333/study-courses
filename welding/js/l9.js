window.LESSONS.push({
 id: "weld-symbols", module: "m4", title: "4.2 Reading Weld Symbols (AWS A2.4)", minutes: 25,
 objectives: ["Name every element of a welding symbol.","Apply the arrow-side / other-side rule.","Read common supplementary symbols (weld-all-around, field weld)."],
 body: `
<p>Engineering and fabrication drawings use a shorthand defined in <strong>ANSI/AWS A2.4, <em>Symbols for Welding and Nondestructive Testing</em></strong>. Every welder must be able to read it.</p>
<svg class="diagram" viewBox="0 0 470 210" role="img" aria-labelledby="tw"><title id="tw">Anatomy of a welding symbol: arrow, reference line, fillet symbol below the line for arrow side, size on left, length and pitch on right, tail, field flag and weld-all-around circle</title>
 <defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
 <line x1="120" y1="100" x2="360" y2="100" stroke="currentColor" stroke-width="2"/>
 <line x1="120" y1="100" x2="60" y2="170" stroke="currentColor" stroke-width="2" marker-end="url(#ar2)"/>
 <polygon points="210,100 210,125 235,100" fill="none" stroke="currentColor" stroke-width="2"/>
 <text x="203" y="120" font-size="13" text-anchor="end">1/4</text>
 <text x="245" y="120" font-size="13">2-6</text>
 <path d="M360 100 L385 80 M360 100 L385 120" stroke="currentColor" stroke-width="2"/>
 <text x="390" y="104" font-size="12">GMAW</text>
 <circle cx="120" cy="100" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
 <line x1="120" y1="92" x2="120" y2="62" stroke="currentColor" stroke-width="2"/><polygon points="120,62 145,69 120,77" class="hot"/>
 <text x="150" y="62" font-size="11">field-weld flag</text>
 <text x="10" y="85" font-size="11">weld-all-around</text>
 <text x="20" y="195" font-size="11">arrow → joint</text>
 <text x="262" y="92" font-size="11">reference line</text>
 <text x="350" y="140" font-size="11">tail (process/spec)</text>
 <text x="150" y="155" font-size="11">fillet below line = ARROW SIDE</text>
</svg>
<h3>The elements</h3>
<ul>
 <li><strong>Reference line:</strong> the horizontal anchor. The instructions hang on it.</li>
 <li><strong>Arrow:</strong> connects the reference line to the joint. The side it points to is the <strong>arrow side</strong>.</li>
 <li><strong>Weld symbol</strong> (fillet triangle, V-groove, bevel, square, plug, etc.): <strong>below</strong> the line = arrow side; <strong>above</strong> the line = other side; both = weld both sides. Miller stresses that this rule applies regardless of the arrow's direction.</li>
 <li><strong>Size</strong> goes to the left of the symbol (e.g., a 1/4" fillet leg). <strong>Length and pitch</strong> go to the right (e.g., "2-6" means 2-inch welds on 6-inch centers, an intermittent weld).</li>
 <li><strong>Tail:</strong> optional. It carries extra information such as process, filler, or a spec reference, and is omitted when not needed.</li>
 <li><strong>Supplementary symbols:</strong> a circle at the arrow/reference junction means <strong>weld-all-around</strong>. A flag means a <strong>field weld</strong> (made on site, not in the shop). Contour and finish symbols also exist (flush, convex, G = grind).</li>
</ul>
<div class="callout">Common rookie mistake: welding the wrong side because the arrow points "up." Ignore the arrow's direction and look at whether the symbol sits <em>below</em> (arrow side) or <em>above</em> (other side) the reference line.</div>`,
 terms: [["Reference line","The horizontal line every welding symbol is built on."],["Arrow side","The side of the joint the arrow points to. Its symbols go below the reference line."],["Other side","The opposite side of the joint. Its symbols go above the line."],["Weld-all-around","A circle at the arrow/reference junction: weld completely around the joint."],["Field weld","A flag symbol meaning the weld is made at the installation site."],["Pitch","Center-to-center spacing of intermittent welds."]],
 quiz: [
  {q:"A fillet symbol drawn BELOW the reference line means:", o:["Weld the other side","Weld the arrow side","Weld both sides","Field weld"], a:1, why:"Below = arrow side, regardless of arrow direction."},
  {q:"A circle at the junction of arrow and reference line means:", o:["Spot weld","Weld all around","Grind flush","Inspect by X-ray"], a:1, why:"That is the weld-all-around supplementary symbol."},
  {q:"What does a flag on the symbol indicate?", o:["Dangerous weld","Field weld","Use flux-core","Other side"], a:1, why:"The flag means the weld is made in the field, not the shop."},
  {q:"\"2-6\" to the right of a fillet symbol means:", o:["2 passes, 6 inches long","2-inch welds on 6-inch centers","Size 2/6 inch","Use 2 electrodes and 6 amps"], a:1, why:"Length-pitch notation for intermittent welds."},
  {q:"Which AWS standard defines welding symbols?", o:["D1.1","A5.1","A2.4","Z49.1"], a:2, why:"A2.4 covers symbols for welding and nondestructive testing."}
 ],
 sources: ["millerSym"]
});
