# Harry's Portfolio

## Ngôn ngữ/Languages

Hãy lựa chọn ngôn ngữ mà bạn hiểu (Choose a language that you can understand)

- [Tiếng Việt](#tieng-viet)
- [Tiếng Anh/English](#english)

<a id="tieng-viet"></a>
## Tiếng Việt

Chào mừng bạn đến với những thứ tạo ra **"Nơi chứa đựng các thông tin" của Harry (Bảo Huỳnh)** aka ***source code**.

### Các trang của trang web

- **Trang chủ**: giới thiệu nhanh và social links.
- **Về Bảo**: hành trình, kỹ năng, hoạt động, fun facts.
- **Các dự án:** danh sách dự án kèm modal chi tiết.
- **Tài liệu học tập:** danh mục các tài liệu tổng hợp lấy từ Google Drive cá nhân được lưu trong file CSV & tải từ API nội bộ.
- **Liên hệ:** thông tin liên hệ form liên hệ gửi email qua Web3Forms.

### Đặc điểm của trang web

- Hỗ trợ song ngữ Việt/Anh và lưu ngôn ngữ đã chọn trên trình duyệt.
- Thiết kế responsive cho cả mobile, tablet và desktop
- Animation chuyển trang và hiệu ứng tương tác mượt bằng Framer Motion.
- Dữ liệu tài liệu học tập được tách riêng, dễ cập nhật bằng CSV/XLSX.
- Form liên hệ tích hợp Web3Forms, gửi thông tin nhanh mà không cần backend riêng.
- Tối ưu trải nghiệm người dùng với các thành phần như điều hướng nổi, đồng hồ thời gian thực, nút quay lại đầu trang...

### Công nghệ sử dụng

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- React Icons + Lucide
- XLSX (đọc CSV/XLSX cho materials API)

### Yêu cầu môi trường

- Node.js 18.18+ (khuyến nghị Node.js 20 LTS)
- npm 9+

### Cài đặt và chạy local

```bash
npm install
npm run dev
```

Mở trình duyệt tại `http://localhost:3000`.

#### Scripts

```bash
npm run dev     # Chạy môi trường development
npm run build   # Build production
npm run start   # Chạy production sau khi build
npm run lint    # Kiểm tra lint
```

#### Biến môi trường

Tạo file `.env.local` ở root dự án:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Ghi chú:

- Trang Contact dùng `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- Nếu thiếu key, UI sẽ hiển thị cảnh báo và không gửi form.

### Cấu trúc thư mục chính

```text
app/
	page.jsx
	about/page.jsx
	work/page.jsx
	materials/page.jsx
	contact/page.jsx
	api/materials/route.js
components/
data/
	i18n/messages.js
	materials.csv
public/
	image/
	favicon.png
```

### Deploy

Hãy truy cập https://harry-bao.vercel.app/ để xem thành quả của tôi.

Nếu bạn có nhu cầu muốn tự mình deploy, đừng ngần ngại làm theo hướng dẫn trên Internet hoặc nhờ sự "tư vấn" từ các công cụ AI để dễ thực hiện hơn.

### Tác giả

- Harry - Huỳnh Nguyễn Quốc Bảo
- GitHub: https://github.com/Harry1720

---
**Chân thành cảm ơn bạn đã ghé thăm! Nếu thấy thú vị, hãy dành 1 ngôi sao (star) cho repository này nhé!**


<a id="english"></a>
## Tiếng Anh/English

Welcome to source code of **Harry's (Bao Huynh's) personal information hub**!!!.

### Website pages

- **Home page**: quick introduction and social links.
- **About Harry**: journey, skills, activities, and fun facts.
- **Projects**: project list with detailed modal view.
- **Study Materials:** curated materials from personal Google Drive, stored in CSV and served via internal API.
- **Contact**: contact information and contact form powered by Web3Forms.

### Website features

- Bilingual Vietnamese/English support with saved language preference in browser storage.
- Responsive design for mobile, tablet, and desktop
- Smooth page transitions and interaction effects with Framer Motion.
- Study materials data is separated for easy updates via CSV/XLSX.
- Contact form integrated with Web3Forms, no custom backend required.
- Enhanced UX with floating navigation, real-time clock, and back-to-top button...

### Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- React Icons + Lucide
- XLSX (for reading CSV/XLSX in the materials API)

### Environment requirements

- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm 9+

### Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

#### Scripts

```bash
npm run dev     # Start development server
npm run build   # Build production bundle
npm run start   # Run production server
npm run lint    # Run lint checks
```

#### Environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Notes:

- The Contact page uses `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
- If the key is missing, the UI will show a warning and the form will not be submitted.

### Main folder structure

```text
app/
	page.jsx
	about/page.jsx
	work/page.jsx
	materials/page.jsx
	contact/page.jsx
	api/materials/route.js
components/
data/
	i18n/messages.js
	materials.csv
public/
	image/
	favicon.png
```

### Deployment

Visit https://harry-bao.vercel.app/ to see the live website.

If you want to deploy it yourself, feel free to follow online deployment guides or use AI tools for step-by-step support.

### Author

- Harry - Huynh Nguyen Quoc Bao
- GitHub: https://github.com/Harry1720

---
**Thank you for visiting! If you find this project interesting, please consider giving this repository a star.**
