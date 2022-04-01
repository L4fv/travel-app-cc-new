# travel_app
git push cc-front2 main:prod
# DEPLOY PROD
    COMAND=
     git pull && docker-compose down && docker build . -t travel_app=PROD_1.5  && docker-compose up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev

dokku config:set sht-api API_TOUR_HOST=https=//api.samiriahotelytours.com INNOUT_HOST=https=//genbby.innout.cloud INNOUT_TOKEN=XP5SMuzGE7JnVBG4bz6KAix9wmfBFBJ006vruRXfSuDcgKYRjZdRd6bcRkPt MP_ACCESS_TOKEN=APP_USR-3734648925832046-032216-1c18bf925cd3658d417288fa02748f52-835224208 NEXT_PUBLIC_BRAND=sht NEXT_PUBLIC_API_URL_EXT=https://api.samiriahotelytours.com NEXT_PUBLIC_API_URL=https://api.samiriahotelytours.com 
