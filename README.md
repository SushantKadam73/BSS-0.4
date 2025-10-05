# Bhartiya Sena Seva

Independent research aggregator for Indian Armed Forces welfare funds.

## Overview
This is a **frontend-only** React application that provides comprehensive information on government-backed welfare schemes and funds for the Indian Armed Forces. All data is stored in JSON files within the frontend application.

## Tech Stack
- **Frontend**: React 19 with shadcn/ui components
- **Data Storage**: Local JSON files (no backend required)
- **Routing**: React Router
- **Styling**: Tailwind CSS with custom Pixel Pushers design system

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running

1. Navigate to the frontend directory:
```powershell
cd frontend
```

2. Install dependencies:
```powershell
npm install
# or
yarn install
```

3. Start the development server:
```powershell
npm start
# or
yarn start
```

The app will open at http://localhost:3000

## Project Structure
```
frontend/
├── public/
│   ├── images/          # Static images
│   └── index.html
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/           # JSON data files (funds, stats, static content)
│   ├── pages/          # Page components (Home, About, Funds, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── styles/         # Global CSS
└── package.json
```

## Data Files
All data is stored in `frontend/src/data/`:
- `funds.json` - Information about welfare funds
- `impact_stats.json` - Aggregated impact statistics  
- `static_data.json` - Static content (about, news, stories, causes)

## Build for Production
```powershell
npm run build
# or
yarn build
```

This creates an optimized production build in the `build/` folder.

## Features
- 📊 Real-time impact statistics dashboard
- 🔍 Searchable fund directory with filters
- 📄 Detailed fund information pages
- 📰 News and impact stories
- 📱 Fully responsive design
- ♿ Accessibility-first approach

## License
Independent research project - Not affiliated with government

## Contact
For corrections or feedback: [Add contact email]
