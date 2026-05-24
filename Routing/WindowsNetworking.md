# Essential Windows Networking Commands

## ipconfig

Displays the current network configuration of your device.

```
C:\> ipconfig
```

| Switch | Description |
|--------|-------------|
| `ipconfig` | IP Address, Subnet Mask, Default Gateway |
| `ipconfig /all` | MAC Address, DHCP Server, DNS Servers, Lease Time, IPv4/IPv6 |
| `ipconfig /release` | Releases current IP address (use before renewing) |
| `ipconfig /renew` | Requests a new IP address from DHCP server |
| `ipconfig /flushdns` | Clears DNS cache (useful when website IP changes) |

---

## nslookup

Used to query DNS information.

```
C:\> nslookup domain.com
```

Returns:
- Domain's IP address
- DNS server being used

---

## ping

Tests connectivity between your device and another device or server.

```
C:\> ping 8.8.8.8
```

Shows:
- Connectivity
- Latency
- Packet Loss

---

## tracert

Identifies the path packets take to reach the destination. Excellent for locating where the issue exists.

```
C:\> tracert google.com
```

---

## pathping

A combination of Ping and Tracert.

```
C:\> pathping google.com
```

Shows:
- All hops
- Packet Loss %
- Connection quality

---

## netstat

Displays all active connections and used ports.

```
C:\> netstat -an
```

Shows:
- Listening Ports
- Established Connections
- TCP / UDP Sessions

---

## arp

Displays the ARP Cache table — shows the relationship between IP and MAC addresses.

```
C:\> arp -a
```

Useful for:
- Filtering
- Security
- Device identification

---

## hostname

Displays the current computer name. Simple but very important in Domain environments.

```
C:\> hostname
```

---

## getmac

Displays the MAC address for all network adapters.

```
C:\> getmac
```

---

## net use

Used to connect to a Shared Folder or Network Drive.

```
C:\> net use Z: \\Server\Files
```

Important for managing shared files across the network.

---

## net share

Displays all shared resources available on the device.

```
C:\> net share
```
