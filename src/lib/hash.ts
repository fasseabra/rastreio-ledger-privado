/** FNV-1a 32-bit, then mix into a 64-char hex fingerprint. Deterministic, sync. */
export function fingerprint(input: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  const pieces: string[] = [];
  let seed = h >>> 0;
  for (let i = 0; i < 8; i++) {
    seed = Math.imul(seed ^ (seed >>> 16), 0x45d9f3b);
    seed = Math.imul(seed ^ (seed >>> 13), 0x45d9f3b);
    seed = (seed ^ (seed >>> 16)) >>> 0;
    pieces.push(seed.toString(16).padStart(8, "0"));
  }
  return pieces.join("");
}

export function shortHash(hash: string, size = 10) {
  return hash.slice(0, size);
}

export function checksumOf(payload: unknown): string {
  return fingerprint(stableStringify(payload));
}

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj).sort();
  return `{${keys.map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`).join(",")}}`;
}

/** 21×21 visual grid derived from a hash — QR-like fingerprint, not a real QR. */
export function hashGrid(hash: string, size = 21): boolean[][] {
  const grid: boolean[][] = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => false),
  );
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) % hash.length;
      const nibble = parseInt(hash[idx] ?? "0", 16);
      grid[y]![x] = ((nibble + x * 3 + y * 7) & 3) > 0;
    }
  }
  // Finder-like corners so it reads as a code, not noise.
  stampFinder(grid, 0, 0);
  stampFinder(grid, size - 7, 0);
  stampFinder(grid, 0, size - 7);
  return grid;
}

function stampFinder(grid: boolean[][], ox: number, oy: number) {
  for (let y = 0; y < 7; y++) {
    for (let x = 0; x < 7; x++) {
      const edge = x === 0 || y === 0 || x === 6 || y === 6;
      const inner = x >= 2 && x <= 4 && y >= 2 && y <= 4;
      grid[oy + y]![ox + x] = edge || inner;
    }
  }
}
