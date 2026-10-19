export const blogTemplateStyles = `
body{
margin:0;
background:#f5f5f0;
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;
color:#1a1a1a;
-webkit-font-smoothing:antialiased;
}
.wrapper{
max-width:1100px;
margin:40px auto;
background:#ffffff;
border:1px solid #e5d9c5;
border-radius:22px;
overflow:hidden;
box-shadow:0 25px 60px rgba(0,0,0,.08);
}
.hero{
padding:70px 60px;
text-align:center;
background:radial-gradient(circle at top,#fff8ed 0%,#ffffff 65%);
}
.logo{
font-size:30px;
font-weight:700;
letter-spacing:2px;
color:#d4af37;
}
.logo-img{
width:90px;height:auto;margin-bottom:15px;display:block;margin-left:auto;margin-right:auto;
}
.badge{
display:inline-block;
margin-top:18px;
padding:10px 20px;
border:1px solid #d4af37;
border-radius:100px;
font-size:12px;
letter-spacing:.15em;
text-transform:uppercase;
color:#d4af37;
}
h1{
font-size:68px;
margin:28px 0 16px;
font-weight:800;
color:#1a1a1a;
}
h1 .gold{
color:#d4af37;
}
h2{
font-size:40px;
margin:0 0 18px;
color:#1a1a1a;
font-weight:800;
text-align:center;
}
h2 .gold{
color:#d4af37;
}
.hero p{
font-size:20px;
line-height:1.9;
color:#4a4a4a;
max-width:650px;
margin:auto;
}
.btn{
display:inline-block;
margin-top:35px;
padding:18px 36px;
background:#d4af37;
color:#fff;
text-decoration:none;
font-weight:700;
border-radius:10px;
}
.btn-outline{
display:inline-block;
margin-top:35px;
padding:18px 36px;
background:transparent;
color:#d4af37;
text-decoration:none;
font-weight:700;
border-radius:10px;
border:2px solid #d4af37;
}
.banner img{
width:100%;
display:block;
border-top:1px solid #e5d9c5;
border-bottom:1px solid #e5d9c5;
}
.section{
padding:60px;
}
.section p{
font-size:18px;
line-height:1.8;
color:#555555;
text-align:center;
max-width:750px;
margin-left:auto;
margin-right:auto;
}
.grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:28px;
margin-top:40px;
}
.card{
background:#fafaf7;
border:1px solid #e5d9c5;
border-radius:18px;
overflow:hidden;
padding:28px;
text-align:center;
}
.card img{
width:100%;
display:block;
border-radius:12px;
margin:18px 0;
}
.card-body{
padding:24px;
}
.card h3{
margin:0 0 6px;
font-size:23px;
font-weight:800;
color:#1a1a1a;
}
.card p{
font-size:16px;
color:#555555;
margin:0;
}
.card .icon{
font-size:40px;margin-bottom:15px;
}
.goldline{
width:90px;
height:3px;
background:#d4af37;
margin:18px auto 0;
}
.cta{
margin:60px;
padding:60px;
background:#fafaf7;
border:1px solid #d4af37;
border-radius:22px;
text-align:center;
}
.cta h2{
font-size:44px;
margin:0 0 18px;
}
.cta p{
color:#4a4a4a;font-size:19px;line-height:1.8;
}
.cta .btn-row{
margin-top:35px;display:flex;gap:20px;justify-content:center;flex-wrap:wrap;
}
.cta .btn{margin-top:0;}
.cta .btn-outline{margin-top:0;}
.footer{
padding:45px;
text-align:center;
border-top:1px solid #e5d9c5;
color:#666666;
font-size:14px;
}
.footer a{
color:#d4af37;
text-decoration:none;
}
.footer .phone{
color:#4c1d95;text-decoration:none;font-weight:700;display:inline-block;margin:0 6px;
}
.footer .sep{
color:#999999;margin:0 6px;
}
.footer .nav-link{
color:#333333;text-decoration:none;font-size:16px;font-weight:700;
}
.footer .legal-link{
color:#d4af37;text-decoration:underline;
}
.footer .whatsapp{
color:#22c55e;text-decoration:none;font-size:16px;font-weight:800;
}
.section-sub{
font-size:16px;font-weight:900;text-align:center;text-transform:uppercase;letter-spacing:1.5px;color:#666666;margin:0 auto 24px auto;
}
@media(max-width:700px){
.hero,.section,.cta{padding:28px;margin:20px}
h1{font-size:42px}
h2{font-size:28px}
.cta h2{font-size:32px}
.grid{grid-template-columns:1fr}
.cta .btn-row{flex-direction:column;align-items:center}
}
`;

export const blogTemplateHtml = `
<div class="wrapper">

<!-- Hero -->
<div class="hero">

<img class="logo-img" src="https://app.pmspace.ai/_next/image?url=%2Ficononly_transparent_nobuffer.png&w=64&q=75" alt="PMSPACE AI Logo">

<div class="logo">PMSPACE AI</div>

<div class="badge">🧠 Decision Intelligence Platform</div>

<h1>Think Construction.<br>Think <span class="gold">Space AI</span>.</h1>

<div class="goldline"></div>

<p>
Bring every construction workflow together with SPACE AI.
Powered by the <strong style="color:#d4af37;">Construction Query Engine (CQE)</strong>,
it delivers instant answers, intelligent automation and
connected project insights.
</p>

</div>

<!-- Dashboard Image -->
<div class="banner">
<img src="https://res.cloudinary.com/qs1o8fxx/image/upload/v1782801336/darkmode_mqfatk.gif" alt="SPACE AI Dashboard">
</div>

<!-- Section Title -->
<div class="section">

<h2>A Decision <span class="gold">Intelligence</span> Platform<br>with <span class="gold">Construction Query Engine (CQE)</span></h2>

<p>
Explore the tools designed to understand, extract, and analyze
your construction project data instantly.
</p>

</div>

<!-- Feature Cards -->
<div class="section" style="padding-top:0;">

<div class="grid">

<!-- Document AI -->
<div class="card">
<h3>Document AI</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783534095/DAI_czklwq.webp" alt="Document AI">
<p>Extract, classify and understand construction documents using Context Intelligence. Instantly retrieve project knowledge through natural language queries powered by CQE.</p>
</div>

<!-- Process AI -->
<div class="card">
<h3>Process AI</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783939964/processai_pjqtuf.jpg" alt="Process AI">
<p>Automate repetitive construction workflows using AI-powered agents. Streamline approvals, project coordination, task execution and business processes from a single intelligent platform.</p>
</div>

<!-- AI Orchestration -->
<div class="card">
<h3>AI Orchestration</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783940259/orchestration_mi7xhj.png" alt="AI Orchestration">
<p>Orchestrate complex construction workflows across teams, systems and data sources with intelligent agent coordination. Automate multi-step processes, trigger actions based on project events and maintain full visibility across every operation.</p>
</div>

<!-- Email Integration -->
<div class="card">
<h3>Email Integration</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783534186/Screenshot_2026-07-08_225226_wlurlz.png" alt="Email Integration">
<p>Automatically capture project emails, organize conversations, extract attachments and transform communication into searchable project knowledge with AI.</p>
</div>

<!-- Space BIM -->
<div class="card">
<h3>Space BIM</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783534094/spacebim_uks9yv.webp" alt="Space BIM">
<p>Explore BIM models through natural language. Query building elements, quantities, spaces and relationships instantly using the Construction Query Engine.</p>
</div>

<!-- Sustainability -->
<div class="card">
<h3>Sustainability</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783940426/sustainability_rmfzlm.png" alt="Sustainability">
<p>Track and optimize environmental performance across construction projects. Monitor carbon footprint, energy usage, material waste and compliance with green building standards through AI-driven sustainability analytics.</p>
</div>

<!-- Space Capture -->
<div class="card">
<h3>Space Capture</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783533874/capture_mdiv2c.png" alt="Space Capture">
<p>Capture site progress, inspections, punch lists and field observations directly from mobile devices with real-time synchronization across your projects.</p>
</div>

<!-- E-Sign -->
<div class="card">
<h3>E-Sign</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783534095/esign_s62tlj.webp" alt="E-Sign">
<p>Accelerate approvals with secure electronic signatures integrated into construction workflows, contracts, RFIs, drawings and project documents.</p>
</div>

<!-- Procurement -->
<div class="card">
<h3>Procurement</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783939964/procurement_sasmp0.jpg" alt="Procurement">
<p>Simplify procurement by managing RFQs, vendors, purchase orders, approvals, materials and delivery tracking from a single AI-powered construction platform.</p>
</div>

<!-- Space Lean -->
<div class="card">
<h3>Space Lean</h3>
<img src="https://res.cloudinary.com/dfqskw4az/image/upload/v1783936912/leanfinal_uurzqg.jpg" alt="Space Lean">
<p>Plan, schedule and optimize construction projects using AI-assisted planning, resource management, progress tracking and predictive insights across every phase of execution.</p>
</div>

</div>

</div>

<!-- Tutorials Section -->
<div class="section" style="padding-top:0;">

<p class="section-sub">Watch Quick Tutorials</p>

<div class="grid">

<div class="card">
<div class="card-body">
<div style="font-size:40px;margin-bottom:15px;">📁</div>
<h3>Upload a project document file</h3>
<p style="margin:0 0 16px 0;">Go to <strong style="color:#1a1a1a;">Files</strong> &rarr; click the Upload button &rarr; select a project file &rarr; confirm your upload.</p>
<a href="https://youtu.be/BH022zXsI6w" target="_blank" style="display:inline-block;color:#d4af37;font-size:16px;font-weight:800;text-decoration:none;">Watch Video &nearr;</a>
</div>
</div>

<div class="card">
<div class="card-body">
<div style="font-size:40px;margin-bottom:15px;">🔄</div>
<h3>Revise an existing project file</h3>
<p style="margin:0 0 16px 0;">Go to <strong style="color:#1a1a1a;">Files</strong> &rarr; find your uploaded file &rarr; click the revise icon &rarr; upload a new version.</p>
<a href="https://youtu.be/19YqcrO7lF8" target="_blank" style="display:inline-block;color:#d4af37;font-size:16px;font-weight:800;text-decoration:none;">Watch Video &nearr;</a>
</div>
</div>

</div>

</div>

<!-- CTA Section -->
<div class="cta">

<div style="font-size:64px;margin-bottom:20px;">🚀</div>

<p style="color:#d4af37;font-size:18px;font-weight:900;text-transform:uppercase;letter-spacing:1.5px;margin:0 0 12px 0;">Start Exploring Today</p>

<h2>Experience the Future<br>of Construction Intelligence</h2>

<p>
Discover how SPACE AI unifies Document AI, Process AI,
BIM, Procurement, Space Lean, Email Integration,
Capture and E-Sign into one intelligent platform powered
by the Construction Query Engine (CQE).
</p>

<div class="btn-row">
<a class="btn" href="https://pmspace.ai/try-it-now/">Try It Now &rarr;</a>
<a class="btn-outline" href="https://pmspace.ai/construction-software-demo/">Request a Demo</a>
</div>

</div>

<!-- Footer -->
<div class="footer">

<img src="https://app.pmspace.ai/_next/image?url=%2Ficononly_transparent_nobuffer.png&w=64&q=75" alt="PMSPACE AI Logo" style="width:80px;height:auto;margin-bottom:15px;opacity:0.95;display:block;margin-left:auto;margin-right:auto;">

<br>

<strong style="color:#1a1a1a;font-size:26px;">PMSPACE AI</strong>

<br><br>

The System of Intelligence for Architecture, Engineering, and Construction

<br><br>

<span style="white-space:nowrap;"><a class="phone" href="tel:+16464215740">USA: +1 646 421 5740</a></span>
<span style="white-space:nowrap;"><span class="sep">&bull;</span><a class="phone" href="tel:+19793269493">Canada: +1 979 326 9493</a></span>
<br>
<span style="white-space:nowrap;"><a class="phone" href="tel:+6586111900">Singapore: +65 8611 1900</a></span>
<span style="white-space:nowrap;"><span class="sep">&bull;</span><a class="phone" href="tel:+971562567509">UAE: +971 56 256 7509</a></span>
<br>
<span style="white-space:nowrap;"><a class="phone" href="tel:+966562081999">KSA: +966 56 208 1999</a></span>
<span style="white-space:nowrap;"><span class="sep">&bull;</span><a class="phone" href="tel:+96597243755">Kuwait: +965 9724 3755</a></span>
<br>
<span style="white-space:nowrap;"><a class="phone" href="tel:+60106607357">Malaysia: +60 10 660 7357</a></span>

<br><br>

<a class="whatsapp" href="https://api.whatsapp.com/send/?phone=%2B16464215740&text=Hello%21+I+am+interested+in+PMSPACE+Document+AI.&type=phone_number&app_absent=0">💬 Chat with us on WhatsApp</a>

<br><br>

<a href="mailto:contact@pmspace.ai" style="color:#d4af37;text-decoration:none;font-size:16px;font-weight:700;">contact@pmspace.ai</a>

<br><br>

<span style="white-space:nowrap;"><a class="nav-link" href="https://pmspace.ai/">HOME</a></span>
<span style="white-space:nowrap;"><span class="sep">•</span><a class="nav-link" href="https://pmspace.ai/construction-software-demo/">DOCUMENT AI</a></span>
<span style="white-space:nowrap;"><span class="sep">•</span><a class="nav-link" href="https://pmspace.ai/construction-software-demo/">BOOK A DEMO</a></span>

<br><br>

&copy; 2026 PMSPACE AI. All rights reserved.<br>
2500 Marconi Ave, Ste 101, Sacramento, CA 95821

<br><br>

<span style="white-space:nowrap;"><a class="legal-link" href="https://pmspace.ai/privacy-policy/">Privacy Policy</a></span>
<span style="white-space:nowrap;"><span style="color:#d4af37;margin:0 6px;">|</span><a class="legal-link" href="https://pmspace.ai/terms-of-service/">Terms of Service</a></span>
<span style="white-space:nowrap;"><span style="color:#d4af37;margin:0 6px;">|</span><a class="legal-link" href="#">Unsubscribe</a></span>

</div>

</div>
`;
