import React from 'react';
import { Star, Quote, ExternalLink, ShieldCheck } from 'lucide-react';
import { reviewsSummary, featuredReviews } from '../../data/reviewsData';
import { SectionHeading } from '../common/SectionHeading';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Guest Feedback"
          title="What Travelers Say About Their Stay"
          description="Read genuine feedback from guests who experienced our mountain hospitality, central heating, and prime location near GPO Chowk."
        />

        {/* Overall Trust Card */}
        <div className="mt-12 bg-white rounded-lg p-6 sm:p-8 border border-stone-200/80 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-1 text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <div className="font-serif text-3xl font-bold text-forest-950 pt-1">
              {reviewsSummary.aggregateRating} <span className="text-base text-stone-500 font-normal">out of 5.0</span>
            </div>
            <p className="text-xs text-stone-500">
              {reviewsSummary.attributionText}
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center sm:items-end gap-2">
            <a
              href={reviewsSummary.googleMapsReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-charcoal-900 rounded text-xs uppercase tracking-wider font-semibold transition-colors border border-stone-300"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Publicly Verified Ratings</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-8 rounded-lg border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-gold-500/20 absolute top-6 right-6" />

              <div className="space-y-3">
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="text-sm text-stone-700 leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-forest-950">{rev.authorName}</h4>
                  <span className="text-stone-500 text-[11px]">{rev.stayType}</span>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-emerald-50 text-emerald-800 text-[10px] px-2 py-0.5 rounded font-medium border border-emerald-200">
                    {rev.source}
                  </span>
                  <span className="block text-[10px] text-stone-400 mt-0.5">{rev.relativeTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
