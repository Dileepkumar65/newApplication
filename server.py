import http.server
import socketserver
import os

PORT = 5000
DIRECTORY = "web_app"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run_server():
    with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
        print(f"Server running at http://0.0.0.0:{PORT}/")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("Server stopped by user")

if __name__ == "__main__":
    # Ensure we serve index.html for the root path
    if not os.path.exists(os.path.join(DIRECTORY, "index.html")):
        print(f"Warning: {os.path.join(DIRECTORY, 'index.html')} not found")
    
    # Create symbolic links to root directory files to access them from web_app
    try:
        for file in ["data.js", "app.js", "styles.css"]:
            if os.path.exists(file) and not os.path.exists(os.path.join(DIRECTORY, file)):
                os.symlink(f"../{file}", os.path.join(DIRECTORY, file))
                print(f"Created symlink for {file}")
    except Exception as e:
        print(f"Error creating symlinks: {e}")
    
    run_server()