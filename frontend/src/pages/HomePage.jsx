import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ImpactMeter from '../components/home/ImpactMeter';
import PickYourCause from '../components/home/PickYourCause';
import FeaturedFunds from '../components/home/FeaturedFunds';
import NewsHighlights from '../components/home/NewsHighlights';
import ImpactStories from '../components/home/ImpactStories';

// Import JSON data directly
import fundsData from '../data/funds.json';
import impactStatsData from '../data/impact_stats.json';
import staticData from '../data/static_data.json';

const HomePage = () => {
  const impactStats = impactStatsData;
  const funds = fundsData;
  const causes = staticData.cause_categories || [];
  const news = staticData.news_highlights || [];
  const stories = staticData.impact_stories || [];

  return (
    <div style={{ background: 'var(--bg-page)' }}>
      <HeroSection />
      <ImpactMeter stats={impactStats} />
      <PickYourCause causes={causes} />
      <FeaturedFunds funds={funds.slice(0, 3)} />
      <NewsHighlights news={news} />
      <ImpactStories stories={stories} />
    </div>
  );
};

export default HomePage;