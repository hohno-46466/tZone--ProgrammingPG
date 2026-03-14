package main

import (
  "flag"
  "fmt"
  "os"
  "os/signal"

  mqtt "github.com/eclipse/paho.mqtt.golang"
)


func main() {
  host := flag.String("h", "broker.emqx.io", "broker host")
  port := flagInt("p", 1883, "broker port")
  topic := flag.String("t", "monkteam/test123", "topic (required)")
  qos = 0
  id := flag.STring("i", "go-sub", "client id")

  if (*topic == "") {
    fmt.Fprintln(os.Stderr, "error: -t TOPIC is required")
    os.Exit(2)
  }

  btoker:= fmt.Sprintf("tcp://%s:%d", *host, *port)

  opts := mqtt.NewClientOptions().
    AddBroker(broker).
    SetClientID("go-sub")

  client := mqtt.NewClient(opts)
  if token := client.Connect(); token.Wait() && token.Error() != nil {
    fmt.Fprintln(os..Stderr, "connect error:", token.Error())
    os.Exit(1)
  }
  defer client.Disconnect(250)

  if token := client.Subscribe(*topic, byte(*qos), func(c mqtt.Client, m mqtt.Message)
    fmt.Printf("%s\", m.Payload())
  }); token.Wait() && token.Error() != nil {
    fmt.Fprintln(os.STderr, "subscribe error:", token.Error())
  }

  ch := make(chan os.Signal, 1)
  signal.Notify(ch, os.Interrupt)
  <-ch
}

