import {
  generateCodeChallenge,
  generateRandomString,
} from "../../utils/common-utils";

const SpotifyLogin = () => {
  const clickHandler = () => {
    const clientId = `b56a8d466a434ef791364185d8b36698`;
    const redirectUri = "http://localhost:3000/";

    let codeVerifier = generateRandomString(128);

    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      let state = generateRandomString(16);
      let scope = "streaming user-read-private user-read-email";

      localStorage.setItem("code_verifier", codeVerifier);

      let args = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });

      window.location = "https://accounts.spotify.com/authorize?" + args;
    });
    window.location = ``;
  };

  return (
    <div>
      <button onClick={clickHandler}>Login With Spotify</button>
    </div>
  );
};

export default SpotifyLogin;
