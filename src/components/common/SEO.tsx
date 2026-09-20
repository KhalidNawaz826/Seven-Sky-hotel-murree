import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = 'Official website of Seven Sky Hotel Murree. Centrally located on Abid Majeed Road near GPO Chowk. Featuring central heating, elevator, underground valet parking, and panoramic mountain views.',
  canonical,
  ogImage = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  ogType = 'website'
}) => {
  const fullTitle = title 
    ? `${title} | Seven Sky Hotel Murree` 
    : 'Seven Sky Hotel Murree | Official Website | Abid Majeed Road';

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle);
    setMeta('og:description', description);
    setMeta('og:image', ogImage);
    setMeta('og:type', ogType);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }
  }, [fullTitle, description, canonical, ogImage, ogType]);

  return null;
};
