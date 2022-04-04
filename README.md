# travel_app
git push cc-front2 main:prod
# DEPLOY PROD
    COMAND=
     git pull && docker-compose down && docker build . -t travel_app=PROD_1.5  && docker-compose up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev

dokku config:set lm-front NEXT_PUBLIC_BRAND=lm NEXT_PUBLIC_API_URL_EXT=https://api.mansionhoteltours.com NEXT_PUBLIC_API_URL=https://api.mansionhoteltours.com 

# DEPLOY
git push cc-front main:prod && git push lm-front main:prod && git push sht-front main:prod && git push ht-front main:prod

