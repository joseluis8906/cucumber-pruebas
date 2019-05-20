#!/bin/bash
docker run \
    -it \
    --name unixjs-tests \
    -v $(pwd):/app \
    -d node:10.15.3-stretch