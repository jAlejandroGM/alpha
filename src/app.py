"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, jsonify
from flask_migrate import Migrate # Si usabas migraciones antes, si no, puedes quitarlo
from flask_swagger import swagger
from flask_cors import CORS
from src.utils import APIException, generate_sitemap
from src.admin import setup_admin
from src.models import db
from src.api.routes import api

app = Flask(__name__)
app.url_map.strict_slashes = False

# --- CONFIGURACIÓN SQLITE (La parte nueva) ---
# Lee la URL del .env o usa un archivo local por defecto
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    # Fallback seguro a SQLite local
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializar DB y CORS
db.init_app(app)
CORS(app)
setup_admin(app)

# Agregar la API Blueprint (tus rutas)
app.register_blueprint(api, url_prefix='/api')

# Manejo de Errores
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

@app.route('/')
def sitemap():
    return generate_sitemap(app)

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=PORT, debug=True)