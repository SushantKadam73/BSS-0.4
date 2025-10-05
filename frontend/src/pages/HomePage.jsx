import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../components/home/HeroSection';
import ImpactMeter from '../components/home/ImpactMeter';
import PickYourCause from '../components/home/PickYourCause';
import FeaturedFunds from '../components/home/FeaturedFunds';
import NewsHighlights from '../components/home/NewsHighlights';
import ImpactStories from '../components/home/ImpactStories';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const HomePage = () => {
  const [impactStats, setImpactStats] = useState(null);
  const [funds, setFunds] = useState([]);
  const [causes, setCauses] = useState([]);
  const [news, setNews] = useState([]);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, fundsRes, causesRes, newsRes, storiesRes] = await Promise.all([
          axios.get(`${API}/impact-stats`),
          axios.get(`${API}/funds`),
          axios.get(`${API}/causes`),
          axios.get(`${API}/news`),
          axios.get(`${API}/impact-stories`)
        ]);

        setImpactStats(statsRes.data);
        setFunds(fundsRes.data);
        setCauses(causesRes.data);
        setNews(newsRes.data);
        setStories(storiesRes.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-page)'
      }}>
        <div className="heading-3" style={{ color: 'var(--brand-primary)' }}>Loading...</div>
      </div>
    );
  }

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