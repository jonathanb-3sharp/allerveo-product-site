// Allerveo label claims shown in the "What Allerveo showed in clinical trials" section.
//
// RULES (see .github/copilot-instructions.md):
//  - Only claims marked APPROVED in docs/approved-claims/ may appear here.
//  - Copy the approved wording exactly. Do not rephrase, shorten or "improve" it.
//  - Each claim may have an optional footnote, shown at the bottom of the page.
//
// Claims added from the approved claims deck (Jira ALV-118).

window.ALLERVEO_CLAIMS = {
  status: "approved",  // "pending" or "approved"
  source: "Allerveo label claims - approved.pptx",
  jiraTicket: "ALV-118",
  claims: [
    {
      id: "claim-1",
      stat: "38%",
      headline: "Allerveo reduced total nasal symptom scores by 38% at week 2, compared with 21% for placebo.",
      footnote: "BREEZE-2 Phase 3 study (ALV-302) of 1,248 patients; p<0.001."
    },
    {
      id: "claim-2",
      stat: "1 daily dose",
      headline: "One dose a day treats both seasonal and year-round nasal allergy symptoms."
    },
    {
      id: "claim-3",
      stat: "2.1%",
      headline: "In clinical trials, drowsiness was reported by 2.1% of patients taking Allerveo, compared with 1.8% taking placebo.",
      footnote: "BREEZE-2 Phase 3 study (ALV-302) safety population."
    }
  ]
};
