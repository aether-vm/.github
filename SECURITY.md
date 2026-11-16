# Security Policy

`Aether` (`agentd` / `aos-gw`) operates across untrusted code isolation boundaries (KVM microVMs, Linux Namespaces, `seccomp-bpf`, untrusted filesystem image extraction, and host-side credential injection). We treat sandbox escapes, host filesystem traversal, and credential reflection or exfiltration bypasses as **Critical** severity issues.

## Reporting a Vulnerability

**Please DO NOT open public GitHub Issues for suspected security vulnerabilities.**

Use **GitHub Private Vulnerability Reporting** (`Security` -> `Report a vulnerability` in the `aether` repository) so we can triage, reproduce, and ship a coordinated fix before public disclosure.

### High-Priority Scope
- MicroVM (`Firecracker` / `jailer`) or `NamespaceDriver` escape to host
- Symlink / hardlink / path traversal during OCI tar extraction or `Untrusted<PatchBundle>` validation
- Credential leakage, reflection bypass, or cross-epoch / cross-world slot confusion in `aos-gw`
- Host kernel exposure via untrusted `ext4` block image handling
