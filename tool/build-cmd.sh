#!/bin/bash

rm -rf lib
edp build -f -s amd
mv output/asset lib
rm -rf output
