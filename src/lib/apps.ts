export interface App {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  href: string;
  readTime: string;
  keywords?: string[];
  features?: string[];
}

export const appsData: App[] = [
  {
    id: 1,
    slug: "employee-checkin",
    title: "Employee Check-In App | Construction Site Management",
    description: "Mobile app for real-time employee check-in and attendance tracking at construction sites.",
    content: `
      Construction workforce management depends on knowing who is on site, when they arrived, and whether they are in the right location. Paper timesheets, manual roll calls, and disconnected spreadsheets create gaps that lead to payroll disputes, safety compliance failures, and inaccurate labor cost tracking.

      The Space AI Employee Check-In App replaces these manual processes with a mobile-first attendance system designed specifically for construction sites. Field workers check in through their phones using GPS-verified location data, giving project managers real-time visibility into crew presence without adding administrative overhead.

      ## Why Construction Teams Need a Dedicated Check-In App

      General-purpose time tracking tools are built for office environments. They rarely handle the realities of construction: multiple sites, rotating crews, remote locations, and the need to prove compliance during safety inspections. A construction check-in app must do more than record clock-in and clock-out times. It must verify that workers are physically on site, associate them with the correct project, and make that data available to payroll and reporting systems instantly.

      Space AI's employee check-in app solves these problems by combining mobile accessibility with location intelligence. Workers do not need to install complex software or remember multiple logins. The app works on the devices they already carry and captures the data supervisors need to make decisions.

      ## Key Capabilities

      **GPS-verified check-in.** Each check-in is tied to a geofenced site location, reducing time fraud and giving managers confidence that attendance records reflect actual presence.

      **Crew-level visibility.** Supervisors can see who has checked in, who is late, and who is missing. This makes morning roll calls faster and helps teams respond quickly if required trades are not on site.

      **Automated attendance records.** Check-in data feeds directly into attendance reports, eliminating the need for manual data entry and reducing payroll errors.

      **Safety compliance support.** Knowing who is on site is critical during emergencies, evacuations, and safety audits. The app maintains a real-time log of site presence that supports compliance documentation.

      **Integration with project data.** Attendance records connect to project cost tracking, helping teams understand labor hours by site, phase, or trade without reconciling multiple systems.

      ## How the Check-In Process Works

      The check-in workflow is designed for simplicity. Before a shift begins, the system establishes geofence boundaries for each active site. When a worker arrives, they open the app and tap the check-in button. The system verifies their GPS location against the geofence, confirms the project assignment, and logs the timestamp. The entire process takes seconds.

      If a worker moves between sites during a day, the app captures each transition. If a worker is at a location that does not match their assigned project, the system flags the discrepancy for supervisor review. This level of detail supports accurate labor tracking without adding complexity for field crews.

      ## Use Cases in the Field

      **Morning roll call.** Supervisors can confirm crew presence within minutes of shift start, identifying gaps before they impact the day's work plan.

      **Safety audit support.** During OSHA inspections or internal safety reviews, the app provides instant access to site attendance records, visitor logs, and crew certifications.

      **Payroll verification.** Finance teams receive verified attendance data that eliminates disputes about hours worked and reduces the risk of overpayment or underpayment.

      **Emergency mustering.** In the event of an evacuation, the system provides an immediate headcount of who was on site, supporting accountability and rescue coordination.

      ## The Business Impact

      Accurate attendance data improves payroll accuracy, reduces disputes, and gives project managers a clearer picture of labor productivity. When teams know exactly who is working where, they can allocate resources more effectively, avoid downtime, and respond faster to schedule changes.

      For safety officers, the app provides an up-to-date site roster that can be critical during incidents or inspections. For finance teams, it delivers reliable labor hour data that feeds into job costing and forecasting.

      ## Built for the Field

      Construction sites do not always have reliable connectivity. The Space AI Employee Check-In App is designed to work in field conditions, capturing data when connections are available and syncing when coverage improves. The interface is simple enough for crews to use without training, and the data flows into the same platform that manages schedules, documents, and project risk.

      If your team is still tracking attendance on paper or through tools that were not built for construction, the Space AI Employee Check-In App provides a direct path to more accurate workforce data and better site control.
    `,
    image: "/assets/images/apps.png",
    href: "/apps/employee-checkin/",
    readTime: "8 min read",
    keywords: ["check-in app", "attendance tracking", "site management", "labor tracking"],
    features: [
      "Real-time GPS check-in",
      "Crew verification",
      "Attendance reports",
      "Safety compliance",
    ],
  },
  {
    id: 2,
    slug: "contact-builder",
    title: "Contact Builder App | Team Management Tool",
    description: "Organize and manage project team contacts, roles, and communication preferences effortlessly.",
    content: `
      Construction projects involve dozens of stakeholders spread across owners, architects, engineers, contractors, subcontractors, vendors, and inspectors. Keeping contact information accurate, up to date, and accessible to the right people is a constant challenge. Outdated phone lists, scattered email threads, and unclear roles slow down decisions and create communication breakdowns when teams need answers quickly.

      The Space AI Contact Builder App gives construction teams a single, structured place to manage every project relationship. It replaces spreadsheets and static directories with a living contact database that reflects current roles, responsibilities, and communication preferences.

      ## Why Contact Management Breaks Down in Construction

      Most project teams rely on a mix of personal address books, email distribution lists, and shared spreadsheets to track contacts. These methods work at small scale but fail as projects grow in size and complexity. Key problems include:

      - Contacts are duplicated or missing across systems
      - Role changes are not updated consistently
      - New team members cannot find the right person to contact
      - Communication preferences are lost or ignored
      - Vendor and subcontractor information lives in silos

      When someone leaves a project or changes roles, the ripple effect can leave teams without a clear point of contact for approvals, inspections, or issue resolution.

      ## What the Contact Builder App Delivers

      **Centralized contact database.** All project contacts are stored in one place, linked to the projects, companies, and roles they belong to. There is no need to search through email signatures or old documents to find a phone number.

      **Role-based organization.** Contacts are organized by role and responsibility, making it easy to identify who handles permits, RFIs, procurement, safety, or executive decisions. This structure helps new team members get oriented quickly.

      **Communication preferences.** The app captures preferred contact methods, time zones, and escalation paths. Teams can reach the right person through the right channel without guessing.

      **Team hierarchy.** Reporting lines and organizational relationships are visible, so users understand who to escalate to when a decision is blocked.

      **Integration with project workflows.** Contacts connect to tasks, documents, and communication threads. When someone reviews an RFI, approves a change order, or participates in a meeting, their contact profile is already linked.

      ## How Contact Management Works

      The workflow begins when a new project starts. The project administrator imports or creates the contact database, assigning roles, companies, and project affiliations. As the project progresses, contacts are updated automatically when role changes occur, new team members join, or vendors are added.

      When a user needs to reach someone, they search by name, role, company, or project. The system displays the contact with their current role, preferred communication method, and escalation path. One tap initiates a call, email, or message through the preferred channel.

      ## Use Cases

      **Project onboarding.** New team members can quickly identify key contacts for their discipline, understand reporting relationships, and find the right people for approvals and questions.

      **Emergency response.** When time-critical issues arise, the system provides instant access to the contacts needed for resolution, including after-hours and escalation contacts.

      **Vendor management.** Procurement teams can search across all vendor contacts, review contract history, and identify the right person for purchase orders, delivery coordination, or warranty claims.

      **RFI routing.** The system automatically identifies the correct contact for each RFI based on the discipline and topic, reducing misdirected requests and accelerating response times.

      ## Real-World Impact

      A well-maintained contact directory reduces response times and prevents misdirected communication. Project managers spend less time chasing people and more time moving work forward. Executives gain confidence that the right stakeholders are included in decisions. Subcontractors and vendors experience clearer communication, which improves coordination and reduces rework.

      During project transitions, such as onboarding a new superintendent or handing off to an operations team, a structured contact database ensures continuity. Critical relationships are not lost, and new team members can quickly understand who does what.

      ## Built for Complex Project Teams

      The Space AI Contact Builder App is designed for the way construction teams actually work. It supports multiple projects, multiple companies, and changing team structures without requiring manual reorganization. As roles evolve and projects progress, the contact database stays current and useful.

      For teams struggling with scattered contact information and unclear communication paths, the Contact Builder App provides a simple but powerful foundation for better collaboration.
    `,
    image: "/assets/images/workstream.png",
    href: "/apps/contact-builder/",
    readTime: "7 min read",
    keywords: ["contact management", "team management", "collaboration", "communication"],
    features: [
      "Contact database",
      "Role management",
      "Communication preferences",
      "Team hierarchy",
    ],
  },
];

export const getApp = (slug: string): App | undefined => {
  return appsData.find((item) => item.slug === slug);
};

export const getAppSlugs = () => {
  return appsData.map((item) => ({
    slug: item.slug,
  }));
};
