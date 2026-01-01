
import { Tournament, Player, Team, Moment } from './types';

export const TOURNAMENTS: Tournament[] = [
  {
    id: 'spain82',
    year: 1982,
    host: 'España',
    champion: 'Italia',
    runnerUp: 'Alemania',
    topScorer: 'Paolo Rossi',
    goals: 146,
    mascotUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOSOsjwvSZdUbinu1qVKepN2LqC8Ts24GpY9Olh7TSukwZMv2Es6XbTeFcW9-bcNalq17Vf-MphQKRYkvoqiKIm06t7Hbj3jI3NrgYTysiZlLx6pwjRlk8qXQcGU4cudQGQHj7-Dn2wdtls3hlT2eEyAC17BjFHBDnINzrDzBXwRFl5tR7BAtXxtUDtTXLRskN9tdpDkCbtlx_uyjyOUOlQLa-MYKGLE0YVqkoZyo8qW3OVua5obzd40-vmADNQzY5TmCtAivFXg4',
    heroImageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3tHHlfRx8sLVx5b_gXxCcO_HSRaGobpz5L7Akc-BSKyvoukXy_8A19vf-h8ZPhnpEJFYyFwvmfxAPrq9FqMZIG_3kttetSFeAB0ZDcvffjb-ccAzojlXMXgjGibWP_PDYaLpFg5slFoZkfbbsHqZ_HmmUpVN2AiUScYezPy_L01escVQ6Zr4EDYxDdLZTL4CgkA8hl0aknuDkXVnJDafU2aR3z96IfM787AvdGkYsQxFddjdgiDDr_e6UKwINkIYKf50bHyAPPWM'
  },
  {
    id: 'mexico86',
    year: 1986,
    host: 'México',
    champion: 'Argentina',
    runnerUp: 'Alemania',
    topScorer: 'Gary Lineker',
    goals: 132,
    heroImageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: 'qatar22',
    year: 2022,
    host: 'Qatar',
    champion: 'Argentina',
    runnerUp: 'Francia',
    topScorer: 'Kylian Mbappé',
    goals: 172,
    heroImageUrl: 'https://picsum.photos/800/600?random=2'
  }
];

export const PLAYERS: Player[] = [
  {
    id: 'maradona',
    name: 'Diego Maradona',
    team: 'Argentina',
    nickname: 'El Pibe de Oro',
    matches: 21,
    goals: 8,
    assists: 8,
    tournaments: 4,
    description: 'México \'86 Champion y autor del gol del siglo.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmV70_g7QubNnxj-3wJg_TaqaKT1D40aQEE9YjVK3DyV62pdA1D7MV4updRWqkP4dqf6rjE6D18YlDQpWisUGH-KvhZMWcBQrJdViBiTAQOZwoaYYFtEXwKQo7M0dtZeyN-V79S9-xkcY2cdhP1oqx2Ek6qMwUp5EcYn9KtDLHOCeQuzN4_SE1775NAFhvivVhu7w-mU7wjzcz2fX8WItETm_G9cFrY2gNv6cYxthHHEB7PXfHF6scIuY5Z4UYEqdq14PG9mk6das'
  },
  {
    id: 'messi',
    name: 'Lionel Messi',
    team: 'Argentina',
    matches: 26,
    goals: 13,
    assists: 8,
    tournaments: 5,
    description: 'The driving force behind Argentina\'s 2022 triumph. Messi redefined leadership.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC00A-QGHgK1JqNU89rqbzt0XXJ1kJ7D4QColKItXmEfmX7seENMvHEnIJkCyNQdaUeYTfncgdGKf5D2Vld7ncjXJ1e1vg78iwgXHTmF_1cMLgvytaragpxhxlUSA9bfxijqGtbQzdcsnD3kPC2d9Oy0O1kbm_5UoBYkKJsLNP--sC5IOHONLIg-_GlMBinKNgajh4hA7x8FntzMoXY2kVgB1ILxWsc6JhyxuI-xs0dzQVSOtLmOQ5l8chwK4Ir_p18Ki2ci8pFvGc'
  },
  {
    id: 'pele',
    name: 'Pelé',
    team: 'Brasil',
    matches: 14,
    goals: 12,
    assists: 10,
    tournaments: 4,
    description: 'Único jugador en ganar 3 copas mundiales (1958, 1962, 1970).',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvhsNzuByaeCgIeVg0h_gH_xlgh5YqMPpbfmVu_S-TY2vqQcpgag2xNRX7CW7MX_bczOVW9dUIi9fGVWAVbCLYd_OnPCPcjxxvWw1dYKmqokW4a1SOOPAETua3sGWV0D2-jcESDN9iGYdiu_Ee9Piy5YPMs_qs1P26yIEK_hapAotZRkVx0Jqf3CS8upG3Vbdc2uncDb3tslMzE5NjaeYoDyu80Xt-m4rz9l5BLfj3R39PJs3Af9oeq-5fCbj7SDbARFi3_nsvz90'
  }
];

export const TEAMS: Team[] = [
  {
    id: 'argentina',
    name: 'Selección Argentina',
    federation: 'CONMEBOL',
    titles: 3,
    participations: 18,
    finals: 6,
    matches: 88,
    ranking: '#1 FIFA',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTIwNE6KT2X8Uw1OdlkmGN8lerHSv8eY14WncmtC6cdzlE2F0WpIN4X2S6BTl5D2IAvwcdaEr1Vv2znVYicWPjHSBRK98Z5WWnO-lSLN3vf8KIapOUmDDbiW8BSHqxqJtVk8qShiuh4pr44_S0u8YxBOGdDpdjiwCb1PvJ1H_GWd4VePJv-IvHo0JQymTZqb2UrQLNG8h0vLVlSHw75Mst5wHKWO4lpl2cNHLUjRPAIX5p9fwhPSqJOpBtteidTM_XqVuTS4yjyQw'
  },
  {
    id: 'brasil',
    name: 'Brasil',
    federation: 'CONMEBOL',
    titles: 5,
    participations: 22,
    finals: 7,
    matches: 114,
    ranking: '#5 FIFA',
    logoUrl: 'https://picsum.photos/100/100?random=10'
  }
];

export const MOMENTS: Moment[] = [
  {
    id: 'maracanazo',
    title: 'El Maracanazo',
    year: 'Brasil 1950',
    location: 'Estádio do Maracanã',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc2tD8b2hhC7nPr5RqoykKjLhMvk5ZJw3pWiXzWaRvt-8oHGS4GZ00SkUS7PSJqEAKUrTjqyuJAoozWyC1Uax00MC2DW81rAWRVQ_v4uAT6ilyQfXem_t7APemwJ0ZA5xVfI75zlNRQZGSWdOKhOEIZ0ktYZKNEUIg6GOuSosdMBT-EnAnK0RG8hAp9WzWRi7M9urUcYPvz7PsFUYJBZBzzRva3FfMQ_4g0vw6cHukmt6pQvzQQaH07FcAu_V2BeX2sxuPb31mQ1s',
    readTime: 'Lectura de 5 min',
    tag: 'Era Clásica',
    description: 'El silencio que se escuchó en todo el mundo. Uruguay vence a Brasil ante 200,000 personas.'
  },
  {
    id: 'berna',
    title: 'El Milagro de Berna',
    year: 'Suiza 1954',
    location: 'Wankdorf Stadium',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIjepc5fhqQZhdZUdADKBWVRbzhL7meTQCHUGihYP3kYeZq2TW-tZe56OzU4o_PtAEkwQ301no9XK03LFuExJGkt67lv4B_4QY4eujDJOA8zEh5WdyYSAAlVL9oeADWJHUPAK2oFcDZCHNG62DO6uwiPrt8wFqfFcnYb74mlBESpWp6d6CKvghjxub5yWvS34sro6hrVxnl-PdctlRJB93xcr0meOlukM-tFZKydBqHfeeUZ3-vNUiJTUqCeilffwoNIwp3mkFXns',
    readTime: 'Lectura de 4 min',
    tag: 'Milagros',
    description: 'Alemania Federal vence a los invencibles "Magiares Mágicos" de Hungría.'
  }
];
