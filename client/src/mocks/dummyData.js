export const members = [
  {
    memberId: 1,
    email: 'aa@gmail.com',
    displayName: 'aa',
    password: 123,
  },
  {
    memberId: 2,
    email: 'bb@gmail.com',
    displayName: 'bb',
    password: 123,
  },
  {
    memberId: 3,
    email: 'cc@gmail.com',
    displayName: 'cc',
    password: 123,
  },
  {
    memberId: 4,
    email: 'dd@gmail.com',
    displayName: 'dd',
    password: 123,
  },
  {
    memberId: 5,
    email: 'ee@gmail.com',
    displayName: 'ee',
    password: 123,
  },
];

export const comments = {
  data: [
    {
      boardId: 1,
      commentId: 1,
      memberId: 1,
      comment: '감사합니다 좋은 정보 알아가네요 호호',
    },
    {
      boardId: 2,
      commentId: 1,
      memberId: 1,
      comment: '퍼가요 ^&^',
    },
    {
      boardId: 3,
      commentId: 1,
      memberId: 2,
      comment: '안녕하세요 오늘도 득근 하세요!',
    },
    {
      boardId: 4,
      commentId: 1,
      memberId: 2,
      comment:
        '바른 자세는 척추가 정상적인 곡선을 이루고 있고 하반신의 골격이 체중을 유지할 수 있는 이상적인 정렬상태를 말한다. 중립자세에 있는 골반은 복부와 몸통, 그리고 그 아래에 놓인 하지가 올바른 정렬이 되도록 돕고 가슴과 등 상부는 호흡기가 활동하기 좋은 상태를 만들어 준다. 또한 머리는 균형이 잘 잡힌 상태에서 목 근육의 스트레스를 최소화시킨다. ',
    },
    {
      boardId: 5,
      commentId: 1,
      memberId: 3,
      comment:
        '바르지 못한 목의 자세는 목이 앞으로 빠져나와 있고 등은 굽어 있는 상태이다. 이런 자세가 오래 지속되게 되면 목뒤 근육이 비대해져 낙타등과 같이 불룩해진다. ',
    },
    {
      boardId: 6,
      commentId: 1,
      memberId: 3,
      comment: '감사합니다 좋은 정보 알아가네요 호호',
    },
    {
      boardId: 7,
      commentId: 1,
      memberId: 4,
      comment: '퍼가요 ^&^',
    },
    {
      boardId: 8,
      commentId: 1,
      memberId: 4,
      comment: '안녕하세요 오늘도 득근 하세요!',
    },
    {
      boardId: 9,
      commentId: 1,
      memberId: 5,
      comment:
        '바른 자세는 척추가 정상적인 곡선을 이루고 있고 하반신의 골격이 체중을 유지할 수 있는 이상적인 정렬상태를 말한다. 중립자세에 있는 골반은 복부와 몸통, 그리고 그 아래에 놓인 하지가 올바른 정렬이 되도록 돕고 가슴과 등 상부는 호흡기가 활동하기 좋은 상태를 만들어 준다. 또한 머리는 균형이 잘 잡힌 상태에서 목 근육의 스트레스를 최소화시킨다. ',
    },
    {
      boardId: 10,
      commentId: 1,
      memberId: 5,
      comment:
        '바르지 못한 목의 자세는 목이 앞으로 빠져나와 있고 등은 굽어 있는 상태이다. 이런 자세가 오래 지속되게 되면 목뒤 근육이 비대해져 낙타등과 같이 불룩해진다. ',
    },
  ],
};

export const board = {
  data: [
    {
      boardId: 1,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: 'dotori',
      tabName: '자유게시판',
      title: '운동 잘하는 법 공유',
      content: '가기 싫다',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2021-12-04',
      boardBookmarkCnt: 9,
      views: 147,
    },
    {
      boardId: 2,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '냥냥이',
      tabName: '자유게시판',
      title: '날씬해지는 식단 궁금하면 드루와',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-04',
      boardBookmarkCnt: 0,
      views: 20,
    },
    {
      boardId: 3,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '갱얼즤2',
      tabName: '자유게시판',
      title: '운동 루틴 추천해주세요',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-04',
      boardBookmarkCnt: 0,
      views: 9,
    },
    {
      boardId: 4,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '도토리',
      tabName: '자세피드백',
      title: '자세 이거 맞나요?',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-04',
      boardBookmarkCnt: 4,
      views: 1,
    },
    {
      boardId: 5,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '도토리',
      tabName: '자유게시판',
      title: '헬린이 여기 헬스장 추천좀여',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-04',
      boardBookmarkCnt: 20,
      views: 352,
    },
    {
      boardId: 6,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '도토리',
      tabName: '꿀팁',
      title: '헬스장 고를때 꿀팁',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-04',
      boardBookmarkCnt: 6,
      views: 87,
    },
    {
      boardId: 7,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '도토리',
      tabName: '운동루틴',
      title: '하체 루틴 짜주세요',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-05',
      boardBookmarkCnt: 5,
      views: 59,
    },
    {
      boardId: 8,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '도토리',
      tabName: '파트너모집',
      title: '여름맞이 다이어트 같이해요',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-05',
      boardBookmarkCnt: 10,
      views: 49,
    },
    {
      boardId: 9,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '도토리',
      tabName: '자유게시판',
      title: '운동 가기 싫다',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-06',
      boardBookmarkCnt: 2,
      views: 59,
    },
    {
      boardId: 10,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '도토리',
      tabName: '자유게시판',
      title: '자세 이거 맞나요?',
      content: 'content',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 11,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 12,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 13,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 14,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 15,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 16,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 17,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 18,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 19,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 20,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 21,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 22,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 23,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 24,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 25,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 26,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 27,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 28,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 29,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
    {
      boardId: 30,
      ProfileImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      displayName: '더미',
      tabName: '자유게시판',
      title: '모르겠다',
      content: 'ㅠㅠㅠㅠ',
      contentImage:
        'https://image.shutterstock.com/image-vector/modern-flat-character-woman-dream-260nw-1520037971.jpg',
      createdAt: '2023-12-07',
      boardBookmarkCnt: 7,
      views: 2,
    },
  ],
};

export const reviews = {
  data: {
    contents: [
      {
        reviewId: 1,
        displayName: '도토리',
        comment:
          '음...여기 너무 깨끗하고 넓고 쾌적해요, 값짒맚셊욦 샤워실 최고 덟럽웝룝',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 2,
        displayName: '양갱이',
        comment: '기구 종류가 다양해서 좋아요!!',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 3,
        displayName: '김자반',
        comment: '트레이너쌤들 친철하세요 ㅜㅜ ',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 4,
        displayName: '김코딩',
        comment: '쾌적합니다.',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 5,
        displayName: '박해커',
        comment: '두번 가고싶지는 않음',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 6,
        displayName: '간장공장공장장',
        comment: '다른 헬스장에 비해 비싼편 인것같슴니다,..',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 7,
        displayName: '퇴사하고싶다',
        comment: '사람은 많지만 가성비 있게 다닐 수 있어서 좋네요',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 8,
        displayName: '잼민이',
        comment: '퇴근시간인데도 한가해서 좋아요 ',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 9,
        displayName: '학생1',
        comment: '부대시설 모두 잘되어있네요',
        createdAt: '2023-01-01',
      },
      {
        reviewId: 10,
        displayName: '학생2',
        comment: '좋습니다',
        createdAt: '2023-01-01',
      },
    ],
    totalElements: 20,
    nextCursor: 20,
  },
};

export const gyms = {
  data: {
    contents: [
      {
        gymId: 0,
        gymName: '바디바디',
        gymImage:
          'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221214_200%2F1670994059490bTdFl_PNG%2F%25BB%25E7%25C1%25F8.PNG',
        address: '서울특별시 서대문구 신촌로 155',
        phoneNumber: '02-123-4567',
        prices: 'test',
        businessHours: '09:00 ~ 23:00 / 휴무일 : 월요일 ',
        facilities: [
          {
            facilityId: 1,
            facilityName: '운동복',
          },
          {
            facilityId: 4,
            facilityName: '락커',
          },
        ],
      },
    ],
  },
};
