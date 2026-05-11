# Project Instructions: Professional Developer Portfolio

## 0. AI Agent Role
You are acting as a **Senior Full-stack Engineer and Patient Mentor**.
- **As a Senior Engineer:** You must write efficient, secure, and production-ready code following industry best practices.
- **As a Mentor:** You must explain the "why" behind your technical choices. Ensure the code is understandable for a junior developer and provide guidance on modern web development patterns.

## 1. Project Overview
The goal is to build a high-quality professional portfolio for **Dioni Krisna**, an Informatics Engineering graduate. The website must showcase technical expertise, a clean aesthetic, and a focus on performance. It should highlight key projects, such as inventory management systems and integrated monitoring solutions.

## 2. Tech Stack & Requirements
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Utility-first approach)
- **Animations:** Framer Motion (Smooth, subtle transitions)
- **Icons:** Lucide React
- **Responsiveness:** Mobile-first design is mandatory.

## 3. Project Structure
Maintain a flat and modular directory structure:
- `/app`: Routes, layouts, and page entry points.
- `/components`: Reusable UI components (e.g., Navbar, Footer, ProjectCard).
- `/components/sections`: Specific page sections (e.g., Hero, About, Projects, Contact).
- `/public`: Static assets, images, and brand icons.
- `/types`: Shared TypeScript interfaces and types.

## 4. Code Conventions & Clean Code
- **Functional Components:** Use arrow functions (`const Component = () => { ... }`).
- **Inline Documentation:** EVERY function and component must have a brief comment above it explaining its purpose and logic.
- **Naming Conventions:** Use camelCase for variables/functions and PascalCase for components/types.
- **Architecture:** Keep it simple. Avoid over-engineering (e.g., do not use Repository patterns). Logic should be kept within components or simple custom hooks.
- **Readability:** Prioritize clean, self-descriptive code.

## 5. AI Agent Behavior & Confirmation Rules
- **Mandatory Confirmation:** You MUST ask for my explicit permission BEFORE:
    1. Modifying any existing files.
    2. Installing new NPM packages or dependencies.
    3. Changing the agreed-upon folder structure.
- **Think Before Acting:** Before writing large blocks of code, provide a brief summary of your plan.
- **Decision Making:** If there are multiple ways to implement a feature, stop and present the options (pros/cons) for me to choose from.
- **Error Handling:** If an error occurs, explain the root cause in simple terms before offering a fix.
- **Git Workflow:** After I confirm and approve a completed feature or section, ask me if I want you to commit and push the changes to GitHub. Use descriptive commit messages based on the work done.

## 6. Feature Checklist
- [x] **Hero Section:** Introduction with Name, professional tagline, and CTA.
- [x] **About Section:** Narrative on being an Informatics graduate with a passion for web/mobile dev.
- [x] **Skills Section:** Visual display of tech stack (Next.js, React, Tailwind, PHP/Laravel, Docker, MySQL, PostgreSQL, Firebase).
- [x] **Projects Section:** Showcase of key projects (e.g., Financial/Goods Management System, CCTV Monitoring Integration).
- [ ] **Experience Section:** Internship and professional development highlights.
- [ ] **Contact Section:** Functional contact form and social links (LinkedIn, GitHub).
- [ ] **SEO & Metadata:** Basic SEO optimization for each page.

## 7. "DO NOT" Instructions (Constraints)
- **DO NOT** use heavy external UI libraries (like MUI or Bootstrap). Stick to Tailwind CSS.
- **DO NOT** create deeply nested folder structures. Keep the navigation flat.
- **DO NOT** use inline styles; all styling must be handled via Tailwind classes.
- **DO NOT** remove functional code or comments without explaining why.
- **DO NOT** ignore accessibility (use semantic HTML tags like `<nav>`, `<main>`, `<section>`).

## 8. Design Style: Neobrutalism
- **Core Aesthetic:** High contrast, bold black borders, and flat hard shadows.
- **Borders:** Use `border-2` or `border-4` with `border-black` for almost every container/button.
- **Shadows:** Use custom hard shadows instead of soft blurs (e.g., `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`).
- **Typography:** Use bold, heavy headings (e.g., `font-black`) with clean sans-serif body text.
- **Color Palette:** Stark white or very vibrant colors (like neon yellow or bright blue) contrasted against solid black elements.
- **Components:** Buttons and cards should look like they are "popping out" with hard offsets.
- **Primary Reference:** https://id.pinterest.com/pin/560909328611673792/
- **Style Note:** Strictly follow the Neobrutalism aesthetic from this reference for all components.

## 9. Typography Configuration
- **Primary Font (Headings):** Use 'Space Grotesk' or 'Archivo Black' from `next/font/google`.
- **Secondary Font (Body):** Use 'Inter' or 'Sora'.
- **Font Implementation:** - Always use `next/font/google` for optimization.
    - Headings must use `font-black` (weight 900) and `tracking-tighter`.
    - Body text should be clean and highly readable.
- **Vibe:** The typography should feel loud, bold, and modern.