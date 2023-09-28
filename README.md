# GIT-Playground

O principal objetivo deste projeto é facilitar o aprendizado e a prática das soluções de controle de versão usando o Git. Através deste repositório, você pode:

- Simular situações reais de desenvolvimento e colaboração.
- Aprender a resolver conflitos de mesclagem.
- Praticar o uso do rebase para manter um histórico de commits limpo.
- Ganhar experiência em mesclar ramificações e reverter alterações.
- Explorar recursos avançados do Git, como tags, submódulos e reflog.
- 

## Cenários de Treinamento

Abaixo está uma lista de cenários que você pode enfrentar e praticar neste repositório:

1. **Conflito de Mesclagem (Merge Conflict)**
   - Crie duas ramificações a partir da mesma origem.
   - Faça alterações no mesmo arquivo nas duas ramificações.
   - Tente mesclar uma ramificação na outra para forçar um conflito.

2. **Rebase Interativo**
   - Crie uma ramificação com vários commits.
   - Use `git rebase -i` para interativamente reorganizar, editar ou excluir commits.

3. **Reverter Commits**
   - Crie uma ramificação.
   - Faça commits de alterações.
   - Use `git revert` para reverter um ou mais commits.

4. **Mesclar Ramificações (Branch Merge)**
   - Crie uma ramificação de recurso.
   - Faça alterações e faça commits nela.
   - Mescle a ramificação de recurso na ramificação principal do projeto.

5. **Ramificações de Recurso Concorrentes**
   - Crie duas ou mais ramificações de recurso separadas.
   - Faça alterações em diferentes partes do código em cada uma delas.
   - Tente mesclar todas as ramificações na ramificação principal ao mesmo tempo.

6. **Resolução de Conflito de Mesclagem Remota**
   - Faça uma cópia do repositório e modifique-o separadamente.
   - Envie as alterações de ambas as cópias para o mesmo repositório remoto para forçar um conflito de mesclagem.

7. **Revertendo uma Mesclagem (Revert Merge)**
   - Crie uma ramificação de recurso e faça alterações nela.
   - Mescle a ramificação de recurso na ramificação principal.
   - Use `git revert` para reverter a mesclagem.

8. **Cherry-Pick**
   - Crie uma ramificação de origem com commits.
   - Crie uma nova ramificação de destino.
   - Use `git cherry-pick` para aplicar um ou mais commits da ramificação de origem na ramificação de destino.

9. **Submódulos**
   - Adicione um submódulo a um projeto existente usando `git submodule add`.
   - Atualize o submódulo para uma versão mais recente.
   - Remova o submódulo.

10. **Trabalho com Tags**
    - Crie uma tag para marcar um commit específico.
    - Liste todas as tags existentes.
    - Aplique uma tag em um commit anterior.

11. **Reflog**
    - Use o comando `git reflog` para mostrar o histórico de referências.
    - Use `git reset` com o SHA-1 de um commit antigo para retornar ao estado anterior.

12. **Alterações no Histórico**
    - Use `git commit --amend` para adicionar alterações a um commit anterior.
    - Use `git rebase -i` para reorganizar ou editar commits anteriores.

13. **Trabalho com Ramificações Remotas**
    - Crie uma ramificação local e envie-a para um repositório remoto.
    - Clone um repositório remoto com várias ramificações e rastreie uma ramificação remota.

14. **Conflitos durante um Rebase (Rebase Conflict)**
    - Crie uma ramificação e faça commits nela.
    - Use `git rebase` em outra ramificação e force um conflito durante o processo.

15. **Conflitos de Múltiplos Commits**
    - Crie uma ramificação de origem e faça vários commits.
    - Crie uma ramificação de destino e faça alterações no mesmo arquivo nas mesmas linhas.
    - Use `git cherry-pick` para tentar aplicar os commits da origem no destino e force um conflito.


## Recursos Adicionais

Para obter mais informações sobre o Git e suas funcionalidades, consulte os seguintes recursos:

- [Documentação oficial do Git](https://git-scm.com/doc)
- [GIT - Guia completo](https://www.youtube.com/playlist?list=PLyJNPtWGiZtxhMlVpuh3wGQP_9ztJs8B0)
- [Pro Git - Livro Gratuito sobre o Git](https://git-scm.com/book/en/v2)




