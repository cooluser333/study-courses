window.LESSONS.push({
 id: "equipment-setup", module: "m5", title: "5.2 Equipment & Shop Setup", minutes: 20,
 objectives: ["Distinguish constant-current (CC) and constant-voltage (CV) power sources.","Explain duty cycle and input power requirements.","Build a safe starter setup checklist."],
 body: `
<h3>Power sources</h3>
<ul>
 <li><strong>Constant current (CC):</strong> used for SMAW and GTAW. You set amperage, and it stays roughly steady as your hand varies the arc length.</li>
 <li><strong>Constant voltage (CV):</strong> used for GMAW and FCAW. You set voltage and wire-feed speed, and current follows.</li>
 <li><strong>Inverters</strong> are light and efficient, and many are multi-process (stick/TIG/MIG). Older <strong>transformer</strong> machines are heavy but tough. <strong>Engine drives</strong> are generator-welders for field and farm work.</li>
</ul>
<h3>Duty cycle</h3>
<p>Duty cycle is the percentage of a <strong>10-minute</strong> period a machine can weld at a given output without overheating. "30% at 90 A" means 3 minutes welding, then 7 minutes cooling. Higher amps mean a lower duty cycle. Check the machine's rating plate.</p>
<h3>Input power</h3>
<p>Many small MIG/flux-core machines run on 120 V household circuits. Larger machines need 240 V on a circuit sized to the machine's rated input current. OSHA §1910.254(c) requires a disconnect at or near each machine, supply conductors rated at least for the machine's primary current, and installation per the electrical requirements of Subpart S. Have a licensed electrician install the circuit.</p>
<h3>Starter kit checklist</h3>
<ol>
 <li>Helmet with the right shade (auto-darkening helmets with variable shade are common), safety glasses, and a flame-resistant jacket or heavy cotton shirt.</li>
 <li>Leather gloves for MIG and stick, thinner gloves for TIG, and leather boots.</li>
 <li>A fire extinguisher within reach, with combustibles cleared or shielded to 35 ft (Lesson 1.1).</li>
 <li>A steel table, clamps, an angle grinder (with guard and face shield), a wire brush, and a chipping hammer.</li>
 <li>Gas cylinder secured upright, with the correct regulator or flowmeter.</li>
 <li>Fume extraction or good ventilation, with your head out of the plume.</li>
 <li>Read the owner's manual. OSHA §1910.254(d)(6) says manufacturers' printed instructions shall be strictly followed.</li>
</ol>`,
 terms: [["CC","Constant-current power source (stick, TIG)."],["CV","Constant-voltage power source (MIG, flux-core)."],["Duty cycle","The percentage of a 10-minute period a machine can weld at a rated output."],["Inverter","A lightweight electronic power source that switches at high frequency."],["Engine drive","A gas or diesel engine-powered welder/generator."]],
 quiz: [
  {q:"Which power source type is used for MIG?", o:["CC","CV","AC only","Battery"], a:1, why:"Wire processes use constant voltage."},
  {q:"A 20% duty cycle at 140 A means:", o:["Weld 2 min, rest 8 min out of 10","Weld 20 min per hour","The machine is 20% efficient","Weld at 28 A"], a:0, why:"Duty cycle is measured over a 10-minute period."},
  {q:"Who should install a new 240 V welder circuit?", o:["Anyone with a YouTube video","A licensed electrician","The welder manufacturer","Nobody; plug it into 120 V"], a:1, why:"Supply wiring must meet electrical code (OSHA points to Subpart S)."},
  {q:"Which processes typically use CC power?", o:["MIG and flux-core","Stick and TIG","Oxy-fuel","All of them"], a:1, why:"In CC processes, the welder controls arc length by hand."},
  {q:"Under OSHA §1910.254(d)(6), manufacturers' printed instructions must be:", o:["Optional","Strictly followed","Followed only for new machines","Kept at the office"], a:1, why:"It is a direct requirement."}
 ],
 sources: ["osha254","oshaTopic"]
});
