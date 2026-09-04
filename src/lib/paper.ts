export const PAPER = {
  title:
    "Food Safety Distribution Systems Using Private Blockchain: Ensuring Traceability and Data Integrity Verification",
  titlePt:
    "Sistemas de distribuição de segurança alimentar com blockchain privada",
  journal: "Foods",
  year: 2025,
  volume: "14",
  article: "1405",
  doi: "10.3390/foods14081405",
  doiUrl: "https://doi.org/10.3390/foods14081405",
  published: "18 de abril de 2025",
  received: "17 de março de 2025",
  institute: "Korea Food Research Institute (KFRI)",
  location: "Wanju, República da Coreia",
  funding: "Main Research Program (E0210902), Ministry of Science and ICT",
  authors: [
    { name: "Seung Eel Oh", role: "autor correspondente" },
    { name: "Jong-Hoon Kim", role: "conceção e administração" },
    { name: "Ji-Young Kim", role: "metodologia e validação" },
    { name: "Jae-Hwan Ahn", role: "validação" },
  ],
} as const;

export const PROBLEM = {
  cases: 600_000_000,
  deaths: 420_000,
  source: "OMS, citado no artigo",
} as const;

export const STACK = {
  fabric: "Hyperledger Fabric (Bowledger)",
  consensus: "Raft (CFT, líder-seguidores)",
  standard: "GS1 EPCIS",
  iot: "Etiquetas ST.2018.lte.a02 + unidade CU.2018.lte.a02",
  radio: "RFID 424 MHz",
  cellular: "LTE 4G",
  channel: "kfrichannel",
} as const;

export const IOT_SETUP = {
  sensorIntervalMin: 5,
  cuIntervalMin: 10,
  gpsIntervalMin: 3,
  containers: 12,
  cartonsPerContainer: 20,
  eggsPerCarton: 15,
  sensorsPerContainer: 8,
  containerMm: { l: 500, w: 350, h: 300 },
  material: "PE perfurado, ventilado",
} as const;

export const NODES = [
  {
    id: 1,
    key: "processor",
    label: "Processadores",
    role: "Peer · endosso",
    blurb: "Origem do lote. Regista o estado inicial do produto e o primeiro evento EPCIS.",
  },
  {
    id: 2,
    key: "distributor",
    label: "Distribuidores",
    role: "Peer · endosso",
    blurb: "Transporte refrigerado. Consolida temperatura, umidade e GPS em trânsito.",
  },
  {
    id: 3,
    key: "vendor",
    label: "Varejistas",
    role: "Peer · endosso",
    blurb: "Ponto de venda. Expõe o histórico ao consumidor via QR ou código de barras.",
  },
  {
    id: 4,
    key: "operator",
    label: "Operador do sistema",
    role: "Ordering service · líder Raft",
    blurb: "Coordena a ordem das transações e a geração de blocos a cada cinco minutos.",
  },
] as const;

export const FLOW_STEPS = [
  {
    n: 1,
    title: "Aquisição IoT",
    body: "Etiquetas de temperatura e umidade enviam leituras por RFID 424 MHz à unidade de comunicação (CU) no veículo. A CU junta GPS e reencaminha por LTE.",
  },
  {
    n: 2,
    title: "Armazenamento no ledger",
    body: "O Smart Food System converte o pacote em JSON e envia só 11 campos essenciais à rede Fabric via API — o resto fica na base legado, por escala.",
  },
  {
    n: 3,
    title: "Validação de integridade",
    body: "Checksum periódico compara o ledger com a base do sistema legado. Qualquer divergência é um indício de adulteração.",
  },
  {
    n: 4,
    title: "Leitura móvel",
    body: "Consumidores e gestores leem QR ou código de barras. A app pede o histórico ao blockchain e mostra o rasto em tempo real.",
  },
  {
    n: 5,
    title: "Detecção de falsificação",
    body: "O módulo de forja recupera o hash da transação e confronta-o com o registo legado. Diferença = tentativa de manipulação.",
  },
  {
    n: 6,
    title: "Resposta",
    body: "Se a integridade falha, o sistema gera um alerta e devolve o resultado da verificação ao dispositivo que perguntou.",
  },
] as const;

export const CONTRACT_PHASES = [
  {
    n: 1,
    title: "Proposta",
    body: "O cliente lê dados do sistema legado e envia uma proposta ao peer de endosso, no canal kfrichannel.",
  },
  {
    n: 2,
    title: "Endosso",
    body: "Cada peer verifica identidade e executa o chaincode. Responde SIM ou NÃO conforme a política de endosso.",
  },
  {
    n: 3,
    title: "Ordenação",
    body: "O cliente junta os endossos e submete a transação ao Node 4, o ordering service.",
  },
  {
    n: 4,
    title: "Finalização",
    body: "O ordering service empacota blocos, distribui-os, e cada peer atualiza o state DB se a validação passar.",
  },
] as const;

export const FIELDS = [
  {
    name: "TAG_SEQ",
    label: "N.º de sequência da etiqueta",
    type: "VARCHAR(20)",
    example: "200225011988",
    hint: "Identificador único do sensor, evita reutilização.",
  },
  {
    name: "TRACE_DATE",
    label: "Data do evento",
    type: "TIMESTAMP(6)",
    example: "20240210153045",
    hint: "Quando o evento foi registado (YYYYMMDDHHMMSS).",
  },
  {
    name: "EVENT_CODE",
    label: "Código de evento",
    type: "VARCHAR(10)",
    example: "05",
    hint: "Tipo de evento EPCIS — expedição, anomalia, etc.",
  },
  {
    name: "CU_ID",
    label: "ID da unidade de comunicação",
    type: "VARCHAR(20)",
    example: "41505052",
    hint: "Rádio LTE/GPS do veículo que transmitiu o pacote.",
  },
  {
    name: "TAG_HM",
    label: "Umidade",
    type: "NUMBER(6,3)",
    example: "22,300",
    hint: "Umidade relativa medida pelo sensor (%).",
  },
  {
    name: "TAG_TP",
    label: "Temperatura",
    type: "NUMBER(6,3)",
    example: "21,840",
    hint: "Temperatura do contentor (°C).",
  },
  {
    name: "QL_VAL",
    label: "Valor de qualidade",
    type: "NUMBER",
    example: "59,422916",
    hint: "Pontuação de qualidade em tempo real, calculada no legado.",
  },
  {
    name: "COORD_X",
    label: "Longitude",
    type: "NUMBER",
    example: "127,103256",
    hint: "Longitude GPS do registo.",
  },
  {
    name: "COORD_Y",
    label: "Latitude",
    type: "NUMBER",
    example: "37,546474",
    hint: "Latitude GPS do registo.",
  },
  {
    name: "QL_Q",
    label: "Índice de qualidade",
    type: "NUMBER",
    example: "59,422916",
    hint: "Métrica adicional de avaliação de qualidade.",
  },
  {
    name: "REG_DATE",
    label: "Data de registo",
    type: "TIMESTAMP(6)",
    example: "20240210153210",
    hint: "Quando o dado entrou no sistema.",
  },
] as const;

export const HARDWARE = {
  cpu: "Intel Core i5-8400 @ 2,80 GHz",
  ram: "8 GB DDR3",
  storage: "465 GB HDD",
  os: "Ubuntu 20.04 LTS",
  runtime: "Docker + Docker Compose",
  ports: [
    { port: "6060/TCP", use: "Memory profiling" },
    { port: "8080/TCP", use: "API de transações" },
    { port: "7845/TCP", use: "gRPC entre nós" },
    { port: "7846/TCP", use: "Sincronização P2P de blocos" },
  ],
} as const;

export const THROUGHPUT = [
  { txs: 1000, avg: 214.2, sd: 9.8, max: 235.1 },
  { txs: 5000, avg: 210.6, sd: 9.5, max: 232.4 },
  { txs: 10000, avg: 207.4, sd: 10.2, max: 230.2 },
] as const;

export const LATENCY = [
  { nodes: 2, avgMs: 259.3, sdMs: 9.5, maxMs: 328.7, maxSd: 10.2, blockS: 2.983, blockSd: 0.099 },
  { nodes: 3, avgMs: 271.9, sdMs: 8.8, maxMs: 339.6, maxSd: 11.4, blockS: 3.102, blockSd: 0.106 },
  { nodes: 4, avgMs: 278.7, sdMs: 9.1, maxMs: 350.8, maxSd: 11.0, blockS: 3.184, blockSd: 0.113 },
] as const;

export const INTEGRITY = [
  { label: "Dia 1–5", txs: 12875 },
  { label: "Dia 6–10", txs: 12489 },
  { label: "Dia 11–15", txs: 12145 },
  { label: "Dia 16–20", txs: 11802 },
  { label: "Dia 21–25", txs: 11567 },
  { label: "Dia 26–30", txs: 11289 },
  { label: "Dia 31–35", txs: 11034 },
  { label: "Dia 36–40", txs: 10812 },
  { label: "Dia 41–45", txs: 10567 },
  { label: "Dia 46–50", txs: 10345 },
] as const;

export const INTEGRITY_TOTAL = 114925;

export const P_VALUES = [
  { pair: "1.000 vs 5.000", p: "0,0090", sig: "**" },
  { pair: "5.000 vs 10.000", p: "0,0227", sig: "*" },
  { pair: "1.000 vs 10.000", p: "0,0000", sig: "***" },
] as const;

/** Deterministic hourly heatmap: 10 intervals × 24 bins (downsampled from 120 h). */
export function buildHeatmap() {
  const cols = INTEGRITY.length;
  const rows = 24;
  const cells: number[][] = [];
  let seed = 1405;
  const rand = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let r = 0; r < rows; r++) {
    const row: number[] = [];
    for (let c = 0; c < cols; c++) {
      const base = 118 - c * 3.6;
      const hourWave = Math.sin((r / rows) * Math.PI) * 6;
      const earlySpike = c < 3 && r % 7 === 0 ? 10 * rand() : 0;
      const noise = (rand() - 0.5) * 8;
      row.push(Math.round(base + hourWave + earlySpike + noise));
    }
    cells.push(row);
  }
  return cells;
}

export const HEADLINE_STATS = [
  { value: "207,4", unit: "TPS", label: "vazão média (10.000 tx)" },
  { value: "230,2", unit: "TPS", label: "pico de escrita" },
  { value: "114.925", unit: "tx", label: "em 50 dias, 0 falhas" },
  { value: "3,18", unit: "s", label: "finalização (4 nós)" },
] as const;
