#!/bin/bash
echo "🚀 Đang cài đặt WCore-X CLI Engine by Wstudio..."

# Cấp quyền thực thi cho file wcore
chmod +x wcore

# Copy file vào thư mục thực thi toàn cục của hệ thống Linux
sudo cp wcore /usr/local/bin/wcore

echo "✅ Cài đặt thành công!"
echo "💡 Từ bây giờ, ở bất kỳ thư mục nào trong Terminal, bạn chỉ cần gõ lệnh: wcore"
