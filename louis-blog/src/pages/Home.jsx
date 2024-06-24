import React from 'react';
import SocialLinks from './../components/SocialLinks'
import PostPreview from './../components/PostPreview';

const Home = () => {
  const posts = [
    {
        "id": "post4",
        "title": "Transparency Watch: Enhancing Public Accountability Through Open Data",
        "summary": "Transparency Watch is a new platform leveraging HATVP datasets to promote transparency and accountability in public life. The website offers interactive dashboards that reveal insights into gender equality and the efficiency of declaration publications, empowering citizens and watchdogs to monitor public officials effectively.",
        "postDate": "24 Jun 2024"
    },
    { 
        id: 'post1', 
        title: 'The Synergy of Text-to-Speech, GPT-4 Text Generation, and Innovative AI Websites', 
        summary: "The incredible advances in artificial intelligence have led to transformative breakthroughs in multiple fields, including text-to-speech (TTS) and natural language understanding. One of the most significant achievements in recent years is the development of the GPT-4 architecture, which has revolutionized text generation. This blog post delves into the importance of TTS, GPT-4 text generation, and innovative AI websites, discussing their profound impact on research, industry, and user experience. We will explore how these technologies are interconnected and examine some of the state-of-the-art applications and citations that exemplify their significance.",
        postDate: "08 Apr 2023"
    },
    { 
        id: 'post2', 
        title: 'Handwritten digits demo!', 
        summary: "Building a model that can accurately recognize hand-drawn digits is a classic problem in the field of computer vision. In addition to building a highly accurate CNN model, I also developed a user-friendly interface that allows users to draw their own digits on a canvas and see the model's predictions in real time.",
        postDate: "23 Mar 2023"
    },
    { 
        id: 'post3', 
        title: 'OpenAI CLIP labelling and searching', 
        summary: "CLIP (Contrastive Language-Image Pre-training) is a deep learning model developed by OpenAI that can learn visual concepts from natural language supervision. It can understand images based on their descriptions and generate descriptions of images. In this post, we'll explore what CLIP is, how it works, and some of its exciting applications.",
        postDate: "23 Mar 2023"
    },
    

    // Add more posts here -- there are displayed in this order
  ];

  return (
    <div className="bg-white">
      <div className="py-4 text-center">
        <h1 className="text-5xl font-bold">Welcome to Louis Paulet blog</h1>
      </div>
      <SocialLinks />
      <div className="container mx-auto py-10 px-4 max-w-screen-md">
        <h2 className="text-3xl font-semibold mb-6">Recent Posts</h2>
        <ul>
          {posts.map((post) => (
            <PostPreview 
              key={post.id}
              id={post.id}
              title={post.title}
              summary={post.summary}
              postDate={post.postDate}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
