# Rastreio Ledger Privado

Apresentação interativa do estudo **Bowledger**: um sistema de rastreabilidade alimentar baseado em **blockchain privada** (Hyperledger Fabric + consenso Raft), sensores IoT e o padrão GS1 EPCIS.

> **Artigo original**  
> Oh, S. E.; Kim, J.-H.; Kim, J.-Y.; Ahn, J.-H.  
> *Food Safety Distribution Systems Using Private Blockchain: Ensuring Traceability and Data Integrity Verification*  
> *Foods* **2025**, 14, 1405.  
> [https://doi.org/10.3390/foods14081405](https://doi.org/10.3390/foods14081405)

---

## Overview

A cadeia de alimentos moderna é longa, fragmentada e opaca. Sistemas centralizados e blockchains públicas falham em privacidade, custo e latência quando o objetivo é segurança alimentar em tempo real.

Este projeto apresenta a solução proposta pelo Korea Food Research Institute (KFRI):

- **Rede permissionada** com 4 nós (processador, distribuidor, varejista e operador)
- **Consenso Raft** (Crash Fault Tolerant) — baixa latência, sem prova de trabalho
- **Sensores IoT** de temperatura e umidade + GPS/LTE
- **11 campos essenciais** no ledger (o restante fica no sistema legado)
- **Verificação de integridade** por checksum periódico entre ledger e base legada

No experimento de 50 dias foram registadas **114.925 transações** sem qualquer adulteração detectada.

### Resultados principais (do artigo)

| Métrica | Valor |
|--------|-------|
| Vazão média (10.000 tx) | 207,4 TPS |
| Pico de escrita | 230,2 TPS |
| Transações em 50 dias | 114.925 (0 falhas) |
| Finalização (4 nós) | ~3,18 s |

---

## Stack da apresentação

- **Frontend**: React 19 + TanStack Start / Router / Query
- **UI**: Tailwind CSS v4 + Radix UI
- **Deploy**: Docker + Vite preview (porta 8080)

---

## Como rodar

### Com Docker (recomendado)

```bash
docker compose up --build
