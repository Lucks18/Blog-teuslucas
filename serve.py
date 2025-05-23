import http.server
import socketserver

PORT = 8000  # Porta do servidor

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor rodando em: http://localhost:{PORT}")
    httpd.serve_forever()
