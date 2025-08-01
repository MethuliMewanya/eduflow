// import ballerina/io;
import ballerina/http;
// import ballerina/log;

// listener http:Listener backendListener = new (8080);

// @http:ServiceConfig {
//     cors: {
//         allowOrigins: ["http://localhost:5173", "http://localhost:3000"]
//     }
// }

// service / on backendListener {
//     resource function get hello() returns string {
//         return "Hello from Ballerina with CORS!";
//     }
// }

// service /eduflow on new http:Listener(9090) {

//     resource function post generate(http:Caller caller, http:Request req) returns error? {
//         json input = check req.getJsonPayload();

//         string subject = (check input.subject).toString();

//         // Safely extract int from JSON
//         int|error marksResult = input.marks.ensureType(int);
//         if marksResult is int {
//             int marks = marksResult;

//             // Call Python AI backend (e.g., FastAPI running Gemini)
//             http:Client aiClient = check new ("http://localhost:8000");
//             json payload = {subject: subject, marks: marks};

//             http:Response aiResponse = check aiClient->post("/generate", payload);
//             // json aiResult = check aiResponse.getJsonPayload();
//             // check caller->respond(aiResult);
//             json aiResult = check aiResponse.getJsonPayload();
//             check caller->respond({ path: aiResult });
//         } else {
//             check caller->respond({"error": "Invalid marks format"});
//         }
//     }
// }

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:3000"],
        allowMethods: ["POST"],
        allowHeaders: ["Content-Type"]
    }
}
service /eduflow on new http:Listener(9090) {

    resource function post generate(http:Caller caller, http:Request req) returns error? {
        json|error input = req.getJsonPayload();
        if input is json {
            string subject = "";
            if input.subject is string {
                subject = (check input.subject).toString();
            } else {
                subject = (check input.subject).toString();
            }
            int marks = 0;
            if input.marks is int {
                marks = check input.marks;
            } else if input.marks is float {
                float floatMarks = check input.marks;
                marks = <int>floatMarks;
            } else if input.marks is string {
                marks = check int:fromString(check input.marks);
            } else {
                check caller->respond({"error": "Invalid marks format"});
                return;
            }

            http:Client aiClient = check new("http://localhost:8000");
            json payload = {subject: subject, marks: marks};
            http:Response aiResponse = check aiClient->post("/generate", payload);

            json aiResult = check aiResponse.getJsonPayload();
            check caller->respond(aiResult);
        } else {
            check caller->respond({"error": "Invalid input"});
        }
    }
}
