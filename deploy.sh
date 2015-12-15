#!/bin/bash
gulp bundle
cp index.prod.html index.html
rsync -azP ./ vr:/kunden/363092_33619/webseiten/aureliaholics.com
git reset --hard HEAD