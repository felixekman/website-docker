#!/bin/bash

mkdir -p /var/www/letsencrypt

docker run -it --rm --name letsencrypt \
        -v /etc/letsencrypt:/etc/letsencrypt \
        -v /var/log/letsencrypt:/var/log/letsencrypt \
        -v /var/lib/letsencrypt:/var/lib/letsencrypt \
        -v /var/www/letsencrypt:/var/www/letsencrypt \
        quay.io/letsencrypt/letsencrypt \
        certonly \
        --webroot \
        --webroot-path /var/www/letsencrypt \
        --agree-tos \
        --renew-with-new-domains \
        -d harmonypsa.com \
        -d www.harmonypsa.com \
        -m felixekman@harmonypsa.com

docker kill --signal=HUP harmony_apache_1
