// Private visitor stats via GoatCounter (https://www.goatcounter.com).
// Nothing is shown on the site; the dashboard is only visible to the account owner.
// GoatCounter uses no cookies and ignores visits from localhost.

// Your GoatCounter code: the "xxx" in https://xxx.goatcounter.com
const GOATCOUNTER_CODE = "naquib";

const COUNT_SCRIPT = "https://gc.zgo.at/count.js";

export function initAnalytics() {
  if (!GOATCOUNTER_CODE || typeof document === "undefined") return;
  const script = document.createElement("script");
  script.async = true;
  script.src = COUNT_SCRIPT;
  script.dataset.goatcounter = `https://${GOATCOUNTER_CODE}.goatcounter.com/count`;
  document.head.appendChild(script);
}

// Records a click or action as an event, e.g. trackEvent("resume-download").
export function trackEvent(name, title = name) {
  try {
    window.goatcounter?.count?.({ path: name, title, event: true });
  } catch {
    // Stats must never break the site.
  }
}
