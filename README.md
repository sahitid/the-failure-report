# The Failure Report

A weekly newsletter mockup designed to combat Penn Face culture at the University of Pennsylvania's Wharton School. This Next.js application showcases what one full edition of the newsletter would look like in someone's inbox.

## 🎯 Purpose

"Penn Face" refers to the culture of appearing perfect while struggling in silence. The Failure Report creates a safe, anonymous space for Penn students to share their authentic experiences, struggles, and setbacks—fostering community through vulnerability.

## ✨ Features

### Newsletter Sections

1. **Header with Wharton Branding**
   - Official Wharton logo (actual logo image)
   - Newsletter title and tagline
   - Hero image featuring contemplative statue with overlay quote
   - Soft, warm color palette

2. **This Week's Setback**
   - Featured 200-word anonymous story from a Penn student
   - Beautiful card design with submission CTA
   - Empathetic, authentic tone

3. **The Anonymous AMA**
   - Q&A format with student questions and upperclassman responses
   - Personal, practical advice (not generic self-help)
   - Submission field for future questions

4. **The 10-Second Poll**
   - Interactive poll with realistic questions
   - Mock results showing community solidarity
   - Visual progress bars and percentages
   - Validating messaging about shared experiences

5. **Footer**
   - Partnership information with Wharton Wellness
   - Privacy and anonymity assurances
   - Mental health resources
   - Social links and contact information

## 🎨 Design Philosophy

- **Email-first layout**: Single column, 600px max-width, centered design that mimics actual email newsletters
- **Minimalist and clean**: Soft cream and yellow tones inspired by The School of Life aesthetic
- **Compact sections**: Reduced vertical spacing for a scannable, newsletter-style layout
- **Subtle branding**: Wharton red used sparingly as accent, not as dominant background color
- **Warm and approachable**: Soft colors, friendly typography, validating without being patronizing
- **Extended Q&A**: 5 question-answer pairs to provide more value and community wisdom
- **Mobile-responsive**: Looks great on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd the-failure-report
```

2. Install dependencies:
```bash
npm install
```

3. Add your images to the `public/` folder:
   - Save the Wharton logo as `public/wharton-logo.png`
   - Save the hero statue image as `public/hero-statue.png`
   - See `SETUP_IMAGES.md` for detailed specifications

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Interactivity**: React hooks for poll functionality

## 📁 Project Structure

```
the-failure-report/
├── app/
│   ├── components/
│   │   ├── Header.js          # Newsletter header with branding
│   │   ├── SetbackSection.js  # Featured story section
│   │   ├── AMASection.js      # Q&A section
│   │   ├── PollSection.js     # Interactive poll
│   │   └── Footer.js          # Footer with resources
│   ├── globals.css            # Global styles and Tailwind
│   ├── layout.js              # Root layout
│   └── page.js                # Main newsletter page
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

## 🎨 Color Palette

- **Penn Red**: #A80533 (primary CTA buttons, accents)
- **Penn Blue**: #002C77 (secondary CTAs, highlights)
- **Soft Yellow**: #F4E8C1 (header background)
- **Cream Tones**: #FDFCF8 to #DFC896 (section backgrounds)
- **Neutrals**: Tailwind's neutral scale (text, borders)
- **White**: Clean section backgrounds with cream accents
- **Overall feel**: Warm, muted, and minimalist—inspired by The School of Life with Penn branding

## 💡 Key Features

### Interactive Poll
The poll section includes simulated interactivity:
- Click to vote on poll options
- Smooth transition to results view
- Visual feedback with progress bars
- Contextual messaging about community solidarity

### Authentic Content
All placeholder content is designed to feel authentic to college struggles:
- Real academic challenges (failing midterms, recruiting stress)
- Practical advice from peers (5 Q&A pairs covering various topics)
- Topics include: recruiting stress, imposter syndrome, friendship dynamics, major selection, and mental health
- Validating statistics and messaging

### Email-Safe Design
The layout follows email newsletter best practices:
- Single column layout
- Limited width (600px max)
- Email-safe CSS
- Clear hierarchy and spacing

## 🤝 Partnership

This newsletter is designed to be in partnership with Wharton Wellness, providing mental health resources and support information for students who may be struggling.

## 📝 License

This is a mockup/demonstration project created for educational purposes.

## 🙏 Acknowledgments

Designed to support Penn students in combating Penn Face culture and fostering authentic community connections.

---

Made with vulnerability and courage by Penn students, for Penn students.

