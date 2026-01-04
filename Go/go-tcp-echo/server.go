package main

import (
  "io"
  "log"
  "net"
)

func main() {
  ln, err := net.Listen("tcp", ":12345")
  if err != nil {
    log.Fatal(err)
  }
  log.Println("listening on :12345")

  for {
    conn, err := ln.Accept()
    if err != nil {
      log.Println("accept:", err)
      continue
    }
    go func(c net.Conn) {
      defer c.Close()
      _, err := io.Copy(c, c)
      if err != nil {
        log.Println("conn:", err)
      }
    }(conn)
  }
}

