const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");

// Google OAuth client
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Function to authenticate with Google OAuth
async function googleAuth(code) {
  const { tokens } = await googleClient.getToken({ code });
  const userInfo = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokens.access_token}`
  );
  const userData = await userInfo.json();
  return userData;
}

// Function to authenticate with Facebook OAuth
async function facebookAuth(code) {
  // Exchange code for access token
  const accessTokenResponse = await fetch(
    `https://graph.facebook.com/v13.0/oauth/access_token?client_id=${process.env.FACEBOOK_APP_ID}&redirect_uri=${process.env.FACEBOOK_REDIRECT_URI}&client_secret=${process.env.FACEBOOK_APP_SECRET}&code=${code}`,
    {
      method: "GET",
    }
  );
  const accessTokenData = await accessTokenResponse.json();

  // Get user info using access token
  const userInfoResponse = await fetch(
    `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessTokenData.access_token}`,
    {
      method: "GET",
    }
  );
  const userInfo = await userInfoResponse.json();

  return userInfo;
}

module.exports = { googleAuth, facebookAuth };
