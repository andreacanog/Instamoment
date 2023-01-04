#!/usr/bin/env bash

set -o errexit

npm run build 
#set up the entire command 

bundle install
rails db:migrate db:seed
