
# 準備
$ mkdir go-mqtt-sub
$ cd go-mqtt-sub
$ go mod init example.com/go-mqtt-sub
$ go get github.com/eclipse/paho.mqtt.golang

# 実行
$ go run . 

# 別のターミナルで以下を実行
$ mosquitto_pub -t TOPIC -m "hello"
$ mosquitto_pub -t TOPIC -m "こんにちは"

# Raspberry Pi 用にクロスビルドする場合
$ GOOS=linux GOARCH=arm64 go build -o mqtt-sub-rpi

# Raspberry Pi に mqtt-sub-rpi をコピーしたら以下を実行
$ ./mqtt-sub-rpi
