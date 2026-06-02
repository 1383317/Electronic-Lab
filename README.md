<div dir="rtl">

# آزمایشگاه الکترونیک — دانشگاه علم و صنعت ایران

**شبیه‌سازی تعاملی مدارهای الکترونیک برای دوره کارشناسی**

استاد: دکتر دباغ کاشانی | دانشگاه علم و صنعت ایران

</div>

---

# ElectronLab — IUST Electronics Laboratory

**Interactive electronics circuit simulator for undergraduate students**

Instructor: Dr. Dabbagh Kashani | Iran University of Science and Technology

---

## 📋 فهرست / Table of Contents

- [درباره پروژه / About](#درباره-پروژه--about)
- [آزمایش‌ها / Experiments](#آزمایش‌ها--experiments)
- [نصب و اجرا / Installation](#نصب-و-اجرا--installation)
- [ساختار پروژه / Project Structure](#ساختار-پروژه--project-structure)
- [لایسنس / License](#لایسنس--license)

---

## درباره پروژه / About

<div dir="rtl">

این پروژه یک محیط شبیه‌سازی آفلاین برای آزمایشگاه الکترونیک دوره کارشناسی است. دانشجویان می‌توانند مدارهای مختلف الکترونیک را بدون نیاز به سخت‌افزار واقعی، به صورت تعاملی بررسی کنند.

**ساخته شده با:** HTML5 · CSS3 · JavaScript · Chart.js · Electron

</div>

This project is an offline simulation environment for undergraduate electronics laboratory courses. Students can interactively explore various electronic circuits without requiring physical hardware.

**Built with:** HTML5 · CSS3 · JavaScript · Chart.js · Electron

---

## آزمایش‌ها / Experiments

| # | نام فارسی | English Name | فایل |
|---|-----------|--------------|------|
| 1 | مشخصه دیود | Diode Characteristics | `diode-characteristics-sim.html` |
| 2 | مقاومت داخلی منبع DC | Internal Resistance of DC Power Supply | `Internal-Resistance-DC-Power-Supply-Sim.html` |
| 3 | مشخصه دیود LED | LED Characteristics | `Light-Emitted-Diode-Characteristics-Sim.html` |
| 4 | یکسوساز | Rectifier | `Rectifier-Sim.html` |
| 5 | ترانزیستور | Transistors | `Transistors-Sim.html` |
| 6 | مشخصه دیود زنر | Zener Diode Characteristics | `Zener-Diode-Characteristics-Sim.html` |

---

## نصب و اجرا / Installation

### روش ۱ — اجرای مستقیم / Method 1 — Direct Run

<div dir="rtl">

فایل `launcher.html` را در مرورگر باز کنید.

</div>

Open `app/launcher.html` directly in your browser.

---

### روش ۲ — اپلیکیشن ویندوز / Method 2 — Windows App

<div dir="rtl">

فایل نصب‌کننده را از بخش [Releases](../../releases) دانلود کنید.

</div>

Download the installer from the [Releases](../../releases) section.

```
ElectronLab Setup 1.0.0.exe
```

---

### روش ۳ — اجرا از سورس / Method 3 — Run from Source

**پیش‌نیازها / Prerequisites:** Node.js v18+

```bash
# کلون کردن / Clone
git clone https://github.com/YOUR_USERNAME/ElectronLab.git
cd ElectronLab

# نصب وابستگی‌ها / Install dependencies
npm install

# اجرا / Run
npm start

# ساخت exe / Build exe
npm run build
```

---

## ساختار پروژه / Project Structure

```
ElectronLab/
├── app/
│   ├── credit/                  ← لوگو و کردیت / Logo & credits
│   ├── Fonts/                   ← فونت XB Niloofar / XB Niloofar font
│   ├── js/                      ← Chart.js library
│   ├── launcher.html            ← صفحه اصلی / Main launcher
│   ├── diode-characteristics-sim.html
│   ├── Internal-Resistance-DC-Power-Supply-Sim.html
│   ├── Light-Emitted-Diode-Characteristics-Sim.html
│   ├── Rectifier-Sim.html
│   ├── Transistors-Sim.html
│   └── Zener-Diode-Characteristics-Sim.html
├── main.js                      ← Electron main process
├── package.json
└── README.md
```

---

## لایسنس / License

<div dir="rtl">

این پروژه **فقط برای اهداف آموزشی** است.

استفاده مجدد، توزیع یا تجاری‌سازی بدون اجازه کتبی مجاز نیست.

© 2026 دانشگاه علم و صنعت ایران — محمد سادات رسول
استاد : دکتر دباغ کاشانی

</div>

This project is for **educational purposes only**.

Reuse, redistribution, or commercialization without written permission is not permitted.

© 2026 Iran University of Science and Technology — Mohammad Sadat Rasoul
Electronic Lab Instructor : Dr. Dabbagh Kashani
