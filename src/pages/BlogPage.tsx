import React, { useState } from 'react';
import { BlogHero } from '../components/blog/BlogHero';
import { FeaturedArticle } from '../components/blog/FeaturedArticle';
import { ArticleGrid } from '../components/blog/ArticleGrid';
import { SectionNextNavigator } from '../components/SectionNextNavigator';
import { BlogCTA } from '../components/blog/BlogCTA';
import { ArticleReaderModal } from '../components/blog/ArticleReaderModal';
import { BLOG_ARTICLES, FEATURED_ARTICLE, type BlogArticle } from '../data/blogData';

interface BlogPageProps {
  onBookClick: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBookClick }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const handleSelectArticleBySlug = (slug: string) => {
    if (FEATURED_ARTICLE.slug === slug) {
      setSelectedArticle(FEATURED_ARTICLE);
      return;
    }
    const found = BLOG_ARTICLES.find((a) => a.slug === slug);
    if (found) {
      setSelectedArticle(found);
    }
  };

  return (
    <div className="w-full bg-[#FFFDF8] text-[#24190F] min-h-screen">
      {/* 01. Blog Hero */}
      <BlogHero />

      {/* 02. Featured Article */}
      <FeaturedArticle onSelectArticle={handleSelectArticleBySlug} />

      {/* 03 & 04. Latest Articles + Browse By Topic */}
      <ArticleGrid onSelectArticle={handleSelectArticleBySlug} />

      {/* 05. In-Section Flow: Continue Exploring Insights */}
      <SectionNextNavigator section="insights" />

      {/* 06. Final CTA */}
      <BlogCTA onBookClick={onBookClick} />

      {/* 07. Full Article Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onBookClick={onBookClick}
      />
    </div>
  );
};

export default BlogPage;
