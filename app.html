from flask import Flask, render_template,request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.elements import True_
from werkzeug.datastructures import RequestCacheControl

app = Flask(__name__)


user = 'uutnfujn'
password = 'TJ-budc9lkNSwDgt29vxcSjalpXx2bj7'
host = 'tuffi.db.elephantsql.com'
database = 'uutnfujn'

app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{user}:{password}@{host}/{database}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = "chave escondidamente"


db = SQLAlchemy(app)


class racas(db.Model): #Classe  que define a união e funcionamento do banco de dados no programa 
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(255), nullable=False)
    imagem = db.Column(db.String(255), nullable=False)
    curiosidade = db.Column(db.String(10000),nullable= False) # incluido mais uma coluna no banco de dados direcionando para o texto historias acionado pelo botao curiosidades.

    def __init__(self, nome, imagem,curiosidade):# definindo o construtor e o paramentro para as funções do banco de dados 
        self.nome = nome
        self.imagem = imagem
        self.curiosidade = curiosidade
    
    @staticmethod
    def read_all():  # metodo statico que retorna de forma ascendente as informacoes os id da tabela do banco de dados 
        return racas.query.order_by(racas.id.asc()).all()
     db = SQLAlchemy(app)

    @staticmethod
    def read_single(id_registro):
      
        return racas.query.get(id_registro)
    db = SQLAlchemy(app)    
    

    def save(self): 
        db.session.commit()

    def update(self,novo_nome,novo_imagem,novo_curiosidade):# funcao que vai atualizar os registro recebido pelo usuario 
        self.nome = novo_nome
        self.imagem = novo_imagem
        self.curiosidade = novo_curiosidade
        self.save()

    def delete(self):   # funcao que vai apagar o registro recebido pelo usuario na pagina pelo botão excluir 
        db.session.delete(self)
        db.session.commit()   

@app.route("/")# definindo o caminho da pagina a rota que o programa deve realizar para cada funcão definida nos comandos def
def index():
    return render_template("index.html")


@app.route("/read")
def read_all():
    registros = racas.read_all()
    # Chamada do método read_all da classe Raças, que representa a tabela  racas do banco de dados.
    registros = racas.read_all()
    return render_template("read_all.html", registros=registros)


@app.route("/read/<id_registro>")
def read_id(id_registro):
    registro= racas.read_single(id_registro)
    return render_template("read_single.html", registro=registro)
    

@app.route("/create", methods=('GET', 'POST'))
def create():
    id_registro_novo = None # cria uma variável nula para o novo ID atribuído

    if request.method == 'POST': # verifica se está recebendo alguma coisa por POST
        form = request.form # armazena o formulário recebido por POST

        registro = racas(form['nome'], form['imagem'],form['curiosidade']) # cria um novo registro (objeto) com nome e imagem_url recebidos
        registro.save() # chama a função save da classe (adiciona e commita)

        id_registro_novo = registro.id # atribui a novo_id o ID do novo registro criado

    return render_template("create.html",id_registro_novo = id_registro_novo) # carrega o create.html passando o valor de novo_id (None ou novo ID atribuído)

@app.route("/update/<id_registro>", methods=('GET', 'POST'))
def update(id_registro):
    sucesso = False 
    registro= racas.read_single(id_registro)

    if request.method == 'POST':
        form = request.form
        registro.update(form['nome'], form['imagem'],form['curiosidade'])
        sucesso = True
    return render_template('update.html',registro=registro,sucesso=sucesso) 


@app.route('/delete/<id_registro>')
def delete(id_registro):
    registro= racas.read_single(id_registro)
    return render_template('delete.html', registro=registro)

@app.route('/delete/<id_registro>/confirmed')
def delete_confirmed(id_registro):
    confirmar = False

    registro= racas.read_single(id_registro)

    if registro:
        registro.delete()
        confirmar=True

    return render_template('delete.html',registro=registro,confirmar=confirmar)  


if (__name__ == "__main__"):
    app.run(debug=True)