from sqlalchemy import func
import pandas as pd
import os

# SQL Alchemy
from sqlalchemy import create_engine

# PyMySQL 
import pymysql
pymysql.install_as_MySQLdb()

from flask import (
    Flask,
    render_template,
    jsonify)

app = Flask(__name__)

engine = create_engine("mysql://admin:gwurox2020@databootcamp14.cdyglxvc7ejv.us-east-2.rds.amazonaws.com:3309/gwsis")

conn = engine.connect()

# Create a route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/income")
def income_data():
    income = pd.read_sql("SELECT * FROM income_data", conn)
    return income.to_json(orient='records')  

@app.route("/unemployment")
def unemployement_data():
    unemployment = pd.read_sql("SELECT * FROM unemployment_data", conn)
    return unemployment.to_json(orient='records')   

@app.route("/education")
def education_data():
    education = pd.read_sql("SELECT * FROM education_data", conn)
    return education.to_json(orient='records') 

@app.route("/hivcase")
def hivcase_data():
    hivcase = pd.read_sql("SELECT * FROM hiv_rates_data", conn)
    return hivcase.to_json(orient='records')

if __name__ == "__main__":
    app.run(debug=True)