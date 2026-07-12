export type Game = {
  id: string;
  title: string;
  event: string;
  result: string;
  moves: string[];
};

export const games: Game[] = [
  {
    id: 'opera',
    title: 'The Opera Game',
    event: 'Morphy vs Duke Karl & Count Isouard · Paris 1858',
    result: '1–0 in 17',
    moves: [
      'e4', 'e5', 'Nf3', 'd6', 'd4', 'Bg4', 'dxe5', 'Bxf3', 'Qxf3', 'dxe5',
      'Bc4', 'Nf6', 'Qb3', 'Qe7', 'Nc3', 'c6', 'Bg5', 'b5', 'Nxb5', 'cxb5',
      'Bxb5+', 'Nbd7', 'O-O-O', 'Rd8', 'Rxd7', 'Rxd7', 'Rd1', 'Qe6', 'Bxd7+', 'Nxd7',
      'Qb8+', 'Nxb8', 'Rd8#',
    ],
  },
  {
    id: 'immortal',
    title: 'The Immortal Game',
    event: 'Anderssen vs Kieseritzky · London 1851',
    result: '1–0 in 23',
    moves: [
      'e4', 'e5', 'f4', 'exf4', 'Bc4', 'Qh4+', 'Kf1', 'b5', 'Bxb5', 'Nf6',
      'Nf3', 'Qh6', 'd3', 'Nh5', 'Nh4', 'Qg5', 'Nf5', 'c6', 'g4', 'Nf6',
      'Rg1', 'cxb5', 'h4', 'Qg6', 'h5', 'Qg5', 'Qf3', 'Ng8', 'Bxf4', 'Qf6',
      'Nc3', 'Bc5', 'Nd5', 'Qxb2', 'Bd6', 'Bxg1', 'e5', 'Qxa1+', 'Ke2', 'Na6',
      'Nxg7+', 'Kd8', 'Qf6+', 'Nxf6', 'Be7#',
    ],
  },
  {
    id: 'century',
    title: 'The Game of the Century',
    event: 'Donald Byrne vs Fischer · New York 1956',
    result: '0–1 in 41',
    moves: [
      'Nf3', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'd4', 'O-O', 'Bf4', 'd5',
      'Qb3', 'dxc4', 'Qxc4', 'c6', 'e4', 'Nbd7', 'Rd1', 'Nb6', 'Qc5', 'Bg4',
      'Bg5', 'Na4', 'Qa3', 'Nxc3', 'bxc3', 'Nxe4', 'Bxe7', 'Qb6', 'Bc4', 'Nxc3',
      'Bc5', 'Rfe8+', 'Kf1', 'Be6', 'Bxb6', 'Bxc4+', 'Kg1', 'Ne2+', 'Kf1', 'Nxd4+',
      'Kg1', 'Ne2+', 'Kf1', 'Nc3+', 'Kg1', 'axb6', 'Qb4', 'Ra4', 'Qxb6', 'Nxd1',
      'h3', 'Rxa2', 'Kh2', 'Nxf2', 'Re1', 'Rxe1', 'Qd8+', 'Bf8', 'Nxe1', 'Bd5',
      'Nf3', 'Ne4', 'Qb8', 'b5', 'h4', 'h5', 'Ne5', 'Kg7', 'Kg1', 'Bc5+',
      'Kf1', 'Ng3+', 'Ke1', 'Bb4+', 'Kd1', 'Bb3+', 'Kc1', 'Ne2+', 'Kb1', 'Nc3+',
      'Kc1', 'Rc2#',
    ],
  },
];
