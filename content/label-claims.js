// Allerveo label claims shown in the "What Allerveo showed in clinical trials" section.
//
// RULES (see .github/copilot-instructions.md):
//  - Only claims marked APPROVED in docs/approved-claims/ may appear here.
//  - Copy the approved wording exactly. Do not rephrase, shorten or "improve" it.
//  - Each claim may have an optional footnote, shown at the bottom of the page.
//
// Status is "pending" until the approved claims are added (Jira ALV-118).

window.ALLERVEO_CLAIMS = {
  status: "pending",   // "pending" or "approved"
  source: null,        // e.g. "Allerveo label claims - approved.pptx"
  jiraTicket: "ALV-118",
  claims: [
    // Example of the expected shape:
    // {
    //   id: "claim-1",
    //   stat: "38%",
    //   headline: "Approved headline text",
    //   footnote: "Optional footnote text"
    // }
  ]
};
