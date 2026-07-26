---
license: other
language:
- en
- vi
pipeline_tag: text-generation
library_name: transformers
tags:
- wcore-x
- wstudio
- cli
- code
- chat
---

# 🤖 wcore-X CLI Engine (Wstudio)

**wcore-X** là giao diện dòng lệnh (CLI Interface) và công cụ AI engine chuyên nghiệp dành cho lập trình viên, được phát triển độc quyền bởi **Wstudio** trên nền tảng model mã nguồn mở tối ưu hóa.

---

## 🚀 Tính năng nổi bật

* **Giao diện TUI Đẳng Cấp:** Khung viền Neon bo góc sạch sẽ, tối ưu trải nghiệm nhìn trực tiếp trên Terminal.
* **Hệ thống Menu Tích Hợp (`wcore`):** 
  * `[1]` 💬 Trò chuyện & Hỏi đáp lập trình tự do.
  * `[2]` 🛠️ Sửa lỗi code & Tối ưu hóa thuật toán (Debug Mode).
  * `[3]` 🚀 Tự động sinh cấu trúc cây thư mục Project.
  * `[4]` 📊 Thống kê Token chi tiết, đo lường tốc độ sinh văn bản (tokens/s) và tài nguyên.
* **Animation Thông Minh:** Hiển thị con xoay động trong lúc chờ model phản hồi.
* **Tối ưu 100% phần cứng yếu:** Chạy mượt mà trên các môi trường giới hạn dung lượng như GitHub Codespaces, không tốn không gian lưu trữ cache.

---

## 📦 Hướng dẫn cài đặt nhanh (Installation)

Bạn bè hoặc người dùng khác khi clone dự án này về máy có thể cài đặt toàn cục cực kỳ nhanh chóng chỉ với 1 bước:

```bash
bash install.sh
