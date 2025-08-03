# VidCraft AI - AI Video Editing Platform

A modern, visually appealing AI video editing web app built specifically for Indian content creators. Experience the power of CapCut + Canva with AI magic! 🎬✨

## 🌟 Features

### 🎯 Core Pages
- **Landing Page**: Stunning hero section with "Start Creating. Start Becoming Famous."
- **Login Page**: Google authentication placeholder with beautiful UI
- **Dashboard**: Welcome interface with project management and creation options
- **AI Creation Page**: Step-by-step AI-powered content generation

### 🎨 Design System
- **Primary Color**: `#FF5C00` (Bright Saffron Orange)
- **Secondary Color**: `#662D91` (Vibrant Purple)
- **Background**: `#F9F5F0` (Warm Cream)
- **Action Highlights**: `#00D084` (Mint Glow)
- **Font**: Inter (Clean, modern sans-serif)

### ✨ Animations & Interactions
- Framer Motion powered animations
- Soft slide-in effects on page load
- Pulsing glow effects on action buttons
- Hover effects with neon glow
- Smooth modal transitions
- Scale animations on button interactions

### 🚀 AI Features (Mock Implementation)
- **Script Generation**: AI-powered video script creation
- **Visual Generation**: Placeholder for AI visual creation
- **Voiceover Generation**: Placeholder for AI voice synthesis

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **API**: Next.js API Routes

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-video-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
ai-video-editor/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── projects/
│   │   │       └── route.ts         # Projects API
│   │   ├── create-ai/
│   │   │   └── page.tsx            # AI Creation Page
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Dashboard Page
│   │   ├── login/
│   │   │   └── page.tsx            # Login Page
│   │   ├── globals.css             # Global Styles
│   │   ├── layout.tsx              # Root Layout
│   │   └── page.tsx                # Landing Page
│   └── components/                 # Reusable Components (Future)
├── tailwind.config.ts              # Tailwind Configuration
├── package.json
└── README.md
```

## 🎯 User Journey

1. **Landing** → User sees inspiring hero section
2. **Login** → Google authentication (placeholder)
3. **Dashboard** → Welcome screen with project overview
4. **New Project** → Modal with Upload/AI options
5. **AI Creation** → Step-by-step content generation

## 🎨 Color Palette

```css
/* Primary Colors */
--primary: #FF5C00;        /* Saffron Orange */
--secondary: #662D91;      /* Vibrant Purple */
--background: #F9F5F0;     /* Warm Cream */
--action: #00D084;         /* Mint Glow */

/* Gradients */
--gradient-primary: linear-gradient(to right, #FF5C00, #FF7A00);
--gradient-secondary: linear-gradient(to right, #662D91, #8B5FA6);
--gradient-action: linear-gradient(to right, #00D084, #00E69C);
```

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoints**: 
  - `sm`: 640px+ (Small tablets)
  - `md`: 768px+ (Tablets) 
  - `lg`: 1024px+ (Small laptops)
  - `xl`: 1280px+ (Desktops)
  - `2xl`: 1536px+ (Large screens)

## 🎭 Animation Library

### Button Animations
- `animate-soft-glow`: Pulsing glow effect
- `animate-pulse-glow`: Enhanced pulse animation
- Hover scale effects with Framer Motion

### Page Transitions
- Slide-in animations for hero content
- Staggered animations for feature cards
- Modal slide-up transitions

## 🔧 API Endpoints

### Projects API (`/api/projects`)

**GET** - Retrieve all projects
```json
{
  "success": true,
  "data": [...],
  "total": 4
}
```

**POST** - Create new project
```json
{
  "title": "My New Video",
  "fileName": "video.mp4"
}
```

## 🎮 Mock Data

The app includes realistic mock data for:
- User projects with various statuses
- Indian-themed content examples
- Realistic project metadata

## 🔮 Future Enhancements

- Real Firebase authentication
- Actual AI integrations (OpenAI, Stability AI)
- File upload functionality
- Video player integration
- Real-time collaboration
- Advanced project management

## 🎯 Target Audience

**Indian Gen-Z Content Creators** who want:
- Easy-to-use video editing tools
- AI-powered content generation
- Modern, energetic interface
- Mobile-first experience
- Social media optimization

## 🚀 Performance Features

- Server-side rendering with Next.js 14
- Optimized bundle with App Router
- Efficient animation performance
- Mobile-optimized interactions
- Fast API responses

## 🎨 Design Philosophy

**Modern • Energetic • Fun**

The design captures the vibrant energy of Indian content creation while maintaining international appeal. Every interaction feels smooth and delightful, encouraging creativity and experimentation.

## 📝 Development Notes

- All animations use `framer-motion` for smooth 60fps performance
- Custom Tailwind configuration for brand colors
- TypeScript for type safety
- API routes follow RESTful conventions
- Mobile-responsive design patterns

---

**Built with ❤️ for the next generation of Indian content creators**

*Ready to go viral? Start creating with VidCraft AI!* 🌟
