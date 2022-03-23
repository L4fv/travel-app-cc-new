# travel_app

# DEPLOY PROD
    COMAND:
     git pull && docker-compose down && docker build . -t travel_app:PROD_1.5  && docker-compose up -d --remove-orphans

# DEPLOY RELEASE
    git pull && docker-compose down && docker build . -t travel_app:TEST_4.9 && docker-compose -f docker-compose.release.yml  up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev