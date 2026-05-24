# FortiGate — Core Capabilities

## What FortiGate Actually Does

Traffic Control, Threat Prevention, VPN, SD-WAN, Segmentation & Visibility.

### Simple Diagram

```
Remote User ──┐
              ├── Internet ── ISP/Edge Router ── WAN1 (Primary)
Branch Office ─┘                                    WAN2 (Secondary)
                                                        │
                                              FortiGate NGFW HA Cluster
                                              FG-1 (Active) ←→ FG-2 (Passive)
                                                        │
                                              Core Switch / Distribution Layer
                                              ├── Users VLAN (10.10.10.0/24)
                                              ├── Servers VLAN (10.10.20.0/24)
                                              ├── Applications VLAN (10.10.30.0/24)
                                              ├── Database VLAN (10.10.40.0/24)
                                              ├── Management VLAN (10.10.99.0/24)
                                              └── DMZ / Published Services (172.16.10.0/24)
                                                        │
                                              Cloud / SaaS
```

---

## Core Capabilities

### Security

| Capability | Description |
|------------|-------------|
| Stateful Firewall | Tracks connections and sessions |
| IPS | Intrusion Prevention System |
| Antivirus / Malware Prevention | Blocks malicious files |
| Web Filtering | Controls web access |
| Application Control | Identifies and controls apps |
| SSL/TLS Inspection | Decrypts and inspects encrypted traffic |
| DNS Filtering | Blocks malicious DNS queries |
| Threat Intelligence | Real-time threat feeds |
| Security Profiles | Combined security policies |

### Networking

| Capability | Description |
|------------|-------------|
| Routing | Static and dynamic routing |
| NAT | Network Address Translation |
| VLANs | Network segmentation |
| SD-WAN | Software-defined WAN |
| High Availability | Active/passive clustering |
| Policy-Based Routing | Route based on policies |
| Traffic Shaping | Bandwidth management |
| Multi-WAN | Multiple WAN links |

### Connectivity

| Capability | Description |
|------------|-------------|
| SSL VPN | Secure remote access via browser |
| IPsec VPN | Site-to-site VPN |
| Site-to-Site VPN | Branch connectivity |
| Remote Access VPN | User remote access |
| Branch Connectivity | Secure branch links |

### Control & Visibility

| Capability | Description |
|------------|-------------|
| Firewall Policies | Traffic rules and policies |
| User Identity Policies | Identity-based access control |
| Logging | Traffic and event logging |
| Monitoring | Real-time monitoring |
| FortiAnalyzer / SOC Integration | Centralized logging and SIEM |
| Troubleshooting Visibility | Debug and diagnostic tools |

---

## Deployment / OSI Layer Clarity

| Mode | Description |
|------|-------------|
| **L2 Transparent Mode** | Inline bridge deployment (Layer 2 forwarding) |
| **L3 Routed Mode** | Default enterprise deployment (Layer 3 routing) |
| **L4 Stateful Inspection** | Tracks connections and sessions (TCP/UDP/ICMP) |
| **L7 Application Awareness** | Identifies and controls applications (HTTP, DNS, FTP, etc.) |

> Deployment mode and inspection capability are not the same thing.

---

## Traffic Flow — Central Decision & Security Enforcement Point

| # | Stage | Description |
|---|-------|-------------|
| 1 | **Identify** | User authentication, identity-based access |
| 2 | **Inspect** | Web filtering, application control, SSL/TLS inspection |
| 3 | **Apply Policy** | Firewall policy, DNAT/VIP, IPS, security profiles, logging |
| 4 | **Allow / Block** | Allowed traffic → destination; blocked traffic → dropped |
| 5 | **Route** | NAT, IPS, threat prevention |
| 6 | **Trusted VPN Traffic** | SSL/IPsec VPN termination, internal resource access |

### Traffic Flow by Use Case

| Use Case | Flow |
|----------|------|
| **Internet-bound** | User → Identify → Inspect → Apply Policy → Allow/Block → Route |
| **Inbound Services** | Internet → DNAT/VIP → IPS → Security Profiles → Allowed Traffic |
| **Remote Access** | Remote User → SSL/IPsec VPN → Auth → Internal Resource |
| **Branch Connectivity** | Branch → IPsec VPN / SD-WAN → Path Selection → Secure Connect |
| **Internal Segmentation** | VLAN → Inter-VLAN Policy → East-West Inspection → Allow/Block |
| **Security Operations** | All traffic → Logs → SOC/SIEM/FortiAnalyzer |

---

## Common Misunderstandings

- FortiGate is more than a port-based firewall.
- Transparent mode does not mean only Layer 2 inspection.
- VPN, SD-WAN, IPS, and segmentation can be part of the same platform.
- Security policy design matters more than just enabling features.

---

## Why Enterprises Use FortiGate

| Benefit | Description |
|---------|-------------|
| **Centralized Traffic Control** | Single platform for all traffic decisions |
| **Reduces Attack Surface** | Unified threat prevention |
| **Secure Remote Access** | SSL/IPsec VPN for remote users |
| **Branch Connectivity** | SD-WAN connects remote sites |
| **Better Application Visibility** | L7 application awareness |
| **Segmented Internal Network** | VLAN segmentation and micro-segmentation |
| **Faster Threat Detection** | Real-time IPS and threat intelligence |
| **Operational Efficiency** | Centralized management and logging |

---

## Typical FortiGate Use Cases

| Use Case | Description |
|----------|-------------|
| **Internet Edge** | Inbound service protection |
| **Security** | Firewall, IPS, antivirus, web filtering |
| **Branch Connectivity** | SD-WAN / VPN between sites |
| **Remote Access VPN** | SSL/IPsec for remote users |
| **Internal Segmentation** | East-west traffic control, micro-segmentation |
| **Data Center Perimeter** | Data center edge protection |

---

## Traffic Flow Legend

| Symbol | Meaning |
|--------|---------|
| → | Allowed Traffic |
| ⇢ | Inspected / Decrypted Traffic |
| ⊘ | Blocked / Malicious Traffic |
| ⚡ | Trusted VPN / SD-WAN Traffic |

---

