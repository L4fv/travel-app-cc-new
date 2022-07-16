# FIRST INITIAL dokku
git remote add dokku-cc-front-v2 dokku@mansionhoteltours.com:cc-front
git push dokku-cc-front-v2 main:prod

git remote add dokku-ht-front-v2 dokku@mansionhoteltours.com:ht-front
git push dokku-ht-front-v2 main:prod

git remote add dokku-sht-front-v2 dokku@mansionhoteltours.com:sht-front
git push dokku-sht-front-v2 main:prod

git remote add dokku-lm-front-v2 dokku@mansionhoteltours.com:lm-front
git push dokku-lm-front-v2 main:prod

git remote add dokku-hkt-front-v3 dokku@mansionhoteltours.com:htk-front
git push dokku-hkt-front-v3 main:prod
# travel_app-front
git push cc-front2 main:prod
# DEPLOY PROD
    COMAND:
         git pull && docker-compose down && docker build . -t travel-front-last:TEST_3.10  && docker-compose up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev

dokku config:set lm-front NEXT_PUBLIC_BRAND=lm NEXT_PUBLIC_API_URL_EXT=https://api.mansionhoteltours.com NEXT_PUBLIC_API_URL=https://api.mansionhoteltours.com 

dokku config:set lm-front NEXT_PUBLIC_GOOGLE_ANALYTICS=G-RPGG3HLKBE
&& dokku config:set sht-front NEXT_PUBLIC_GOOGLE_ANALYTICS=G-RPGG3HLKBE
&& dokku config:set htk-front NEXT_PUBLIC_GOOGLE_ANALYTICS=G-RPGG3HLKBE
&& dokku config:set ht-front NEXT_PUBLIC_GOOGLE_ANALYTICS=G-RPGG3HLKBE
&& dokku config:set cc-front NEXT_PUBLIC_GOOGLE_ANALYTICS=G-RPGG3HLKBE

# push
40a324e1da21f22ca792527af4
# DEPLOY
git push cc-front main:prod && git push lm-front main:prod && git push sht-front main:prod && git push ht-front main:prod

#mercadolibre
prod
NEXT_PUBLIC_PUBLICK_KEY_TEST_MERCADOPAGO=APP_USR-ab56aa38-f7e9-4d10-9093-d89ea3a8efcd
test
NEXT_PUBLIC_PUBLICK_KEY_TEST_MERCADOPAGO=TEST-408b3c56-a1f5-4dd0-9039-e222d131830b
