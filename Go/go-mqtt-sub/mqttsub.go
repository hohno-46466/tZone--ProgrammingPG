package main

import (
  "fmt"
  "os"
  "os/signal"

  mqtt "github.com/eclipse/paho.mqtt.golang"
)


func main() {
  broker := "tcp://broker.emqx.io:1883"
  topic := "monkteam/test123"

  opts := mqtt.NewClientOptions().
    AddBroker(broker).
    SetClientID("go-sub")

  client := mqtt.NewClient(opts)
  if token := client.Connect(); token.Wait() && token.Error() != nil {
    panic(token.Error())
  }

  client.Subscribe(topic, 0, func(c mqtt.Client, m mqtt.Message) {
    fmt.Printf("%s\n", m.Payload())
  })

  ch := make(chan os.Signal, 1)
  signal.Notify(ch, os.Interrupt)
  <-ch

  client.Disconnect(250)
}
