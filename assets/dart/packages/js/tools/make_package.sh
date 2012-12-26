#!/bin/bash
NAME=$(basename `pwd`)
VERSION=$(awk '/version: (.*)/ {print $2}' pubspec.yaml)
OUTPUT=~/tmp/$NAME-$VERSION.tar.gz
git ls-files | tar -cvzf $OUTPUT --files-from -
echo "Created package: $OUTPUT"
