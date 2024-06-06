export const AuthButton = () => {
  const authenticateUser = () => {
    const clientId = 128051;
    const redirectUri = "http://localhost:5173/";
    const responseType = "code";
    const scope = "activity:read_all";
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authUrl;
  };

  return <button onClick={authenticateUser}>Login with Strava</button>;
};
