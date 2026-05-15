# npm create vite@latest meu-projeto -- --template react-ts
cd meu-projeto
npm install
npm install tailwindcss @tailwindcss/vite

# npm i -g @nestjs/cli
nest new meu-projeto-api
cd meu-projeto-api
npm run start:dev

# npm install react-router-dom

# nest new devnet-crm
 

# npm install @nestjs/typeorm typeorm mysql2 

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('ADMIN','FUNCIONARIO','TECNICO'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  telefone VARCHAR(20),
  email VARCHAR(100),
  criado_por INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150),
  descricao TEXT,
  status ENUM('ABERTO','EM_PROGRESSO','FECHADO') DEFAULT 'ABERTO',
  prioridade ENUM('BAIXA','MEDIA','ALTA') DEFAULT 'MEDIA',
  cliente_id INT,
  tecnico_id INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  acao VARCHAR(255),
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);