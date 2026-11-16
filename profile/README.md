<div align="center">
  <a href="https://github.com/aether-vm/aether">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/aether-vm/.github/main/brand/svg/aether-logo-lockup.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/aether-vm/.github/main/brand/svg/aether-logo-lockup-light.svg">
      <img alt="AETHER — The Runtime of Possibilities" src="https://raw.githubusercontent.com/aether-vm/.github/main/brand/svg/aether-logo-lockup-light.svg" width="640">
    </picture>
  </a>
</div>

<br>

# Aether

**Stateful Sandbox & VM Forking Runtime for AI Agents, RL Environments, and Isolated Full-Stack Testing.**

`Aether` (`agentd`) builds on Linux + KVM to give AI agents and evaluation pipelines Git-like state primitives (`checkpoint`, `restore`, cold & live VM `fork`) alongside hardware-isolated sandboxing and a zero-trust host-side credential gateway.

---

## Repositories in This Organization

| Repository | Status | Description |
| :--- | :--- | :--- |
| [`aether`](https://github.com/aether-vm/aether) | **Active (Core Monorepo)** | Core Rust daemon (`agentd`), storage & snapshot engine, Firecracker & Namespace drivers, guest init agent, gRPC protocol (`proto/`), Python (`aether-vm`) & TypeScript (`@aether-vm/sdk`) thin SDKs, benchmarks, and architecture specifications. |
| `aether-mcp` | *Planned (Post-Phase 1)* | Model Context Protocol (MCP) server exposing world forking, checkpointing, and validated patch export to AI IDEs. |
| `aether-recipes` | *Planned (Post-Phase 1)* | SWE-bench / RL Monte-Carlo Tree Search sampling templates, pre-warmed database Dockerfiles, and integration guides. |

---

## Core Design Principles

1. **Crash Semantics First**: Single atomic commit point backed by `redb`, explicit write-ahead intent logging, and deterministic epoch-fenced orphan recovery.
2. **Type-Safe Dual Storage**: Native Btrfs subvolume snapshots for fast semi-trusted cold forks, paired with `FICLONE` copy-on-write block images and `MAP_PRIVATE` shared page cache for live Firecracker microVM forks.
3. **Host-Enforced Zero-Trust Secrets**: Real credentials never enter sandbox memory; egress is mediated on the host via `virtio-vsock` explicit gateways, scoped policies, and anti-reflection scanning.
4. **Honest Benchmarks**: Every performance claim is bound to reproducible hardware, kernel, filesystem, and cache-warmth specifications.

---

## Brand & Design System

Logos, icons, and Design Tokens (CSS Variables / Tailwind preset) live in [`.github/brand`](https://github.com/aether-vm/.github/tree/main/brand). See the [Brand Assets & Design System guide](https://github.com/aether-vm/.github/blob/main/brand/README.md) for usage and trademark guidelines.
