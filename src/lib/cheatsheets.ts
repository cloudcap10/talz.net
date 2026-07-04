export interface Cheatsheet {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  color: string;
}

export const CHEATSHEETS: Cheatsheet[] = [
  { slug: 'eigrp', title: 'EIGRP', subtitle: 'Enhanced Interior Gateway Routing Protocol', description: 'Cisco proprietary IGP using DUAL algorithm — components, metrics, timers, configuration, and interview questions.', tags: ['Cisco', 'DUAL', 'IGP'], color: 'bg-brutal-orange' },
  { slug: 'ospf', title: 'OSPF', subtitle: 'Open Shortest Path First', description: 'Link-State IGP using Dijkstra\'s SPF — areas, LSA types, DR/BDR, cost calculation, and configuration.', tags: ['Open Standard', 'SPF', 'IGP'], color: 'bg-brutal-green' },
  { slug: 'bgp', title: 'BGP', subtitle: 'Border Gateway Protocol', description: 'Path Vector protocol for Internet routing — attributes, best path selection, states, and policies.', tags: ['Exterior', 'Path Vector', 'Internet'], color: 'bg-brutal-blue' },
  { slug: 'datacenter', title: 'Data Center', subtitle: 'Facilities & Infrastructure', description: 'Data center fundamentals — components, types, importance, and key concepts for networking engineers.', tags: ['Infrastructure', 'Virtualization', 'Cloud'], color: 'bg-brutal-purple' },
  { slug: 'fortigate', title: 'FortiGate', subtitle: 'Fortinet NGFW', description: 'Core capabilities — security, networking, VPN, SD-WAN, segmentation, deployment modes, and traffic flow.', tags: ['NGFW', 'VPN', 'SD-WAN'], color: 'bg-brutal-red' },
  { slug: 'cloud-certifications', title: 'Cloud Certs', subtitle: 'Role-Based Roadmap 2026', description: 'Certification paths for DevOps, MLOps, Architect, AI Engineer, Security, SRE, and Platform Engineering.', tags: ['AWS', 'Azure', 'GCP', 'K8s'], color: 'bg-brutal-cyan' },
  { slug: 'windows-networking', title: 'Windows Net', subtitle: 'CLI Networking Commands', description: 'Essential Windows networking commands — ipconfig, ping, tracert, netstat, arp, nslookup, and more.', tags: ['Windows', 'CLI', 'Troubleshooting'], color: 'bg-brutal-blue' },
  { slug: 'vmware-vs-nutanix', title: 'VMware vs Nutanix', subtitle: 'Virtualization vs HCI', description: 'Compare VMware virtualization and Nutanix hyperconverged infrastructure — strengths, differences, and use cases.', tags: ['VMware', 'Nutanix', 'HCI'], color: 'bg-brutal-purple' },
  { slug: 'palo-alto', title: 'Palo Alto NGFW', subtitle: 'Next-Generation Firewall', description: 'Palo Alto NGFW core concepts: App-ID, User-ID, Content-ID, threat prevention, SSL decryption, and NGFW vs traditional firewall.', tags: ['NGFW', 'Palo Alto', 'Security'], color: 'bg-brutal-orange' },
  { slug: 'aci-fabric-discovery', title: 'ACI Fabric Discovery', subtitle: 'Cisco ACI Fabric Bring-Up', description: 'Complete Cisco ACI fabric discovery process — APIC setup, LLDP neighbor discovery, DHCP TEP assignment, IS-IS underlay, and cluster formation.', tags: ['Cisco', 'ACI', 'Data Center'], color: 'bg-brutal-green' },
  { slug: 'vpn-types', title: 'VPN Types', subtitle: '6 Types Explained', description: 'Remote Access, Site-to-Site, Cloud VPN, Mobile VPN, SSL/TLS VPN, and Split Tunnel — use cases and strengths.', tags: ['VPN', 'Security', 'Remote Access'], color: 'bg-brutal-red' },
  { slug: 'linux-commands', title: 'Linux Commands', subtitle: '50 DevOps Essentials', description: '50 most used Linux commands for DevOps and Cloud Engineers — navigation, networking, processes, permissions, and compression.', tags: ['Linux', 'DevOps', 'CLI'], color: 'bg-main' },
  { slug: 'network-automation', title: 'Network Automation', subtitle: 'Python · Ansible · GitOps', description: 'Netmiko, NAPALM, Nornir, Ansible, NETCONF/gNMI, and the GitOps workflow — a pragmatic path from manual CLI to automated fleets.', tags: ['Python', 'Ansible', 'NetDevOps'], color: 'bg-brutal-green' },
  { slug: 'kubernetes-networking', title: 'K8s Networking', subtitle: 'CNI · Services · Ingress', description: 'The Kubernetes network model for network engineers — CNI plugins, Service types, Ingress, cluster DNS, NetworkPolicy, and troubleshooting.', tags: ['Kubernetes', 'CNI', 'Cloud Native'], color: 'bg-brutal-blue' },
  { slug: 'vxlan-evpn', title: 'VXLAN / EVPN', subtitle: 'Modern DC Fabric', description: 'Spine-leaf fabrics with VXLAN overlay and BGP EVPN control plane — VTEPs, route types, anycast gateways, config, and the packet walk.', tags: ['VXLAN', 'EVPN', 'Data Center'], color: 'bg-brutal-purple' },
  { slug: 'zero-trust', title: 'Zero Trust', subtitle: 'ZTNA · SASE · Microsegmentation', description: 'Zero Trust for network engineers — NIST principles, ZTNA vs VPN, SASE/SSE landscape, microsegmentation, and a pragmatic adoption path.', tags: ['Security', 'ZTNA', 'SASE'], color: 'bg-brutal-red' },
];
