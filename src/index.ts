function farthest(node: Element, selector: string) {
  let match = null;
  let current: Element | null = node;
  while (current) {
    if (current.matches(selector)) {
      match = current;
    }
    current = current.parentElement;
  }
  return match;
}

function processLink(link: Element) {
  const trackerParent = farthest(link, "search-telemetry-tracker");
  const range = document.createRange();
  range.selectNodeContents(link);
  const contents = range.extractContents();
  const searchIcon = contents.querySelector("span:has(svg)");
  searchIcon?.parentNode?.removeChild(searchIcon);
  trackerParent?.parentNode?.insertBefore(contents, trackerParent);
  trackerParent?.parentNode?.removeChild(trackerParent);
}

function main() {
  const searchLinks = Array.from(
    document.querySelectorAll("search-telemetry-tracker a")
  );

  for (const link of searchLinks) {
    processLink(link);
  }
}

setInterval(main, 500);
main();
