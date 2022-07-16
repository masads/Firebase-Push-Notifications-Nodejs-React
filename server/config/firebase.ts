const GOOGLE_APPLICATION_CREDENTIALS:any={
    "type": "service_account",
    "project_id": "miletapnotification",
    "private_key_id": "176da0a840440f093d8b25c20bd082c07ea1f083",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCN8ktbq4qw2b1C\nzm2Hk3vw9f2jz21AEEs6HowNl57nGlMCEpymu7udS3Tnhx3+C1/3/59M6ky+llnd\nH6T465MSdP6kkJCEPDxoNezMVleWgTotPv/wwqM+xejcY2cUBFa9DsFSJJZQuE4/\nkz+7aOBQcAZ84Sn9jsyo9tf6CuyIEalKb4/dse+4JBGnffMvOmFKTOFUoh/CmikN\nenE5TOZd+9em885XRUigsD9ShlClCIWFnooYQmDa4QCUG7opVNkCTcE+ciNtw5eT\nvwT9ZIinacX5jltYJAmrOJX55HEN6T5gpkWlvtvrfHFFQV/L5+FoD2n+RdoVmgUg\ntdDxlCLbAgMBAAECggEAD2YA+c1Wqs+8IdKt/B6qO94bqVkXs3LxDjmBHPpdQRnQ\ndnGZb9b+x9YHNRSp0sTeINOortneAHDkB8JmjaBUoJRziVuracT1EqMC8LnPH6Me\nMglbD3214tnqZHoeFQRReonuu9//NHuB9ZCeQdDjQKaedY6hlQGYPx4kGNp1hV8n\nuFjWFDeFeYC7/n/otBOUkUfIX9L5IDgyfZZwZASl9s6fytv4lUv06EKDrGHCv6DG\nuvET+hp9V5uOVbilPFi2mgF1OjhaZNIlLTSgp3dqoe8Nbc9Hh+Yu68617SOnYvC0\nDljczx2KvJEzF2jXxaOUXOwvJIQnqYaeClCb2xKnoQKBgQDF8g06P3rBmRUw/6x2\njGlBNrjtPs95xxjk6V1Moa9daofc66OIE5poa8d1g0SJMULCXyU/PBxw/2egwwdx\niC7NhIcqBynCPX0tx3wfeWf9sv16bD6zoj8tkfzMp560f4DSM2KMu5Wv13pR8KYm\nb3dD7e6X1f4dGBrQxkFFRzuoYQKBgQC3k8cNSzHzu7Q+wSKyKaOkTa64Ts+t84kX\nI3x5rlpl/RmdBWQQImmaioWEJ9JGcGMIdUjYq+qdjqLpaXLOghNN9Fk1H5GGr094\nK6drGjpdf/dKo4VLhfEAQEeWswYATV+6CupqnaF/r2dfIg2iKdqRry89ZoJ2DDI3\neHHWvGKkuwKBgF1+zeakUywcTVkeemxoN9L4sPJGR6NCeiytWUc322fpSJD9r/k3\nISiPN9/2h6mxXdIHNMWgc+KfkGfrlpl2dHzYSyt7xKqddoHoBmWrZ4X6RCXN+PPJ\n/8NbgCd+SMUCsGsYoETO2Y373ifT3farkY7BVH/dMLC3UPspmWzKj5AhAoGBALKG\n3k9JT1zOsC1POeS1pdTFTyMiUcnDSxDbi9PyASuqBlyzv2oJbVXDXLD24QFrjoPN\nO3irR9DNxBTmXaYCza9D7/U/rBClMM2W9ouryBLhvaYyfBDEQ2mRGY2usClfFbch\nonLotQQtmoPj5ApOVabUDUbTCBCxL6zOTzcboXq9AoGAWIKzNAYVOHKmoRny1Zwh\nLkAyWv8F21+8jkEtG1bdr9v2uN4huLv5xPZeliT9uAQKNAX22hG2s6xBuVeu1BVt\ne5Y9iVWF43du0NDjg/P87NQW264Y8rCtzmTzF8vDKOtBzxTV6lWbTaLKWMeqEiKQ\nWkkJdxPv9pawOZc+e+DDz5g=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-uinpg@miletapnotification.iam.gserviceaccount.com",
    "client_id": "102548647260054495962",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uinpg%40miletapnotification.iam.gserviceaccount.com"
}
  
// function getAccessToken() {
//     return new Promise(function(resolve, reject) {
//       const key = GOOGLE_APPLICATION_CREDENTIALS;
//       const jwtClient = new google.auth.JWT(
//         key.client_email,
//         null,
//         key.private_key,
//         SCOPES,
//         null
//       );
//       jwtClient.authorize(function(err, tokens) {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(tokens.access_token);
//       });
//     });
//   }