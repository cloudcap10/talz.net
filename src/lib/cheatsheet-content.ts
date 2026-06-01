export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'code'; label?: string; text: string }
  | { type: 'callout'; label: string; text: string }
  | { type: 'grid'; items: { label: string; text: string }[] };

export type CheatsheetContent = Block[];

const eigrp: CheatsheetContent = [
  { type: 'h2', text: '1. What is EIGRP?' },
  { type: 'p', text: 'EIGRP is a Cisco proprietary Interior Gateway Protocol (IGP) that uses a hybrid of Distance Vector and Link-State concepts. It uses **DUAL** (Diffusing Update Algorithm) for loop-free routes and fast convergence. IP protocol number **88**.' },

  { type: 'h2', text: '2. How EIGRP Works' },
  { type: 'list', items: ['Routers discover neighbors using **Hello** packets', 'Maintains a **topology table** with all routes', '**DUAL** algorithm computes loop-free routes', 'Only **incremental updates** are sent (efficient)', 'Best path installed in the **routing table**'] },

  { type: 'h2', text: '3. EIGRP Components' },
  { type: 'table', headers: ['Component', 'Description'], rows: [
    ['Neighbors', 'Discovered by Hello packets'],
    ['Topology Table', 'Contains all learned routes'],
    ['Routing Table', 'Best routes installed'],
    ['DUAL', 'Diffusing Update Algorithm — loop-free path calculation'],
    ['Feasible Successor', 'Backup path (loop-free)'],
    ['Reported Distance (RD)', 'Distance to destination as reported by neighbor'],
    ['Feasible Distance (FD)', 'RD + Link Cost to the neighbor'],
  ]},

  { type: 'h2', text: '4. Neighbor States' },
  { type: 'table', headers: ['State', 'Description'], rows: [
    ['Down', 'No Hello received'],
    ['Init', 'Hello received, adjacency not yet established'],
    ['2-Way', 'Bi-directional communication established'],
    ['Up', 'Full adjacency formed'],
  ]},

  { type: 'h2', text: '5. Packet Types' },
  { type: 'table', headers: ['Packet', 'Purpose'], rows: [
    ['Hello', 'Discover and maintain neighbors'],
    ['Update', 'Send routing updates'],
    ['Query', 'Send when route is lost'],
    ['Reply', 'Reply to a Query'],
    ['ACK', 'Acknowledge packets'],
  ]},

  { type: 'h2', text: '6. Route Types' },
  { type: 'table', headers: ['Route Type', 'AD', 'Description'], rows: [
    ['Internal', '90', 'Within the same AS'],
    ['External', '170', 'Redistributed from another protocol'],
    ['Summary', '—', 'Manually or automatically summarized'],
  ]},

  { type: 'h2', text: '7. Metrics (K Values)' },
  { type: 'code', text: 'Metric = [K1*BW + (K2*BW)/(256-Load) + K3*Delay] * [K5 / (Reliability + K4)]' },
  { type: 'table', headers: ['K Value', 'Default', 'Description'], rows: [
    ['K1', '1', 'Bandwidth (in kbps)'],
    ['K2', '0', 'Load (in 1/255ths)'],
    ['K3', '1', 'Delay (in tens of microseconds)'],
    ['K4', '0', 'Reliability (percentage)'],
    ['K5', '0', 'Reliability weight'],
  ]},
  { type: 'callout', label: 'Default', text: 'Bandwidth + Delay (K1=1, K3=1, others=0). Lower metric = preferred.' },

  { type: 'h2', text: '8. Timers (Default)' },
  { type: 'table', headers: ['Timer', 'Default'], rows: [
    ['Hello Interval', '5 sec (LAN), 15 sec (WAN)'],
    ['Hold Time', '15 sec (LAN), 45 sec (WAN)'],
    ['Update Interval (Min)', '0.5 sec'],
    ['Update Interval (Max)', '3 min'],
    ['Active Timer', '3 min'],
  ]},

  { type: 'h2', text: '9. DUAL Algorithm' },
  { type: 'list', items: ['Core of EIGRP', 'Computes loop-free, best path to destination', 'Provides fast convergence', 'Uses feasible successors for backup paths', '**Successor** = Best path, **Feasible Successor** = Backup'] },

  { type: 'h2', text: '10. Configuration' },
  { type: 'code', label: 'Router R1', text: 'R1(config)# router eigrp 100\nR1(config-router)# network 192.168.1.0 0.0.0.255\nR1(config-router)# network 192.168.2.0 0.0.0.255\nR1(config-router)# no auto-summary' },
  { type: 'code', label: 'Router R2', text: 'R2(config)# router eigrp 100\nR2(config-router)# network 192.168.2.0 0.0.0.255\nR2(config-router)# network 192.168.3.0 0.0.0.255\nR2(config-router)# no auto-summary' },

  { type: 'h2', text: '11. Important Commands' },
  { type: 'table', headers: ['Command', 'Purpose'], rows: [
    ['show ip eigrp neighbors', 'Show neighbors'],
    ['show ip eigrp topology', 'Show Topology Table'],
    ['show ip route eigrp', 'Show EIGRP routes'],
    ['show ip protocols', 'Show EIGRP process info'],
    ['show ip eigrp interfaces', 'Show interfaces'],
    ['show ip eigrp traffic', 'Show traffic statistics'],
    ['debug ip eigrp packets', 'Debug EIGRP packets'],
    ['clear ip eigrp neighbors', 'Clear neighbor adjacency'],
  ]},

  { type: 'h2', text: '12. Authentication' },
  { type: 'p', text: 'EIGRP supports **MD5 authentication**. Configured under interface mode.' },
  { type: 'code', text: 'interface g0/0\n ip authentication mode eigrp 100 md5\n ip authentication key-chain eigrp EIGRP-KEY\n key chain EIGRP-KEY\n  key-string cisco123' },

  { type: 'h2', text: '13. Advanced Concepts' },
  { type: 'table', headers: ['Concept', 'Description'], rows: [
    ['Variance', 'Allows multiple paths (up to 6) for load balancing'],
    ['Stub Router', 'Receives only a default route to reduce updates'],
    ['Passive Interface', 'Does not form neighbor adjacency (reduces overhead)'],
    ['Route Redistribution', 'EIGRP can redistribute routes from other protocols'],
    ['EIGRP for IPv6', 'Named mode eigrp <AS> is used (same concepts)'],
  ]},
];

const ospf: CheatsheetContent = [
  { type: 'h2', text: '1. What is OSPF?' },
  { type: 'p', text: 'OSPF is an open standard **Link-State** IGP that uses **Dijkstra\'s SPF** algorithm. IP protocol **89**, multicast **224.0.0.5** (AllSPFRouters) and **224.0.0.6** (AllDRouters).' },

  { type: 'h2', text: '2. How OSPF Works' },
  { type: 'list', items: ['Routers exchange **LSAs** to build a complete topology map', '**SPF algorithm** computes shortest path tree', 'Best paths installed in routing table', 'Converges fast when topology changes', 'Uses **areas** for scalability'] },

  { type: 'h2', text: '3. Characteristics' },
  { type: 'table', headers: ['Feature', 'Value'], rows: [
    ['Type', 'Link-State IGP'],
    ['Protocol', 'IP Protocol 89'],
    ['Algorithm', 'Dijkstra SPF'],
    ['Metric', 'Cost (based on bandwidth)'],
    ['AD', '110'],
    ['Multicast', '224.0.0.5 / 224.0.0.6'],
    ['Standard', 'RFC 2328 (OSPFv2)'],
  ]},

  { type: 'h2', text: '4. Areas & Hierarchy' },
  { type: 'table', headers: ['Area', 'Description'], rows: [
    ['Area 0 (Backbone)', 'Core area — all other areas must connect to it'],
    ['Standard Area', 'Regular area with full LSA flooding'],
    ['Stub Area', 'Blocks external LSAs (Type 5)'],
    ['Totally Stubby', 'Blocks Type 3, 4, 5 — only default route'],
    ['NSSA', 'Allows redistribution but blocks Type 5'],
  ]},

  { type: 'h2', text: '5. Neighbor States' },
  { type: 'table', headers: ['State', 'Description'], rows: [
    ['Down', 'No Hello received'],
    ['Init', 'Hello received from neighbor'],
    ['2-Way', 'Bi-directional Hello received'],
    ['ExStart', 'Master/Slave election for DB exchange'],
    ['Exchange', 'DBD packets exchanged'],
    ['Loading', 'LSR/LSU exchange for missing LSAs'],
    ['Full', 'Databases synchronized'],
  ]},

  { type: 'h2', text: '6. Timers (Default)' },
  { type: 'table', headers: ['Timer', 'Broadcast/NBMA', 'Non-Broadcast'], rows: [
    ['Hello', '10 sec', '30 sec'],
    ['Dead', '40 sec', '120 sec'],
    ['Retransmit', '5 sec', '5 sec'],
  ]},

  { type: 'h2', text: '7. Packet Types' },
  { type: 'table', headers: ['Type', 'Purpose'], rows: [
    ['Hello (Type 1)', 'Discover and maintain neighbors'],
    ['DBD (Type 2)', 'Database Description — summary of LSDB'],
    ['LSR (Type 3)', 'Link-State Request — request specific LSAs'],
    ['LSU (Type 4)', 'Link-State Update — carries LSAs'],
    ['LSAck (Type 5)', 'Acknowledge received LSAs'],
  ]},

  { type: 'h2', text: '8. LSA Types' },
  { type: 'table', headers: ['Type', 'Name', 'Scope'], rows: [
    ['1', 'Router LSA', 'Area'],
    ['2', 'Network LSA', 'Area'],
    ['3', 'Summary LSA', 'Inter-area'],
    ['4', 'ASBR Summary', 'Inter-area'],
    ['5', 'External LSA', 'Autonomous System'],
    ['7', 'NSSA External', 'NSSA area only'],
  ]},

  { type: 'h2', text: '9. Cost Calculation' },
  { type: 'code', text: 'Cost = Reference Bandwidth / Interface Bandwidth\n\nDefault reference: 100 Mbps\n\n10 Mbps  → Cost = 10\n100 Mbps → Cost = 1\n1 Gbps   → Cost = 1 (use auto-cost reference-bandwidth 10000)' },

  { type: 'h2', text: '10. DR & BDR' },
  { type: 'p', text: 'On broadcast networks, OSPF elects a **Designated Router (DR)** and **Backup DR (BDR)** to reduce LSA flooding.' },
  { type: 'list', items: ['Highest **priority** wins (default: 1)', 'Tie-break: highest **Router ID**', 'Priority 0 = never becomes DR/BDR', 'DR uses **224.0.0.5**, others send to **224.0.0.6**'] },

  { type: 'h2', text: '11. Configuration' },
  { type: 'code', label: 'Basic OSPF', text: 'R1(config)# router ospf 1\nR1(config-router)# network 192.168.1.0 0.0.0.255 area 0\nR1(config-router)# network 10.0.0.0 0.255.255.255 area 1\nR1(config-router)# router-id 1.1.1.1' },

  { type: 'h2', text: '12. Important Commands' },
  { type: 'table', headers: ['Command', 'Purpose'], rows: [
    ['show ip ospf neighbor', 'Show OSPF neighbors'],
    ['show ip ospf database', 'Show LSDB'],
    ['show ip route ospf', 'Show OSPF routes'],
    ['show ip ospf interface', 'Show OSPF interface info'],
    ['show ip protocols', 'Show routing protocol info'],
    ['debug ip ospf adj', 'Debug adjacency formation'],
    ['clear ip ospf process', 'Reset OSPF process'],
  ]},

  { type: 'h2', text: '13. Authentication' },
  { type: 'code', text: 'interface g0/0\n ip ospf authentication message-digest\n ip ospf message-digest-key 1 md5 cisco123' },

  { type: 'h2', text: '14. Advanced Concepts' },
  { type: 'table', headers: ['Concept', 'Description'], rows: [
    ['Virtual Link', 'Connects disconnected area to Area 0'],
    ['Route Summarization', 'At ABR (area range) or ASBR (summary-address)'],
    ['Default Route', 'default-information originate'],
    ['Passive Interface', 'Stops Hello on interface (no adjacency)'],
    ['OSPFv3', 'OSPF for IPv6'],
  ]},
];

const bgp: CheatsheetContent = [
  { type: 'h2', text: '1. What is BGP?' },
  { type: 'p', text: 'BGP is a **Path Vector** protocol used to exchange routing between **Autonomous Systems (AS)**. TCP port **179**. Backbone of Internet routing. Makes decisions based on **policies**.' },

  { type: 'h2', text: '2. BGP States' },
  { type: 'table', headers: ['State', 'Description'], rows: [
    ['Idle', 'No BGP connection'],
    ['Connect', 'TCP connection being established'],
    ['OpenSent', 'Waiting for BGP Open message'],
    ['OpenConfirm', 'Waiting for Open acknowledgment'],
    ['Established', 'Session up, routes exchanged'],
  ]},

  { type: 'h2', text: '3. Timers (Default)' },
  { type: 'table', headers: ['Timer', 'Default'], rows: [
    ['Keepalive', '60 sec'],
    ['Hold Time', '180 sec'],
    ['Update Timer', '30 sec'],
    ['Min Route Adv. Interval', '30 sec'],
  ]},

  { type: 'h2', text: '4. Path Attributes' },
  { type: 'table', headers: ['Attribute', 'Description'], rows: [
    ['Weight', 'Cisco local (highest first)'],
    ['Local Preference', 'Preferred path within AS'],
    ['AS Path', 'Shorter path preferred'],
    ['Origin', 'IGP < EGP < Incomplete'],
    ['MED', 'Multi Exit Discriminator (lower better)'],
    ['Next Hop', 'Reachability of next hop'],
    ['Community', 'Tag for policy control'],
    ['Router ID', 'Tiebreaker'],
  ]},

  { type: 'h2', text: '5. Best Path Selection Order' },
  { type: 'list', items: ['1. **Weight** (Cisco) — highest', '2. **Local Preference** — highest', '3. Locally originated', '4. **AS Path** — shortest', '5. **Origin** — IGP < EGP < Incomplete', '6. **MED** — lowest', '7. eBGP over iBGP', '8. Lowest IGP cost to Next Hop', '9. Oldest path', '10. Lowest Router ID', '11. Lowest Neighbor IP'] },

  { type: 'h2', text: '6. Message Types' },
  { type: 'table', headers: ['Message', 'Purpose'], rows: [
    ['OPEN', 'Establishes BGP connection'],
    ['UPDATE', 'Advertises or withdraws routes'],
    ['KEEPALIVE', 'Maintains BGP session'],
    ['NOTIFICATION', 'Reports errors, closes session'],
  ]},

  { type: 'h2', text: '7. BGP vs EIGRP vs OSPF' },
  { type: 'table', headers: ['Feature', 'BGP', 'EIGRP', 'OSPF'], rows: [
    ['Type', 'Path Vector', 'Hybrid', 'Link State'],
    ['Domain', 'Inter-Domain', 'Intra-Domain', 'Intra-Domain'],
    ['Standard', 'Open', 'Cisco Prop.', 'Open'],
    ['Algorithm', 'Policy Based', 'DUAL', 'SPF (Dijkstra)'],
    ['Convergence', 'Slower', 'Fast', 'Fast'],
  ]},

  { type: 'h2', text: '8. Network Types' },
  { type: 'table', headers: ['Type', 'Description'], rows: [
    ['eBGP', 'Between different AS'],
    ['iBGP', 'Within the same AS'],
    ['iBGP Full Mesh', 'Every router peers with every other'],
    ['Route Reflector', 'Reduces full mesh complexity'],
  ]},

  { type: 'h2', text: '9. Configuration' },
  { type: 'code', label: 'Router R1 (AS 65010)', text: 'router bgp 65010\n neighbor 192.168.12.2 remote-as 65020\n network 192.168.10.0 mask 255.255.255.0\n neighbor 192.168.12.2 next-hop-self' },
  { type: 'code', label: 'Router R2 (AS 65020)', text: 'router bgp 65020\n neighbor 192.168.12.1 remote-as 65010\n network 192.168.20.0 mask 255.255.255.0' },

  { type: 'h2', text: '10. Common Commands' },
  { type: 'table', headers: ['Command', 'Purpose'], rows: [
    ['router bgp <AS>', 'Enter BGP config'],
    ['neighbor <IP> remote-as <AS>', 'Set BGP neighbor'],
    ['network <NET> mask <MASK>', 'Advertise network'],
    ['neighbor <IP> next-hop-self', 'Set next hop to self'],
    ['show ip bgp summary', 'Check neighbor status'],
    ['show ip bgp', 'Check learned routes'],
    ['show ip bgp neighbors', 'Check neighbor details'],
    ['clear ip bgp * soft in', 'Soft reset inbound'],
  ]},

  { type: 'h2', text: '11. Advanced Concepts' },
  { type: 'table', headers: ['Concept', 'Description'], rows: [
    ['Communities', 'Tag routes for policy control between AS'],
    ['Route Distinguisher', 'Makes VPN routes unique'],
    ['Confederations', 'Divide large AS into sub-AS'],
    ['Graceful Restart', 'Maintain forwarding during restart'],
    ['BGP Multipath', 'Multiple paths if equal cost'],
  ]},

  { type: 'h2', text: '12. Traffic Engineering: AS Path Prepending vs Communities' },
  { type: 'p', text: 'Both influence **inbound** traffic — the hard direction in BGP. You cannot set what neighbors prefer directly, only signal. Two main tools:' },
  { type: 'table', headers: ['', 'AS Path Prepending', 'Communities'], rows: [
    ['Mechanism', 'Pad own AS number to lengthen AS_PATH', 'Tag routes; upstream acts on tag'],
    ['Best-path step', '4 (AS Path length)', 'Varies — often sets Local Pref (step 2)'],
    ['Granularity', 'Blunt — affects all upstreams', 'Surgical — per-provider, per-route'],
    ['Needs ISP support', 'No — works everywhere', 'Yes — ISP must define/honor community'],
    ['Beaten by', 'Any upstream Local Pref override', 'Whatever the ISP policy dictates'],
    ['Typical use', 'Make a path less preferred globally', 'Set Local Pref, prepend, or blackhole remotely'],
  ]},
  { type: 'p', text: '**Rule of thumb:** Prepending is a hammer, communities are a scalpel. Prepending is weak — it sits low in best-path selection, so any provider setting a higher Local Preference ignores it entirely. Communities let the provider apply policy on your behalf (often setting Local Pref), making them far more effective when supported.' },
  { type: 'code', label: 'AS Path Prepending (make path less preferred)', text: 'route-map PREPEND-OUT permit 10\n set as-path prepend 65010 65010 65010\n!\nrouter bgp 65010\n neighbor 192.168.12.2 route-map PREPEND-OUT out' },
  { type: 'code', label: 'Community tagging (RFC 1997 well-known + custom)', text: 'ip community-list 1 permit 65020:120\n!\nroute-map TAG-OUT permit 10\n set community 65020:120\n!\nrouter bgp 65010\n neighbor 192.168.12.2 send-community\n neighbor 192.168.12.2 route-map TAG-OUT out' },
  { type: 'list', items: ['**Well-known communities:** NO_EXPORT (do not advertise outside AS), NO_ADVERTISE (do not advertise to any peer), LOCAL_AS, INTERNET', '**Format:** `ASN:value` (e.g. `65020:120` — ISP doc defines meaning)', '**Always** `send-community` to neighbor — not sent by default', 'Prepending own AS 1–3 times is typical; >3 often filtered as suspicious'] },
];

const datacenter: CheatsheetContent = [
  { type: 'h2', text: '1. What is a Data Center?' },
  { type: 'p', text: 'A facility that stores, manages and processes critical IT infrastructure and business applications.' },
  { type: 'code', text: 'Users → Internet → Data Center\n                 ├── Network Devices\n                 ├── Servers\n                 ├── Storage\n                 └── Security' },

  { type: 'h2', text: '2. Main Components' },
  { type: 'table', headers: ['Component', 'Purpose'], rows: [
    ['Servers', 'Process applications and store data'],
    ['Switches & Routers', 'Network connectivity between devices'],
    ['Storage Systems', 'Databases, files, backups, VMs'],
    ['Security Devices', 'Protect against threats and unauthorized access'],
    ['Power & Cooling', 'Ensure uninterrupted 24×7 operations'],
  ]},

  { type: 'h2', text: '3. Types of Data Centers' },
  { type: 'table', headers: ['Type', 'Description'], rows: [
    ['Enterprise', 'Owned and managed by organizations'],
    ['Colocation', 'Companies rent space for servers and equipment'],
    ['Cloud', 'Managed by cloud providers (AWS, Azure, GCP)'],
    ['Edge', 'Located closer to users for low latency'],
  ]},

  { type: 'h2', text: '4. Why Data Centers Are Important' },
  { type: 'list', items: ['High Availability', 'Fast Data Processing', 'Business Continuity', 'Disaster Recovery', 'Secure Data Storage', 'Scalability for Future Growth'] },
  { type: 'callout', label: 'For Networking Engineers', text: 'A modern data center focuses on: Virtualization, Automation, High-speed networking, Cloud integration.' },
];

const fortigate: CheatsheetContent = [
  { type: 'h2', text: '1. What FortiGate Does' },
  { type: 'p', text: '**Traffic Control, Threat Prevention, VPN, SD-WAN, Segmentation & Visibility** on a single platform.' },
  { type: 'code', text: 'Remote User ──┐\n              ├── Internet ── ISP/Edge Router ── WAN1 (Primary)\nBranch Office ─┘                                    WAN2 (Secondary)\n                                                        │\n                                              FortiGate NGFW HA Cluster\n                                              FG-1 (Active) ←→ FG-2 (Passive)\n                                                        │\n                                              Core Switch / Distribution Layer\n                                              ├── Users VLAN\n                                              ├── Servers VLAN\n                                              ├── DMZ' },

  { type: 'h2', text: '2. Security Capabilities' },
  { type: 'table', headers: ['Capability', 'Description'], rows: [
    ['Stateful Firewall', 'Tracks connections and sessions'],
    ['IPS', 'Intrusion Prevention System'],
    ['Antivirus', 'Malware prevention'],
    ['Web Filtering', 'Controls web access'],
    ['Application Control', 'Identifies and controls apps (L7)'],
    ['SSL/TLS Inspection', 'Decrypts and inspects encrypted traffic'],
    ['DNS Filtering', 'Blocks malicious DNS queries'],
    ['Threat Intelligence', 'Real-time threat feeds'],
  ]},

  { type: 'h2', text: '3. Networking' },
  { type: 'grid', items: [
    { label: 'Routing & Switching', text: 'Static & dynamic routing, NAT, VLANs, SD-WAN' },
    { label: 'High Availability', text: 'HA clustering, Policy-Based Routing, Traffic Shaping, Multi-WAN' },
  ]},

  { type: 'h2', text: '4. Connectivity' },
  { type: 'list', items: ['**SSL VPN** — Secure remote access via browser', '**IPsec VPN** — Site-to-site VPN', '**Site-to-Site VPN** — Branch connectivity', '**Remote Access VPN** — User remote access', '**SD-WAN** — Secure branch links'] },

  { type: 'h2', text: '5. Deployment Modes' },
  { type: 'table', headers: ['Mode', 'Description'], rows: [
    ['L2 Transparent', 'Inline bridge deployment (Layer 2)'],
    ['L3 Routed', 'Default enterprise deployment (Layer 3)'],
    ['L4 Stateful', 'Tracks connections (TCP/UDP/ICMP)'],
    ['L7 Application', 'Identifies and controls apps'],
  ]},

  { type: 'h2', text: '6. Traffic Flow' },
  { type: 'code', label: 'Decision Pipeline', text: 'Identify → Inspect → Apply Policy → Allow/Block → Route → Log' },
  { type: 'grid', items: [
    { label: 'Internet-bound', text: 'User Traffic → Identify → Inspect → Policy → NAT/IPS' },
    { label: 'Inbound Services', text: 'Internet → DNAT/VIP → IPS → Security Profiles → Allowed' },
    { label: 'Remote Access VPN', text: 'Remote User → SSL/IPsec → Auth → Internal Resources' },
    { label: 'Internal Segmentation', text: 'VLAN → Inter-VLAN Policy → East-West Inspection' },
  ]},
];

const cloudCerts: CheatsheetContent = [
  { type: 'h2', text: '1. Cloud DevOps Engineer' },
  { type: 'table', headers: ['Certification', 'Provider'], rows: [
    ['Certified Kubernetes Administrator (CKA)', 'CNCF'],
    ['Certified Kubernetes Application Developer (CKAD)', 'CNCF'],
    ['HashiCorp Terraform Associate', 'HashiCorp'],
    ['AWS Certified DevOps Engineer — Professional', 'AWS'],
    ['Microsoft Certified: DevOps Engineer Expert', 'Azure'],
    ['Prometheus Certified Associate', 'CNCF'],
  ]},

  { type: 'h2', text: '2. Machine Learning / MLOps' },
  { type: 'table', headers: ['Certification', 'Provider'], rows: [
    ['Databricks Lakehouse Fundamentals', 'Databricks'],
    ['Databricks Certified Associate Developer for Spark', 'Databricks'],
    ['AWS Certified Data Engineer — Associate', 'AWS'],
    ['NVIDIA Certified Associate — Generative AI LLMs', 'NVIDIA'],
    ['Microsoft Certified: Azure AI Engineer Associate', 'Azure'],
    ['AWS Certified AI Practitioner', 'AWS'],
    ['FinOps Certified Practitioner', 'FinOps'],
  ]},

  { type: 'h2', text: '3. Cloud Solutions Architect' },
  { type: 'table', headers: ['Certification', 'Provider'], rows: [
    ['Google Cloud — Professional Cloud Architect', 'GCP'],
    ['Microsoft Certified: Azure Solutions Architect Expert', 'Azure'],
    ['AWS Certified Solutions Architect — Professional', 'AWS'],
    ['Certified Kubernetes Administrator (CKA)', 'CNCF'],
    ['HashiCorp Terraform Associate', 'HashiCorp'],
  ]},

  { type: 'h2', text: '4. Cloud AI Engineer' },
  { type: 'table', headers: ['Certification', 'Provider'], rows: [
    ['NVIDIA Certified Associate — Generative AI LLMs', 'NVIDIA'],
    ['Microsoft Certified: Azure AI Engineer Associate', 'Azure'],
    ['AWS Certified AI Practitioner', 'AWS'],
    ['NVIDIA Certified Associate — AI Infrastructure', 'NVIDIA'],
    ['Certified Kubernetes Application Developer (CKAD)', 'CNCF'],
  ]},

  { type: 'h2', text: '5. Cloud Security Specialist' },
  { type: 'table', headers: ['Certification', 'Provider'], rows: [
    ['Google Cloud — Professional Cloud Security Engineer', 'GCP'],
    ['AWS Certified Security — Specialty', 'AWS'],
    ['Certified Kubernetes Security Specialist (CKS)', 'CNCF'],
    ['Microsoft Certified: Azure Administrator Associate', 'Azure'],
    ['CompTIA Security+', 'CompTIA'],
    ['Oracle Cloud Infrastructure Security Professional', 'Oracle'],
  ]},

  { type: 'h2', text: '6. Cloud Infra & Operations' },
  { type: 'table', headers: ['Certification', 'Provider'], rows: [
    ['Microsoft Certified: Azure Administrator Associate', 'Azure'],
    ['Certified Kubernetes Administrator (CKA)', 'CNCF'],
    ['HashiCorp Terraform Associate', 'HashiCorp'],
    ['AWS Certified Solutions Architect — Professional', 'AWS'],
    ['Google Cloud Associate Cloud Engineer', 'GCP'],
  ]},

  { type: 'h2', text: '7. Site Reliability Engineer (SRE)' },
  { type: 'table', headers: ['Certification', 'Provider'], rows: [
    ['Google Cloud — Professional Cloud DevOps Engineer', 'GCP'],
    ['Microsoft Certified: Azure Solutions Architect Expert', 'Azure'],
    ['AWS Certified Solutions Architect — Professional', 'AWS'],
    ['Certified Kubernetes Administrator (CKA)', 'CNCF'],
    ['HashiCorp Terraform Associate', 'HashiCorp'],
    ['Prometheus Certified Associate', 'CNCF'],
  ]},

  { type: 'h2', text: '8. Platform Engineer' },
  { type: 'table', headers: ['Certification', 'Provider'], rows: [
    ['Microsoft Certified: Azure Administrator Associate', 'Azure'],
    ['Google Cloud Associate Cloud Engineer', 'GCP'],
    ['Red Hat Certified Engineer (RHCE)', 'Red Hat'],
    ['Certified Kubernetes Application Developer (CKAD)', 'CNCF'],
    ['Certified Kubernetes Administrator (CKA)', 'CNCF'],
    ['HashiCorp Terraform Associate', 'HashiCorp'],
    ['Prometheus Certified Associate', 'CNCF'],
  ]},
];

const windowsNetworking: CheatsheetContent = [
  { type: 'h2', text: 'ipconfig' },
  { type: 'p', text: 'Displays the current network configuration of your device.' },
  { type: 'code', text: 'C:\\> ipconfig' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['ipconfig', 'IP Address, Subnet Mask, Default Gateway'],
    ['ipconfig /all', 'MAC Address, DHCP Server, DNS Servers, Lease Time'],
    ['ipconfig /release', 'Releases current IP address'],
    ['ipconfig /renew', 'Requests new IP from DHCP'],
    ['ipconfig /flushdns', 'Clears DNS cache'],
  ]},

  { type: 'h2', text: 'nslookup' },
  { type: 'p', text: 'Used to query DNS information.' },
  { type: 'code', text: 'C:\\> nslookup google.com' },

  { type: 'h2', text: 'ping' },
  { type: 'p', text: 'Tests connectivity between your device and another device or server.' },
  { type: 'code', text: 'C:\\> ping 8.8.8.8' },

  { type: 'h2', text: 'tracert' },
  { type: 'p', text: 'Identifies the path packets take to reach the destination — pinpoints where packets drop.' },
  { type: 'code', text: 'C:\\> tracert google.com' },

  { type: 'h2', text: 'pathping' },
  { type: 'p', text: 'A combination of Ping and Tracert. Shows all hops, packet loss %, and connection quality.' },
  { type: 'code', text: 'C:\\> pathping google.com' },

  { type: 'h2', text: 'netstat' },
  { type: 'p', text: 'Displays all active connections and used ports.' },
  { type: 'code', text: 'C:\\> netstat -an' },

  { type: 'h2', text: 'arp' },
  { type: 'p', text: 'Displays the ARP Cache table — shows the relationship between IP and MAC addresses.' },
  { type: 'code', text: 'C:\\> arp -a' },

  { type: 'h2', text: 'hostname' },
  { type: 'p', text: 'Displays the current computer name. Important in Domain environments.' },
  { type: 'code', text: 'C:\\> hostname' },

  { type: 'h2', text: 'getmac' },
  { type: 'p', text: 'Displays the MAC address for all network adapters.' },
  { type: 'code', text: 'C:\\> getmac' },

  { type: 'h2', text: 'net use' },
  { type: 'p', text: 'Used to connect to a Shared Folder or Network Drive.' },
  { type: 'code', text: 'C:\\> net use Z: \\\\Server\\Files' },

  { type: 'h2', text: 'net share' },
  { type: 'p', text: 'Displays all shared resources available on the device.' },
  { type: 'code', text: 'C:\\> net share' },
];

const vmwareNutanix: CheatsheetContent = [
  { type: 'h2', text: '1. What is VMware?' },
  { type: 'p', text: 'VMware focuses on **virtualization** — ESXi, vCenter, vMotion, HA, DRS, FT. The standard for enterprise virtualization.' },
  { type: 'callout', label: 'Summary', text: 'VMware = Strong virtualization platform' },

  { type: 'h2', text: '2. What is Nutanix?' },
  { type: 'p', text: 'Nutanix focuses on **hyperconverged infrastructure (HCI)**. Combines compute, storage, and virtualization into a single software-defined platform — deploy in hours, manage from one console, scale out node by node.' },
  { type: 'callout', label: 'Summary', text: 'Nutanix = Complete infrastructure platform with built-in simplicity' },

  { type: 'h2', text: '3. VMware Strengths' },
  { type: 'list', items: ['Industry-leading virtualization', 'Advanced enterprise features', 'Strong ecosystem and integrations', 'Mature and stable environment', 'Excellent workload flexibility'] },

  { type: 'h2', text: '4. Nutanix Strengths' },
  { type: 'list', items: ['Simplified infrastructure management', 'Hyperconverged architecture', 'Easy scalability', 'Reduced operational complexity', 'Strong automation capabilities'] },

  { type: 'h2', text: '5. Comparison Table' },
  { type: 'table', headers: ['Feature', 'VMware', 'Nutanix'], rows: [
    ['Core Focus', 'Virtualization', 'Hyperconverged Infrastructure'],
    ['Management', 'vCenter', 'Prism'],
    ['Complexity', 'Enterprise-level', 'Simpler management'],
    ['Scalability', 'Moderate to Advanced', 'Extremely easy'],
    ['Storage', 'Separate SAN/NAS often required', 'Built-in distributed storage'],
    ['Learning Curve', 'Moderate', 'Easier for many admins'],
    ['Best For', 'Large enterprise virtualization', 'Modern HCI and simplified ops'],
  ]},

  { type: 'h2', text: '6. How to Choose' },
  { type: 'grid', items: [
    { label: 'Choose VMware if…', text: 'Your org already has a strong VMware ecosystem and traditional infrastructure.' },
    { label: 'Choose Nutanix if…', text: 'You want simplified ops, faster scaling, and modern HCI for greenfield deployments.' },
  ]},
];

const paloAlto: CheatsheetContent = [
  { type: 'h2', text: '1. What is NGFW?' },
  { type: 'p', text: 'A Next-Generation Firewall identifies applications, users, and content — not just IPs, ports, and protocols.' },

  { type: 'h2', text: '2. Key Features' },
  { type: 'grid', items: [
    { label: 'App-ID', text: 'Identifies applications regardless of port or protocol' },
    { label: 'User-ID', text: 'Applies security policies based on user identity' },
    { label: 'Content-ID', text: 'Controls content (URLs, files, data) based on policies' },
    { label: 'Threat Prevention', text: 'IPS, Anti-malware, Vulnerability protection' },
    { label: 'WildFire', text: 'Detects unknown threats using cloud-based sandboxing' },
    { label: 'SSL Decryption', text: 'Decrypts SSL/TLS traffic to inspect for hidden threats' },
  ]},

  { type: 'h2', text: '3. How NGFW Works' },
  { type: 'code', text: 'Traffic → Palo Alto NGFW:\n  1. Identifies Application (App-ID)\n  2. Identifies User (User-ID)\n  3. Checks Content (Content-ID)\n  4. Threat Prevention (IPS, AV, etc.)\n  5. Decrypts SSL (if needed)\n  6. Applies Security Policy\n  7. Allows or Blocks Traffic\n→ Secure Traffic' },

  { type: 'h2', text: '4. NGFW vs Traditional Firewall' },
  { type: 'table', headers: ['Aspect', 'Traditional', 'NGFW (Palo Alto)'], rows: [
    ['Works on', 'IP, Port, Protocol', 'Application, User, Content, Threat'],
    ['Visibility', 'Limited', 'Deep app & user visibility'],
    ['App Awareness', 'None', 'Full App-ID identification'],
    ['Security', 'Basic (port blocking)', 'Advanced (IPS, Anti-malware, WildFire)'],
    ['Encrypted Traffic', 'Cannot see inside', 'SSL decryption & inspection'],
  ]},

  { type: 'h2', text: '5. Benefits' },
  { type: 'list', items: ['Better visibility and control', 'Stops advanced threats', 'Improves security posture', 'Supports Zero Trust Security', 'Protects users, applications and data'] },
];

const aciFabric: CheatsheetContent = [
  { type: 'h2', text: '1. Prerequisites' },
  { type: 'h3', text: 'Physical Topology Rules' },
  { type: 'grid', items: [
    { label: '✓ Allowed', text: 'Leaf → Spine, APIC → Leaf, Leaf → Spine + Data Links' },
    { label: '✗ Not Allowed', text: 'Leaf → Leaf, Spine → Spine' },
  ]},
  { type: 'list', items: ['Same firmware version on APICs and all switches', 'APICs must be connected to different Leafs (dual-homed)', 'Initial setup script must be completed on APICs'] },

  { type: 'h2', text: '2. Initial APIC Setup' },
  { type: 'grid', items: [
    { label: 'Fabric Info', text: 'Fabric Name, Fabric ID, Number of APICs, POD ID, Controller ID/Name' },
    { label: 'Infrastructure', text: 'TEP Pool: 10.0.0.0/16, Infra VLAN: 4093, BD Multicast: 225.0.0.0/15' },
    { label: 'OOB Management', text: 'OOB Mgmt IP: 192.168.10.1/24, GW: 192.168.10.254' },
    { label: 'Admin Config', text: 'Admin Password' },
  ]},

  { type: 'h2', text: '3. Fabric Discovery Process' },
  { type: 'list', items: [
    '**Step 1:** APIC discovers first Leaf (LLDP)',
    '**Step 2:** Leaf requests TEP IP (DHCP from APIC)',
    '**Step 3:** TEP assigned, Leaf becomes ACTIVE',
    '**Step 4:** Leaf discovers Spine (LLDP)',
    '**Step 5:** Manual Leaf registration (Node ID, Name, POD)',
    '**Step 6:** Spine requests TEP via Leaf DHCP relay',
  ]},

  { type: 'h2', text: '4. IS-IS Formation (Automatic)' },
  { type: 'p', text: 'Once all nodes have TEP IPs, APIC automatically enables **IS-IS (Level-2)** on all switches. Adjacencies form over the Infra VLAN.' },
  { type: 'list', items: ['Underlay routing', 'TEP reachability', 'APIC communication'] },

  { type: 'h2', text: '5. APIC Cluster Formation' },
  { type: 'list', items: ['APIC-2/3 connects to Leaf via LLDP', 'Leaf validates **Appliance Vector (AV)**', 'If AV matches, APIC joins', 'APICs sync database and policies', 'Status → "Fully Fit"'] },

  { type: 'h2', text: '6. Key Protocols' },
  { type: 'table', headers: ['Protocol', 'Purpose'], rows: [
    ['LLDP', 'Neighbor Discovery'],
    ['DHCP', 'TEP IP Assignment'],
    ['IS-IS', 'Underlay Routing'],
    ['TCP/SSL', 'Policy Communication'],
    ['VXLAN', 'Overlay Tunneling'],
  ]},

  { type: 'h2', text: '7. Verification Commands' },
  { type: 'code', label: 'acidiag fnvread', text: 'POD  NODE  TYPE   IP          STATUS\n1    1     apic   10.0.0.1    active\n1    101   leaf   10.0.0.101  active\n1    201   spine  10.0.0.201  active' },
  { type: 'code', label: 'acidiag avread', text: 'Fabric Name: ACI Fabric1\nFabric ID:   1\nCluster Size: 3\nStatus: Fully Fit' },

  { type: 'h2', text: '8. End-to-End Flow' },
  { type: 'list', items: ['Configure APIC-1 (Setup Wizard)', 'APIC discovers first Leaf (LLDP)', 'Leaf requests TEP (DHCP)', 'Register Leaf, assign TEP', 'Leaf discovers Spine (LLDP)', 'Spine requests TEP (via Leaf DHCP relay)', 'Register Spine, assign TEP', 'All nodes get TEPs', 'IS-IS adjacency forms', 'APIC-2 and APIC-3 join cluster', 'Fabric becomes fully operational'] },
];

const vpnTypes: CheatsheetContent = [
  { type: 'h2', text: '1. Remote Access VPN' },
  { type: 'p', text: 'Connects individual users to a private network from a remote location. Used by remote employees.' },
  { type: 'code', text: 'Remote User → Internet → Company Network' },

  { type: 'h2', text: '2. Site-to-Site VPN' },
  { type: 'p', text: 'Links two or more entire office networks together over the internet. No per-user setup needed.' },
  { type: 'code', text: 'Office A → Internet → Office B' },

  { type: 'h2', text: '3. Cloud VPN' },
  { type: 'p', text: 'Secures connections between users/offices and cloud platforms. Essential as businesses move workloads off on-prem.' },
  { type: 'code', text: 'Users/Offices → Internet → Cloud Platforms (AWS, Azure, GCP)' },

  { type: 'h2', text: '4. Mobile VPN' },
  { type: 'p', text: 'Maintains a stable encrypted tunnel even when devices switch networks (WiFi → 4G → 5G). For field workers and first responders.' },
  { type: 'code', text: 'Mobile User (WiFi/4G/5G) → Internet → Company Network' },

  { type: 'h2', text: '5. SSL/TLS VPN' },
  { type: 'p', text: 'Runs entirely through a web browser using HTTPS — no software installation required. For contractors or BYOD environments.' },
  { type: 'code', text: 'Web Browser → HTTPS → Company Network' },

  { type: 'h2', text: '6. Split Tunnel VPN' },
  { type: 'p', text: 'Routes only specific traffic through the VPN; the rest goes through regular internet. Work traffic stays encrypted, browsing stays fast.' },
  { type: 'code', text: 'Work Traffic → VPN | Other Traffic → Internet' },
];

const linuxCommands: CheatsheetContent = [
  { type: 'h2', text: 'Navigation & Basics' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['ls', 'List directory contents'],
    ['ll', 'Long listing (with permissions)'],
    ['cd', 'Change directory'],
    ['pwd', 'Print working directory'],
  ]},

  { type: 'h2', text: 'File Operations' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['mkdir', 'Make directory'],
    ['rmdir', 'Remove empty directory'],
    ['rm', 'Remove files or directories'],
    ['cp', 'Copy files or directories'],
    ['mv', 'Move or rename files/directories'],
    ['touch', 'Create an empty file / update timestamp'],
  ]},

  { type: 'h2', text: 'File Viewing & Editing' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['cat', 'Display file contents'],
    ['less', 'View file contents interactively'],
    ['head', 'Show first 10 lines of a file'],
    ['tail', 'Show last 10 lines of a file'],
    ['nano', 'Text editor (nano)'],
    ['vi / vim', 'Text editor (vi/vim)'],
  ]},

  { type: 'h2', text: 'Text Processing' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['grep', 'Search text in files'],
    ['echo', 'Print text to terminal'],
    ['>', 'Redirect output to a file'],
    ['>>', 'Append output to a file'],
    ['|', 'Pipe one command output to another'],
  ]},

  { type: 'h2', text: 'Finding Things' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['find', 'Find files in directory hierarchy'],
    ['locate', 'Find files by name (quick search)'],
    ['which', 'Locate command or binary'],
    ['whereis', 'Locate binary, source, man page'],
  ]},

  { type: 'h2', text: 'Compression & Archives' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['tar', 'Create / extract tar archives'],
    ['gzip / gunzip', 'Compress / decompress files'],
    ['zip / unzip', 'Compress / decompress zip files'],
  ]},

  { type: 'h2', text: 'System Info' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['df', 'Disk space usage'],
    ['du', 'Disk usage of files/directories'],
    ['free', 'Memory usage'],
    ['top', 'Real-time process monitoring'],
    ['htop', 'Interactive process viewer'],
  ]},

  { type: 'h2', text: 'Processes & Services' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['ps', 'Process status (e.g. ps -ef)'],
    ['kill', 'Terminate a process (e.g. kill -9 <PID>)'],
    ['systemctl', 'Manage systemd services'],
    ['service', 'Manage services (SysV)'],
  ]},

  { type: 'h2', text: 'Networking' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['netstat', 'Network connections (netstat -tulnp)'],
    ['ss', 'Socket statistics — modern netstat'],
    ['ip', 'Show/modify network interfaces (ip a)'],
    ['ping', 'Test connectivity'],
    ['curl', 'Transfer data from URLs'],
    ['wget', 'Download files from the web'],
    ['ssh', 'Secure shell to remote host'],
    ['scp', 'Secure copy files to remote host'],
  ]},

  { type: 'h2', text: 'Permissions & Users' },
  { type: 'table', headers: ['Command', 'Description'], rows: [
    ['chmod', 'Change file permissions'],
    ['chown', 'Change file owner/group'],
    ['useradd', 'Add a new user'],
    ['usermod', 'Modify user account'],
  ]},

  { type: 'h2', text: 'Keyboard Shortcuts' },
  { type: 'table', headers: ['Shortcut', 'Action'], rows: [
    ['Tab', 'Auto-complete'],
    ['Ctrl + C', 'Cancel'],
    ['Ctrl + Z', 'Suspend'],
    ['Ctrl + D', 'Logout / exit'],
  ]},
];

export const CONTENT: Record<string, CheatsheetContent> = {
  'eigrp': eigrp,
  'ospf': ospf,
  'bgp': bgp,
  'datacenter': datacenter,
  'fortigate': fortigate,
  'cloud-certifications': cloudCerts,
  'windows-networking': windowsNetworking,
  'vmware-vs-nutanix': vmwareNutanix,
  'palo-alto': paloAlto,
  'aci-fabric-discovery': aciFabric,
  'vpn-types': vpnTypes,
  'linux-commands': linuxCommands,
};
