# travel_app

# DEPLOY PROD
    COMAND:
     git pull && docker-compose down && docker build . -t travel_app:PROD_1.5  && docker-compose up -d --remove-orphans

# DEPLOY RELEASE
    git pull && docker-compose down && docker build . -t travel_app:TEST_4.9 && docker-compose -f docker-compose.release.yml  up -d --remove-orphans

# DEPLOY LOCAL
    npm run dev
  201  dokku domains:add cc-api api.cocolandiatours.com

dokku config:set cc-api NODE_ENV=development HOST=0.0.0.0 PORT=3001 MONGO_URL=mongodb://144.126.149.206:27017/travel-app JWT_SECRET=adsfgasdfasdkfjhadsf SUPERADMIN_EMAIL=admin@example.com SUPERADMIN_PASSWORD=superpass DO_SPACES_KEY=3VDT5UHH2F6KBAADLMI7 DO_SPACES_SECRET=8WUHeHZaVku18C05SDIQEP1SuX1KLqNmLw13r2kXAmc DO_SPACES_REGION=nyc3.digitaloceanspaces.com DO_SPACES_BUCKET=travel-app-space DO_SPACES_FOLDER=dev-carlos MP_ACCESS_TOKEN=TEST-1248301436619021-042821-f8f06b49a94ab2ecc16b5f9813caad0f-168600576 INNOUT_TOKEN=qooOmSNXNvTv6NVDMo6aaB5jh1u0lCgwrdJKbFdDyghe5Yezks INNOUT_HOST=https://test.innout.cloud 