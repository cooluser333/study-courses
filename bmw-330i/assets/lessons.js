window.SOURCES={
press:{title:"2018 BMW 3 Series Sedan — Technical Specifications",url:"https://www.press.bmwgroup.com/usa/article/attachment/T0216443EN_US/391756",pub:"BMW Group PressClub USA"},
carfolio:{title:"2018 BMW 330i Automatic F30 specifications",url:"https://www.carfolio.com/bmw-330i-automatic-538956",pub:"Carfolio (secondary)"},
feg:{title:"2018 BMW 330i",url:"https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=39132",pub:"US DOE / EPA fueleconomy.gov"},
maint:{title:"2018 BMW Maintenance booklet (PDF)",url:"https://www.bmwusa.com/content/dam/bmw/marketUS/common/warranty-books/2018/2018-BMW-Maintenance.pdf",pub:"BMW of North America"},
oilinfo:{title:"Engine Oil Info for BMW",url:"https://www.bimmerworld.com/BMW-Engine-Oil/",pub:"BimmerWorld",flag:"search summary only — confirm in owner's manual"},
r465:{title:"NHTSA recall 18V-465 (crankshaft sensor) — BMW dealer communication (PDF)",url:"https://static.nhtsa.gov/odi/rcl/2018/RCMN-18V465-1048.pdf",pub:"NHTSA"},
r465j:{title:"Recall 18V465000 summary for 2018 330i",url:"https://auto-recalls.justia.com/bmw/330i/2018/18v465000/index.html",pub:"Justia (mirrors NHTSA data)"},
vin:{title:"NHTSA Recalls look-up by VIN",url:"https://www.nhtsa.gov/recalls",pub:"NHTSA"},
tsb:{title:"BMW SI 11 10 25 — Coolant leaking from oil filter housing (PDF)",url:"https://static.nhtsa.gov/odi/tsbs/2026/MC-11026946-0001.pdf",pub:"NHTSA TSB archive",flag:"search summary only — open PDF to confirm your VIN range"},
ofh:{title:"B48 oil filter housing + water pump replacement (DIY tips)",url:"https://f30.bimmerpost.com/forums/showthread.php?t=2061712",pub:"F30Post / Bimmerpost forum",flag:"owner reports, not official"},
bench:{title:"BMW coolant leaks by engine",url:"https://bimmerbench.com/guides/bmw-coolant-leaks-by-engine/",pub:"BimmerBench",flag:"secondary"},
bcode:{title:"BimmerCode — F30 supported vehicle page",url:"https://bimmercode.app/vehicles/bmw/3-series-m3/f30/",pub:"BimmerCode"},
bcfaq:{title:"BimmerCode FAQ (backups, Expert Mode)",url:"https://bimmercode.app/faq/",pub:"BimmerCode"},
blink:{title:"BimmerLink",url:"https://bimmerlink.app/",pub:"BimmerLink"},
ftc:{title:"FTC staff warns it is illegal to condition warranty coverage on specified parts or services (2018)",url:"https://www.ftc.gov/news-events/news/press-releases/2018/04/ftc-staff-warns-companies-it-illegal-condition-warranty-coverage-use-specified-parts-or-services",pub:"Federal Trade Commission"},
realoem:{title:"RealOEM BMW parts catalog",url:"https://www.realoem.com/",pub:"RealOEM",flag:"not fetched — widely used reference"},
fcp:{title:"FCP Euro — BMW parts (lifetime replacement policy)",url:"https://www.fcpeuro.com/",pub:"FCP Euro",flag:"not fetched — check current policy on site"},
pelican:{title:"Pelican Parts — BMW tech articles",url:"https://www.pelicanparts.com/",pub:"Pelican Parts",flag:"not fetched"},
nhtsaJack:{title:"NHTSA — vehicle safety/recall information",url:"https://www.nhtsa.gov/",pub:"NHTSA"},
ista:{title:"BMW ISTA / ESYS dealer tools",url:"https://www.bmwtechinfo.com/",pub:"BMW technical information (paid subscription)",flag:"paywalled — not reviewed"}};
const svgEngine=`<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="#e6edf3">
<rect x="20" y="100" width="90" height="50" rx="6" fill="#1f6feb55" stroke="#58a6ff"/><text x="38" y="130">Air filter</text>
<rect x="150" y="90" width="100" height="70" rx="35" fill="#d2992255" stroke="#d29922"/><text x="172" y="122">Turbo</text><text x="158" y="140" font-size="11">(exhaust-driven)</text>
<rect x="290" y="100" width="100" height="50" rx="6" fill="#1f6feb55" stroke="#58a6ff"/><text x="300" y="130">Intercooler</text>
<rect x="430" y="70" width="180" height="110" rx="8" fill="#30363d" stroke="#8b949e"/><text x="450" y="100">B46 2.0L inline-4</text><text x="450" y="122" font-size="11">direct injection, 11:1</text><text x="450" y="140" font-size="11">248 hp / 258 lb-ft</text>
<path d="M110 125h40M250 125h40M390 125h40" stroke="#58a6ff" stroke-width="3" marker-end="url(#a)"/>
<path d="M520 180v50H200v-70" stroke="#f85149" stroke-width="3" fill="none" marker-end="url(#r)"/><text x="300" y="248" fill="#f85149">hot exhaust spins the turbine → compressor pushes air in</text>
<defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#58a6ff"/></marker><marker id="r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#f85149"/></marker></defs></svg>`;
const svgDrive=`<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="#e6edf3">
<rect x="20" y="70" width="110" height="60" rx="6" fill="#30363d" stroke="#8b949e"/><text x="45" y="105">Engine</text>
<rect x="150" y="70" width="130" height="60" rx="6" fill="#1f6feb55" stroke="#58a6ff"/><text x="160" y="98">ZF 8HP50</text><text x="160" y="116" font-size="11">8-speed auto</text>
<line x1="280" y1="100" x2="470" y2="100" stroke="#d29922" stroke-width="6"/><text x="320" y="90">driveshaft</text>
<circle cx="500" cy="100" r="30" fill="#d2992255" stroke="#d29922"/><text x="478" y="105" font-size="11">diff</text>
<line x1="500" y1="70" x2="500" y2="20" stroke="#8b949e" stroke-width="4"/><line x1="500" y1="130" x2="500" y2="180" stroke="#8b949e" stroke-width="4"/>
<rect x="470" y="5" width="60" height="22" rx="4" fill="#3fb95055" stroke="#3fb950"/><rect x="470" y="173" width="60" height="22" rx="4" fill="#3fb95055" stroke="#3fb950"/><text x="545" y="20">rear wheels</text><text x="545" y="190">(RWD)</text></svg>`;
const svgCool=`<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="13" fill="#e6edf3">
<rect x="20" y="60" width="120" height="100" rx="6" fill="#1f6feb55" stroke="#58a6ff"/><text x="45" y="115">Radiator</text>
<rect x="220" y="80" width="130" height="60" rx="6" fill="#30363d" stroke="#8b949e"/><text x="228" y="108">Electric water</text><text x="250" y="126">pump</text>
<rect x="430" y="40" width="190" height="140" rx="8" fill="#30363d" stroke="#8b949e"/><text x="470" y="80">Engine block</text>
<rect x="450" y="120" width="150" height="40" rx="4" fill="#f8514944" stroke="#f85149"/><text x="458" y="145" font-size="12">Oil filter housing / cooler</text>
<path d="M140 110h80M350 110h80" stroke="#58a6ff" stroke-width="3"/><path d="M525 40V15H80v45" stroke="#f85149" stroke-width="3" fill="none"/><text x="240" y="12" fill="#f85149" font-size="11">hot coolant returns</text>
<text x="430" y="205" fill="#f85149" font-size="12">Red = known leak hotspot on B46/B48 (see Common Problems)</text></svg>`;
window.LESSONS=[
{id:"start",n:1,title:"Meet your car",obj:["Confirm exactly which car you own","Know the core specs from BMW's own data","Learn how to check your VIN"],
body:`<p>A 2018 BMW 330i sedan belongs to the <b>F30</b> generation of the 3 Series (2012–2019). The next generation, <b>G20</b>, started with model year 2019 in the US, so a 2018 is an F30 (late "LCI" facelift). BMW's official 2018 spec sheet lists the engine code <b>B46B20O0</b> — the US-market cousin of the B48 — and the <b>8HP50</b> automatic.</p>
<table><tr><th>Spec (2018 330i, automatic, RWD)</th><th>Value</th></tr>
<tr><td>Engine</td><td>B46B20O0, 2.0 L (1,998 cc) turbo inline-4, 4 valves/cyl</td></tr><tr><td>Bore × stroke / compression</td><td>82 × 94.6 mm / 11.0:1</td></tr>
<tr><td>Power / torque</td><td>248 hp @ 5,200 rpm / 258 lb-ft @ 1,450–4,800 rpm</td></tr><tr><td>Transmission</td><td>ZF 8HP50 8-speed automatic (6-speed manual was optional)</td></tr>
<tr><td>Fuel</td><td>AKI 89 minimum, AKI 91 recommended</td></tr><tr><td>Engine oil fill</td><td>5.25 L</td></tr><tr><td>Fuel tank</td><td>15.8 gal</td></tr>
<tr><td>Curb weight</td><td>3,541 lb (auto)</td></tr><tr><td>Stock tires (base)</td><td>225/50 R17 94V all-season</td></tr><tr><td>EPA mpg</td><td>23 city / 34 hwy / 27 comb. (Carfolio, from EPA)</td></tr></table>
<div class="card warn"><b>Do this:</b> Find your 17-digit VIN (driver-side windshield base or door jamb). Your VIN tells a dealer or decoder your exact build, options, and open recalls. Note: if your car is an xDrive (AWD), some drivetrain details differ — you said RWD.</div>`,
quiz:[{q:"What BMW generation is a 2018 330i?",a:["E90","F30","G20"],c:1,ex:"F30 ran through MY2018 in the US; G20 began MY2019."},{q:"Which engine code does BMW list?",a:["N20","B58","B46B20O0"],c:2,ex:"BMW's spec sheet lists B46B20O0 (B58 is the 340i's six)."},{q:"Minimum fuel octane (AKI)?",a:["87","89","93"],c:1,ex:"89 minimum, 91 recommended."}],src:["press","carfolio","feg"]},
{id:"engine",n:2,title:"How the engine & turbo work",obj:["Understand the four-stroke cycle","See how a turbo makes more power","Know why oil quality matters on a turbo engine"],
body:`<p>Every cylinder repeats four strokes: <b>intake</b> (air in), <b>compression</b>, <b>power</b> (fuel ignites, pushes piston), <b>exhaust</b>. Your B46 sprays fuel straight into the cylinder (direct injection) and uses one turbocharger ("TwinPower" is BMW branding for twin-scroll turbo + Valvetronic/VANOS, not two turbos).</p>${svgEngine}
<p>The turbo is spun by exhaust gas at very high speed and is lubricated by engine oil — that's one reason to use BMW-approved oil and not skip changes. After hard driving, a minute of gentle driving lets things cool down.</p>
<p>Peak torque arriving at just 1,450 rpm is why the car feels strong pulling away even without revving.</p>
<div class="card warn"><b>Flag:</b> The "twin-scroll" detail is widely documented by BMW press materials but was not on the spec sheet fetched for this course.</div>`,
quiz:[{q:"What spins a turbocharger?",a:["The battery","Exhaust gas","The alternator belt"],c:1,ex:"Exhaust flow drives the turbine, which drives the compressor."},{q:"What lubricates the turbo?",a:["Coolant","Engine oil","Transmission fluid"],c:1,ex:"Engine oil — so oil quality and change intervals matter."}],src:["press"]},
{id:"drivetrain",n:3,title:"Transmission & RWD drivetrain",obj:["Trace power from engine to rear wheels","Know what BMW says about transmission fluid","Drive smart in Florida rain"],
body:`${svgDrive}<p>Power flows: engine → <b>ZF 8HP50</b> automatic → driveshaft → rear differential → rear wheels. Rear-wheel drive gives balanced handling (≈50/50 weight split per BMW) but can step out in heavy rain if you give lots of throttle in a turn.</p>
<p>BMW's 2018 maintenance booklet lists automatic transmissions as <b>"factory-filled with long-term rated fluid"</b> — replacement only needed when repairs are done. Many enthusiasts change ZF fluid anyway around high mileage; that's a community opinion, not BMW policy.</p>
<table><tr><th>Gear</th><td>1st 5.000</td><td>2nd 3.200</td><td>3rd 2.143</td><td>4th 1.720</td><td>5th 1.314</td><td>6th 1.000</td><td>7th 0.822</td><td>8th 0.640</td><td>R 3.456</td></tr></table>`,
quiz:[{q:"Which wheels are driven on your 330i?",a:["Front","Rear","All four"],c:1,ex:"RWD (unless xDrive)."},{q:"Per BMW, auto trans fluid is…",a:["Changed every oil service","Long-term rated","Never present"],c:1,ex:"BMW calls it long-term rated."}],src:["press","maint"]},
{id:"cooling",n:4,title:"Cooling, electrical & iDrive",obj:["Know the cooling loop","Understand battery registration","Use iDrive to see service status"],
body:`${svgCool}<p><b>Cooling:</b> coolant runs from the radiator through the engine and oil cooler. BMW lists engine coolant as long-term rated. Check the level only with the engine <b>cold</b> — never open a hot system.</p>
<p><b>Electrical:</b> the battery sits in the trunk on F30s. BMWs track battery age/type; when replacing it, the new battery is usually "registered" to the car (tools like BimmerLink advertise this function) so charging is managed correctly.</p>
<p><b>iDrive service view:</b> per BMW's booklet: Menu → "Vehicle Info" → "Vehicle status" → "Service required". This shows Condition Based Service (CBS) items like oil, brakes, and brake fluid.</p>
<div class="card warn"><b>Flag:</b> Trunk-mounted battery is common knowledge for the F30 but wasn't in a source fetched here — confirm in your owner's manual.</div>`,
quiz:[{q:"When should you open the coolant cap?",a:["Engine hot","Engine cold","Any time"],c:1,ex:"Hot coolant is pressurized and can burn you."},{q:"Where does iDrive show service items?",a:["Vehicle Info → Vehicle status","Media → Radio","Navigation"],c:0,ex:"Straight from BMW's 2018 maintenance booklet."}],src:["maint","blink"]},
{id:"maintenance",n:5,title:"Maintenance schedule & fluids",obj:["Read BMW's Condition Based Service","Know the official intervals","Know which fluids to buy"],
body:`<p>Your car uses <b>Condition Based Service (CBS)</b>: it calculates when oil, brakes, and brake fluid are due and shows it on the dash/iDrive. Other jobs are tied to the oil-service count. From BMW's 2018 booklet (2/3/4 Series non-M gasoline):</p>
<table><tr><th>Item</th><th>BMW interval</th></tr><tr><td>Engine oil + filter</td><td>When CBS says (BMW shows ~10,000 mi example)</td></tr>
<tr><td>Cabin (ventilation) microfilter</td><td>Every 2nd oil service (~20,000 mi)</td></tr><tr><td>Engine air filter (330i)</td><td>Every 4th oil service (~40,000 mi), sooner if dusty</td></tr>
<tr><td>Spark plugs</td><td>Every 6th oil service (~60,000 mi)</td></tr><tr><td>Brake fluid</td><td>When CBS says (date-based) <span class="tag">community: ~every 2 yrs</span></td></tr>
<tr><td>Brake pads/discs</td><td>When CBS wear sensors say</td></tr><tr><td>Coolant, auto trans fluid</td><td>"Long-term rated" — only with repairs</td></tr></table>
<h3>Fluids</h3><ul><li><b>Oil:</b> BMW-approved full synthetic (BMW Longlife spec). Capacity 5.25 L per BMW spec sheet. <span class="tag">Exact spec (LL-01 vs LL-01 FE, 0W-30/0W-20) — check your owner's manual & oil cap</span></li>
<li><b>Coolant:</b> BMW blue antifreeze mixed 50/50 with distilled water (community standard). <span class="tag">verify</span></li><li><b>Brake fluid:</b> DOT 4 (low-viscosity type per BMW). <span class="tag">verify</span></li></ul>
<div class="card"><b>Florida tip:</b> heat and short trips are hard on oil. Many owners change oil around 5,000–7,500 mi instead of waiting for CBS. That's an owner choice; BMW's official interval is CBS.</div>
<div class="card"><b>Weekly-ish checks (BMW list):</b> washer fluid, oil level (electronic, via iDrive — no dipstick), coolant level, brake fluid level, tire pressure & wear.</div>`,
quiz:[{q:"Spark plugs per BMW?",a:["Every oil change","Every 6th oil service (~60k)","Never"],c:1,ex:"BMW 2018 booklet."},{q:"How do you check oil level on this car?",a:["Dipstick","iDrive electronic oil level","You can't"],c:1,ex:"No dipstick on modern BMWs; use iDrive."},{q:"Engine air filter on a 330i?",a:["~20k","~40k","~100k"],c:1,ex:"Every 4th oil service."}],src:["maint","press","oilinfo"]},
{id:"problems",n:6,title:"Common problems & recalls",obj:["Know the 2018 330i recall","Spot coolant/oil leaks early","Know what's documented vs. forum lore"],
body:`<div class="card danger"><b>Recall 18V-465 (crankshaft sensor).</b> Certain 2018 BMWs, including the 330i, built roughly May 16 – June 2018 may have a crankshaft sensor with bad firmware → rough running, reduced power, or a <b>stall</b>. Fix: free sensor replacement at a BMW dealer. <b>Check your VIN at nhtsa.gov/recalls.</b> Recall support: BMW 1-800-525-7417.</div>
<h3>Known issues (owner-reported)</h3><table><tr><th>Issue</th><th>Signs</th><th>Evidence level</th></tr>
<tr><td>Oil filter housing / oil cooler gasket & coolant bushing leak</td><td>Low coolant warning, sweet smell, crust around the housing, oil mixed with coolant residue</td><td>BMW service info (SI 11 10 25) + many forum threads</td></tr>
<tr><td>Electric water pump failure</td><td>Overheat warning, reduced power</td><td>Forum/secondary; diagnose before replacing</td></tr>
<tr><td>Valve cover / gasket seep</td><td>Burning oil smell, oil on exhaust side</td><td><span class="tag">forum lore — not verified here</span></td></tr></table>
<p>Rule: when a warning pops up, <b>photograph it</b>, read codes (next lesson), and look for drips under the car. Coolant warnings = stop driving and let it cool.</p>`,
quiz:[{q:"What can recall 18V-465 cause?",a:["Radio failure","Engine stall / reduced power","Flat tire"],c:1,ex:"Faulty crankshaft sensor firmware."},{q:"Where do you check open recalls?",a:["NHTSA VIN lookup","Facebook","Car wash"],c:0,ex:"nhtsa.gov/recalls with your VIN."},{q:"A coolant-low warning appears. Best first move?",a:["Open cap immediately","Stop, cool down, inspect","Ignore"],c:1,ex:"Hot coolant is dangerous; overheating ruins engines."}],src:["r465","r465j","vin","tsb","ofh","bench"]},
{id:"diagnostics",n:7,title:"DIY diagnostics & BMW tools",obj:["Read codes with OBD2","Know the BMW-specific tools and their risks","Understand warranty law"],
body:`<p>The OBD2 port is under the dash on the driver's side. A generic $20 reader shows engine codes (P-codes). BMW-specific apps read every module (airbags, transmission, body):</p>
<table><tr><th>Tool</th><th>What it does</th><th>Risk</th></tr>
<tr><td>BimmerLink (app + adapter)</td><td>All-module codes, live data, battery registration, service resets</td><td>Low (read-only mostly)</td></tr>
<tr><td>BimmerCode (app + adapter)</td><td>Coding comfort/lighting/display options; F30 supported</td><td>Medium — keeps automatic backups; "Expert Mode" unsupported and can need a reflash</td></tr>
<tr><td>ISTA / ESYS</td><td>Dealer diagnostics & coding</td><td>High — dealer software; "leaked" copies violate BMW licensing <span class="tag">paywalled</span></td></tr>
<tr><td>ProTool</td><td>Third-party BMW diagnostic app</td><td><span class="tag">not verified for this course</span></td></tr></table>
<div class="card warn"><b>Warranty law:</b> under federal law (Magnuson-Moss, enforced by the FTC), a maker can't void your warranty just because you used aftermarket parts or someone else did the work. But if a mod <i>causes</i> a failure, that repair can be denied. A 2018 car is likely out of factory warranty anyway; CPO or extended warranties have their own rules — read them.</div>
<p>Use only adapters each app lists as supported (e.g., OBDLink models), keep a battery charger on the car during coding, and never code while the battery is weak.</p>`,
quiz:[{q:"Can BMW void your whole warranty just for an aftermarket air filter?",a:["Yes","No — only if it caused the failure","Only in Florida"],c:1,ex:"FTC enforces Magnuson-Moss."},{q:"Safest first tool for a beginner?",a:["Leaked ISTA","BimmerLink / OBD2 reader","BimmerCode Expert Mode"],c:1,ex:"Read before you write."}],src:["blink","bcode","bcfaq","ftc","ista"]},
{id:"mods",n:8,title:"Safe beginner mods & coding",obj:["Pick mods that won't hurt reliability","Code safely","Know what to avoid"],
body:`<h3>Low-risk, high-reward</h3><ul><li>Good tires (biggest upgrade for a RWD car in Florida rain)</li><li>Fresh brake pads/fluid</li><li>LED interior bulbs, floor mats, phone mount</li><li>Window tint — check Florida's legal VLT limits first</li></ul>
<h3>Popular coding (BimmerCode, varies by car's modules)</h3><ul><li>Disable auto start-stop default</li><li>Remember last driving mode</li><li>Needle sweep on startup</li><li>Video in motion — <b>don't</b>; distracted driving is dangerous</li></ul>
<div class="card danger"><b>Avoid as a beginner:</b> engine tunes (JB4, flash tunes) — they raise stress on the engine/transmission, can affect emissions compliance and warranty claims. Don't disable safety systems (airbags, seatbelt warnings, ABS).</div>`,
quiz:[{q:"Best first 'mod' for a RWD car in rain?",a:["Louder exhaust","Quality tires","Turbo upgrade"],c:1,ex:"Grip is everything."},{q:"Before coding you should…",a:["Back up & connect a battery charger","Unplug the battery","Drive the car"],c:0,ex:"Voltage drops during coding can brick modules."}],src:["bcode","bcfaq","ftc"]},
{id:"tips",n:9,title:"Tips & tricks",obj:["Use hidden features","Save money","Drive the car well"],
body:`<ul><li><b>Service status</b> lives in iDrive → Vehicle Info → Vehicle status.</li><li><b>Fuel:</b> 91 octane recommended; 89 is BMW's stated minimum.</li><li><b>Warm-up:</b> drive gently until oil is warm; don't redline cold.</li>
<li><b>Rain:</b> Comfort or Eco Pro mode softens throttle — handy on wet I-4.</li><li><b>Keep records</b> (receipts, mileage) — BMW's booklet recommends it, and it raises resale value.</li>
<li><b>Key fob:</b> service data is stored in the key; bring your most-used key to the dealer (BMW booklet).</li><li><b>Check recalls</b> every year with your VIN.</li></ul>`,
quiz:[{q:"What does BMW say is stored in the key?",a:["Music","Service data","GPS history"],c:1,ex:"Maintenance status lives in the remote key."}],src:["maint","press","vin"]},
{id:"parts",n:10,title:"Buying parts",obj:["Find the right part number","Know OEM vs OE vs aftermarket","Pick good vendors"],
body:`<p><b>Step 1:</b> look up the exact part on RealOEM using the last 7 of your VIN. <b>Step 2:</b> buy the part number, not a guess.</p>
<table><tr><th>Type</th><th>Meaning</th></tr><tr><td>Genuine BMW</td><td>BMW box, dealer price</td></tr><tr><td>OE / OEM supplier</td><td>Same maker (e.g., Mahle, Bosch, ZF) in their own box — often cheaper</td></tr><tr><td>Aftermarket</td><td>Other brands; quality varies</td></tr></table>
<p>Well-known BMW vendors: FCP Euro (known for a lifetime replacement policy — confirm terms), Pelican Parts (also has DIY articles), ECS Tuning, and local dealer parts counters (ask about online pricing).</p>`,
quiz:[{q:"What do you need to look up the exact part?",a:["Your VIN","Paint color","Tire size"],c:0,ex:"Last 7 of VIN on RealOEM."}],src:["realoem","fcp","pelican"]},
{id:"safety",n:11,title:"Safety in the garage",obj:["Lift a car safely","Handle fluids safely","Know when to stop"],
body:`<div class="card danger"><ul><li><b>Never get under a car held only by a jack.</b> Use rated jack stands on solid, level ground, and chock the wheels.</li><li>Use the car's marked jack points (owner's manual).</li><li>Let the engine cool before touching cooling or exhaust parts.</li><li>Safety glasses + gloves; used oil and coolant are toxic — coolant tastes sweet to pets.</li><li>Recycle used oil at an auto parts store.</li><li>Disconnect the battery for electrical work; airbags are off-limits for beginners.</li></ul></div>
<p>When in doubt — brakes, airbags, fuel lines, anything structural — take it to a pro. That's not weakness, that's the professional move.</p>`,
quiz:[{q:"Is a floor jack alone safe to work under?",a:["Yes","No — use jack stands","If quick"],c:1,ex:"Jacks fail. Stands save lives."}],src:["nhtsaJack"]}];
