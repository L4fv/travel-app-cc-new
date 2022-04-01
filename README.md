# travel_app

git push dokku_app10 main:prod

# DEPLOY RELEASE
    git pull && docker-compose down && docker build . -t travel_app:TEST_5.0 && docker-compose -f docker-compose.release.yml  up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev