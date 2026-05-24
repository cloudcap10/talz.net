# BGP — Border Gateway Protocol

## 1) What is BGP?

BGP is a **Path Vector** protocol used to exchange routing information between **Autonomous Systems (AS)** on the Internet. It is a Layer 3 protocol and is the backbone of Internet routing. It makes routing decisions based on **policies**.

---

## 2) How BGP Works

- BGP speakers (routers) establish **TCP connection on port 179**.
- BGP neighbors exchange updates and maintain routing information.
- BGP selects the best path based on **attributes (policies)**.
- Only the best path is installed in the routing table.
- BGP is a **policy-based** protocol.

---

## 3) BGP Topology (Example)

```
Internet
    |
ISP 1 (AS 65001)          ISP 2 (AS 65002)
    \                       /
     eBGP              eBGP
      \               /
      (AS 65010) Router
            |
        LAN 192.168.10.0/24
            |
    +------+------+
    |      |      |
  Host A  Host B Host C
```

---

## 4) BGP States

| State | Description |
|-------|-------------|
| **Idle** | No BGP connection |
| **Connect** | TCP connection is being established |
| **OpenSent** | Waiting for BGP Open message |
| **OpenConfirm** | Waiting for Open message acknowledgment |
| **Established** | BGP session is established, routes are exchanged |

---

## 5) BGP Timers (Default)

| Timer | Default |
|-------|---------|
| **Keepalive Time** | 60 seconds |
| **Hold Time** | 180 seconds |
| **Update Timer** | 30 seconds |
| **Min Route Adv. Interval** | 30 seconds |

---

## 6) BGP Path Attributes (Decision Factors)

| Attribute | Description |
|-----------|-------------|
| **Weight** | Cisco local attribute (highest first) |
| **Local Preference** | Preferred path within AS |
| **AS Path** | Shorter path is preferred |
| **Origin** | IGP < EGP < Incomplete |
| **MED (Multi Exit Disc)** | Lower is preferred |
| **Next Hop** | Reachability of next hop |
| **Community** | Used for policy control |
| **Router ID** | Used as tiebreaker |

---

## 7) BGP Best Path Selection Order

1. Weight (Cisco specific)
2. Local Preference
3. Locally originated
4. AS Path (shortest)
5. Origin (IGP, EGP, Incomplete)
6. MED (lowest)
7. eBGP path preferred over iBGP
8. Lowest IGP cost to Next Hop
9. Oldest path
10. Lowest Router ID
11. Lowest Neighbor IP address

---

## 8) BGP Message Types

| Message | Purpose |
|---------|---------|
| **OPEN** | Establishes BGP connection |
| **UPDATE** | Advertises or withdraws routes |
| **KEEPALIVE** | Maintains BGP session |
| **NOTIFICATION** | Reports errors and closes session |

---

## 9) BGP vs EIGRP vs OSPF

| Feature | BGP | EIGRP | OSPF |
|---------|-----|-------|------|
| **Type** | Path Vector | Hybrid | Link State |
| **Protocol** | Inter-Domain (WAN) | Intra-Domain (LAN/WAN) | Intra-Domain (LAN/WAN) |
| **Standard** | Open | Cisco Proprietary | Open Standard |
| **Algorithm** | Policy Based | DUAL | SPF (Dijkstra) |
| **Convergence** | Slower | Fast | Fast |
| **Best Path Decision** | Multiple Attributes | Composite Metric | Cost (Based on Bandwidth) |

---

## 10) BGP Advantages

- Scalability (Internet level routing).
- Policy-based routing control.
- Supports CIDR and VLSM.
- Efficient in handling multiple tasks.
- Loop prevention with AS Path.
- Ideal for multi-homed networks.

---

## 11) BGP Network Types

| Type | Description |
|------|-------------|
| **eBGP** | Between different AS |
| **iBGP** | Within the same AS |
| **iBGP Full Mesh** | Every router peers with every other router in AS |
| **iBGP Route Reflector** | Reduces full mesh complexity |

---

## 12) Common BGP Commands (Cisco)

| Command | Purpose |
|---------|---------|
| `router bgp <AS-NUMBER>` | Enter BGP config |
| `neighbor <IP> remote-as <AS-NUMBER>` | Set BGP neighbor |
| `network <NETWORK> mask <MASK>` | Advertise network |
| `neighbor <IP> next-hop-self` | Set next hop to self |
| `show ip bgp summary` | Check neighbor status |
| `show ip bgp` | Check learned routes |
| `show ip bgp neighbors` | Check neighbor details |
| `clear ip bgp * soft in` | Soft reset inbound |
| `clear ip bgp <IP> soft out` | Soft reset outbound |

---

## 13) BGP Configuration (Example)

### Router R1 (AS 65010)

```
router bgp 65010
 neighbor 192.168.12.2 remote-as 65020  ! eBGP neighbor
 network 192.168.10.0 mask 255.255.255.0
 neighbor 192.168.12.2 next-hop-self
```

### Router R2 (AS 65020)

```
router bgp 65020
 neighbor 192.168.12.1 remote-as 65010
 network 192.168.20.0 mask 255.255.255.0
```

---

## 14) BGP Interview Questions (Quick Answers)

| # | Question | Answer |
|---|----------|--------|
| Q1 | What is BGP? | Path Vector protocol between AS |
| Q2 | Which port does BGP use? | TCP port 179 |
| Q3 | What are BGP states? | Idle, Connect, OpenSent, OpenConfirm, Established |
| Q4 | Difference between eBGP and iBGP? | eBGP = between AS, iBGP = within same AS |
| Q5 | Default BGP timers? | Keepalive 60s, Hold 180s, Update 30s, Min Adv 30s |
| Q6 | Attribute to prefer path within AS? | Local Preference |
| Q7 | Attribute to avoid routing loops? | AS Path |
| Q8 | What is Next Hop? | IP of next router to reach destination |
| Q9 | What is Route Reflector? | Reduces iBGP full mesh by reflecting routes |
| Q10 | What is MED? | Multi Exit Discriminator — compare paths from same neighbor AS |

---

## 15) BGP Troubleshooting

- Use `show ip bgp summary` — Check neighbor status.
- Use `show ip bgp` — Check learned routes.
- Use `show ip bgp neighbors` — Check neighbor details.
- Use `debug ip bgp events` — Debug BGP events.
- Check TCP port 179 connectivity.
- Verify configuration and AS number.
- Check route policies and filters.

---

## 16) BGP Advanced Concepts

| Concept | Description |
|---------|-------------|
| **Communities** | Tag routes for policy control between AS |
| **Route Distinguisher** | Used in BGP VPN to make routes unique |
| **Confederations** | Divide large AS into sub-AS for scalability |
| **Graceful Restart** | Maintains forwarding during BGP restart |
| **BGP Multipath** | Allows multiple paths if equal cost |

---

> **Tip:** Always use proper policies and filters in BGP to control routes and avoid routing table bloat.
