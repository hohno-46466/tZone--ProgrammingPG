using System;
using System.Text;
using System.Threading.Tasks;
using MQTTnet;
using MQTTnet.Client;
using UnityEngine;

public class Main : MonoBehaviour
{
    IMqttClient mqttClient;

    async void Start()
    {
        var factory = new MqttFactory();
        mqttClient = factory.CreateMqttClient();

        var options = new MqttClientOptionsBuilder()
            .WithTcpServer("broker.hivemq.com")
            .Build();

        mqttClient.Connected += (s, e) => Debug.Log("接続したときの処理");

        mqttClient.Disconnected += async (s, e) =>
        {
            Debug.Log("切断したときの処理");

            if (e.Exception == null)
            {
                Debug.Log("意図した切断です");
                return;
            }

            Debug.Log("意図しない切断です。５秒後に再接続を試みます");

            await Task.Delay(TimeSpan.FromSeconds(5));

            try
            {
                await mqttClient.ConnectAsync(options);
            }
            catch
            {
                Debug.Log("再接続に失敗しました");
            }
        };

        mqttClient.ApplicationMessageReceived += (s, e) =>
        {
            var stringBuilder = new StringBuilder();
            stringBuilder.AppendLine("メッセージを受信しました");
            stringBuilder.AppendLine($"Topic = {e.ApplicationMessage.Topic}");
            stringBuilder.AppendLine($"Payload = {Encoding.UTF8.GetString(e.ApplicationMessage.Payload)}");
            stringBuilder.AppendLine($"QoS = {e.ApplicationMessage.QualityOfServiceLevel}");
            stringBuilder.AppendLine($"Retain = {e.ApplicationMessage.Retain}");
            Debug.Log(stringBuilder);
        };

        await mqttClient.ConnectAsync(options);

        await mqttClient.SubscribeAsync(new TopicFilterBuilder().WithTopic("johnson65/helloworld").Build());

        var message = new MqttApplicationMessageBuilder()
            .WithTopic("johnson65/helloworld")
            .WithPayload("Hello World")
            .WithExactlyOnceQoS()
            .Build();

        await mqttClient.PublishAsync(message);

        await mqttClient.DisconnectAsync();
    }
}
