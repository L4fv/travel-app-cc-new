# travel_app

# DEPLOY RELEASE
    git pull && docker-compose down && docker build . -t travel_app:TEST_4.6 && docker-compose -f docker-compose.release.yml  up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev