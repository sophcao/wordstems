import json
from collections import Counter

with open('dictionary.json', 'r') as file:
    dictionary = json.load(file)

stem_counter = Counter()

for word in dictionary:
    # Get all possible three-letter subarrays of a word
    for i in range(len(word) - 2):
        word_stem = word[i:i+3]
        stem_counter[word_stem] += 1

# Get 600 most common stems; note 600 is arbitrary
top_stems = stem_counter.most_common(600)

with open('stems_list.txt', 'w') as file:
    for stem_tuple in top_stems:
        file.write(f'{stem_tuple[0]}\n')

# Write stems and frequency counts to another file, just for interest
with open('stems_with_count.txt', 'w') as file:
    for stem, count in top_stems:
        file.write(f'{stem}: {count}\n')


