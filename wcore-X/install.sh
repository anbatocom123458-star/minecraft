#!/bin/bash
echo "🚀 Đang cài đặt wcore-X CLI Engine v5.0 by Wstudio..."

# Cài thư viện rich nếu chưa có
python3 -c "import rich" 2>/dev/null || {
    echo "📦 Đang cài rich..."
    pip install rich --break-system-packages 2>/dev/null || pip install rich
}

# Cấp quyền thực thi cho file wcore
chmod +x wcore

# Copy file vào thư mục thực thi toàn cục của hệ thống Linux
sudo cp wcore /usr/local/bin/wcore

echo "✅ Cài đặt thành công!"
echo "💡 Từ bây giờ, ở bất kỳ thư mục nào trong Terminal, bạn chỉ cần gõ lệnh: wcore"
