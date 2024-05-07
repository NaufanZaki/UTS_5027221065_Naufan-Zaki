#!/bin/bash

# bebas sesuaiin aja mau ditaruh di mana
npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=./src/proto/ ../proto/*.proto 