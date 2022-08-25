#!/usr/bin/env bash
set -euo pipefail

img=docker-registry.onlim.com/csp-collector:latest

docker build -t $img .

docker push $img
