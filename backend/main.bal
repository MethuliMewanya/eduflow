import ballerina/io;
import ballerina/http;

public function main() {
    io:println("Hello, World!");
}

listener http:Listener backendListener = new (8080);

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:5173"]
    }
}

service / on backendListener {
    resource function get hello() returns string {
        return "Hello from Ballerina with CORS!";
    }
}

