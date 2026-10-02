import heroCinematicSnap from '../assets/images/hero_cinematic_snap_1790917285112.jpg';
import filmNightSeoul from '../assets/images/film_night_seoul_1790917298899.jpg';
import snapPortraitWindow from '../assets/images/snap_portrait_window_1790917311144.jpg';
import snapCoastalTravel from '../assets/images/snap_coastal_travel_1790917320770.jpg';
import snapVintageCoffee from '../assets/images/snap_vintage_coffee_1790917332767.jpg';

export interface WorkItem {
  id: string;
  title: string;
  englishTitle: string;
  category: 'film' | 'street' | 'travel' | 'portrait' | 'night';
  categoryLabel: string;
  mediaType: 'video' | 'photo';
  image: string;
  youtubeId?: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
  date: string;
  location: string;
  runtime?: string;
  resolution?: string;
  camera: string;
  lens: string;
  exif: {
    focalLength: string;
    aperture: string;
    shutterSpeed: string;
    iso: string;
    colorProfile: string;
  };
  story: string;
  socialUrl: {
    platform: 'youtube' | 'facebook' | 'instagram';
    label: string;
    url: string;
  };
  views?: string;
  likes?: number;
  featured?: boolean;
}

export const STUDIO_PROFILE = {
  name: '권용우',
  englishName: 'Kwon Yong-woo',
  studioName: '권용우의 스튜디오 (Yongwoo Kwon Studio)',
  tagline: '일상의 찰나와 시네마틱 스냅을 유튜브 영상과 페이스북 사진으로 기록합니다.',
  description:
    '눈부시게 빠른 도시의 틈새에서 무심코 흘러가는 빛과 그림자, 그리고 보통 사람들의 잔잔한 눈빛을 시네마틱 렌즈로 담아냅니다. 4K 다큐멘터리 영상과 35mm 필름 감성의 스냅 사진으로 일상을 영화의 한 장면으로 남깁니다.',
  email: 'dream2note3@gmail.com',
  youtube: {
    handle: '@kwonyongwoo_studio',
    name: '권용우의 시네마틱 스튜디오',
    subscribers: '42.8K',
    url: 'https://youtube.com',
    description: '4K 시네마틱 브이로그, 거리 스냅 촬영기, 컬러 그레이딩 및 영상 워크플로우 튜토리얼'
  },
  facebook: {
    handle: 'kwonyongwoo.photo',
    name: '권용우 사진노트 (Facebook Photo Essay)',
    followers: '28.5K',
    url: 'https://facebook.com',
    description: '매일 기록하는 서울의 골목과 순간들, 사진과 함께 남기는 짧은 단상 에세이'
  },
  instagram: {
    handle: '@yongwoo_snap',
    url: 'https://instagram.com'
  },
  stats: [
    { label: '기록된 시네마틱 컷', value: '1,420+' },
    { label: '유튜브 누적 조회수', value: '4.8M+' },
    { label: '사진 노트 에세이', value: '380편' },
    { label: '작업 포맷', value: '4K DCI · 10-bit' },
  ],
  gear: [
    {
      category: 'Cinema Camera',
      model: 'Sony FX3 Cinema Line',
      role: '메인 시네마틱 영상 바디 (4K 120p, S-Cinetone, 16-bit RAW 출력)',
      tag: 'Main Video'
    },
    {
      category: 'Hybrid & Photo',
      model: 'Sony A7 IV',
      role: '3300만 화소 하이브리드 고해상도 일상 스냅 및 B-roll 촬영',
      tag: 'Main Snap'
    },
    {
      category: 'Compact EDC',
      model: 'Leica Q2',
      role: 'Summilux 28mm f/1.7 고정 조리개, 빠른 기동성의 거리 다큐멘터리',
      tag: 'Street Snap'
    },
    {
      category: 'Prime Lens',
      model: 'Sony FE 35mm F1.4 GM',
      role: '인간의 시야와 가장 닮은 자연스러운 화각과 극상의 보케 묘사',
      tag: 'Favorite Prime'
    },
    {
      category: 'Portrait Lens',
      model: 'Sony FE 50mm F1.2 GM',
      role: '인물의 감정을 입체적으로 분리해내는 시네마틱 포트레이트',
      tag: 'Portrait Master'
    },
    {
      category: 'Standard Zoom',
      model: 'Sony FE 24-70mm F2.8 GM II',
      role: '다양한 현장 조건에서 신속하게 앵글을 확보하는 기동력',
      tag: 'Run & Gun'
    },
    {
      category: 'Aerial & Gimbal',
      model: 'DJI Mavic 3 Pro & DJI RS 3 Pro',
      role: '광활한 풍경의 시네마틱 드론 앵글 및 정밀한 카메라 무빙',
      tag: 'Motion Gear'
    }
  ]
};

export const WORKS_DATA: WorkItem[] = [
  {
    id: 'film-01',
    title: '황금빛 오후, 서울을 걷다',
    englishTitle: 'Golden Afternoon in Seoul Alleyways',
    category: 'film',
    categoryLabel: '시네마틱 영상',
    mediaType: 'video',
    image: heroCinematicSnap,
    youtubeId: 'dQw4w9WgXcQ',
    aspectRatio: '16:9',
    date: '2026.09.28',
    location: '서울 종로구 삼청동 & 서촌',
    runtime: '07:42',
    resolution: '4K DCI 60fps',
    camera: 'Sony FX3',
    lens: 'FE 35mm F1.4 GM',
    exif: {
      focalLength: '35mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/120s',
      iso: 'ISO 800',
      colorProfile: 'S-Log3 / Custom Film LUT'
    },
    story:
      '가을의 문턱, 한옥 처마 끝으로 부서지는 오후 4시의 노을빛을 담았습니다. 오랜 골목길을 느리게 걷는 이들의 발걸음과 따스한 온기를 4K 시네마틱 프레임으로 기록했습니다. 흙벽과 돌담에 내려앉는 황금빛 그림자가 일상의 소중함을 되새겨 줍니다.',
    socialUrl: {
      platform: 'youtube',
      label: 'YouTube 영상 보기',
      url: 'https://youtube.com'
    },
    views: '128K',
    likes: 4210,
    featured: true
  },
  {
    id: 'night-01',
    title: '비 내린 을지로의 푸른 밤',
    englishTitle: 'Blue Hour Reflections in Euljiro',
    category: 'night',
    categoryLabel: '블루아워 & 야경',
    mediaType: 'photo',
    image: filmNightSeoul,
    aspectRatio: '16:9',
    date: '2026.09.15',
    location: '서울 중구 을지로 철공소 골목',
    camera: 'Leica Q2',
    lens: 'Summilux 28mm f/1.7 ASPH',
    exif: {
      focalLength: '28mm',
      aperture: 'f/1.7',
      shutterSpeed: '1/60s',
      iso: 'ISO 1600',
      colorProfile: 'Cinematic Blue Teal & Orange'
    },
    story:
      '늦은 여름 소나기가 그친 뒤, 젖은 아스팔트 위에 반사된 네온사인과 가로등 불빛이 수채화처럼 번져나갔습니다. 오래된 인쇄소와 철공소의 셔터문 사이로 스며드는 빛의 결을 아나모픽 무드로 포착했습니다.',
    socialUrl: {
      platform: 'facebook',
      label: 'Facebook 사진노트 보기',
      url: 'https://facebook.com'
    },
    views: '84K',
    likes: 3120,
    featured: true
  },
  {
    id: 'portrait-01',
    title: '창가에 깃든 잔잔한 시간',
    englishTitle: 'Quiet Reverie by the Sunlight Window',
    category: 'portrait',
    categoryLabel: '인물 & 시선',
    mediaType: 'photo',
    image: snapPortraitWindow,
    aspectRatio: '4:3',
    date: '2026.09.02',
    location: '서울 마포구 연남동 작은 서점',
    camera: 'Sony A7 IV',
    lens: 'FE 50mm F1.2 GM',
    exif: {
      focalLength: '50mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/250s',
      iso: 'ISO 200',
      colorProfile: 'Portra 400 Soft Warm'
    },
    story:
      '오후의 나른한 햇살이 비스듬히 책장 위로 떨어지던 순간. 커피 한 잔을 쥐고 창밖을 무심코 바라보는 시선에는 그 어떤 인위적인 연출보다 솔직한 이야기가 담겨 있었습니다.',
    socialUrl: {
      platform: 'facebook',
      label: 'Facebook 사진노트 보기',
      url: 'https://facebook.com'
    },
    views: '45K',
    likes: 1890,
    featured: true
  },
  {
    id: 'travel-01',
    title: '사계리의 바람과 현무암 바다',
    englishTitle: 'Basalt Shore and Morning Mist in Sagye',
    category: 'travel',
    categoryLabel: '여행 & 자연',
    mediaType: 'photo',
    image: snapCoastalTravel,
    aspectRatio: '4:3',
    date: '2026.08.20',
    location: '제주 서귀포시 안덕면 사계해변',
    camera: 'Sony FX3',
    lens: 'FE 24-70mm F2.8 GM II',
    exif: {
      focalLength: '45mm',
      aperture: 'f/4.0',
      shutterSpeed: '1/500s',
      iso: 'ISO 100',
      colorProfile: 'Organic Neutral Green & Basalt Grey'
    },
    story:
      '이른 아침 서귀포 사계리의 바다는 거센 파도와 검은 현무암이 묵직한 침묵을 자아냅니다. 홀로 해변을 걷는 여행자의 뒷모습에서 거대한 자연 앞에 선 인간의 겸허한 평온을 느꼈습니다.',
    socialUrl: {
      platform: 'youtube',
      label: 'YouTube 제주 다큐멘터리',
      url: 'https://youtube.com'
    },
    views: '92K',
    likes: 3450,
    featured: true
  },
  {
    id: 'street-01',
    title: '성수동 오래된 로스터리의 온기',
    englishTitle: 'The Warmth of Artisanal Drip in Seongsu',
    category: 'street',
    categoryLabel: '골목 & 거리',
    mediaType: 'photo',
    image: snapVintageCoffee,
    aspectRatio: '4:3',
    date: '2026.08.08',
    location: '서울 성동구 성수동 카페거리',
    camera: 'Leica Q2',
    lens: 'Summilux 28mm f/1.7 ASPH',
    exif: {
      focalLength: '28mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/160s',
      iso: 'ISO 400',
      colorProfile: 'Warm Amber Amber Tone'
    },
    story:
      '유리 드리퍼를 타고 내려오는 커피 방울들과 공기 중에 퍼지는 짙은 원두 향. 손때 묻은 나무 테이블 위에 맺힌 빛의 입자는 언제나 변함없이 아늑한 위로를 전합니다.',
    socialUrl: {
      platform: 'facebook',
      label: 'Facebook 사진노트 보기',
      url: 'https://facebook.com'
    },
    views: '38K',
    likes: 1670,
    featured: false
  },
  {
    id: 'film-02',
    title: '새벽을 여는 사람들: 노량진 수산시장',
    englishTitle: 'Dawns First Light: Fish Market Documentary',
    category: 'film',
    categoryLabel: '시네마틱 영상',
    mediaType: 'video',
    image: filmNightSeoul,
    youtubeId: 'kJQP7kiw5Fk',
    aspectRatio: '16:9',
    date: '2026.07.29',
    location: '서울 동작구 노량진',
    runtime: '12:18',
    resolution: '4K DCI 24fps Anamorphic',
    camera: 'Sony FX3',
    lens: 'Sirui Anamorphic 35mm T2.9',
    exif: {
      focalLength: '35mm',
      aperture: 'T2.9',
      shutterSpeed: '1/48s',
      iso: 'ISO 12800 Dual Base',
      colorProfile: 'S-Log3 / Cool Dawn Cine Look'
    },
    story:
      '모두가 잠든 새벽 4시, 얼음 가루가 튀는 경매장과 뜨거운 입김을 뿜어내는 상인들의 치열한 삶을 시네마틱 렌즈로 담았습니다. 땀방울 하나하나에 깃든 생명력은 도시의 가장 숭고한 빛입니다.',
    socialUrl: {
      platform: 'youtube',
      label: 'YouTube 다큐멘터리 시청',
      url: 'https://youtube.com'
    },
    views: '210K',
    likes: 8940,
    featured: false
  }
];

export const PHOTO_ESSAY_NOTES = [
  {
    id: 'essay-1',
    date: '2026.09.29',
    title: '빛을 기다리는 법에 대하여',
    excerpt: '좋은 사진은 피사체를 향해 달려가는 것이 아니라, 빛이 알맞은 각도로 기울어질 때까지 조용히 숨을 고르며 기다리는 일입니다.',
    platform: 'Facebook 사진노트 #284',
    readTime: '3분 읽기'
  },
  {
    id: 'essay-2',
    date: '2026.09.18',
    title: '왜 35mm 화각을 고집하는가',
    excerpt: '너무 멀지도, 부담스럽게 가깝지도 않은 거리. 대화할 수 있는 적당한 한 걸음의 거리가 바로 35mm가 가진 다정함입니다.',
    platform: 'Facebook 사진노트 #283',
    readTime: '4분 읽기'
  },
  {
    id: 'essay-3',
    date: '2026.09.05',
    title: '영상 편집실에서 마주하는 일상의 파편들',
    excerpt: '타임라인 위에 올려진 수천 개의 클립 중, 단 3초의 침묵이 전체 영상의 감정을 지배할 때가 있습니다. 여백의 미학에 대한 고찰.',
    platform: 'YouTube 커뮤니티 노트',
    readTime: '5분 읽기'
  }
];
