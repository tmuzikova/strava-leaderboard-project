import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";

document.querySelector("#root").innerHTML = render(
  <div className="container"></div>
);

const reAuthorize = async () => {
  const authLink = "https://www.strava.com/oauth/token";
  const reauth_response = await fetch(authLink, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: "128051",
      client_secret: "48f5974cae80441f0383052578d2e63c1f92b303",
      refresh_token: "9df6807050e810fdd19bd20713869617019bd925",
      grant_type: "refresh_token",
    }),
  });
  const reauth_data = await reauth_response.json();

  getActivities(reauth_data.access_token);
};
reAuthorize();

const getActivities = async (access_token) => {
  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}`;
  const activities_response = await fetch(activities_link);
  const activities_data = await activities_response.json();
  console.log(activities_data);
};
