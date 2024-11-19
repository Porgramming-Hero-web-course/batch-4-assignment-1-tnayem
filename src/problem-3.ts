{
    //
    function countWordOccurrences(sentence: string, word: string): number {
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();
        const words = lowerSentence.split(' ');

        return words.reduce((count, currentWord) => {
            return currentWord === lowerWord ? count + 1 : count;
        }, 0);
    }
    // console.log(countWordOccurrences("I love typescript", "typescript"))

    //
}