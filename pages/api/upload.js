export default function handler(req, res) {
    res.status(200).res.header( "Access-Control-Allow-Origin", env.get("ALLOWED_CORS_DOMAINS") );
    res.header( "Access-Control-Allow-Credentials", true );
}
