import { checksumOf, fingerprint } from "@/lib/hash";

export type Payload = {
  TAG_SEQ: string;
  TRACE_DATE: string;
  EVENT_CODE: string;
  CU_ID: string;
  TAG_HM: number;
  TAG_TP: number;
  QL_VAL: number;
  COORD_X: number;
  COORD_Y: number;
  QL_Q: number;
  REG_DATE: string;
};

export type RecordRow = {
  id: string;
  seq: number;
  payload: Payload;
  checksum: string;
  hash: string;
  prevHash: string;
  at: number;
  buffered: boolean;
};

export const CU_ID = "41505052";
export const TAG_SEQ = "200225011988";
export const ORIGIN = { x: 127.103256, y: 37.546474 };

export function stamp(d: Date) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

export function qualityOf(temp: number, humidity: number) {
  const raw = 70 - Math.abs(temp - 8) * 1.4 - Math.abs(humidity - 40) * 0.18;
  return Math.round(Math.max(20, Math.min(95, raw)) * 1e6) / 1e6;
}

export function makePayload(input: {
  now: Date;
  temp: number;
  humidity: number;
  lon: number;
  lat: number;
  event: string;
}): Payload {
  const t = stamp(input.now);
  const q = qualityOf(input.temp, input.humidity);
  return {
    TAG_SEQ,
    TRACE_DATE: t,
    EVENT_CODE: input.event,
    CU_ID,
    TAG_HM: round3(input.humidity),
    TAG_TP: round3(input.temp),
    QL_VAL: q,
    COORD_X: input.lon,
    COORD_Y: input.lat,
    QL_Q: q,
    REG_DATE: t,
  };
}

export function commitRecord(
  payload: Payload,
  seq: number,
  prevHash: string,
  at: number,
  buffered: boolean,
): RecordRow {
  const checksum = checksumOf(payload);
  const hash = fingerprint(`${prevHash}|${checksum}|${seq}`);
  return {
    id: `blk-${seq}`,
    seq,
    payload,
    checksum,
    hash,
    prevHash,
    at,
    buffered,
  };
}

export function tamperTemp(row: RecordRow, delta = 8.5): RecordRow {
  const payload = { ...row.payload, TAG_TP: round3(row.payload.TAG_TP + delta) };
  return { ...row, payload };
}

export function isIntact(chain: RecordRow, legacy: RecordRow) {
  return checksumOf(legacy.payload) === chain.checksum;
}

function round3(n: number) {
  return Math.round(n * 1000) / 1000;
}

export const GENESIS = "0".repeat(16);
