# travel_app
git push cc-front2 main:prod
# DEPLOY PROD
    COMAND=
     git pull && docker-compose down && docker build . -t travel_app=PROD_1.5  && docker-compose up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev

dokku config:set cc-front NEXT_PUBLIC_BRAND=cc NEXT_PUBLIC_API_URL_EXT=https://api.cocolandiatours.com NEXT_PUBLIC_API_URL=https://api.cocolandiatours.com 
