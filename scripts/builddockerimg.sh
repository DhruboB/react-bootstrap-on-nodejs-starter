#!/bin/bash

# TODO Script needs to be enhanced based on various logic

docker build  -t $1:v1 .
echo $1
docker tag $1:v1 $1:latest

