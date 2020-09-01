array = [1,2,3]
sequence = [1,3]
def validateSubsequence(array, sequence):
    sequenceIndex = 0
    for i in range(len(array)):
        if sequenceIndex == len(sequence):
            break
        if sequence[sequenceIndex] == array[i]:
             sequenceIndex +=1
    return sequenceIndex == len(sequence)
                
validateSubsequence(array,sequence)