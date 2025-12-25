# ATS Resume Builder

A modern, ATS-friendly resume builder application designed to create professional resumes optimized for Applicant Tracking Systems.

## Features

- **ATS-Optimized**: Built with ATS compatibility in mind, ensuring your resume passes through automated screening systems
- **Professional Design**: Clean, modern design with customizable sections
- **One-Page Format**: Optimized print styles to fit your entire resume on a single page
- **Easy to Edit**: Simple and intuitive interface for updating your resume content
- **Print-Ready**: Optimized CSS for perfect printing and PDF generation
- **Responsive**: Works seamlessly on desktop and mobile devices
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS

## Resume Sections

- Header with contact information
- Professional Summary
- Skills
- Work Experience
- Core Competencies
- Education

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd ats-resume-builder-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. **Edit Resume Content**: Modify the resume sections in the component files located in `src/components/resume/`
2. **Customize Styling**: Update styles in `src/index.css` or modify Tailwind configuration in `tailwind.config.ts`
3. **Print/Export**: Click the "Print Resume" button or use `Ctrl+P` / `Cmd+P` to generate a PDF

## Project Structure

```
src/
├── components/
│   ├── resume/
│   │   ├── Header.tsx          # Resume header with contact info
│   │   ├── Summary.tsx         # Professional summary section
│   │   ├── Skills.tsx          # Skills section
│   │   ├── Experience.tsx      # Work experience section
│   │   ├── Competencies.tsx    # Core competencies
│   │   ├── Education.tsx       # Education section
│   │   └── PrintButton.tsx     # Print functionality
│   └── ui/                     # shadcn/ui components
├── pages/
│   └── Index.tsx               # Main resume page
├── lib/
│   └── utils.ts                # Utility functions
└── index.css                   # Global styles and print styles
```

## Customization

### Update Personal Information

Edit the following files to update your resume content:
- `src/components/resume/Header.tsx` - Name, title, contact details
- `src/components/resume/Summary.tsx` - Professional summary
- `src/components/resume/Skills.tsx` - Technical and soft skills
- `src/components/resume/Experience.tsx` - Work history
- `src/components/resume/Competencies.tsx` - Core competencies
- `src/components/resume/Education.tsx` - Educational background

### Modify Print Styles

Print styles are defined in `src/index.css` under the `@media print` section. Adjust font sizes, spacing, and layout as needed.

## Building for Production

```sh
# Create a production build
npm run build

# Preview the production build
npm run preview
```

## Deployment

The built application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any other static hosting provider

## License

This project is open source and available for personal and commercial use.

## Author

**Sumant Kumar**
- Email: Sumantsunny63@gmail.com
- Phone: +918789927623

---

Built with React + TypeScript + Vite
