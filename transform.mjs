function fail(message) {
    throw new Error(message);
}
const lines = text => text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const v = lines(s).sort((a, b) => a.localeCompare(b, 'en'));
    const groups = new Map;
    for (const n of v) {
        const key = Array.from(n)[0].toLocaleUpperCase('en');
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(n)
    }
    return [...groups].map(([k, n]) => k + '\n' + n.join('\n')).join('\n\n')
}
