use qdrant_client::client::QdrantClient;
use qdrant_client::client::QdrantClientConfig;
fn check_type() {
    let config = QdrantClientConfig::from_url("http://localhost:6334");
    let c = QdrantClient::new(Some(config));
    let x: () = c;
}
