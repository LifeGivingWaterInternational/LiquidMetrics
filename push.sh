#!/bin/bash

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  exit 1
fi

# Perform git operations
git add .
git commit -m "$1"
if git push -u origin main; then
  # Get the latest commit SHA-1 hash
  SHA1_HASH=$(git rev-parse HEAD)
  # Get the current timestamp
  TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
  # Print success message in green
  echo -e "\033[0;32mPushed #$SHA1_HASH:$TIMESTAMP\033[0m"
else
  echo "Error: Failed to push changes."
  exit 1
fi
