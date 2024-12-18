export interface ICreateAluno {
    nome: string
    dataNascimento: Date
    cpf: string
    telefone: string
    status: string
    ultimaAlteracao: string
    dataUltimaAlteracao: Date 
    numeroRua: number;
    numeroCasa: number;
    cep: string;
    bairro: string;
    cidade: string;
  }
  
  export const callCreate = async (data: ICreateAluno): Promise<ICreateAluno> => {
    const response = await fetch('http://localhost:3001/alunos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error(`Erro ao criar aluno: ${response.statusText}`);
      }
  
    return await response.json()
  }