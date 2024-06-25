# Understanding the Arithmetic Capabilities of Modern Language Models by creating a benchmark dataset

## Introduction

Quick, what is 1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1?   
Is it 10? 13? 16?  

Large language models (LLMs) have become a cornerstone of numerous applications, ranging from natural language processing to creative content generation. However, their proficiency in performing basic arithmetic tasks remains an intriguing area of study. The repetitive sums benchmark sheds light on this aspect, evaluating how well these models can compute simple sums of ones, such as 1+1+1.  

[Check the project here](https://github.com/louispaulet/benchmark_experiments/tree/main/Repetitive%20Sums%20Benchmark%20Dataset)  
[Check the dataset here](https://huggingface.co/datasets/the-french-artist/repetitive_sums_benchmark)   
[Check the leaderboard here](https://huggingface.co/datasets/the-french-artist/repetitive_sums_benchmark_leaderboard/viewer/default/train)  


We tested 33 models using the following providers:  
* [openAI](https://openai.com/)  
* [Anthropic](https://www.anthropic.com/)  
* [Together](https://together.ai/)  
* [Google Gemini](https://gemini.google.com/)  

## Benchmark Methodology

The repetitive sums benchmark is designed to be straightforward yet revealing. The task involves computing the sum of a sequence of ones, a fundamental arithmetic operation. The methodology encompasses several key steps:

1. **Prompt Construction**: A carefully designed prompt is used to ask the model for the result of a given sum, ensuring clarity and precision in the query.
2. **Input Data**: The input consists of a sequence of ones, represented as a string (e.g., "1+1+1"), with the length varying from 2 to 100.
3. **Token Limitation**: To ensure concise and relevant responses, the number of tokens produced by the LLM is limited whenever possible.
4. **Result Extraction**: The digits from the model's output are extracted and converted into an integer, representing the computed sum.
5. **Comparison**: The computed result is compared against the expected value to assess accuracy.
6. **Statistical Analysis**: Various statistical measures are computed, including average accuracy, mean error, median error, error standard deviation, minimum error, maximum error, and parsing failure count.
7. **Leaderboard Update**: The results for each model are compiled into a leaderboard, highlighting their performance.

## Some result plots  

We show a selection of 4 flagship models from best to worst performing.  
[More plots here](https://github.com/louispaulet/benchmark_experiments/tree/main/Repetitive%20Sums%20Benchmark%20Dataset)  

Claude 3 opus:  
![result plot for claude-3-opus](https://github.com/louispaulet/benchmark_experiments/raw/main/Repetitive%20Sums%20Benchmark%20Dataset/position%20of%20correct%20sums/claude3-opus.png)  

GPT4o:  
![result plot for GPT4o](https://github.com/louispaulet/benchmark_experiments/raw/main/Repetitive%20Sums%20Benchmark%20Dataset/position%20of%20correct%20sums/gpt4o-2024-05-13.png)  

Gemini 1.5 pro:  
![result plot for Gemini 1.5 pro](https://github.com/louispaulet/benchmark_experiments/raw/main/Repetitive%20Sums%20Benchmark%20Dataset/position%20of%20correct%20sums/gemini-1.5-pro.png)  

Mixtral 8x22B:  
![result plot for Mixtral 8x22B](https://github.com/louispaulet/benchmark_experiments/raw/main/Repetitive%20Sums%20Benchmark%20Dataset/position%20of%20correct%20sums/mixtral-8x22b.png)  

## Benchmark Results Analysis

The benchmark results provide a fascinating insight into the arithmetic capabilities of modern LLMs. Here are some notable observations:

1. **Top Performers**:
   - **Claude-3-Opus-20240229** stands out with the highest average accuracy of 78.79%, demonstrating exceptional consistency in performing repetitive sums. The model also exhibits a low mean error of 2.43 and no parsing failures, indicating robust arithmetic capabilities.
   - **GPT-4o-2024-05-13** follows closely with an accuracy of 72.73%. Despite a slightly higher mean error of 3.67, this model showcases strong performance in basic arithmetic tasks.
   - **GPT-4-0125-Preview** presents a contrasting picture with a lower accuracy of 44.44%. While it manages to avoid parsing failures, its higher error range suggests variability in performance.

2. **Moderate Performers**:
   - Models such as **Claude-3-Haiku-20240307** and **Gemini-1.5-Flash** achieve moderate accuracies around 40%, with varied error distributions. These models demonstrate a balanced performance, capable of handling repetitive sums with reasonable accuracy.
   - **GPT-4-Turbo-2024-04-09** and **GPT-4-1106-Preview** show similar average accuracies (approximately 39%), albeit with different error profiles, highlighting the impact of model variations on arithmetic performance.

3. **Lower Performers**:
   - **Gemini-1.0-Pro** and **Gemini-1.5-Pro** exhibit lower accuracies around 30%, accompanied by higher error means and standard deviations. These results indicate challenges in maintaining arithmetic consistency.
   - **Qwen/Qwen2-72B-Instruct** and **GPT-3.5-Turbo-0125** also display lower accuracies (approximately 24%), with significant error variances, reflecting difficulties in performing repetitive sums accurately.

4. **Least Performers**:
   - Models such as **WizardLM/WizardLM-13B-V1.2** and **Google/Gemma-2B-IT** are at the bottom of the leaderboard, with accuracies around 7% to 8%. These models struggle significantly with the repetitive sums task, indicating limitations in basic arithmetic capabilities.
   - **Qwen/Qwen1.5-14B-Chat** and **Google/Gemma-7B-IT** show high error means (over 35) and standard deviations, underscoring their poor performance in arithmetic consistency.

## Conclusion

The repetitive sums benchmark reveals a wide range of arithmetic capabilities among modern LLMs. While some models, like Claude-3-Opus and GPT-4o, excel in performing basic sums with high accuracy and consistency, others struggle significantly. These findings underscore the importance of continuous improvement and fine-tuning in developing LLMs, especially for tasks requiring precise arithmetic computations.

As we move forward, benchmarks like these will play a crucial role in guiding the development of more robust and reliable language models, capable of handling a diverse array of tasks with proficiency and accuracy. By understanding their strengths and limitations, we can better harness the potential of LLMs in various applications, from everyday use to specialized domains.

For a detailed look at the benchmark datasets and to explore the full leaderboard, visit the [Repetitive Sums Benchmark Dataset](https://huggingface.co/datasets/the-french-artist/repetitive_sums_benchmark_leaderboard/viewer/default/train) on HuggingFace Hub.

*Published 25 Jun 2024.*  