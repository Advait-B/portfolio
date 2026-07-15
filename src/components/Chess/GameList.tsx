import type { Game } from '../../data/games';
import s from './Chess.module.css';

type GameListProps = { games: Game[]; selectedId: string; onSelect: (id: string) => void };

export function GameList({ games, selectedId, onSelect }: GameListProps) {
  return (
    <div className={s.gameList} role="tablist" aria-label="Games">
      {games.map((game) => (
        <button
          key={game.id}
          type="button"
          role="tab"
          aria-selected={game.id === selectedId}
          className={s.gameTab}
          onClick={() => onSelect(game.id)}
        >
          <span className={s.gameTop}>
            <span className={s.gameTitle}>{game.title}</span>
            <span className={s.gameResult}>{game.result}</span>
          </span>
          <span className={s.gameEvent}>{game.event}</span>
          <span className={s.gameDetail}>{game.detail}</span>
        </button>
      ))}
    </div>
  );
}
