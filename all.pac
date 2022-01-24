var proxy = "SOCKS 10.66.66.1:1080;";
var direct = "DIRECT;";

function FindProxyForURL(url, host) {
  if ((isInNet(host, "127.0.0.1", "255.255.255.255")) ||
    (isInNet(host, "10.0.0.0", "255.0.0.0")) ||
    (isInNet(host, "172.16.0.0", "255.240.0.0")) ||
    (isInNet(host, "192.168.0.0", "255.255.0.0"))) {
    return direct;
  }

  return proxy;
}
