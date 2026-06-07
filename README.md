# ☀️ SummerCART — Summer Essentials Store

SummerCART is a modern, responsive, and feature-rich e-commerce web application tailored for summer essentials. Built on top of the latest **Next.js** framework with **React 19**, it utilizes **Better-Auth** for secure authentication (including email/password and Google OAuth), **MongoDB** for database persistence, and a premium design system powered by **Tailwind CSS v4**, **DaisyUI v5**, and **HeroUI**.


repo : [repo_link](https://github.com/shuvro18/summercart-summer-essentials-store) </br>
live link : [live_link]( https://summercart-summer-essentials-store-dusky.vercel.app/)
---

## 🚀 Features

- **🏠 Interactive Homepage**: Includes a vibrant Hero section, a curated products list, interactive summer care tips, and a showcase of top brands.
- **🛍️ Product Directory & Details**:
  - Browse all products in a responsive grid layout.
  - View individual product pages featuring ratings, categories, pricing, stock levels, detailed descriptions, and an "Add to Cart" action.
- **🔐 Secure Authentication**: Powered by [Better-Auth](https://www.better-auth.com/):
  - Email & Password sign-in / sign-up.
  - Google Social Login integration.
  - Client-side and server-side session management.
- **👤 User Profiles**:
  - Dedicated Profile page display for signed-in users.
  - Dynamic update profile flow to modify account settings.
- **✨ Premium UI & UX**:
  - Smooth micro-interactions, custom animations, and toast notifications.
  - Modern fonts, glassmorphism elements, and fully responsive layouts.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (React 19)
- **Database**: MongoDB (using native `mongodb` driver & Better-Auth adapter)
- **Authentication**: Better-Auth 1.6.x (with MongoDB adapter)
- **Styling**: Tailwind CSS v4, PostCSS, DaisyUI v5, and HeroUI (formerly NextUI)
- **Notifications**: React Toastify
- **Icons**: React Icons (Hi icons, Fc icons)

---

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/                  # Better-Auth endpoints (...all catch-all route)
│   │   ├── components/                # Shared layout & UI components
│   │   ├── cookies/                   # Cookie-based utilities / handlers
│   │   ├── login/                     # Sign-in page with email/Google login
│   │   ├── navbar/                    # Navigation bar component with auth indicators
│   │   ├── products/                  # Product list & product detail ([id]) pages
│   │   ├── profile/                   # User profile details page
│   │   ├── profile-update/            # Edit profile page
│   │   ├── layout.js                  # Root layout with providers & global fonts
│   │   ├── page.js                    # Landing/Homepage component
│   │   └── globals.css                # Global styles
│   ├── data/
│   │   └── data.json                  # Local seed/mock data for products
│   └── lib/
│       ├── auth.js                    # Better-Auth server configuration
│       └── auth-client.js             # Better-Auth client configuration
├── .env                               # Environment configurations (ignored in git)
├── next.config.mjs                    # Next.js configurations
└── package.json                       # Core dependencies and scripts

```
