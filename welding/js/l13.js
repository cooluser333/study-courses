window.LESSONS.push({
 id: "certification", module: "m6", title: "6.2 Certification Paths: AWS Certified Welder & D1.1", minutes: 20,
 objectives: ["Explain the difference between qualification and certification.","Describe how the AWS Certified Welder program works (QC47, ATFs, maintenance).","Lay out a realistic path from beginner to certified welder."],
 body: `
<h3>Qualification vs. certification</h3>
<p>You become <strong>qualified</strong> by passing a test made to a code, such as AWS D1.1 (<em>Structural Welding Code — Steel</em>), under a written procedure (WPS). Often your employer qualifies you, and that paperwork may not follow you to the next job. AWS's Certified Welder Program records qualifications so they are <strong>transferable</strong>: QC47 describes it as a means of transferring welder qualifications from employer to employer without retesting.</p>
<h3>AWS Certified Welder (CW) program</h3>
<ul>
 <li>It is <strong>performance-based</strong>. AWS states there are <strong>no prerequisite courses or certifications</strong>: if you can make the weld, you're eligible.</li>
 <li>You test at an <strong>AWS Accredited Test Facility (ATF)</strong>, in accordance with the <strong>QC47</strong> specification. AWS says CW tests cover procedures used in structural steel, petroleum pipelines, sheet metal, and chemical-refinery welding.</li>
 <li>After you pass, the ATF submits your application. AWS issues a digital credential, which you manage through <strong>WeldCert Pro</strong>.</li>
 <li>To <strong>keep</strong> it, you submit maintenance (continuity) records before expiration verifying that you've kept using the process.</li>
</ul>
<h3>D1.1 at a glance</h3>
<p>AWS D1.1 governs welding of structural steel. Plate groove tests in the vertical (3G) and overhead (4G) positions, evaluated by bend testing, are very common entry-level structural tests. Pipe tests such as 6G go further. Exact thicknesses, positions qualified, and acceptance criteria come from the current edition of the code and the ATF's test procedure, so ask the ATF before you test.</p>
<h3>Other AWS credentials (later on)</h3>
<p>AWS's Professional Certification page lists programs beyond CW, such as the Certified Welding Inspector (CWI). Inspection is a common next step for experienced welders.</p>
<h3>A realistic path</h3>
<ol>
 <li>Finish this course, and learn the safety lessons cold.</li>
 <li>Get supervised, hands-on booth time: a community/technical college welding program or an apprenticeship. Florida has many public technical colleges and state colleges with welding programs.</li>
 <li>Master flat and horizontal welds on plate, then vertical and overhead.</li>
 <li>Find an AWS ATF (many schools are ATFs) and take a plate test.</li>
 <li>Keep your continuity current, then expand into pipe or TIG.</li>
</ol>`,
 terms: [["Qualification","Passing a test to a code and procedure, demonstrating you can make a sound weld."],["Certification","Documented proof of qualification, such as the AWS Certified Welder registry."],["ATF","An AWS Accredited Test Facility."],["QC47","The AWS specification for certification of welders and accreditation of test facilities."],["AWS D1.1","Structural Welding Code — Steel."],["CWI","Certified Welding Inspector."],["Continuity","Documented ongoing use of a process to keep a certification active."]],
 quiz: [
  {q:"What prerequisites does AWS require before a Certified Welder test?", o:["A 2-year degree","None; it is performance-based","CWI certification","Five years of experience"], a:1, why:"AWS says there are no prerequisite courses or certifications required."},
  {q:"Where do you take an AWS Certified Welder test?", o:["Online","At an AWS Accredited Test Facility","At any hardware store","At an OSHA office"], a:1, why:"Tests are performed at ATFs."},
  {q:"Which AWS specification governs the Certified Welder program and ATFs?", o:["QC47","A5.1","Z49.1","A2.4"], a:0, why:"QC47 combined the older QC4 and QC7 standards."},
  {q:"What keeps an AWS CW certification active?", o:["Nothing; it's lifetime","Submitting maintenance/continuity before expiration","Retesting every month","Buying new equipment"], a:1, why:"Maintenance verifies you have kept using the process."},
  {q:"AWS D1.1 is the code for:", o:["Pipelines","Structural steel","Aluminum aircraft","Pressure vessels"], a:1, why:"D1.1 is the Structural Welding Code — Steel."}
 ],
 sources: ["awsCW","awsProf","qc47"]
});
