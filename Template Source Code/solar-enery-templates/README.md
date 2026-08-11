# Solarix - Reusable Solar Energy Website Template

A modern, production-quality, responsive static website template built with **React**, **Vite**, **Tailwind CSS**, **Lucide React**, and **React Router**. Designed specifically for Solar Energy, Renewable Energy, Clean Tech, Solar Installation, and Electrical Power Solution companies.

---

## 🌟 Key Features

- ⚡ **100% Data-Driven Architecture**: Customize company branding, logo text, contact numbers, services, portfolio projects, testimonials, FAQs, and navigation links from simple configuration files in `src/data/`.
- 📱 **Fully Responsive**: Optimized across desktop, laptop, tablet, and mobile screens with smooth mobile drawer navigation.
- 🎨 **Modern Solar Design System**: Built with modern emerald green, deep slate navy, and solar sun amber accents.
- 🚀 **5 Complete Pages**:
  1. **Home (`/`)**: 11 rich landing page sections (Hero, Trusted By, About Preview, Services, Why Choose Us, How It Works, Stats, Featured Projects, Testimonials, FAQ, CTA).
  2. **About Us (`/about`)**: Company Story, Mission & Vision, Core Values, Guiding Principles, Stats & CTA.
  3. **Services (`/services`)**: Full service matrix (Residential, Commercial, Industrial, Battery Storage, Maintenance, EV Charging), Guarantees & Process.
  4. **Projects (`/projects`)**: Portfolio showcase with dynamic category tabs (All, Residential, Commercial, Industrial) & specs.
  5. **Contact Us (`/contact`)**: Frontend-validated quote request form, contact details, business hours, and reusable static location map placeholder.
- ♿ **Accessible & Lightweight**: Zero external backend dependencies, fast static site generation, and accessible ARIA attributes.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React

---

## 📁 Directory & Data Customization Structure

```text
src/
├── data/                    # 🎯 CUSTOMIZATION CENTER
│   ├── company.js           # Company name, phone, email, address, stats, values, process
│   ├── navigation.js        # Navbar links, CTA label, footer menu items
│   ├── services.js          # List of services, descriptions, features & image URLs
│   ├── projects.js          # Portfolio projects, capacity specs, categories & image URLs
│   ├── testimonials.js      # Client reviews, ratings, author details & avatars
│   └── faqs.js              # Frequently asked questions & answers
│
├── components/
│   ├── common/              # Reusable UI elements (Navbar, Footer, Button, PageHero, Container, CTA, StatCard, FAQItem)
│   ├── home/                # Homepage sections
│   ├── services/            # ServiceCard & matrix layout
│   ├── projects/            # ProjectCard & Category Filter
│   └── contact/             # ContactForm, ContactInfo & MapPlaceholder
│
├── pages/                   # Main Page views (Home, About, Services, Projects, Contact)
├── App.jsx                  # Main App with Router & ScrollToTop
└── main.jsx                 # Entry point
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Build Production Bundle
```bash
npm run build
```

---

## 🎨 How to Customize for New Clients

1. **Company Information**: Edit `src/data/company.js` to change the brand name (`Solarix`), phone number, email address, physical address, business hours, and social media links.
2. **Services**: Edit `src/data/services.js` to add, remove, or modify solar solutions, images, and bullet features.
3. **Projects / Portfolio**: Edit `src/data/projects.js` to update project specs (e.g. MW capacity), locations, and images.
4. **Testimonials & FAQs**: Update `src/data/testimonials.js` and `src/data/faqs.js`.
5. **Theme Colors**: Color tokens can be adjusted in `src/index.css` or Tailwind classes.