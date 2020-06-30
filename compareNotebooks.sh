#!/usr/bin/bash

file1=$1
file2=$2
echo "File1 is $file1 and File2 is $file2"
jupyter nbconvert --to python $file1
jupyter nbconvert --to python $file2
file1=${file1/ipynb/py}
file2=${file2/ipynb/py}
echo "File1 is $file1 and File2 is $file2"
echo "abc"
#echo $(diff $file1 $file2)

