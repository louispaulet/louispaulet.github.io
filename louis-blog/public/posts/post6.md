# Unraveling the Mysteries of MMLU: A&nbsp;Comprehensive Analysis

Hello, AI aficionados! Today, we embark on a deep dive into the fascinating world of the Massive Multitask Language Understanding (MMLU) dataset. This epic journey is divided into three parts, each one building on the last, to explore how shuffling the dataset impacts language model performance, how we can leverage collective intelligence, and what insights we can glean from our experiments. So, grab your favorite beverage, get comfy, and join us for a thrilling ride through the world of AI and natural language processing. 🌐✨

## Part 1: Creating the Shuffled MMLU Dataset 🌀📚

![a card shuffling gif](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Riffle_shuffle.gif/330px-Riffle_shuffle.gif)

Our journey begins with the creation of the shuffled MMLU dataset. This foundational step sets the stage for everything that follows.

### The Goal 🎯

The objective here is to transform the original `tasksource/mmlu` dataset into a new version called `shuffled_mmlu`. The essence of this transformation lies in shuffling the possible answers for each question, creating multiple permutations. Each question in the MMLU dataset has four possible answer choices (A, B, C, D). By shuffling these choices, we generate 24 unique permutations for each question.

### Why Shuffle? 🤔

Why go through the trouble of shuffling the answers? Here's the rationale:
- **Bias Reduction**: Language models (LLMs) often exhibit biases based on the order of answer choices. By presenting answers in all possible orders, we aim to mitigate this bias.
- **Collective Intelligence**: By employing a voting mechanism across all permutations, we hope to harness collective intelligence to improve overall performance.

### Process Overview 🛠️

Here’s a step-by-step breakdown of what we did:

1. **Dataset Creation**: Starting with the source MMLU dataset, we created permutations for each question.
2. **Permutation Labeling**: Each permutation is labeled with its specific order (e.g., ABCD, DCBA) in a feature called `letter_order`.
3. **Combining Categories**: To ensure practicality and faster loading times (we tried loading 1400 splits from HuggingFace Hub and it didn't go well...), we combined all 57 MMLU categories into a single dataset, while maintaining splits into test, validation, and dev files.

### Hypothesis 🧠

Our hypothesis is that the order of choices affects the model's internal logic. Since LLMs operate in an autoregressive manner (processing one word at a time in sequence), presenting the wrong answer first might lead the model to discard it. By shuffling the answer choices and using the most popular answer from the permutations, we aim to eliminate order bias and enhance accuracy.

### Detailed Steps 📜

1. **Helper Functions**: We defined various helper functions to assist in the shuffling and permutation process.
2. **Loading the Dataset**: The original MMLU dataset was loaded.
3. **Shuffling and Saving**: We shuffled the answers and saved the new dataset in Parquet format for efficiency (pushed to HuggingFace Hub).
4. **Validation**: We performed checks to ensure the uniqueness of question IDs and verified the translation of shuffled answers back to the original context.

### End result  

The final dataset has 380,592 rows.  
[Link to shuffled_mmlu on HuggingFace Hub](https://huggingface.co/datasets/the-french-artist/shuffled_mmlu)  
Here are the 24 permuations for a single question from category `college_mathematics`.  

|index|question|choices|answer|letter\_order|
|---|---|---|---|---|
|26398|\(1+i\)^10 =|\['1' 'i' '32' '32i'\]|3|ABCD|
|26498|\(1+i\)^10 =|\['1' 'i' '32i' '32'\]|2|ABDC|
|26598|\(1+i\)^10 =|\['1' '32' 'i' '32i'\]|3|ACBD|
|26698|\(1+i\)^10 =|\['1' '32' '32i' 'i'\]|2|ACDB|
|26798|\(1+i\)^10 =|\['1' '32i' 'i' '32'\]|1|ADBC|
|26898|\(1+i\)^10 =|\['1' '32i' '32' 'i'\]|1|ADCB|
|26998|\(1+i\)^10 =|\['i' '1' '32' '32i'\]|3|BACD|
|27098|\(1+i\)^10 =|\['i' '1' '32i' '32'\]|2|BADC|
|27198|\(1+i\)^10 =|\['i' '32' '1' '32i'\]|3|BCAD|
|27298|\(1+i\)^10 =|\['i' '32' '32i' '1'\]|2|BCDA|
|27398|\(1+i\)^10 =|\['i' '32i' '1' '32'\]|1|BDAC|
|27498|\(1+i\)^10 =|\['i' '32i' '32' '1'\]|1|BDCA|
|27598|\(1+i\)^10 =|\['32' '1' 'i' '32i'\]|3|CABD|
|27698|\(1+i\)^10 =|\['32' '1' '32i' 'i'\]|2|CADB|
|27798|\(1+i\)^10 =|\['32' 'i' '1' '32i'\]|3|CBAD|
|27898|\(1+i\)^10 =|\['32' 'i' '32i' '1'\]|2|CBDA|
|27998|\(1+i\)^10 =|\['32' '32i' '1' 'i'\]|1|CDAB|
|28098|\(1+i\)^10 =|\['32' '32i' 'i' '1'\]|1|CDBA|
|28198|\(1+i\)^10 =|\['32i' '1' 'i' '32'\]|0|DABC|
|28298|\(1+i\)^10 =|\['32i' '1' '32' 'i'\]|0|DACB|
|28398|\(1+i\)^10 =|\['32i' 'i' '1' '32'\]|0|DBAC|
|28498|\(1+i\)^10 =|\['32i' 'i' '32' '1'\]|0|DBCA|
|28598|\(1+i\)^10 =|\['32i' '32' '1' 'i'\]|0|DCAB|
|28698|\(1+i\)^10 =|\['32i' '32' 'i' '1'\]|0|DCBA|

### Checkpoints and Verification ✔️  

After a few backs-and-forths, we can proudly say that the dataset is correctly mapped.  

- **Unique Question IDs**: We ensured that each question ID remains unique even after shuffling. This is important for the voting step: we need to vote for a single unique question. This ID is a hash of the question+choices+index, as there are duplicates questions in the dataset.    
- **Correct Translations**: We verified that the shuffled answers could be translated back to their original format correctly, maintaining consistency. This step both ensures that the translation works, and that we will be able to vote for the best common answer after inference.  

### Conclusion 🏁

With the shuffled MMLU dataset ready, we now have a robust foundation for further analysis and inference. This setup allows us to explore how different answer orders impact model performance and helps us refine our approach to achieving higher accuracy through collective intelligence.

## Part 2: Performing Complete Shuffled MMLU Inference 🧠💻

With our shuffled dataset in hand, we now turn to the task of performing inference on this massive collection of questions.

### The Challenge: Shuffled MMLU Dataset 🤔

In this part, we are dealing with an enormous version of the MMLU dataset. Why is it so big? Because each question has 24 different permutations, making this dataset 24 times larger than the original! Our goal is to perform inference on this entire dataset efficiently.

### The Setup 🛠️

To tackle this task, we leveraged the power of an A100 GPU in Google Colab. Here’s a quick rundown of our process:
1. **Dataset Retrieval**: We fetched the shuffled MMLU dataset from the HuggingFace Hub.
2. **Batch Inference**: We performed batched inference on 10 samples at a time to optimize for speed without overwhelming the GPU.

### Why 10 Samples per Batch? 🤔

Some of the samples were exceptionally large (>4000 tokens), which could have caused memory issues. By processing 10 samples at a time, we found a balance between efficiency and practicality:
- **Speed**: 10 samples per batch yielded 60 samples per second.
- **Comparison**: Larger batches (e.g., 100 samples) only marginally increased the speed to 70 samples per second, not worth the additional complexity of handling huge variations in sample size.

### Inference Execution 🚀

With our setup in place, we kicked off the inference process. The complete inference took approximately 3 hours on an A100 GPU. Not bad for such a massive dataset! ⏱️

### Uploading the Results 📤

Once the inference was completed, we uploaded the results back to the HuggingFace Hub for further analysis. This step ensures that the data is ready for the next phase, which involves detailed analysis and insights extraction.  
The inference dataset is [here](https://huggingface.co/datasets/the-french-artist/shuffled_mmlu_no_splits_unsloth_llama-3-8b-bnb-4bit).  

### Conclusion 🏁

Now that the heavy lifting is done, we can shift gears and focus on analyzing the results. This analysis can be done in a GPU-free session, making it accessible even without high-end hardware. 🎉

### Key Takeaways 📝

- **Efficiency is Key**: Balancing batch size to handle large tokens effectively is crucial for optimal performance.
- **GPU Power**: Utilizing an A100 GPU significantly speeds up the inference process, making it feasible to handle massive datasets.
- **Preparation for Analysis**: With the inference results ready, we can proceed to analyze the data and extract meaningful insights.

## Part 3: Analyzing Shuffled MMLU Inference Results 📊🔍

In this final part of our journey, we delve into the analysis of the inference results from our shuffled MMLU dataset. Our objective is to understand the impact of shuffling on model performance and to explore how leveraging collective intelligence can enhance accuracy.

### The Objective 🎯

Our goals in this part are:
1. To compute the accuracy of the model on the shuffled MMLU dataset.
2. To analyze the results by vote, category, and letter order.
3. To explore the influence of letter position on overall accuracy.

### Key Analysis Points 📍

#### Overview and Goals

We start by focusing on how many votes are necessary to improve performance without excessively increasing computational costs. We also investigate if there are specific votes that decrease the global mean accuracy and identify if any letter orders benefit from being outliers in the voting strategy. Moreover, we examine which letter combinations achieved the best scores and analyze the influence of a given letter position in a letter order.

#### Dataset Verification

Before diving into the results, we ensure the dataset's integrity. We verify the uniqueness of `question_id` to confirm that each question appears 24 times, corresponding to the 24 permutations. We also compare the expected answers with the inferred answers to check for balance in the value counts.

### The Voting Step 🗳️

A crucial part of our analysis involves the voting step. Here, we aim to determine the majority answer for each question based on the predictions from all 24 permutations. This step leverages collective intelligence, hypothesizing that the most frequently predicted answer across permutations is likely to be correct.

1. **Translation of Local to Global Answers**:
   - We translated each locally predicted answer (based on shuffled positions) back to its original form to ensure consistency across permutations.

2. **Majority Vote Calculation**:
   - For each unique question, we identified the most common predicted answer among the 24 permutations. This majority vote represents the collective decision of the model across different answer orders.

3. **Validation of Majority Vote**:
   - We ensured that the majority vote accurately represented the most frequent predictions by comparing the sizes and counts of the predicted answers.  
   
### Letter order performance over categories

When looking at the average accuracy over the complete MMLU benchmark (all categories), we see that some letter orders perform better than others:  
![bar plot of letter order acc over complete MMLU](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/total_mean_acc_per_letter_order.png?raw=true)  
However, the difference is only 3 percentage points, while **the result of the voting strategy is 60.87% average accuracy**, showing that collective intellingence is key.  

Bar plot of average accuracy per category (all letter orders averaged):  
![bar plot of average accuracies](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/mmlu_mean_accuracy_per_category.png?raw=true)  
We can observe massive differences between categories, with reasoning skills having the lowest scores, and knowledge-based tasks having the highest scores.  

Now, lets mix these two plots and get the top 5 and bottom 5 !  

MMLU Categories with the highest delta between the best performing letter order and the worst performing letter order:  
![top 5 categories with a high delta in letter order accuracy](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/top_5_deltas_in_accuracy_per_letter_order_and_category.png?raw=true)

MMLU categories with the lowest delta between best and worst letter order:    
![flop 5 categories with a high delta in letter order accuracy](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/flop_5_deltas_in_accuracy_per_letter_order_and_category.png?raw=true)

We see huge disparities in performance in the categories that the model struggles with. It seems like it answers at random, with a slight advantage using the voting strategy.  
When the categories have a better average score, the difference between letter orders is lesser, and the voting strategy is less effective (the model cannot perform above its actual knowledge).  

### Outliers and Followers  

Are all letter orders benefitting from this voting system?  
Haven't we all felt that the popular choice wasn't always the best?  
We can measure it!  

We coined the following 4 categories:  
* agrees with popular vote and is right : 'beneficial follower'  
* agrees with popular vote and is wrong : 'detrimental follower'  
* disagrees with popular vote and is wrong : 'detrimental outlier'  
* disagrees with popular vote and is right : 'beneficial outlier'  

The total accuracy is the follower accuracy + outlier accuracy. The line plot below shows that all letter orders benefit from the collective vote:  
![line plot of accuracy for followers outliers and total](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/total_mean_acc_follower_outlier_per_letter_order.png?raw=true)  
It also shows that difference in accuracies from letter order to letter order are minimal.  

So, around 5% of the time, each letter order would have fared better left to choose on its own.  
But the rest of the time, the popular vote was wiser.  

### How many voters are enough?

We measure the average accuracy over all categories by adding random letter orders to the voting pool:  
![line plot of voting performance](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/24_voters_lines.png?raw=true)  
We can observe many different outcomes depending on the letter order that was added to the voting pool.  
Same plot with a regression line:  
![line plot of voting performance with regression line](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/24_voters_lines_regression.png?raw=true)  
These line plots helped us to decide on the 10-voters diminishing returns rule.  

We can see that the average accuracy is always rising, and we could try this experiment again, but this time, instead of shuffling the answers, we could rephrase the questions.  
Then the choices.    
As the regression line looks logarithmic, we would get diminishing returns by continuing this experiment, but the question remains: how high can it go?  

### Letter order influence  

We measured the influence of a letter position in a given letter order in relation to the total MMLU accuracy (no voting here).  
We found minute differences in average accuracy suggesting that the letter A should be first and letter D should be last.  
Box plot showing the average accuracy of a letter at positions 0 to 3 (eg. ABCD has letter A at position 0 and D at position 3):  
![letter order acc boxplot](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/letter_order_acc_per_letter_position.png?raw=true)  
Same plot but as a line showing the accuracy progression of a letter per position in the letter order:  
![letter order acc lineplot](https://github.com/louispaulet/louispaulet.github.io/blob/main/louis-blog/public/post_images/letter_order_acc_per_letter_position_lines.png?raw=true)  

### How do we select the 10 letter orders?  

We have shown that no particular letter position is better than the others, and that the diminishing returns in average accuracy happen at 10 voters in the pool.  
But how can we make sure we select the best letter orders to be part of our 10 voters (over the total 24 possible letter orders)?  
And what is the influence of the order in which they are added to the voting pool?  

We compared three selection methods:  
* take letter order ABCD and then select all letter orders that have a letters in other positions (so ABDC is out, as A is already in position 0 in ABCD, and BCBA is ok as no letter is positionned like ABCD)  
* Hamming distance  ([wiki](https://en.wikipedia.org/wiki/Hamming_distance))  
* Levenshtein distance  ([wiki](https://en.wikipedia.org/wiki/Levenshtein_distance))  

#### Method 1 (original letter order plus all orders that have letters in a different position)
This yields the closest accuracy difference between both groups (selected and non-selected by order letters we chose).
However, the letter 'A' is never at the beginning, and D is never at the end (as specified, except for ABCD original order), which is a huge bias.
If we were to select random samples, this would rarely happen.

#### Method 2 : Hamming distance
This is the best method as the accuracy difference between two groups is not too high, and not too low (between methods 1 & 2).
It also has the best letter repartition, with a fair amount of letter orders starting by 'A' and ending by 'D'.
We choose this selection method.

#### Method 3 : Levenshtein distance
This is the worst method, as the output letter orders are heavily biased towards letter 'A'.
Moreover, there is a large accuracy gap between select and not-selected groups.

#### Adding letter orders to the voting pool  
We choose to add the selected letter orders randomly.  
We shuffle the letter orders 10 times and add them sequentially.  

Here are the results:  



### Detailed Analysis 📈

Our analysis revealed several interesting insights:

1. **Bias Mitigation**: Shuffling the answer choices significantly reduced the bias introduced by the order of answers. The mean accuracies across different permutations were more consistent, indicating that shuffling helps in mitigating positional bias.

2. **Collective Intelligence**: By employing a voting mechanism across all permutations, we harnessed the power of collective intelligence, which resulted in higher overall accuracy. The voting method helped in selecting the most likely correct answer from the shuffled permutations. The average accuracy over the complete MMLU using the voting strategy is 60.87%, while the perfect performing letter order only reached 53%.  

3. **Letter Position Influence**: We observed that the influence of letter position on accuracy was minimal. This finding suggests that the model's performance was not heavily skewed by the position of the correct answer, reinforcing the robustness of our shuffling approach.

### Findings and Insights 🔍

- **Improved Accuracy**: Using all 24 letter orders increased average accuracy from 50% to 60%, demonstrating a significant improvement.
- **Optimal Shuffles**: Implementing 10 letter orders provided the best balance between added accuracy and computational efficiency, avoiding diminishing returns beyond this point.
- **No Outlier Order**: No single letter order consistently outperformed others, indicating the absence of a beneficial outlier in the voting strategy.
- **Position Independence**: The letter position in a letter order did not have a meaningful influence on total mean accuracy.

### Conclusion 🏁

Through this comprehensive analysis, we have demonstrated the effectiveness of shuffling answer choices to mitigate bias and improve accuracy. Our findings underscore the potential of collective intelligence in enhancing language model performance. By understanding these dynamics, we can develop more robust AI systems that are less susceptible to biases and deliver more accurate results.

Our main takeaways are:
- The optimal ingredient for improved accuracy is collective intelligence: the voting principle enhances the complete system.
- Shuffling answer choices and using a collective voting mechanism can achieve approximately a 10 percentage point increase in accuracy with fewer computational resources.

This concludes our deep dive into the MMLU dataset and the impact of shuffling answer choices on language model performance. We hope you found this journey insightful and inspiring. Until next time, happy coding! 🌟