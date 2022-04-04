# travel_app

git push dokku_app10 main:prod

# DEPLOY RELEASE
    git pull && docker-compose down && docker build . -t travel_app:TEST_5.0 && docker-compose -f docker-compose.release.yml  up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev

# comnad
dokku config:set cc-api DO_SPACES_BUCKET=travel-app-space \
DO_SPACES_FOLDER=cc \
DO_SPACES_KEY=3VDT5UHH2F6KBAADLMI7 \
DO_SPACES_REGION=nyc3.digitaloceanspaces.com \
DO_SPACES_SECRET=8WUHeHZaVku18C05SDIQEP1SuX1KLqNmLw13r2kXAmc

dokku config:set sht-api API_TOUR_HOST=https=//api.samiriahotelytours.com \
INNOUT_HOST=https=//genbby.innout.cloud \
INNOUT_TOKEN=XP5SMuzGE7JnVBG4bz6KAix9wmfBFBJ006vruRXfSuDcgKYRjZdRd6bcRkPt \
MP_ACCESS_TOKEN=APP_USR-3734648925832046-032216-1c18bf925cd3658d417288fa02748f52-835224208 \
PORT=5000

# Deploy
git push cc-api main:prod && git push lm-api main:prod && git push sht-api main:prod && git push ht-api main:prod