import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as Factory, b as Check, c as ShieldOff, d as Server, f as Radio, g as Fingerprint, h as Link2Off, i as Truck, l as ShieldCheck, m as Menu, n as WifiOff, o as Thermometer, p as RadioTower, r as Warehouse, s as Store, t as X, u as ShieldAlert, v as EyeOff, x as ArrowDown, y as Database } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as formatNumber, n as cn, r as formatDecimal } from "./router-D77biUZg.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { a as CartesianGrid, c as Tooltip, i as Line, n as YAxis, o as Bar, r as XAxis, s as ResponsiveContainer, t as ComposedChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNd5GhWR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,opacity,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:enabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-foreground hover:opacity-90",
			secondary: "bg-card text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "border border-border bg-transparent text-foreground hover:bg-muted",
			ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
			link: "text-accent underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 px-6",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var NAV = [
	{
		href: "#problema",
		label: "Problema"
	},
	{
		href: "#arquitetura",
		label: "Arquitetura"
	},
	{
		href: "#fluxo",
		label: "Fluxo"
	},
	{
		href: "#consenso",
		label: "Consenso"
	},
	{
		href: "#resultados",
		label: "Números"
	},
	{
		href: "#laboratorio",
		label: "Laboratório"
	}
];
function Shell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#conteudo",
				className: "skip-link",
				children: "Saltar para o conteúdo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							onClick: () => setOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg tracking-tight",
								children: "Rastro"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							"aria-label": "Secções",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground",
								children: item.label
							}, item.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "sm",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#laboratorio",
									children: "Abrir o laboratório"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: "lg:hidden",
								"aria-label": open ? "Fechar menu" : "Abrir menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("border-t border-border bg-background lg:hidden", open ? "block" : "hidden"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mx-auto flex max-w-6xl flex-col px-2 py-2",
						"aria-label": "Secções móveis",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							onClick: () => setOpen(false),
							className: "rounded-md px-3 py-3 text-sm text-foreground",
							children: item.label
						}, item.href))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "conteudo",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-6 text-accent", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "2.5",
			y: "2.5",
			width: "19",
			height: "19",
			rx: "4",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M8 17.5V7h4.4c1.85 0 3.05 1.05 3.05 2.65 0 1.12-.7 2-1.85 2.35L15.95 17.5h-1.8l-1.85-3.3H9.6v3.3H8zm1.6-4.6h2.7c1.05 0 1.7-.55 1.7-1.4s-.65-1.4-1.7-1.4H9.6v2.8z"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg",
				children: "Rastro"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-md text-sm leading-relaxed text-muted-foreground",
				children: "Leitura guiada do artigo Oh et al., Foods 2025, 14, 1405. Os números reproduzem as tabelas originais; o laboratório é um modelo didático, não a rede Bowledger do KFRI."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-subtle",
				children: [
					"CC BY 4.0 ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline decoration-border underline-offset-4 hover:text-foreground",
						href: "https://doi.org/10.3390/foods14081405",
						target: "_blank",
						rel: "noreferrer",
						children: "doi.org/10.3390/foods14081405"
					})
				]
			})]
		})
	});
}
function Section({ id, kicker, title, lead, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "scroll-mt-20 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-accent uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight md:text-4xl",
					children: title
				}),
				lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: lead
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children
				})
			]
		})
	});
}
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("flex flex-wrap gap-1 rounded-xl bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex min-h-11 flex-1 items-center justify-center rounded-lg px-3 py-2 text-sm font-medium", "transition-[color,background-color] duration-150", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:pointer-events-none disabled:opacity-50", "data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-[var(--shadow-border)]", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-4 focus-visible:outline-none", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var PAPER = {
	title: "Food Safety Distribution Systems Using Private Blockchain: Ensuring Traceability and Data Integrity Verification",
	titlePt: "Sistemas de distribuição de segurança alimentar com blockchain privada",
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
		{
			name: "Seung Eel Oh",
			role: "autor correspondente"
		},
		{
			name: "Jong-Hoon Kim",
			role: "conceção e administração"
		},
		{
			name: "Ji-Young Kim",
			role: "metodologia e validação"
		},
		{
			name: "Jae-Hwan Ahn",
			role: "validação"
		}
	]
};
var PROBLEM = {
	cases: 6e8,
	deaths: 42e4,
	source: "OMS, citado no artigo"
};
var STACK = {
	fabric: "Hyperledger Fabric (Bowledger)",
	consensus: "Raft (CFT, líder-seguidores)",
	standard: "GS1 EPCIS",
	iot: "Etiquetas ST.2018.lte.a02 + unidade CU.2018.lte.a02",
	radio: "RFID 424 MHz",
	cellular: "LTE 4G",
	channel: "kfrichannel"
};
var IOT_SETUP = {
	sensorIntervalMin: 5,
	cuIntervalMin: 10,
	gpsIntervalMin: 3,
	containers: 12,
	cartonsPerContainer: 20,
	eggsPerCarton: 15,
	sensorsPerContainer: 8,
	containerMm: {
		l: 500,
		w: 350,
		h: 300
	},
	material: "PE perfurado, ventilado"
};
var NODES = [
	{
		id: 1,
		key: "processor",
		label: "Processadores",
		role: "Peer · endosso",
		blurb: "Origem do lote. Regista o estado inicial do produto e o primeiro evento EPCIS."
	},
	{
		id: 2,
		key: "distributor",
		label: "Distribuidores",
		role: "Peer · endosso",
		blurb: "Transporte refrigerado. Consolida temperatura, umidade e GPS em trânsito."
	},
	{
		id: 3,
		key: "vendor",
		label: "Varejistas",
		role: "Peer · endosso",
		blurb: "Ponto de venda. Expõe o histórico ao consumidor via QR ou código de barras."
	},
	{
		id: 4,
		key: "operator",
		label: "Operador do sistema",
		role: "Ordering service · líder Raft",
		blurb: "Coordena a ordem das transações e a geração de blocos a cada cinco minutos."
	}
];
var FLOW_STEPS = [
	{
		n: 1,
		title: "Aquisição IoT",
		body: "Etiquetas de temperatura e umidade enviam leituras por RFID 424 MHz à unidade de comunicação (CU) no veículo. A CU junta GPS e reencaminha por LTE."
	},
	{
		n: 2,
		title: "Armazenamento no ledger",
		body: "O Smart Food System converte o pacote em JSON e envia só 11 campos essenciais à rede Fabric via API — o resto fica na base legado, por escala."
	},
	{
		n: 3,
		title: "Validação de integridade",
		body: "Checksum periódico compara o ledger com a base do sistema legado. Qualquer divergência é um indício de adulteração."
	},
	{
		n: 4,
		title: "Leitura móvel",
		body: "Consumidores e gestores leem QR ou código de barras. A app pede o histórico ao blockchain e mostra o rasto em tempo real."
	},
	{
		n: 5,
		title: "Detecção de falsificação",
		body: "O módulo de forja recupera o hash da transação e confronta-o com o registo legado. Diferença = tentativa de manipulação."
	},
	{
		n: 6,
		title: "Resposta",
		body: "Se a integridade falha, o sistema gera um alerta e devolve o resultado da verificação ao dispositivo que perguntou."
	}
];
var CONTRACT_PHASES = [
	{
		n: 1,
		title: "Proposta",
		body: "O cliente lê dados do sistema legado e envia uma proposta ao peer de endosso, no canal kfrichannel."
	},
	{
		n: 2,
		title: "Endosso",
		body: "Cada peer verifica identidade e executa o chaincode. Responde SIM ou NÃO conforme a política de endosso."
	},
	{
		n: 3,
		title: "Ordenação",
		body: "O cliente junta os endossos e submete a transação ao Node 4, o ordering service."
	},
	{
		n: 4,
		title: "Finalização",
		body: "O ordering service empacota blocos, distribui-os, e cada peer atualiza o state DB se a validação passar."
	}
];
var FIELDS = [
	{
		name: "TAG_SEQ",
		label: "N.º de sequência da etiqueta",
		type: "VARCHAR(20)",
		example: "200225011988",
		hint: "Identificador único do sensor, evita reutilização."
	},
	{
		name: "TRACE_DATE",
		label: "Data do evento",
		type: "TIMESTAMP(6)",
		example: "20240210153045",
		hint: "Quando o evento foi registado (YYYYMMDDHHMMSS)."
	},
	{
		name: "EVENT_CODE",
		label: "Código de evento",
		type: "VARCHAR(10)",
		example: "05",
		hint: "Tipo de evento EPCIS — expedição, anomalia, etc."
	},
	{
		name: "CU_ID",
		label: "ID da unidade de comunicação",
		type: "VARCHAR(20)",
		example: "41505052",
		hint: "Rádio LTE/GPS do veículo que transmitiu o pacote."
	},
	{
		name: "TAG_HM",
		label: "Umidade",
		type: "NUMBER(6,3)",
		example: "22,300",
		hint: "Umidade relativa medida pelo sensor (%)."
	},
	{
		name: "TAG_TP",
		label: "Temperatura",
		type: "NUMBER(6,3)",
		example: "21,840",
		hint: "Temperatura do contentor (°C)."
	},
	{
		name: "QL_VAL",
		label: "Valor de qualidade",
		type: "NUMBER",
		example: "59,422916",
		hint: "Pontuação de qualidade em tempo real, calculada no legado."
	},
	{
		name: "COORD_X",
		label: "Longitude",
		type: "NUMBER",
		example: "127,103256",
		hint: "Longitude GPS do registo."
	},
	{
		name: "COORD_Y",
		label: "Latitude",
		type: "NUMBER",
		example: "37,546474",
		hint: "Latitude GPS do registo."
	},
	{
		name: "QL_Q",
		label: "Índice de qualidade",
		type: "NUMBER",
		example: "59,422916",
		hint: "Métrica adicional de avaliação de qualidade."
	},
	{
		name: "REG_DATE",
		label: "Data de registo",
		type: "TIMESTAMP(6)",
		example: "20240210153210",
		hint: "Quando o dado entrou no sistema."
	}
];
var HARDWARE = {
	cpu: "Intel Core i5-8400 @ 2,80 GHz",
	ram: "8 GB DDR3",
	storage: "465 GB HDD",
	os: "Ubuntu 20.04 LTS",
	runtime: "Docker + Docker Compose",
	ports: [
		{
			port: "6060/TCP",
			use: "Memory profiling"
		},
		{
			port: "8080/TCP",
			use: "API de transações"
		},
		{
			port: "7845/TCP",
			use: "gRPC entre nós"
		},
		{
			port: "7846/TCP",
			use: "Sincronização P2P de blocos"
		}
	]
};
var THROUGHPUT = [
	{
		txs: 1e3,
		avg: 214.2,
		sd: 9.8,
		max: 235.1
	},
	{
		txs: 5e3,
		avg: 210.6,
		sd: 9.5,
		max: 232.4
	},
	{
		txs: 1e4,
		avg: 207.4,
		sd: 10.2,
		max: 230.2
	}
];
var LATENCY = [
	{
		nodes: 2,
		avgMs: 259.3,
		sdMs: 9.5,
		maxMs: 328.7,
		maxSd: 10.2,
		blockS: 2.983,
		blockSd: .099
	},
	{
		nodes: 3,
		avgMs: 271.9,
		sdMs: 8.8,
		maxMs: 339.6,
		maxSd: 11.4,
		blockS: 3.102,
		blockSd: .106
	},
	{
		nodes: 4,
		avgMs: 278.7,
		sdMs: 9.1,
		maxMs: 350.8,
		maxSd: 11,
		blockS: 3.184,
		blockSd: .113
	}
];
var INTEGRITY = [
	{
		label: "Dia 1–5",
		txs: 12875
	},
	{
		label: "Dia 6–10",
		txs: 12489
	},
	{
		label: "Dia 11–15",
		txs: 12145
	},
	{
		label: "Dia 16–20",
		txs: 11802
	},
	{
		label: "Dia 21–25",
		txs: 11567
	},
	{
		label: "Dia 26–30",
		txs: 11289
	},
	{
		label: "Dia 31–35",
		txs: 11034
	},
	{
		label: "Dia 36–40",
		txs: 10812
	},
	{
		label: "Dia 41–45",
		txs: 10567
	},
	{
		label: "Dia 46–50",
		txs: 10345
	}
];
var INTEGRITY_TOTAL = 114925;
var P_VALUES = [
	{
		pair: "1.000 vs 5.000",
		p: "0,0090",
		sig: "**"
	},
	{
		pair: "5.000 vs 10.000",
		p: "0,0227",
		sig: "*"
	},
	{
		pair: "1.000 vs 10.000",
		p: "0,0000",
		sig: "***"
	}
];
/** Deterministic hourly heatmap: 10 intervals × 24 bins (downsampled from 120 h). */
function buildHeatmap() {
	const cols = INTEGRITY.length;
	const rows = 24;
	const cells = [];
	let seed = 1405;
	const rand = () => {
		seed = Math.imul(seed, 1664525) + 1013904223 >>> 0;
		return seed / 4294967296;
	};
	for (let r = 0; r < rows; r++) {
		const row = [];
		for (let c = 0; c < cols; c++) {
			const base = 118 - c * 3.6;
			const hourWave = Math.sin(r / rows * Math.PI) * 6;
			const earlySpike = c < 3 && r % 7 === 0 ? 10 * rand() : 0;
			const noise = (rand() - .5) * 8;
			row.push(Math.round(base + hourWave + earlySpike + noise));
		}
		cells.push(row);
	}
	return cells;
}
var HEADLINE_STATS = [
	{
		value: "207,4",
		unit: "TPS",
		label: "vazão média (10.000 tx)"
	},
	{
		value: "230,2",
		unit: "TPS",
		label: "pico de escrita"
	},
	{
		value: "114.925",
		unit: "tx",
		label: "em 50 dias, 0 falhas"
	},
	{
		value: "3,18",
		unit: "s",
		label: "finalização (4 nós)"
	}
];
function Architecture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "arquitetura",
		kicker: "02 · Arquitetura",
		title: "Três camadas: sensores no contentor, ledger nos quatro nós, chaincode no meio.",
		lead: "O sistema Bowledger (Fabric) só aceita entidades autorizadas. Os blocos nascem a cada cinco minutos. Do legado para a cadeia vão exatamente onze campos — o suficiente para provar o que aconteceu, sem inchá-la.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: "iot",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
					className: "grid w-full grid-cols-2 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "iot",
							children: "Camada IoT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "net",
							children: "Rede privada"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "fields",
							children: "11 campos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "hw",
							children: "Hardware"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "iot",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] lg:col-span-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: "Do ovo ao rádio LTE"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: [
										"Doze contentores de PE ventilado (",
										IOT_SETUP.containerMm.l,
										" ×",
										" ",
										IOT_SETUP.containerMm.w,
										" × ",
										IOT_SETUP.containerMm.h,
										" mm) seguiram num veículo refrigerado. Cada um levava ",
										IOT_SETUP.cartonsPerContainer,
										" ",
										"cartões de ",
										IOT_SETUP.eggsPerCarton,
										" ovos e ",
										IOT_SETUP.sensorsPerContainer,
										" ",
										"etiquetas nos cantos — quatro em baixo, quatro em cima."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
									className: "mt-6 space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-accent tabular",
													children: "01"
												}),
												"Etiquetas ST.2018.lte.a02 medem temperatura e umidade a cada",
												" ",
												IOT_SETUP.sensorIntervalMin,
												" min e enviam por RFID ",
												STACK.radio.replace("RFID ", ""),
												"."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-accent tabular",
													children: "02"
												}),
												"A CU junto ao condutor guarda GPS a cada ",
												IOT_SETUP.gpsIntervalMin,
												" min e despacha o pacote por LTE a cada ",
												IOT_SETUP.cuIntervalMin,
												" min."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-accent tabular",
												children: "03"
											}), "Se a rede cai, a CU retém os dados em memória local e retoma — o artigo insiste que nenhum ponto se perde no acidente."]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "grid gap-3 lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: Thermometer,
									label: "Intervalo do sensor",
									value: "5 min"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: Radio,
									label: "Subida LTE + GPS",
									value: "10 min · 3 min"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									icon: Factory,
									label: "Amostra experimental",
									value: "12 contentores · ovos"
								})
							]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
					value: "net",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: NODES.map((node) => {
							const Icon = node.key === "processor" ? Factory : node.key === "distributor" ? Warehouse : node.key === "vendor" ? Store : Server;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-4 text-accent",
											"aria-hidden": true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "text-sm font-medium",
											children: [
												"Nó ",
												node.id,
												" · ",
												node.label
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-xs text-subtle",
										children: node.role
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: node.blurb
									})
								]
							}, node.id);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: [
							"Canal ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-foreground",
								children: STACK.channel
							}),
							". TLS em todo o trânsito, CA do Fabric, ACL e tokens na API, contentores Docker com rede restrita. Raft elege o Node 4 como líder."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "fields",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto rounded-2xl bg-card shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-xl text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "border-b border-border text-xs tracking-wide text-muted-foreground uppercase",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Campo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Tipo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Exemplo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 font-medium",
										children: "Função"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: FIELDS.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border last:border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-xs text-accent",
											children: field.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-foreground",
											children: field.label
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono text-xs text-muted-foreground",
										children: field.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono text-xs tabular",
										children: field.example
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted-foreground",
										children: field.hint
									})
								]
							}, field.name)) })]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
					value: "hw",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-medium",
								children: "Cada nó, desktop comum"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-4 space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "CPU",
										v: HARDWARE.cpu
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "RAM",
										v: HARDWARE.ram
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Disco",
										v: HARDWARE.storage
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "SO",
										v: HARDWARE.os
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Runtime",
										v: HARDWARE.runtime
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-medium",
									children: "Portos da rede Fabric"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-4 space-y-2 text-sm",
									children: HARDWARE.ports.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: p.port,
										v: p.use
									}, p.port))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs leading-relaxed text-subtle",
									children: "O artigo sublinha que a operação corrente — submeter, monitorizar, sincronizar — cabe num dashboard web. A montagem inicial pede alguém à vontade com Docker, Linux e scripts Fabric."
								})
							]
						})]
					})
				})
			]
		})
	});
}
function Stat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-card p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-4 text-accent",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-lg",
				children: value
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-xs text-subtle",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right text-foreground",
			children: v
		})]
	});
}
var LIMITS = [
	{
		title: "Quatro nós não são uma cadeia nacional",
		body: "O artigo trata quatro como o mínimo prático (cliente, endossante, committer, ordering). O próximo passo que os autores pedem são seis a oito nós, com papéis replicados."
	},
	{
		title: "Raft não é BFT",
		body: "Funciona enquanto os participantes são de confiança. Não modela um nó malicioso. Energia também ficou de fora — Paris & Long (2015) sugerem quóruns menores e nós testemunha."
	},
	{
		title: "O legado ainda fala outra língua",
		body: "GS1 EPCIS estrutura o evento, mas ERP e plataformas regulatórias continuam centrais e proprietárias. Falta middleware, não mais chaincode."
	},
	{
		title: "O consumidor ainda não entrou",
		body: "O QR existe na arquitetura. A adoção depende de interface, confiança na neutralidade da plataforma, e de alguém querer mesmo apontar o celular para uma dúzia de ovos."
	}
];
function Closing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "conclusao",
		kicker: "07 · O que ficou por fazer",
		title: "O teste de laboratório passou. A cadeia real ainda não.",
		lead: "Os autores concluem que blockchain privada + IoT + contratos inteligentes é viável, segura e escalável o bastante para rastreio em tempo útil. As reservas são honestas — e são o mapa da investigação seguinte.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 md:grid-cols-2",
				children: LIMITS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: item.body
					})]
				}, item.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "mt-8 rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl leading-snug md:text-2xl",
					children: "«A tecnologia de blockchain privada — combinada com monitorização IoT e automação por contratos inteligentes — oferece uma solução viável, segura e escalável para a rastreabilidade alimentar.»"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-4 text-sm text-muted-foreground",
					children: [
						"Oh et al., ",
						PAPER.journal,
						" ",
						PAPER.year
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 text-sm leading-relaxed text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Artigo original:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "text-foreground underline decoration-border underline-offset-4 hover:decoration-accent",
						href: PAPER.doiUrl,
						target: "_blank",
						rel: "noreferrer",
						children: PAPER.title
					}),
					". ",
					PAPER.institute,
					", ",
					PAPER.location,
					". Financiamento: ",
					PAPER.funding,
					". Licença CC BY 4.0."
				] })
			})
		]
	});
}
function Consensus() {
	const [size, setSize] = (0, import_react.useState)(4);
	const [down, setDown] = (0, import_react.useState)(null);
	const row = LATENCY.find((l) => l.nodes === size);
	const majority = Math.floor(size / 2) + 1;
	const online = (0, import_react.useMemo)(() => {
		return NODES.slice(0, size).map((n) => n.id).filter((id) => id !== down).length;
	}, [size, down]);
	const alive = online >= majority;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "consenso",
		kicker: "04 · Raft",
		title: "Um líder, seguidores honestos, e a maioria a decidir.",
		lead: "Raft é Crash Fault Tolerant: assume que ninguém mente, só que alguém pode cair. O Node 4 lidera. Dois nós servem de linha de base experimental — em produção, a falha de um mata a rede. Quatro nós foi o teto deste estudo.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Tamanho da rede"
						}), [
							2,
							3,
							4
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setSize(n);
								setDown((d) => d && d > n ? null : d);
							},
							className: cn("min-h-11 rounded-full px-4 text-sm transition-colors duration-150", size === n ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground shadow-[var(--shadow-border)] hover:text-foreground"),
							children: [n, " nós"]
						}, n))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: NODES.slice(0, size).map((node) => {
							const isDown = down === node.id;
							const isLeader = node.id === 4 || size < 4 && node.id === size;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setDown(isDown ? null : node.id),
								className: cn("relative rounded-2xl p-4 text-left transition-[opacity,box-shadow] duration-150", isDown ? "opacity-40" : "opacity-100", "bg-card shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("mb-3 block size-2.5 rounded-full", isDown ? "bg-danger" : isLeader ? "bg-accent" : "bg-ok"),
										style: !isDown && isLeader ? { animation: "heartbeat 1.6s ease-in-out infinite" } : void 0
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[0.65rem] text-subtle",
										children: ["Nó ", node.id]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-medium",
										children: node.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-muted-foreground",
										children: isDown ? "desligado" : isLeader ? "líder" : "seguidor"
									})
								]
							}, node.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-subtle",
						children: [
							"Clique num nó para o desligar. Maioria necessária: ",
							majority,
							" de ",
							size,
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-3 lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
							children: "Estado da rede"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-3 font-display text-2xl", alive ? "text-ok" : "text-danger"),
							children: alive ? "Consenso possível" : "Rede parada"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: alive ? `${online} nós ativos. O líder continua a ordenar blocos; os seguidores replicam o ledger.` : "Sem maioria Raft (N/2 + 1) a rede não finaliza transações. É o caso clássico de dois nós com um em falha."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
						children: [
							"Tabela 4 · ",
							size,
							" nós"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								k: "Latência média",
								v: `${formatDecimal(row.avgMs)} ± ${formatDecimal(row.sdMs)} ms`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								k: "Latência máxima",
								v: `${formatDecimal(row.maxMs)} ± ${formatDecimal(row.maxSd)} ms`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
								k: "Finalização de bloco",
								v: `${formatDecimal(row.blockS, 3)} ± ${formatDecimal(row.blockSd, 3)} s`
							})
						]
					})]
				})]
			})]
		})
	});
}
function Metric({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 border-b border-border pb-2 last:border-0 last:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-mono text-xs tabular",
			children: v
		})]
	});
}
function Flow() {
	const [step, setStep] = (0, import_react.useState)(1);
	const active = FLOW_STEPS[step - 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "fluxo",
		kicker: "03 · Fluxo e contratos",
		title: "Seis processos na operação, quatro no ciclo de vida de uma transação.",
		lead: "A figura 2 do artigo descreve o caminho do sensor até ao alerta no celular. A figura 4 descreve o chaincode: proposta, endosso, ordenação, commit. Clique para percorrer os dois.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
						children: "Operação · figura 2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3",
						children: FLOW_STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setStep(s.n),
							className: cn("flex min-h-11 w-full flex-col items-start rounded-xl px-3 py-3 text-left transition-[background-color,box-shadow,color] duration-150", step === s.n ? "bg-accent text-accent-foreground" : "bg-card text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.65rem] opacity-70 tabular",
								children: String(s.n).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-sm font-medium",
								children: s.title
							})]
						}) }, s.n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "mt-4 rounded-2xl bg-card p-6 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: active.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: active.body
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
					children: "Chaincode · figura 4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-2",
					children: CONTRACT_PHASES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative rounded-xl bg-card p-4 pl-5 shadow-[var(--shadow-border)]",
						children: [i < CONTRACT_PHASES.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "absolute top-10 left-[1.37rem] h-[calc(100%+0.5rem)] w-px bg-border"
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-[0.65rem] text-accent",
								children: p.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-medium",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted-foreground",
								children: p.body
							})] })]
						})]
					}, p.n))
				})]
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-12 lg:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-[0.2em] text-accent uppercase",
						children: [
							PAPER.journal,
							" ",
							PAPER.year,
							" · Vol. ",
							PAPER.volume,
							" · ",
							PAPER.article
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 font-display text-4xl font-medium leading-[1.12] tracking-tight md:text-6xl",
						children: "O rasto de um ovo, escrito em ledger privado."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
						children: [
							"Quatro investigadores do ",
							PAPER.institute,
							" ligaram sensores IoT, o padrão GS1 EPCIS e Hyperledger Fabric com consenso Raft. Em 50 dias, 114.925 transações — e nenhuma adulteração passou."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#problema",
								children: ["Ler o estudo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#laboratorio",
								children: "Simular a cadeia"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 max-w-xl text-xs leading-relaxed text-subtle",
						children: [
							"Oh, S. E.; Kim, J.-H.; Kim, J.-Y.; Ahn, J.-H. ",
							PAPER.title,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: PAPER.journal }),
							" ",
							PAPER.year,
							", ",
							PAPER.volume,
							", ",
							PAPER.article,
							".",
							" ",
							"Publicado ",
							PAPER.published,
							"."
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 lg:col-span-5",
				children: HEADLINE_STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-3xl tracking-tight tabular md:text-4xl",
						children: [stat.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-sm text-muted-foreground",
							children: stat.unit
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted-foreground",
						children: stat.label
					})]
				}, stat.label))
			})]
		})
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-muted text-muted-foreground",
		accent: "bg-accent/15 text-accent",
		ok: "bg-ok/15 text-ok",
		warn: "bg-warn/15 text-warn",
		danger: "bg-danger/15 text-danger"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
/** FNV-1a 32-bit, then mix into a 64-char hex fingerprint. Deterministic, sync. */
function fingerprint(input) {
	let h = 2166136261;
	for (let i = 0; i < input.length; i++) {
		h ^= input.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	const pieces = [];
	let seed = h >>> 0;
	for (let i = 0; i < 8; i++) {
		seed = Math.imul(seed ^ seed >>> 16, 73244475);
		seed = Math.imul(seed ^ seed >>> 13, 73244475);
		seed = (seed ^ seed >>> 16) >>> 0;
		pieces.push(seed.toString(16).padStart(8, "0"));
	}
	return pieces.join("");
}
function shortHash(hash, size = 10) {
	return hash.slice(0, size);
}
function checksumOf(payload) {
	return fingerprint(stableStringify(payload));
}
function stableStringify(value) {
	if (value === null || typeof value !== "object") return JSON.stringify(value);
	if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
	const obj = value;
	return `{${Object.keys(obj).sort().map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`).join(",")}}`;
}
/** 21×21 visual grid derived from a hash — QR-like fingerprint, not a real QR. */
function hashGrid(hash, size = 21) {
	const grid = Array.from({ length: size }, () => Array.from({ length: size }, () => false));
	for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
		const idx = (y * size + x) % hash.length;
		const nibble = parseInt(hash[idx] ?? "0", 16);
		grid[y][x] = (nibble + x * 3 + y * 7 & 3) > 0;
	}
	stampFinder(grid, 0, 0);
	stampFinder(grid, size - 7, 0);
	stampFinder(grid, 0, size - 7);
	return grid;
}
function stampFinder(grid, ox, oy) {
	for (let y = 0; y < 7; y++) for (let x = 0; x < 7; x++) {
		const edge = x === 0 || y === 0 || x === 6 || y === 6;
		const inner = x >= 2 && x <= 4 && y >= 2 && y <= 4;
		grid[oy + y][ox + x] = edge || inner;
	}
}
var CU_ID = "41505052";
var TAG_SEQ = "200225011988";
var ORIGIN = {
	x: 127.103256,
	y: 37.546474
};
function stamp(d) {
	const p = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}
function qualityOf(temp, humidity) {
	const raw = 70 - Math.abs(temp - 8) * 1.4 - Math.abs(humidity - 40) * .18;
	return Math.round(Math.max(20, Math.min(95, raw)) * 1e6) / 1e6;
}
function makePayload(input) {
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
		REG_DATE: t
	};
}
function commitRecord(payload, seq, prevHash, at, buffered) {
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
		buffered
	};
}
function tamperTemp(row, delta = 8.5) {
	const payload = {
		...row.payload,
		TAG_TP: round3(row.payload.TAG_TP + delta)
	};
	return {
		...row,
		payload
	};
}
function isIntact(chain, legacy) {
	return checksumOf(legacy.payload) === chain.checksum;
}
function round3(n) {
	return Math.round(n * 1e3) / 1e3;
}
var GENESIS = "0".repeat(16);
var initial = {
	temp: 21.84,
	humidity: 22.3,
	lon: ORIGIN.x,
	lat: ORIGIN.y,
	offline: false,
	buffer: [],
	chain: [],
	legacy: [],
	seq: 0,
	phase: 0,
	selected: null
};
function reducer(state, action) {
	switch (action.type) {
		case "tick": {
			const temp = clamp(state.temp + (hashNoise(state.seq + state.temp) - .5) * .35, 18, 26);
			const humidity = clamp(state.humidity + (hashNoise(state.humidity * 10) - .5) * .5, 16, 40);
			return {
				...state,
				temp,
				humidity,
				lon: state.lon + 8e-4,
				lat: state.lat + 15e-5
			};
		}
		case "toggle-net": return {
			...state,
			offline: !state.offline
		};
		case "phase": return {
			...state,
			phase: action.phase
		};
		case "buffer": return {
			...state,
			seq: action.row.seq,
			buffer: [action.row, ...state.buffer]
		};
		case "commit": return {
			...state,
			seq: action.row.seq,
			chain: [action.row, ...state.chain],
			legacy: [action.row, ...state.legacy],
			selected: action.row.id,
			phase: 4
		};
		case "flush":
			if (state.buffer.length === 0) return {
				...state,
				offline: false
			};
			return {
				...state,
				offline: false,
				chain: [...state.buffer, ...state.chain],
				legacy: [...state.buffer, ...state.legacy],
				selected: state.buffer[0]?.id ?? state.selected,
				buffer: [],
				phase: 4
			};
		case "tamper": {
			const legacy = state.legacy.map((r) => r.id === action.id ? tamperTemp(r) : r);
			return {
				...state,
				legacy,
				selected: action.id
			};
		}
		case "select": return {
			...state,
			selected: action.id
		};
		case "reset": return { ...initial };
		default: return state;
	}
}
function Lab() {
	const [state, dispatch] = (0, import_react.useReducer)(reducer, initial);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReady(true);
		const id = window.setInterval(() => dispatch({ type: "tick" }), 1600);
		return () => window.clearInterval(id);
	}, []);
	const selectedChain = state.chain.find((r) => r.id === state.selected) ?? null;
	const selectedLegacy = state.legacy.find((r) => r.id === state.selected) ?? null;
	const mismatches = (0, import_react.useMemo)(() => {
		const byId = new Map(state.legacy.map((r) => [r.id, r]));
		return state.chain.filter((c) => {
			const l = byId.get(c.id);
			return l ? !isIntact(c, l) : true;
		}).length;
	}, [state.chain, state.legacy]);
	const busy = state.phase > 0 && state.phase < 4;
	function nextRow(event, buffered) {
		const prev = (buffered ? state.buffer[0]?.hash : null) ?? state.chain[0]?.hash ?? GENESIS;
		const now = /* @__PURE__ */ new Date();
		return commitRecord(makePayload({
			now,
			temp: state.temp,
			humidity: state.humidity,
			lon: state.lon,
			lat: state.lat,
			event
		}), state.seq + 1, prev, now.getTime(), buffered);
	}
	async function transmit() {
		if (busy) return;
		if (state.offline) {
			dispatch({
				type: "buffer",
				row: nextRow("07", true)
			});
			return;
		}
		const row = nextRow("05", false);
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			dispatch({
				type: "commit",
				row
			});
			return;
		}
		for (const p of [
			1,
			2,
			3,
			4
		]) {
			dispatch({
				type: "phase",
				phase: p
			});
			await wait(p === 4 ? 260 : 380);
		}
		dispatch({
			type: "commit",
			row
		});
		window.setTimeout(() => dispatch({
			type: "phase",
			phase: 0
		}), 800);
	}
	function toggleNet() {
		if (state.offline) {
			dispatch({ type: "flush" });
			return;
		}
		dispatch({ type: "toggle-net" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "laboratorio",
		kicker: "06 · Laboratório",
		title: "Envie um lote, tente adulterar a temperatura, veja o checksum recusar.",
		lead: "Modelo didático dos onze campos, do buffer da CU e da verificação por hash. Não é a rede Bowledger — replica o contrato do artigo o bastante para se sentir o clique da imutabilidade.",
		children: !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-96 rounded-2xl bg-card shadow-[var(--shadow-border)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 lg:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, {
									className: "size-4 text-accent",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-medium",
									children: "Caminhão refrigerado"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: state.offline ? "danger" : "ok",
								children: state.offline ? "LTE em falha" : "CU em linha"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
									icon: Thermometer,
									label: "TAG_TP",
									value: `${formatDecimal(state.temp, 3)} °C`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
									icon: RadioTower,
									label: "TAG_HM",
									value: `${formatDecimal(state.humidity, 3)} %`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
									label: "COORD_X",
									value: state.lon.toFixed(6),
									mono: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Readout, {
									label: "COORD_Y",
									value: state.lat.toFixed(6),
									mono: true
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: () => void transmit(),
									disabled: busy,
									children: state.offline ? "Guardar na CU" : "Transmitir lote"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: toggleNet,
									children: state.offline ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioTower, {}), " Restaurar LTE"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, {}), " Simular falha"] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => dispatch({ type: "reset" }),
									children: "Limpar ledger"
								})
							]
						}),
						state.buffer.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-warn",
							children: [state.buffer.length, " pacote(s) em memória local da CU — o artigo descreve exatamente este buffer. Ao restaurar o LTE, os dados sobem para o ledger."]
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: "Ciclo do chaincode"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: CONTRACT_PHASES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: cn("rounded-lg px-2 py-3 text-center text-xs transition-colors duration-200", state.phase >= p.n ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: p.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1",
								children: p.title
							})]
						}, p.n))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-medium",
							children: [
								"Ledger · ",
								state.chain.length,
								" ",
								state.chain.length === 1 ? "bloco" : "blocos"
							]
						}), mismatches === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "ok",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mr-1 size-3" }), "Íntegro"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "danger",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mr-1 size-3" }),
								mismatches,
								" divergência(s)"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 max-h-64 space-y-2 overflow-y-auto",
						children: state.chain.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg bg-muted px-3 py-6 text-center text-sm text-muted-foreground",
							children: "Ainda não há blocos. Transmita o primeiro lote."
						}) : state.chain.map((row) => {
							const legacy = state.legacy.find((l) => l.id === row.id);
							const ok = legacy ? isIntact(row, legacy) : false;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => dispatch({
									type: "select",
									id: row.id
								}),
								className: cn("flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors duration-150", state.selected === row.id ? "bg-muted" : "hover:bg-muted/60"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-accent tabular",
										children: ["#", row.seq]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground",
										children: shortHash(row.hash, 12)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs tabular",
										children: [formatDecimal(row.payload.TAG_TP, 3), " °C"]
									}),
									ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-4 text-ok",
										"aria-label": "íntegro"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
										className: "size-4 text-danger",
										"aria-label": "adulterado"
									})
								]
							}) }, row.id);
						})
					})]
				}), selectedChain && selectedLegacy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
					chain: selectedChain,
					legacy: selectedLegacy,
					onTamper: () => dispatch({
						type: "tamper",
						id: selectedChain.id
					})
				}) : null]
			})]
		})
	});
}
function Detail({ chain, legacy, onTamper }) {
	const ok = isIntact(chain, legacy);
	const grid = hashGrid(chain.hash);
	const fields = [
		[
			"TAG_SEQ",
			chain.payload.TAG_SEQ,
			legacy.payload.TAG_SEQ
		],
		[
			"TRACE_DATE",
			chain.payload.TRACE_DATE,
			legacy.payload.TRACE_DATE
		],
		[
			"EVENT_CODE",
			chain.payload.EVENT_CODE,
			legacy.payload.EVENT_CODE
		],
		[
			"TAG_TP",
			String(chain.payload.TAG_TP),
			String(legacy.payload.TAG_TP)
		],
		[
			"TAG_HM",
			String(chain.payload.TAG_HM),
			String(legacy.payload.TAG_HM)
		],
		[
			"QL_VAL",
			String(chain.payload.QL_VAL),
			String(legacy.payload.QL_VAL)
		],
		[
			"COORD_X",
			String(chain.payload.COORD_X),
			String(legacy.payload.COORD_X)
		],
		[
			"COORD_Y",
			String(chain.payload.COORD_Y),
			String(legacy.payload.COORD_Y)
		]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "grid gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] md:grid-cols-[minmax(0,1fr)_9rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-medium",
					children: ["Bloco #", chain.seq]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: ok ? "ok" : "danger",
					children: ok ? "checksum ok" : "legado ≠ ledger"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-mono text-[0.7rem] break-all text-subtle",
				children: ["hash ", chain.hash.slice(0, 32)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs",
				children: fields.map(([k, a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-subtle",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: cn("font-mono tabular", a !== b && "text-danger"),
						children: a !== b ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground line-through",
								children: a
							}),
							" ",
							b
						] }) : a
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				className: "mt-4",
				onClick: onTamper,
				disabled: !ok,
				children: "Adulterar temperatura no legado"
			}),
			!ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-danger",
				children: "O Smart Food System comparou o hash do bloco com o JSON legado. A temperatura mudou fora da cadeia — o módulo de forja do artigo faria exatamente este alerta."
			}) : null
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fingerprint, {
					className: "mb-2 size-4 text-muted-foreground",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid aspect-square w-full max-w-36 rounded-md bg-foreground p-1.5",
					style: { gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))` },
					"aria-label": "Impressão visual do hash do bloco",
					children: grid.flatMap((row, y) => row.map((on, x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: on ? "bg-background" : "bg-transparent" }, `${y}-${x}`)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-[0.65rem] text-subtle",
					children: "QR didático do lote"
				})
			]
		})]
	});
}
function Readout({ icon: Icon, label, value, mono }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-muted px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1.5 font-mono text-[0.65rem] text-subtle",
			children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-3",
				"aria-hidden": true
			}) : null, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: cn("mt-1 text-sm", (mono || Icon) && "font-mono tabular"),
			children: value
		})]
	});
}
function clamp(n, a, b) {
	return Math.min(b, Math.max(a, n));
}
function hashNoise(n) {
	const x = Math.sin(n * 12.9898) * 43758.5453;
	return x - Math.floor(x);
}
function wait(ms) {
	return new Promise((resolve) => {
		window.setTimeout(resolve, ms);
	});
}
var GAPS = [
	{
		icon: Database,
		title: "Bases centrais e cadernos manuais",
		body: "Os sistemas clássicos fragmentam-se entre fabricantes, transportadores e varejo. Um único administrador pode reescrever o passado."
	},
	{
		icon: Link2Off,
		title: "Sem interoperabilidade",
		body: "Cada interveniente fala um formato. Sem GS1 EPCIS, o evento «saiu do caminhão» não é o mesmo objeto do outro lado da fronteira."
	},
	{
		icon: EyeOff,
		title: "Públicas, mas pouco práticas",
		body: "Bitcoin e Ethereum cobram taxas, expõem dados e usam prova de trabalho. Uma cadeia do frio precisa de privacidade e de milissegundos, não de blocos a 10 minutos."
	},
	{
		icon: ShieldOff,
		title: "Resposta lenta a surtos",
		body: "Quando um lote contamina, a pergunta é «onde esteve?». Sem um ledger partilhado, a recolha demora dias — e a marca paga a fatura."
	}
];
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "problema",
		kicker: "01 · O problema",
		title: "A comida atravessa demasiadas mãos para caber numa base só.",
		lead: "A OMS estima 600 milhões de casos de doença de origem alimentar e cerca de 420 mil mortes por ano. O artigo parte daí: a cadeia moderna é longa, opaca, e os sistemas atuais não aguentam a regulação que se aproxima.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
						children: "Carga humana, por ano"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-5xl tracking-tight tabular",
						children: formatNumber(PROBLEM.cases)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "casos de doença alimentar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-4xl tracking-tight tabular",
						children: formatNumber(PROBLEM.deaths)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "mortes associadas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs text-subtle",
						children: PROBLEM.source
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.16em] text-muted-foreground uppercase",
						children: "O que o artigo recusa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-2xl tracking-tight",
						children: "Não é mais um Ethereum para alface."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: [
							"A proposta é uma rede ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "permissionada" }),
							": só processadores, distribuidores, varejistas e o operador entram. Raft assume nós honestos e otimiza latência. Privacidade, custo e débito — os três pontos em que as públicas falham para segurança alimentar em tempo real."
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 grid gap-3 sm:grid-cols-2",
			children: GAPS.map((gap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-4 rounded-xl bg-card p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(gap.icon, {
					className: "mt-0.5 size-5 shrink-0 text-accent",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium",
					children: gap.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted-foreground",
					children: gap.body
				})] })]
			}, gap.title))
		})]
	});
}
function ClientOnly({ children, fallback }) {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	return mounted ? children : fallback;
}
var tpsData = THROUGHPUT.map((t) => ({
	name: formatNumber(t.txs),
	media: t.avg,
	pico: t.max
}));
var latData = LATENCY.map((l) => ({
	name: `${l.nodes} nós`,
	latencia: l.avgMs,
	bloco: l.blockS
}));
var heat = buildHeatmap();
var heatMin = Math.min(...heat.flat());
var heatMax = Math.max(...heat.flat());
var tooltipStyle = {
	background: "var(--color-popover)",
	border: "1px solid var(--color-border)",
	borderRadius: 8,
	fontSize: 12
};
function Results() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "resultados",
		kicker: "05 · Resultados",
		title: "A vazão desce um pouco com a carga. A integridade, nunca.",
		lead: "Hyperledger Caliper correu dez vezes em três, depois quatro nós, num centro de distribuição do KFRI, com o caminhão refrigerado ligado. As diferenças de TPS são estatisticamente significativas — e irrisórias na prática.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: "Tabela 2 · Transações por segundo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Barras: média. Linha: máximo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-lg bg-muted" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
									data: tpsData,
									margin: {
										top: 8,
										right: 12,
										left: 4,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "name",
											tick: {
												fill: "var(--color-muted-foreground)",
												fontSize: 12
											},
											axisLine: { stroke: "var(--color-border)" },
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											width: 44,
											domain: [0, 260],
											tick: {
												fill: "var(--color-muted-foreground)",
												fontSize: 12
											},
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "media",
											fill: "var(--color-chart-1)",
											radius: [
												6,
												6,
												0,
												0
											],
											maxBarSize: 48
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											type: "monotone",
											dataKey: "pico",
											stroke: "var(--color-chart-2)",
											strokeWidth: 2,
											dot: {
												r: 3,
												fill: "var(--color-chart-2)"
											}
										})
									]
								})
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground",
						children: P_VALUES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "font-mono",
							children: [
								p.pair,
								" · p = ",
								p.p,
								" ",
								p.sig
							]
						}, p.pair))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: "Tabela 4 · Latência e finalização"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "Eixo esquerdo: ms. Direito: segundos até o bloco fechar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-lg bg-muted" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
									data: latData,
									margin: {
										top: 8,
										right: 8,
										left: 4,
										bottom: 0
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
											stroke: "var(--color-border)",
											vertical: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "name",
											tick: {
												fill: "var(--color-muted-foreground)",
												fontSize: 12
											},
											axisLine: { stroke: "var(--color-border)" },
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											yAxisId: "ms",
											width: 40,
											tick: {
												fill: "var(--color-muted-foreground)",
												fontSize: 12
											},
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											yAxisId: "s",
											width: 36,
											orientation: "right",
											domain: [2.8, 3.3],
											tick: {
												fill: "var(--color-muted-foreground)",
												fontSize: 12
											},
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											yAxisId: "ms",
											dataKey: "latencia",
											fill: "var(--color-chart-3)",
											radius: [
												6,
												6,
												0,
												0
											],
											maxBarSize: 48
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
											yAxisId: "s",
											type: "monotone",
											dataKey: "bloco",
											stroke: "var(--color-chart-2)",
											strokeWidth: 2,
											dot: {
												r: 3,
												fill: "var(--color-chart-2)"
											}
										})
									]
								})
							})
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mt-6 rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] md:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium",
						children: "Tabela 3 · Integridade em 50 dias"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 max-w-xl text-xs text-muted-foreground",
						children: [formatNumber(INTEGRITY_TOTAL), " transações, dez ciclos de cinco dias, zero discrepâncias. A heatmap (figura 7) mostra o declínio esperado: as amostras foram sendo retiradas. Os picos iniciais são buffer da CU quando o LTE falhou — não falhas do ledger."]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-3xl tabular",
						children: ["0", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-sm text-muted-foreground",
							children: "discrepâncias"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 overflow-x-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid min-w-xl gap-px",
						style: { gridTemplateColumns: `repeat(${INTEGRITY.length}, minmax(0, 1fr))` },
						role: "img",
						"aria-label": "Mapa de calor de transações por intervalo de cinco dias",
						children: heat.map((row, ri) => row.map((val, ci) => {
							const t = (val - heatMin) / (heatMax - heatMin || 1);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								title: `${INTEGRITY[ci]?.label}: ~${val} tx/h`,
								className: "h-2.5 rounded-sm",
								style: { backgroundColor: `color-mix(in oklab, var(--color-accent) ${Math.round(t * 100)}%, var(--color-muted))` }
							}, `${ri}-${ci}`);
						}))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid min-w-xl text-center font-mono text-xs text-subtle",
						style: { gridTemplateColumns: `repeat(${INTEGRITY.length}, minmax(0, 1fr))` },
						children: INTEGRITY.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: i.label.replace("Dia ", "") }, i.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-lg text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "border-b border-border text-xs text-muted-foreground uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4 font-medium",
									children: "Intervalo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-4 font-medium",
									children: "Transações"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Estado"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [INTEGRITY.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-4",
									children: row.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-4 font-mono tabular",
									children: formatNumber(row.txs)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 text-ok",
									children: "Verificado"
								})
							]
						}, row.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-4",
									children: "Total"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-4 font-mono tabular",
									children: formatNumber(INTEGRITY_TOTAL)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 text-ok",
									children: "Verificado"
								})
							]
						})] })]
					})
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Architecture, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flow, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Consensus, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Results, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lab, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Closing, {})
	] });
}
//#endregion
export { Home as component };
