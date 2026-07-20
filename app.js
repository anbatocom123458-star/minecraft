import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Battery from 'expo-battery';

export default function App() {
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [batteryState, setBatteryState] = useState(null);

  // Link Discord Webhook trực tiếp
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1528772933026320545/HCDs7ikJZMPtS3bogsQZg_--ERBfCgqZz9jdvV_fPsbWccR91oNEr8qL0KUoSJm4wbZx';

  const sendWebhook = async (level, state) => {
    try {
      let stateText = 'Không sạc';
      if (state === Battery.BatteryState.CHARGING) {
        stateText = 'Đang sạc';
      } else if (state === Battery.BatteryState.FULL) {
        stateText = 'Đầy pin';
      }

      const percent = Math.round(level * 100);
      
      // Đóng gói cấu trúc JSON chuẩn gửi trực tiếp lên Discord
      const payload = {
        username: "Battery Bot",
        embeds: [{
          title: "🔋 Trạng thái pin điện thoại",
          description: `Thiết bị đang **${stateText}**`,
          color: percent < 20 ? 15158332 : 3066993, // Đỏ khi pin yếu (<20%), xanh khi bình thường
          fields: [
            { name: "Mức pin hiện tại", value: `${percent}%`, inline: true }
          ],
          timestamp: new Date().toISOString()
        }]
      };

      await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      console.log('Đã gửi thông tin pin thẳng lên Discord thành công!');
    } catch (error) {
      console.error('Lỗi khi gửi webhook:', error);
    }
  };

  const checkAndSend = async () => {
    const level = await Battery.getBatteryLevelAsync();
    const state = await Battery.getBatteryStateAsync();
    setBatteryLevel(level);
    setBatteryState(state);
    await sendWebhook(level, state);
  };

  useEffect(() => {
    // Tự động kiểm tra và gửi ngay khi mở app
    checkAndSend();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Battery Webhook Tool</Text>
      <Text style={styles.text}>
        Mức pin hiện tại: {batteryLevel !== null ? `${Math.round(batteryLevel * 100)}%` : 'Đang cập nhật...'}
      </Text>
      <Button title="Gửi thủ công lên Discord" onPress={checkAndSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
