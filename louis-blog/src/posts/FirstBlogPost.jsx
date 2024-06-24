import React from 'react';
import BlogPost from '../components/BlogPost';
import BlogHeader from '../components/BlogHeader';

const FirstBlogPost = () => {
  return (
    <>
      <BlogHeader title="Understanding the Basics of Machine Learning" />
      <BlogPost title="Understanding the Basics of Machine Learning" date="June 24, 2024">
        <p>Machine learning is a branch of artificial intelligence (AI) focused on building applications that learn from data and improve their accuracy over time without being programmed to do so. In data science, an algorithm is a sequence of statistical processing steps.</p>
        <h2>What is Machine Learning?</h2>
        <p>At its most basic, machine learning uses programmed algorithms that receive and analyze input data to predict output values within an acceptable range. As new data is fed into these algorithms, they learn and optimize their operations to improve performance, developing intelligence over time.</p>
        <h2>Types of Machine Learning</h2>
        <ul>
          <li><strong>Supervised Learning:</strong> Algorithms are trained on labeled data.</li>
          <li><strong>Unsupervised Learning:</strong> Algorithms are used on data without labels.</li>
          <li><strong>Reinforcement Learning:</strong> Algorithms learn to make certain decisions.</li>
        </ul>
      </BlogPost>
    </>
  );
};

export const meta = {
  path: '/post/first-blog-post',
  title: 'Understanding the Basics of Machine Learning',
  date: 'June 24, 2024'
};

export default FirstBlogPost;
