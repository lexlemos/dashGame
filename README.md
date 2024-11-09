# 🏃🏻‍➡️🏁dash Game Mario

Um projeto de jogo simples inspirado no estilo "infinito" (endless runner) onde o personagem Mario pula sobre obstáculos enquanto coleta pontos. O objetivo é desviar dos obstáculos e acumular a maior pontuação possível.

## Funcionalidades

- **Controle do Mario**: Pressione qualquer tecla para fazer o Mario pular e desviar dos canos.
- **Pontuação**: Cada vez que o Mario desvia de um cano, o jogador ganha um ponto.
- **Tela de Game Over**: Quando o Mario colide com um obstáculo, a tela de Game Over aparece junto com a pontuação final.
- **Reinício do Jogo**: Pressione qualquer tecla na tela de Game Over para reiniciar o jogo.

## Estrutura do Projeto

### JavaScript
- **Função de pulo (`jump`)**: Adiciona a classe de pulo ao Mario.
- **Loop principal do jogo (`startGameLoop`)**: Responsável por verificar a posição do Mario e dos obstáculos, atualizar a pontuação e exibir a tela de Game Over em caso de colisão.
- **Reinício do jogo (`restartGame`)**: Restaura as animações, reinicia a pontuação e esconde a tela de Game Over.

## Estrutura de Pastas

- `css/` - Contém o arquivo `styles.css` com os estilos do jogo.
- `images/` - Contém as imagens dos elementos gráficos do jogo (`mario.gif`, `pipe.png`, `clouds.png`, `game-over-screen.png`).
- `js/` - Contém o arquivo `script.js` com a lógica do jogo.

## Como Jogar

1. Clone o repositório e abra o arquivo `index.html` em seu navegador.
2. Pressione qualquer tecla para iniciar o jogo e fazer o Mario pular.
3. Desvie dos canos para acumular pontos.
4. Ao colidir, o jogo mostra a tela de Game Over com sua pontuação final. Pressione qualquer tecla para reiniciar o jogo.

## Tecnologias Utilizadas

- **HTML5** para estrutura do jogo.
- **CSS3** para estilização e animações.
- **JavaScript** para lógica de jogo, incluindo controle de pulo, pontuação e reinício. 

Divirta-se!
