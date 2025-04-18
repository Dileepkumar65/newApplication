from flask import Flask, request, jsonify, send_from_directory, make_response
import os
import traceback
import trafilatura
import time

app = Flask(__name__)

# Serve static files with cache busting
@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def serve_file(path):
    response = make_response(send_from_directory('.', path))
    # Disable caching for JavaScript files
    if path.endswith('.js') or path.endswith('.css'):
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        # Add timestamp as query param to bypass cache
        response.headers['Content-Type'] = 'application/javascript' if path.endswith('.js') else 'text/css'
    return response

# Web scraper API endpoint
@app.route('/scrape', methods=['POST'])
def scrape_url():
    try:
        data = request.json
        url = data.get('url')
        
        if not url:
            return jsonify({'error': 'URL is required'}), 400
        
        # Fetch and extract content from the URL
        downloaded = trafilatura.fetch_url(url)
        
        if not downloaded:
            return jsonify({'error': 'Failed to download content from URL'}), 400
        
        # Extract main content using trafilatura
        content = trafilatura.extract(downloaded)
        
        if not content:
            return jsonify({'error': 'No content could be extracted from the URL'}), 400
        
        return jsonify({'content': content})
    
    except Exception as e:
        print(f"Error in scrape_url: {str(e)}")
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
