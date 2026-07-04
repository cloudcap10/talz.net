import type { CheatsheetContent } from './cheatsheet-content';

const networkAutomation: CheatsheetContent = [
  { type: 'h2', text: '1. Why Automate?' },
  { type: 'p', text: 'Manual CLI changes do not scale past a handful of devices and are the leading cause of outages from typos and drift. Automation gives you **consistency, speed, audit trails, and rollback** — the config becomes code you can review and version.' },
  { type: 'grid', items: [
    { label: 'Config drift', text: 'Scheduled backups + diffs catch unauthorized or forgotten changes' },
    { label: 'Mass changes', text: 'Push a VLAN or ACL update to 200 switches in minutes, not days' },
    { label: 'Compliance', text: 'Assert NTP, SNMP, AAA settings across the fleet automatically' },
    { label: 'Documentation', text: 'Inventory and interface reports generated from live state' },
  ]},

  { type: 'h2', text: '2. The Tool Landscape' },
  { type: 'table', headers: ['Tool', 'Type', 'Best for'], rows: [
    ['Netmiko', 'Python library (SSH)', 'Sending commands / configs to CLI devices, multi-vendor'],
    ['NAPALM', 'Python library (API/SSH)', 'Structured getters (facts, interfaces, BGP) + config replace'],
    ['Nornir', 'Python framework', 'Inventory + concurrent task execution, pure Python (no DSL)'],
    ['Ansible', 'Framework (YAML DSL)', 'Agentless playbooks, large module ecosystem, idempotency'],
    ['Terraform', 'IaC (declarative)', 'Cloud networking (VPCs, LBs, firewalls), state-driven'],
    ['pyATS / Genie', 'Cisco test framework', 'Parsing show output, network state validation'],
  ]},
  { type: 'callout', label: 'Rule of thumb', text: 'Ansible for orchestrated changes and compliance, Netmiko/Nornir for custom Python logic, NAPALM when you want vendor-neutral structured data.' },

  { type: 'h2', text: '3. Netmiko Essentials' },
  { type: 'code', label: 'Backup configs from a device list', text: "from netmiko import ConnectHandler\n\ndevices = [\n    {\n        'device_type': 'cisco_ios',\n        'host': '10.0.0.1',\n        'username': 'admin',\n        'password': 'secret',\n    },\n]\n\nfor device in devices:\n    with ConnectHandler(**device) as conn:\n        hostname = conn.send_command('show run | include hostname')\n        config = conn.send_command('show running-config')\n        with open(f\"{device['host']}.cfg\", 'w') as f:\n            f.write(config)" },
  { type: 'table', headers: ['device_type', 'Platform'], rows: [
    ['cisco_ios', 'Cisco IOS / IOS-XE'],
    ['cisco_nxos', 'Cisco Nexus'],
    ['arista_eos', 'Arista EOS'],
    ['juniper_junos', 'Juniper JunOS'],
    ['fortinet', 'FortiGate'],
    ['alcatel_aos', 'Alcatel-Lucent OmniSwitch'],
  ]},

  { type: 'h2', text: '4. Ansible for Network Devices' },
  { type: 'code', label: 'playbook.yml — save config + set NTP', text: "- name: Baseline IOS devices\n  hosts: switches\n  gather_facts: false\n  tasks:\n    - name: Ensure NTP server\n      cisco.ios.ios_config:\n        lines:\n          - ntp server 10.0.0.123\n\n    - name: Save running to startup\n      cisco.ios.ios_config:\n        save_when: modified" },
  { type: 'list', items: ['**Idempotent** — running twice makes no second change', 'Inventory groups map to device roles (core, access, edge)', 'Use **ansible-vault** for credentials, never plaintext', '`--check --diff` = dry run showing what would change'] },

  { type: 'h2', text: '5. Modern Interfaces: Beyond Screen-Scraping' },
  { type: 'table', headers: ['Interface', 'Transport', 'Data'], rows: [
    ['NETCONF', 'SSH (port 830)', 'XML, YANG models, transactions + rollback'],
    ['RESTCONF', 'HTTPS', 'JSON/XML over REST, YANG models'],
    ['gNMI', 'gRPC / HTTP2', 'Streaming telemetry + config, protobuf'],
    ['CLI scraping', 'SSH', 'Unstructured text — parse with TextFSM / Genie'],
  ]},
  { type: 'callout', label: 'Telemetry shift', text: 'SNMP polling every 5 minutes is being replaced by gNMI **streaming telemetry** — the device pushes counters the moment they change.' },

  { type: 'h2', text: '6. Source of Truth & GitOps' },
  { type: 'list', items: ['**NetBox / Nautobot** = intended state: devices, IPs, VLANs, circuits', 'Configs generated from **Jinja2 templates** + source-of-truth data', 'Changes go through **Git pull requests** — peer review before production', 'CI pipeline validates (lint, dry-run, lab test) before deploy', 'Live network is compared to intended state; drift raises alerts'] },
  { type: 'code', label: 'Jinja2 template snippet', text: '{% for vlan in vlans %}\nvlan {{ vlan.id }}\n name {{ vlan.name }}\n{% endfor %}' },

  { type: 'h2', text: '7. Where to Start (Pragmatic Path)' },
  { type: 'list', items: ['1. **Read-only first**: automated backups and inventory reports — zero risk, instant value', '2. Diff configs daily; alert on drift', '3. Automate one boring change type (VLANs, descriptions, NTP)', '4. Add validation: pre/post checks around every change', '5. Move templates + data into Git; require reviews', '6. Only then: full zero-touch provisioning'] },
  { type: 'callout', label: 'Interview favorite', text: '"How do you roll back a bad automated change?" — config archive + `configure replace` (IOS), commit rollback (JunOS), or re-render the previous Git version and push.' },
];

const kubernetesNetworking: CheatsheetContent = [
  { type: 'h2', text: '1. The Kubernetes Network Model' },
  { type: 'list', items: ['Every **Pod gets its own IP** — no NAT between pods', 'All pods can reach all pods across nodes (flat network)', 'Agents on a node (kubelet) can reach all pods on that node', 'Implementation is delegated to a **CNI plugin**'] },
  { type: 'callout', label: 'Mental model', text: 'Think of the cluster as one big flat L3 network where every pod is a host. Everything else (Services, Ingress, NetworkPolicy) is built on top.' },

  { type: 'h2', text: '2. CNI Plugins Compared' },
  { type: 'table', headers: ['CNI', 'Dataplane', 'Notable'], rows: [
    ['Calico', 'L3 / eBPF option', 'BGP to physical network, rich NetworkPolicy'],
    ['Cilium', 'eBPF', 'L7 policy, Hubble observability, kube-proxy replacement'],
    ['Flannel', 'VXLAN overlay', 'Simple, no NetworkPolicy by itself'],
    ['AWS VPC CNI', 'Native VPC IPs', 'Pods get real VPC IPs — subnet sizing matters'],
    ['Azure CNI', 'Native VNet IPs', 'Same idea in AKS'],
  ]},
  { type: 'callout', label: 'For network engineers', text: 'Calico speaks **BGP** — you can peer top-of-rack switches with cluster nodes and route pod CIDRs natively. Familiar territory.' },

  { type: 'h2', text: '3. Service Types' },
  { type: 'table', headers: ['Type', 'What it does', 'Use'], rows: [
    ['ClusterIP', 'Virtual IP reachable only inside the cluster', 'Default — service-to-service'],
    ['NodePort', 'Opens a port (30000-32767) on every node', 'Quick external access, labs'],
    ['LoadBalancer', 'Provisions an external LB (cloud or MetalLB)', 'Production external services'],
    ['ExternalName', 'DNS CNAME to an external service', 'Aliasing external dependencies'],
    ['Headless', 'No VIP; DNS returns pod IPs directly', 'StatefulSets, databases'],
  ]},
  { type: 'code', label: 'Service + how kube-proxy implements it', text: 'kubectl get svc my-api\n# kube-proxy programs iptables/IPVS (or Cilium eBPF) rules:\n# ClusterIP 10.96.4.7:80 -> pod endpoints 10.244.1.5:8080, 10.244.2.9:8080' },

  { type: 'h2', text: '4. Ingress & Gateway API' },
  { type: 'list', items: ['**Ingress** = L7 (HTTP) routing: host/path rules to Services', 'Needs an **ingress controller** (NGINX, Traefik, HAProxy, cloud-native)', 'TLS termination happens at the controller', '**Gateway API** is the successor — role-separated, protocol-aware, more expressive'] },
  { type: 'code', label: 'Minimal Ingress', text: 'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: web\nspec:\n  rules:\n    - host: app.example.com\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: web\n                port:\n                  number: 80' },

  { type: 'h2', text: '5. DNS Inside the Cluster' },
  { type: 'table', headers: ['Name', 'Resolves to'], rows: [
    ['my-svc.my-ns.svc.cluster.local', 'Service ClusterIP'],
    ['my-svc.my-ns', 'Same (short form from another namespace)'],
    ['my-svc', 'Same (from the same namespace)'],
    ['pod-ip.my-ns.pod.cluster.local', 'Individual pod'],
  ]},
  { type: 'p', text: '**CoreDNS** runs as a Deployment; every pod\'s /etc/resolv.conf points at its Service VIP. Most "app can\'t reach database" tickets are DNS or NetworkPolicy.' },

  { type: 'h2', text: '6. NetworkPolicy = Microsegmentation' },
  { type: 'code', label: 'Allow only frontend -> backend on 8080', text: 'apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: backend-allow-frontend\nspec:\n  podSelector:\n    matchLabels:\n      app: backend\n  ingress:\n    - from:\n        - podSelector:\n            matchLabels:\n              app: frontend\n      ports:\n        - port: 8080' },
  { type: 'list', items: ['Default = **all traffic allowed**; policies are additive allow-lists', 'An empty ingress policy on a pod = deny all inbound', 'Enforced by the CNI — Flannel alone ignores them', 'Think of it as **distributed stateful firewall rules** per label'] },

  { type: 'h2', text: '7. Troubleshooting Toolkit' },
  { type: 'table', headers: ['Command', 'Purpose'], rows: [
    ['kubectl get pods -o wide', 'Pod IPs and nodes'],
    ['kubectl get endpoints my-svc', 'Does the Service actually have backends?'],
    ['kubectl exec -it pod -- nslookup my-svc', 'DNS resolution from inside'],
    ['kubectl exec -it pod -- curl -v ip:port', 'Direct pod-to-pod reachability'],
    ['kubectl logs -n kube-system -l k8s-app=kube-dns', 'CoreDNS logs'],
    ['kubectl describe networkpolicy', 'What policy is blocking you'],
  ]},
  { type: 'callout', label: 'Debug order', text: 'Endpoints exist? → DNS resolves? → direct pod IP reachable? → NetworkPolicy? → CNI/node routing. Bottom of that list is rarely the problem.' },
];

const vxlanEvpn: CheatsheetContent = [
  { type: 'h2', text: '1. Why VXLAN?' },
  { type: 'p', text: 'Classic VLANs top out at **4094 IDs** and require stretching L2 (STP, broadcast storms) across the DC. VXLAN encapsulates L2 frames in **UDP/IP**, giving **16 million** segment IDs (VNIs) over a routed L3 underlay — scale without spanning tree.' },
  { type: 'table', headers: ['Term', 'Meaning'], rows: [
    ['VNI', 'VXLAN Network Identifier — 24-bit segment ID (the "VLAN" of VXLAN)'],
    ['VTEP', 'VXLAN Tunnel Endpoint — encapsulates/decapsulates (switch or hypervisor)'],
    ['Underlay', 'Plain routed IP fabric (OSPF/IS-IS + ECMP) carrying VXLAN packets'],
    ['Overlay', 'The virtual L2/L3 segments running on top'],
    ['UDP 4789', 'Standard VXLAN destination port'],
  ]},

  { type: 'h2', text: '2. Why EVPN as the Control Plane?' },
  { type: 'list', items: ['Original VXLAN used **flood-and-learn** — BUM traffic everywhere, slow, fragile', '**EVPN (BGP address family l2vpn evpn)** advertises MAC/IP reachability instead', 'VTEPs learn remote MACs from BGP, not flooding', 'Adds ARP suppression, multihoming, MAC mobility', 'Same protocol engineers already run — it is just BGP'] },
  { type: 'table', headers: ['EVPN Route Type', 'Carries'], rows: [
    ['Type 2', 'MAC/IP advertisement (host routes)'],
    ['Type 3', 'IMET — BUM traffic replication'],
    ['Type 5', 'IP prefix routes (inter-subnet, external)'],
  ]},

  { type: 'h2', text: '3. The Standard Fabric: Spine-Leaf' },
  { type: 'code', text: '        spine1        spine2\n        /    \\        /    \\\n   leaf1  leaf2  leaf3  leaf4     <- VTEPs\n    |       |      |      |\n  hosts   hosts  hosts  hosts\n\nUnderlay: eBGP or OSPF, ECMP everywhere\nOverlay:  iBGP EVPN, spines as route reflectors' },
  { type: 'list', items: ['Every leaf is equidistant (2 hops) from every other leaf', 'Add bandwidth by adding spines; add ports by adding leaves', 'No STP — all links forwarding via L3 ECMP', 'Hosts/VMs attach to leaves; VNIs stretch wherever needed'] },

  { type: 'h2', text: '4. Gateway Models' },
  { type: 'table', headers: ['Model', 'How it works'], rows: [
    ['Centralized', 'One pair of border leaves routes between VNIs — simple, bottleneck'],
    ['Distributed Anycast GW', 'Every leaf hosts the same gateway MAC/IP — routing at first hop, standard today'],
    ['Symmetric IRB', 'Both ingress and egress leaf route via a transit L3VNI (most common)'],
    ['Asymmetric IRB', 'Ingress leaf routes directly to destination VNI — needs all VNIs everywhere'],
  ]},

  { type: 'h2', text: '5. NX-OS Configuration Skeleton' },
  { type: 'code', label: 'Leaf essentials (Cisco Nexus)', text: 'feature nv overlay\nfeature vn-segment-vlan-based\nnv overlay evpn\n\nvlan 100\n  vn-segment 10100\n\ninterface nve1\n  source-interface loopback1\n  host-reachability protocol bgp\n  member vni 10100\n    ingress-replication protocol bgp\n\nrouter bgp 65001\n  address-family l2vpn evpn\n  neighbor 10.0.0.1 remote-as 65000\n    address-family l2vpn evpn\n      send-community extended' },

  { type: 'h2', text: '6. Verification Commands' },
  { type: 'table', headers: ['Command (NX-OS)', 'Shows'], rows: [
    ['show nve peers', 'Remote VTEPs discovered'],
    ['show nve vni', 'VNI status and mode'],
    ['show bgp l2vpn evpn', 'EVPN routes (Type 2/3/5)'],
    ['show l2route evpn mac all', 'MACs learned via EVPN vs local'],
    ['show ip arp suppression-cache', 'ARP suppression entries'],
  ]},

  { type: 'h2', text: '7. Where You Meet It' },
  { type: 'list', items: ['**Cisco ACI** — VXLAN/EVPN under the hood, APIC abstracts it', '**NSX, OVN** — hypervisor VTEPs, same encapsulation', 'EVPN also runs **DC interconnect** and is replacing MPLS L2VPN in some WANs', 'Interview staple: "walk me through a packet from host A on leaf1 to host B on leaf3"'] },
  { type: 'callout', label: 'That packet walk', text: 'Host A ARPs → leaf1 suppresses/answers from EVPN cache → frame hits leaf1, encapped in VXLAN (VNI + leaf3 VTEP IP) → routed over spine via ECMP → leaf3 decaps → delivers to host B. Return traffic mirrors it.' },
];

const zeroTrust: CheatsheetContent = [
  { type: 'h2', text: '1. What Zero Trust Actually Means' },
  { type: 'p', text: '"Never trust, always verify." No implicit trust from **network location** — being on the corporate LAN or VPN grants nothing. Every request is authenticated, authorized, and encrypted, every time, based on **identity + device posture + context**.' },
  { type: 'table', headers: ['Old model (castle-and-moat)', 'Zero Trust'], rows: [
    ['Trusted inside, untrusted outside', 'No trusted network — verify everything'],
    ['VPN grants broad network access', 'Per-application, least-privilege access'],
    ['Auth once at the perimeter', 'Continuous verification, short-lived sessions'],
    ['Lateral movement easy after breach', 'Microsegmentation limits blast radius'],
    ['IP address = identity', 'User + device + context = identity'],
  ]},

  { type: 'h2', text: '2. Core Principles (NIST 800-207)' },
  { type: 'list', items: ['All data sources and services are **resources**', 'All communication secured **regardless of location**', 'Access granted **per-session**, least privilege', 'Access decided by **dynamic policy** — identity, device health, behavior', 'Integrity and posture of all assets **continuously monitored**', 'Authentication and authorization **strictly enforced before access**', 'Collect telemetry, improve posture'] },

  { type: 'h2', text: '3. The Acronym Family' },
  { type: 'table', headers: ['Term', 'What it is'], rows: [
    ['ZTNA', 'Zero Trust Network Access — per-app access broker, the VPN replacement'],
    ['SASE', 'Secure Access Service Edge — SD-WAN + cloud security stack (SWG, CASB, ZTNA, FWaaS) as one cloud service'],
    ['SSE', 'Security Service Edge — SASE minus the SD-WAN (just the security half)'],
    ['SWG', 'Secure Web Gateway — inspects/filters user web traffic'],
    ['CASB', 'Cloud Access Security Broker — visibility/control over SaaS usage'],
    ['FWaaS', 'Firewall as a Service — cloud-delivered NGFW'],
  ]},
  { type: 'callout', label: 'Vendor reality', text: 'Zscaler, Cloudflare (Access/WARP), Palo Alto Prisma, Netskope, Fortinet — all sell the same shape: connector agents + cloud policy enforcement points.' },

  { type: 'h2', text: '4. ZTNA vs VPN' },
  { type: 'table', headers: ['Aspect', 'VPN', 'ZTNA'], rows: [
    ['Access scope', 'Whole network segment', 'One application per policy'],
    ['Exposure', 'Open inbound port (attack surface)', 'Outbound-only connectors; apps invisible'],
    ['Trust', 'IP/credential at connect time', 'Identity + device posture, continuously'],
    ['Lateral movement', 'Possible once in', 'Blocked by design'],
    ['User experience', 'Backhaul, slow', 'Direct-to-cloud, closer to the app'],
  ]},

  { type: 'h2', text: '5. Microsegmentation for Network Engineers' },
  { type: 'list', items: ['Segment by **workload/application**, not just VLAN/subnet', 'East-west enforcement: host firewalls, NSX/ACI contracts, K8s NetworkPolicy', 'Start with **visibility** — map real flows before writing policy', 'Default-deny between tiers; allow only documented flows', 'Tags/labels replace IP addresses as the policy language'] },
  { type: 'callout', label: 'ACI tie-in', text: 'Cisco ACI EPGs + contracts and Kubernetes NetworkPolicy are both microsegmentation — same concept, different layer.' },

  { type: 'h2', text: '6. Identity Is the New Perimeter' },
  { type: 'table', headers: ['Building block', 'Role'], rows: [
    ['IdP (Entra ID, Okta)', 'Single source of user identity, SSO'],
    ['MFA / passkeys', 'Phishing-resistant authentication'],
    ['Device posture', 'Disk encryption, EDR present, OS patched — checked before access'],
    ['Conditional access', 'Policy engine: who + what device + where + risk score'],
    ['PAM', 'Privileged access with just-in-time elevation and recording'],
  ]},

  { type: 'h2', text: '7. Pragmatic Adoption Path' },
  { type: 'list', items: ['1. MFA everywhere (biggest single win)', '2. Inventory apps and who actually needs them', '3. Put critical internal apps behind ZTNA; retire broad VPN scopes gradually', '4. Device posture checks as an access condition', '5. Microsegment the crown-jewel systems first', '6. Log everything centrally; feed detections back into policy'] },
  { type: 'callout', label: 'Interview framing', text: '"How would you migrate off VPN?" — run ZTNA alongside VPN, move apps one at a time, shrink VPN scope as each app moves, kill it when the list is empty.' },
];

export const MODERN_CONTENT: Record<string, CheatsheetContent> = {
  'network-automation': networkAutomation,
  'kubernetes-networking': kubernetesNetworking,
  'vxlan-evpn': vxlanEvpn,
  'zero-trust': zeroTrust,
};
