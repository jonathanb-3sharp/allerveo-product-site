// Renders the launch date and the label claims onto the Allerveo product page.
(function () {
  "use strict";

  var launch = window.ALLERVEO_LAUNCH || {};
  var claimsData = window.ALLERVEO_CLAIMS || { status: "pending", claims: [] };

  // ---- Launch date badge ----
  var badge = document.getElementById("launch-badge");
  if (badge && launch.launchDateDisplay) {
    badge.textContent = "Available " + launch.launchDateDisplay;
    if (launch.launchDate) {
      badge.setAttribute("data-launch-date", launch.launchDate);
    }
  }

  // ---- Claims and footnotes ----
  var list = document.getElementById("claims-list");
  var footnotes = document.getElementById("footnotes");
  if (!list) { return; }

  var claims = claimsData.claims || [];

  if (claimsData.status !== "approved" || claims.length === 0) {
    var pending = document.createElement("div");
    pending.className = "claims-pending";
    pending.innerHTML =
      "<p class=\"claims-pending-title\">Approved label claims coming soon</p>" +
      "<p>This section will show the approved Allerveo label claims once they are added" +
      (claimsData.jiraTicket ? " (tracked in " + claimsData.jiraTicket + ")" : "") + ".</p>";
    list.appendChild(pending);
    return;
  }

  var footnoteNumber = 0;

  claims.forEach(function (claim) {
    var card = document.createElement("article");
    card.className = "claim-card";
    card.id = claim.id || "";

    if (claim.stat) {
      var stat = document.createElement("p");
      stat.className = "claim-stat";
      stat.textContent = claim.stat;
      card.appendChild(stat);
    }

    var text = document.createElement("p");
    text.className = "claim-text";
    text.textContent = claim.headline;

    if (claim.footnote && footnotes) {
      footnoteNumber += 1;
      var sup = document.createElement("sup");
      var link = document.createElement("a");
      link.href = "#fn-" + footnoteNumber;
      link.id = "fnref-" + footnoteNumber;
      link.textContent = footnoteNumber;
      link.setAttribute("aria-label", "Footnote " + footnoteNumber);
      sup.appendChild(link);
      text.appendChild(sup);

      var li = document.createElement("li");
      li.id = "fn-" + footnoteNumber;
      li.className = "footnote";
      li.textContent = claim.footnote;
      footnotes.appendChild(li);
    }

    card.appendChild(text);
    list.appendChild(card);
  });
})();
