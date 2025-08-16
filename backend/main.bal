///////////////////////////////////////////////////////////// YOUTUBE API - with thumbnail and topic


import ballerina/http;
import ballerina/log;

type InputData record {| 
    string subject;
    int marks;
|};

type Video record {|
    string url;
    string title;
|};

type OutputData record {| 
    string level;
    Video[] videos;
|};

listener http:Listener recListener = new (9191);

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:5173"],
        allowMethods: ["POST"],
        allowHeaders: ["Content-Type"]
    }
}
service /recommend on recListener {

    resource function post video(http:Caller caller, http:Request req) returns error? {
        json|error payload = req.getJsonPayload();
        if payload is error {
            check caller->respond({ message: "Invalid JSON payload" });
            return;
        }

        InputData|error input = payload.cloneWithType(InputData);
        if input is error {
            check caller->respond({ message: "Invalid input format" });
            return;
        }

        string subject = input.subject;
        int marks = input.marks;
        string level = getLevel(marks);

        Video[]|error videos = getVideosFromYouTube(subject, level);
        if videos is error {
            log:printError("YouTube fetch error", videos);
            check caller->respond({ message: "Error fetching videos" });
            return;
        }

        OutputData response = {
            level: level,
            videos: videos
        };

        check caller->respond(response);
    }
}

function getLevel(int marks) returns string {
    if marks < 40 {
        return "Beginner";
    } else if marks < 75 {
        return "Intermediate";
    } else {
        return "Advanced";
    }
}

function getVideosFromYouTube(string subject, string level) returns Video[]|error {
    string apiKey = "AIzaSyAlvXLYXZzrH7c4HwjppQbya4mPC-azY38";   // ⬅️ Replace this with your key
    string query = level + " " + subject + " tutorial";

    string path = "/youtube/v3/search?part=snippet&q=" + 
                  query + "&maxResults=10&type=video&key=" + apiKey;

    http:Client ytClient = check new ("https://www.googleapis.com");

    http:Response resp = check ytClient->get(path);
    json result = check resp.getJsonPayload();

    json[] items = [];
    if result is map<anydata> && result["items"] is json[] {
        items = <json[]>result["items"];
    }

    Video[] videoData = [];

    foreach var item in items {
        if item is map<anydata> &&
            item["id"] is map<anydata> &&
            item["snippet"] is map<anydata> {

            map<anydata> id = <map<anydata>>item["id"];
            map<anydata> snippet = <map<anydata>>item["snippet"];

            if id["videoId"] is string && snippet["title"] is string {
                string url = "https://www.youtube.com/watch?v=" + <string>id["videoId"];
                string title = <string>snippet["title"];

                videoData.push({ url, title });
            }
        }
    }

    return videoData;
}


