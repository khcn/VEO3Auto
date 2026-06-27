# VEO3Auto

Công cụ sản xuất video tự động với AI (Google Veo và các model liên quan).

## Mục tiêu
Xây dựng hệ thống cho phép tạo nội dung video/ảnh tự động, có đồng nhất nhân vật và tối ưu chi phí theo lựa chọn người dùng.

## Yêu cầu chức năng

### 1) Tạo video từ ảnh / khung hình
- Nhận đầu vào từ:
  - Ảnh tĩnh
  - Tập khung hình (frames)
- Có tùy chọn chọn model Google mới nhất khả dụng (ví dụ: các phiên bản Veo mới).
- Hỗ trợ **đồng nhất nhân vật** xuyên suốt video (giữ khuôn mặt/phong cách/nhân dạng).

### 2) Tạo video từ link YouTube
- Nhập link video YouTube làm nguồn tham chiếu.
- Trích xuất ngữ cảnh/khung hình phù hợp để dựng video mới.
- Hỗ trợ **đồng nhất nhân vật** trong video kết quả.

### 3) Tạo video theo kịch bản có sẵn
- Nhập kịch bản văn bản (scene-by-scene hoặc prompt dài).
- Tự động chia cảnh, sinh prompt theo cảnh, ghép thành video hoàn chỉnh.
- Cho phép tùy chỉnh thời lượng, phong cách, tỉ lệ khung hình.

### 4) Tối ưu chi phí tạo video
- Cung cấp chế độ chọn chi phí:
  - `best_quality`: ưu tiên chất lượng
  - `balanced`: cân bằng chất lượng/chi phí
  - `lowest_cost`: chi phí thấp nhất
- Hiển thị ước tính chi phí trước khi chạy.

### 5) Tạo ảnh với model Google mới nhất
- Hỗ trợ tạo ảnh từ prompt.
- Có tùy chọn chọn model ảnh Google mới nhất khả dụng.
- Hỗ trợ tạo ảnh tham chiếu nhân vật để phục vụ bước tạo video đồng nhất.

## Luồng xử lý đề xuất
1. Người dùng chọn loại tác vụ (image-to-video / frame-to-video / youtube-to-video / script-to-video / text-to-image).
2. Chọn model + chế độ chi phí.
3. (Tuỳ chọn) bật hồ sơ nhân vật để đảm bảo đồng nhất nhân vật.
4. Hệ thống tạo ảnh/clip theo từng cảnh.
5. Ghép hậu kỳ và xuất video cuối.

## Kết quả đầu ra mong muốn
- Video có tính nhất quán nhân vật giữa các cảnh.
- Có khả năng chuyển đổi linh hoạt giữa nhiều model Google mới.
- Chi phí tạo nội dung được tối ưu theo cấu hình người dùng.
