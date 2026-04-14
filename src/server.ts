import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// --- BANCO DE DADOS FICTÍCIO ---
let cuidadores = [
    { id: 1, nome: "Ana Silva", especialidade: "Geriatria", bio: "10 anos de experiência.", valorHora: "R$ 50,00" },
    { id: 2, nome: "Carlos Souza", especialidade: "Fisioterapia", bio: "Especialista em mobilidade.", valorHora: "R$ 80,00" }
];

let rotinaIdoso = [
    { id: 1, tarefa: "Remédio de Pressão", horario: "08:00", status: "Pendente" },
    { id: 2, tarefa: "Banho de sol", horario: "10:00", status: "Pendente" }
];

// --- ROTAS ---
app.get('/cuidadores', (req: Request, res: Response) => {
    res.json(cuidadores);
});

app.get('/rotina', (req: Request, res: Response) => {
    res.json(rotinaIdoso);
});

app.put('/rotina/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const tarefa = rotinaIdoso.find(t => t.id === Number(id));
    if (tarefa) {
        tarefa.status = "Concluído ✅";
        return res.json({ mensagem: "Atualizado!", tarefa });
    }
    return res.status(404).json({ mensagem: "Não encontrado" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor Cuidar Mais rodando em http://localhost:${PORT}`);
});