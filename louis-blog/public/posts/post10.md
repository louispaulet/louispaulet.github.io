---

# **Optimizing Our RAG Pipeline: From Crawling Chaos to Deduplication Mastery** 🚀

We set out to create a system that could answer questions about Checkout.com's documentation by leveraging the power of large language models (LLMs). To achieve this, we needed a robust Retrieval-Augmented Generation (RAG) pipeline. Our approach was straightforward: 

1. **Crawl** 1700 pages of Checkout.com documentation in HTML format.
2. **Build a RAG system** using embeddings and free API calls to **Groq Cloud**.

In this post, I’ll walk you through the entire journey of transforming this chaotic collection of HTML pages into a streamlined, production-ready pipeline. We’ll explore how we identified redundant data, cleaned our embeddings, implemented reranking, and set the stage for scalable deployment. This story is one of problem-solving, iteration, and a healthy dose of trial and error. Buckle up!

---


## **The Goal: Crafting a Searchable Documentation System** 📚

Our objective was to create a system that allows users to search Checkout.com’s documentation and receive accurate, relevant answers quickly. To achieve this, we embraced RAG principles: retrieving the most pertinent document chunks and using a language model to generate responses based on those chunks.

Here’s the initial outline of our pipeline:

1. **HTML Crawling**: Using Selenium and BeautifulSoup to scrape documentation pages.
2. **Text Extraction**: Employing `map` in HuggingFace Datasets to extract visible text from the HTML.
3. **Chunking**: Splitting the text into 1000-character chunks with 200-character overlaps using LangChain.
4. **Embeddings**: Generating embeddings using the `MiniLM` model from HuggingFace.
5. **Indexing**: Storing these embeddings in a FAISS GPU index for fast retrieval.
6. **Inference**: Querying the FAISS index to retrieve the Top K most relevant chunks.

On paper, this seemed straightforward. However, reality had other plans. We soon realized **duplicates** were wreaking havoc on our search results.

---

## **The Duplicate Dilemma: What Went Wrong?** 📝

When we first tested inference, the Top K results often contained the same information multiple times. This redundancy led to repetitive answers, frustrating users and diminishing the system's effectiveness.

### **Where Did These Duplicates Come From?**

A thorough investigation revealed two primary sources of duplication:

1. **Crawling Issues**: URLs containing `#` anchors (e.g., `page#section1`, `page#section2`) caused our crawler to save multiple copies of the same HTML page. Each anchor represented a different section of the same page, but the content was identical.

2. **Embedding Similarity**: When we generated embeddings for these chunks, we found that **97% of the dataset** contained pairs of embeddings with **100% similarity**. This meant we were indexing the same content repeatedly.

### **Diagnosing the Problem** 🔍

To fully understand the extent of the issue, we took a systematic approach:

- **HTML Deduplication**: We removed duplicate HTML files from the crawling pipeline. Yet, duplicates persisted in the FAISS index.
- **Embedding Analysis**: Upon deeper inspection, we discovered that only **1700 unique chunks** existed across **1648 HTML files**. The rest of the dataset was redundant noise.

It was clear that deduplication was critical to improving our pipeline’s efficiency and accuracy.

---

## **The Cleanup Operation: Pruning the Dataset** ✂️

Armed with this knowledge, we set out to clean up our pipeline. Here’s what we did:

1. **Pruned the FAISS Index**: We removed duplicate embeddings, reducing the index to the 1700 unique chunks.
2. **Verified the Results**: We ran inference tests and confirmed that the Top K results no longer contained duplicates.

This was a huge improvement! But we still faced a challenge: our dataset contained **38,000 chunks**, most of which were now irrelevant. To make the system truly efficient, we needed to prune the dataset itself.

---

## **Implementing Reranking: Enhancing Retrieval Quality** 📊

While deduplication improved our search results, we realized that not all retrieved chunks were equally useful. This is where **reranking** came in. Reranking helps prioritize the most relevant results from the initial Top K retrieved chunks.

Let’s break down how reranking worked in practice with a real-world example.

### **Example: Gateway Response Codes Query**

In our quest to optimize the RAG pipeline, reranking emerged as a crucial step in delivering high-quality answers. Let's explore how reranking improved retrieval results when answering the query:

```python
user_query = "Explain API gateway response codes please"
rag_pipeline(user_query, db, reranker, api_key, k=20, kf=3)
```

#### **Initial Retrieval: The Top 20 Chunks**

Our RAG pipeline initially retrieved 20 chunks. Among them, we noticed a mix of **highly relevant, partially relevant, and redundant content**:

- **Relevant Chunks**:
  - **Chunk 1**: A concise list of HTTP status codes and descriptions, directly addressing the query.
  - **Chunks 2-5**: Detailed breakdowns of API response codes, albeit repetitive.
  
- **Less Relevant Chunks**:
  - **Chunk 6**: Discusses API endpoints — useful context, but not specific to response codes.
  - **Chunk 9**: Example payloads, not related to explaining response codes.

- **Redundancy**:  
  Multiple chunks (2, 3, 4, and 5) contained near-identical information.

This initial set contained valuable content, but the signal was buried in noise.

#### **MiniLM Reranking to the Rescue**

We employed **MiniLM**, a lightweight transformer-based reranker, to prioritize the most relevant chunks from the initial retrieval. By setting `kf=3`, MiniLM selected the top 3 most relevant chunks:

1. **Chunk 1**:  
   ```plaintext
   HTTP status codes  
   Code | Description  
   200 | OK  
   201 | Created  
   401 | Unauthorized  
   404 | Not found  
   500 | Internal server error  
   ```

2. **Chunk 2**:  
   ```plaintext
   Response Description: A description of the response code of the payment request.  
   Breakdown Type: Type of fee or amount (e.g., authorization fee).  
   ```

3. **Chunk 6**:  
   ```plaintext
   Response Code Ranges:  
   10xxx - APPROVED  
   20xxx - SOFT DECLINE  
   30xxx - HARD DECLINE  
   ```

#### **Why Reranking Improved Quality**

1. **Prioritization of Key Content**:  
   Chunk 1 provided a clear and concise explanation of standard HTTP status codes, perfectly aligned with the user's query.

2. **Reduced Redundancy**:  
   MiniLM effectively ignored redundant chunks (2, 3, 4, 5), surfacing only one version of that detailed breakdown.

3. **Diverse Context**:  
   By including Chunk 6, the reranker added context about Checkout.com’s custom response codes, enhancing the depth of the answer.

---

### **Takeaway: Reranking as a Quality Booster**

In a RAG pipeline, **retrieval alone isn't enough** — especially when dealing with large datasets prone to redundancy. Reranking ensures that the **most relevant, non-redundant chunks rise to the top**, resulting in clearer, more accurate responses.

MiniLM's reranking turned a noisy list into a **focused, high-quality answer**, proving itself indispensable in optimizing our pipeline.



#### **Generated Response:**

Using these top-ranked chunks, our language model generated the following response:

> The Checkout.com API uses a combination of standard HTTP status codes and custom response codes to indicate the outcome of requests.
> 
> - **10xxx**: APPROVED 
> - **20xxx**: SOFT DECLINE (temporary issues, retry possible)
> - **30xxx**: HARD DECLINE (permanent issues, do not retry)
> - **40xxx**: RISK RESPONSES (security-related issues)
> - **50xxx**: CHECKOUT.COM DECLINED (issues specific to Checkout.com’s processes)

This response accurately captures the nuances of API response codes, thanks to reranking prioritizing the most relevant chunks.

### **Why Reranking Matters**

Reranking ensures that the most informative and contextually appropriate chunks are prioritized, leading to more accurate and useful answers. Without reranking, less relevant chunks might degrade the quality of the generated response.

---

## **Next Steps: Building a Production-Ready System** 🛠️

With deduplication and reranking in place, we turned our attention to deployment. Our roadmap includes:

1. **Pruning the HTML dataset** to keep only the most relevant files.
2. **Switching to a cloud-based reranker** for scalability.
3. **Deploying a scalable solution** using managed vector databases and cloud functions.

---

## **Reflections and Takeaways** 🧠

This journey taught us valuable lessons about data quality, retrieval accuracy, and system optimization. Deduplication and reranking were critical steps in transforming our RAG pipeline into a robust, production-ready solution.

Stay tuned for more updates as we continue refining and scaling our system!

---

**Happy building!** ✨

---

