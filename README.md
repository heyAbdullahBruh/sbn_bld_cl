# Federal Blood Wave

Federal Blood Wave is a modern, responsive web application designed to connect blood donors with individuals in urgent need of blood. Built with a focus on speed, accessibility, and community engagement, the platform provides a seamless experience for finding donors, managing profiles, and interacting with a dedicated community forum.

This project is the **frontend client** for the Federal Blood Wave ecosystem.

## 🌟 What the Platform Does

- **Donor Discovery:** Search and locate blood donors quickly based on blood group and location.
- **Community Hub:** A dedicated space specifically for blood requests, updates, and community support. Users can create, edit, like, and comment on posts.
- **User Profiles & Settings:** Donors have customizable profiles where they can manage their personal information, update their avatar, and control account security (password changes).
- **Multilingual Support:** Fully internationalized interface supporting both English (EN) and Bengali (BN) to reach a wider user base.
- **Secure Access:** Protected private routes to ensure user data and community interactions are kept secure for registered members.

## 🚀 Recent Core Enhancements

This project has recently undergone significant architectural and UI improvements across two major workflows:

1. **`feature/i18n-and-enhancements`**
   - **Internationalization (i18n):** Integrated `react-i18next` providing full English and Bengali translations across the platform.
   - **Icon Overhaul:** Migrated from basic icon sets to a comprehensive integration of FontAwesome (`@fortawesome`) for sharper, more consistent visual indicators.
   - **Performance Utilities:** Integrated `countup` features and optimized interactive elements.

2. **`fix/private-routes-design`**
   - **Responsive Design System:** Complete restructuring of CSS modules (`profile.module.css`, `settings.module.css`, `community.module.css`) to ensure flawless rendering across devices.
   - **Community Feature Upgrades:** Enhanced the `PostCard`, `PostComments`, and `EditP` components for a smoother, more reliable user experience in the community forum.
   - **Route Security:** Hardened the frontend routing logic to properly shield private dashboards, settings, and donor tools from unauthenticated access. 
   - **Dependency Modernization:** Migrated the build system to [Bun](https://bun.sh/) for ultra-fast dependency resolution and updated all core React/Vite dependencies to their latest compatible versions.

## 🛠 Tech Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7
- **Styling:** CSS Modules + Tailwind CSS 4
- **State/Hooks:** Context API + custom hooks
- **Internationalization:** `i18next` & `react-i18next`
- **Animations:** Framer Motion
- **Icons:** FontAwesome & Lucide React
- **Package Manager:** Bun

## 💻 Getting Started

### Prerequisites
Make sure you have [Bun](https://bun.sh/) installed on your system.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/tarekul42/Federal-Blood-Wave
   cd Federal-Blood-Wave
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```
   The app will typically be available at `http://localhost:3000`.

### Production Build
To create an optimized production build:
```bash
bun run build
```
The compiled files will be output to the `dist/` directory, ready to be deployed.

## 🔗 Live Links
- **Client Application:** [Federal Blood Wave](https://federalbloodwave.vercel.app/)
- **Backend API Reference:** [Auth.Com API](https://api-federalbloodwave.onrender.com/)
