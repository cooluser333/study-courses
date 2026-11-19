window.LESSONS.push({
 id: "process-oxyfuel", module: "m2", title: "2.4 Oxy-Fuel Cutting & Welding", minutes: 20,
 objectives: ["Explain how oxy-fuel cutting chemically burns steel.","Identify neutral, carburizing and oxidizing flames.","Follow a safe light-up and shut-down sequence."],
 body: `
<p>An oxy-fuel torch mixes oxygen with a fuel gas (acetylene, propane, propylene, natural gas) to make a <strong>preheat flame</strong>. For <strong>cutting</strong>, the steel is preheated to its kindling temperature (bright cherry red). Then a lever releases a jet of pure oxygen that rapidly <strong>oxidizes</strong> the iron and blows the molten oxide out of the <em>kerf</em>. It works on carbon and low-alloy steel. Stainless steel and aluminum don't cut this way, because their oxides melt at a higher temperature than the metal. Plasma is used for those.</p>
<svg class="diagram" viewBox="0 0 420 140" role="img" aria-labelledby="tf"><title id="tf">Three flame types: carburizing with a long feather, neutral with a sharp inner cone, oxidizing with a short pointed cone</title>
 <g transform="translate(20,10)"><ellipse cx="60" cy="40" rx="55" ry="16" class="gas"/><ellipse cx="45" cy="40" rx="35" ry="8" class="flux"/><ellipse cx="20" cy="40" rx="15" ry="6" class="hot"/><text x="60" y="85" text-anchor="middle" font-size="12">Carburizing</text><text x="60" y="101" text-anchor="middle" font-size="10">excess fuel, feather</text></g>
 <g transform="translate(150,10)"><ellipse cx="60" cy="40" rx="55" ry="14" class="gas"/><ellipse cx="22" cy="40" rx="18" ry="6" class="hot"/><text x="60" y="85" text-anchor="middle" font-size="12">Neutral</text><text x="60" y="101" text-anchor="middle" font-size="10">balanced, sharp cone</text></g>
 <g transform="translate(280,10)"><ellipse cx="60" cy="40" rx="50" ry="12" class="gas"/><ellipse cx="15" cy="40" rx="11" ry="5" class="hot"/><text x="60" y="85" text-anchor="middle" font-size="12">Oxidizing</text><text x="60" y="101" text-anchor="middle" font-size="10">excess O₂, short cone</text></g>
</svg>
<h3>Safe operation</h3>
<ol>
 <li>Inspect hoses (green = oxygen, red = fuel in North America), fittings and flashback arrestors. Repair or replace hoses that are leaking, burned or worn (§1910.253(e)(5)(v)).</li>
 <li>Open cylinder valves slowly while standing to the side. Acetylene ≤ 1½ turns.</li>
 <li>Set regulators per the torch tip chart. Acetylene never above <strong>15 psig</strong>.</li>
 <li>Purge each line briefly. Open the fuel valve and light with a <strong>friction striker</strong>, then add oxygen until you get a neutral flame.</li>
 <li>Shut down per the manufacturer's instructions: close the torch valves, close the cylinder valves, bleed the lines, and back the regulator adjusting screws out.</li>
</ol>
<p>OSHA's guide shades are 3–4 for light cutting (under 1") and 4–5 for medium cutting (1–6").</p>`,
 terms: [["Kerf","The slot of material removed by a cut."],["Neutral flame","A balanced oxygen-fuel flame with a sharp inner cone, used for most welding and cutting."],["Carburizing flame","A flame with excess fuel, recognizable by its feather."],["Oxidizing flame","A flame with excess oxygen: a short, pointed cone, often with a hiss."],["Flashback","A flame burning back into the torch or hose, which is extremely dangerous."],["Preheat flame","The flame that heats steel to kindling temperature before the cutting oxygen is applied."]],
 quiz: [
  {q:"Oxy-fuel cutting works on carbon steel because:", o:["The flame melts steel fastest","Iron rapidly oxidizes in pure oxygen and the oxide blows out","Steel is non-magnetic when hot","Acetylene dissolves iron"], a:1, why:"Cutting is a chemical oxidation reaction, not simple melting."},
  {q:"Why can't you oxy-fuel cut stainless steel conventionally?", o:["It is too thin","Its chromium oxides melt at a higher temperature than the metal","It has no iron","It reflects heat"], a:1, why:"Refractory oxides block the reaction, so plasma is used instead."},
  {q:"A flame with a distinct feather around the inner cone is:", o:["Neutral","Oxidizing","Carburizing","Plasma"], a:2, why:"The feather means excess fuel."},
  {q:"What should you light an oxy-fuel torch with?", o:["Butane lighter","Match","Friction striker","The arc welder"], a:2, why:"A striker keeps your hand away from the flame."},
  {q:"OSHA's guide shade for light cutting under 1 inch is:", o:["2","3 or 4","10","14"], a:1, why:"From OSHA §1910.252(b)(2)(ii)(H)."}
 ],
 sources: ["osha253","osha252","wOxy"]
});
