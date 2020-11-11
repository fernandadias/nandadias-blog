---
title: Passando props para styled-components
description: Uma das coisas mais lindas do react + styled-components
date: 2020-11-08 01:38:06
thumbnail: assets/img/photo-1581276879432-15e50529f34b.jpeg
category: front
---
Uma das coisas mais chuchus que encontrei no react foi a forma somado aos styled-componentes podem fazer mágica. Usei muito o poder deles para construir esse blog (nas cores das categorias, por exemplo).

Para ser mais simples aqui vamos pensar em um exemplo onde quero setar uma borda em um input quando a api retorna um erro.

A ideia é aplicar o estilo do estado `inputError`.

```typescript
{inputError && <Error>{inputError}</Error>}
// to aproveitando pra mostrar um span de alerta caso o estado inputError seja trufy
``

### Como funciona


```typescript
const Dashboard: React.FC = () => {

  const [newRepo, setNewRepo] = useState('');
  
...

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      ...

      setNewRepo('');
      setInputError('');

    } catch (err) {
      setInputError('Erro na busca desse repositório');
    }

  }
```

```typescript
<Form hasError={!!inputError} onSubmit={handleAddRepository}>
  <input
    value={newRepo}
    onChange={(e) => setNewRepo(e.target.value)}
    type="text" placeholder="Digite o nome do repo"
  />
  <button type="submit">Pesquisar</button>
</Form>
```



Feito isso, crio uma interface da propriedade:

```typescript
// styles.ts

interface FormProps {
  hasError: boolean;
}
```

Passo essa interface para o componente

```typescript
export const Form = styled.form<FormProps>`
...
`
```

E posso usar dentro do estilo do componente

```typescript
${(props) => props.hasError && css`
    border-color: #c53030;
`}
```

Esse `css` foi importado do `styled-components` para colocar css dentro do template literals

```typescript
import styled, { css } from 'styled-components';
```

