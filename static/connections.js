// A small connected network, rather than a dense web of every possible pair.
// Shared theme priority chooses links; a dashed context link joins separate regions.
export function buildConnections(focus, priorities) {
  if (focus.length < 2) return [];
  const candidates = [];
  for (let i = 0; i < focus.length; i++) {
    for (let j = i + 1; j < focus.length; j++) {
      const a = focus[i], b = focus[j];
      const tags = new Set([a.theme, ...a.secondary]);
      const shared = [...new Set([b.theme, ...b.secondary])]
        .filter(t => tags.has(t) && priorities[t] > 0)
        .sort((x, y) => priorities[y] - priorities[x] || x - y);
      candidates.push({id: [a.id,b.id].sort().join('~'), a:a.id, b:b.id, shared,
        kind: shared.length ? 'theme' : 'context',
        strength: shared.reduce((sum,t) => sum + priorities[t], 0)});
    }
  }
  candidates.sort((a,b) => b.strength-a.strength || a.id.localeCompare(b.id));
  const parents = new Map(focus.map(c => [c.id,c.id]));
  function root(id) { while (parents.get(id) !== id) id = parents.get(id); return id; }
  const links = [];
  for (const link of candidates) {
    const a=root(link.a), b=root(link.b);
    if(a===b) continue;
    parents.set(a,b); links.push(link);
    if(links.length===focus.length-1) break;
  }
  return links;
}
