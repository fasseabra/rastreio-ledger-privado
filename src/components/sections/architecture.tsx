import {
  Factory,
  Radio,
  Server,
  Store,
  Thermometer,
  Warehouse,
} from "lucide-react";
import { Section } from "@/components/layout/shell";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FIELDS, HARDWARE, IOT_SETUP, NODES, STACK } from "@/lib/paper";

export function Architecture() {
  return (
    <Section
      id="arquitetura"
      kicker="02 · Arquitetura"
      title="Três camadas: sensores no contentor, ledger nos quatro nós, chaincode no meio."
      lead="O sistema Bowledger (Fabric) só aceita entidades autorizadas. Os blocos nascem a cada cinco minutos. Do legado para a cadeia vão exatamente onze campos — o suficiente para provar o que aconteceu, sem inchá-la."
    >
      <Tabs defaultValue="iot">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="iot">Camada IoT</TabsTrigger>
          <TabsTrigger value="net">Rede privada</TabsTrigger>
          <TabsTrigger value="fields">11 campos</TabsTrigger>
          <TabsTrigger value="hw">Hardware</TabsTrigger>
        </TabsList>

        <TabsContent value="iot">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] lg:col-span-3">
              <h3 className="font-display text-xl">Do ovo ao rádio LTE</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Doze contentores de PE ventilado ({IOT_SETUP.containerMm.l} ×{" "}
                {IOT_SETUP.containerMm.w} × {IOT_SETUP.containerMm.h} mm) seguiram
                num veículo refrigerado. Cada um levava {IOT_SETUP.cartonsPerContainer}{" "}
                cartões de {IOT_SETUP.eggsPerCarton} ovos e {IOT_SETUP.sensorsPerContainer}{" "}
                etiquetas nos cantos — quatro em baixo, quatro em cima.
              </p>
              <ol className="mt-6 space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-mono text-accent tabular">01</span>
                  Etiquetas ST.2018.lte.a02 medem temperatura e umidade a cada{" "}
                  {IOT_SETUP.sensorIntervalMin} min e enviam por RFID {STACK.radio.replace("RFID ", "")}.
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-accent tabular">02</span>
                  A CU junto ao condutor guarda GPS a cada {IOT_SETUP.gpsIntervalMin} min
                  e despacha o pacote por LTE a cada {IOT_SETUP.cuIntervalMin} min.
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-accent tabular">03</span>
                  Se a rede cai, a CU retém os dados em memória local e retoma —
                  o artigo insiste que nenhum ponto se perde no acidente.
                </li>
              </ol>
            </div>
            <aside className="grid gap-3 lg:col-span-2">
              <Stat icon={Thermometer} label="Intervalo do sensor" value="5 min" />
              <Stat icon={Radio} label="Subida LTE + GPS" value="10 min · 3 min" />
              <Stat icon={Factory} label="Amostra experimental" value="12 contentores · ovos" />
            </aside>
          </div>
        </TabsContent>

        <TabsContent value="net">
          <div className="grid gap-3 sm:grid-cols-2">
            {NODES.map((node) => {
              const Icon =
                node.key === "processor"
                  ? Factory
                  : node.key === "distributor"
                    ? Warehouse
                    : node.key === "vendor"
                      ? Store
                      : Server;
              return (
                <article
                  key={node.id}
                  className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="size-4 text-accent" aria-hidden />
                    <h3 className="text-sm font-medium">
                      Nó {node.id} · {node.label}
                    </h3>
                  </div>
                  <p className="mt-1 font-mono text-xs text-subtle">{node.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {node.blurb}
                  </p>
                </article>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Canal <span className="font-mono text-foreground">{STACK.channel}</span>.
            TLS em todo o trânsito, CA do Fabric, ACL e tokens na API, contentores
            Docker com rede restrita. Raft elege o Node 4 como líder.
          </p>
        </TabsContent>

        <TabsContent value="fields">
          <div className="overflow-x-auto rounded-2xl bg-card shadow-[var(--shadow-border)]">
            <table className="w-full min-w-xl text-left text-sm">
              <thead className="border-b border-border text-xs tracking-wide text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium">Campo</th>
                  <th className="px-4 py-3 font-medium">Tipo</th>
                  <th className="px-4 py-3 font-medium">Exemplo</th>
                  <th className="px-4 py-3 font-medium">Função</th>
                </tr>
              </thead>
              <tbody>
                {FIELDS.map((field) => (
                  <tr key={field.name} className="border-b border-border last:border-0">
                    <td className="px-4 py-3">
                      <div className="font-mono text-xs text-accent">{field.name}</div>
                      <div className="text-foreground">{field.label}</div>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {field.type}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs tabular">{field.example}</td>
                    <td className="px-4 py-3 text-muted-foreground">{field.hint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="hw">
          <div className="grid gap-3 md:grid-cols-2">
            <article className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
              <h3 className="text-sm font-medium">Cada nó, desktop comum</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <Row k="CPU" v={HARDWARE.cpu} />
                <Row k="RAM" v={HARDWARE.ram} />
                <Row k="Disco" v={HARDWARE.storage} />
                <Row k="SO" v={HARDWARE.os} />
                <Row k="Runtime" v={HARDWARE.runtime} />
              </dl>
            </article>
            <article className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
              <h3 className="text-sm font-medium">Portos da rede Fabric</h3>
              <dl className="mt-4 space-y-2 text-sm">
                {HARDWARE.ports.map((p) => (
                  <Row key={p.port} k={p.port} v={p.use} />
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-subtle">
                O artigo sublinha que a operação corrente — submeter, monitorizar,
                sincronizar — cabe num dashboard web. A montagem inicial pede
                alguém à vontade com Docker, Linux e scripts Fabric.
              </p>
            </article>
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Thermometer;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-card p-4 shadow-[var(--shadow-border)]">
      <Icon className="size-4 text-accent" aria-hidden />
      <p className="mt-3 text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-lg">{value}</p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="font-mono text-xs text-subtle">{k}</dt>
      <dd className="text-right text-foreground">{v}</dd>
    </div>
  );
}
