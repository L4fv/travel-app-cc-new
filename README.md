# travel_app-front
git push cc-front2 main:prod
# DEPLOY PROD
    COMAND:
         git pull && docker-compose down && docker build . -t travel-front:TEST_2.3  && docker-compose up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev

dokku config:set lm-front NEXT_PUBLIC_BRAND=lm NEXT_PUBLIC_API_URL_EXT=https://api.mansionhoteltours.com NEXT_PUBLIC_API_URL=https://api.mansionhoteltours.com 

# DEPLOY
git push cc-front main:prod && git push lm-front main:prod && git push sht-front main:prod && git push ht-front main:prod

#mercadolibre
prod
NEXT_PUBLIC_PUBLICK_KEY_TEST_MERCADOPAGO=APP_USR-ab56aa38-f7e9-4d10-9093-d89ea3a8efcd
test
NEXT_PUBLIC_PUBLICK_KEY_TEST_MERCADOPAGO=TEST-408b3c56-a1f5-4dd0-9039-e222d131830b
