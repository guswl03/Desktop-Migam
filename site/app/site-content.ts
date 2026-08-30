export const platforms = [
  {
    name: "Windows",
    label: "Windows용 내려받기",
    note: "Windows 10·11",
    version: "v0.1.2",
    href: "https://github.com/guswl03/Desktop-Migam-Window",
    downloadHref: "https://github.com/guswl03/Desktop-Migam-Window/releases/latest",
  },
  {
    name: "macOS",
    label: "macOS용 내려받기",
    note: "Apple Silicon",
    version: "v0.1.1",
    href: "https://github.com/guswl03/Desktop-Migam-Mac",
    downloadHref: "https://github.com/guswl03/Desktop-Migam-Mac/releases/latest",
  },
] as const;

export const showcaseMoments = [
  { id: "focus", index: "01", title: "집중은 더 또렷하게", description: "포모도로와 오늘의 할 일을 작은 위젯으로 꺼내 두고, 감자봇과 한 세션씩 완주해요." },
  { id: "play", index: "02", title: "데스크톱은 더 생생하게", description: "걷고, 반응하고, 사진을 배달하는 감자봇이 반복되는 작업 사이에 예상 못 한 즐거움을 만들어요." },
  { id: "reward", index: "03", title: "끝낸 만큼 더 즐겁게", description: "집중을 마칠 때마다 티켓을 받고, GAMCHA에서 새 코스튬을 열어 나만의 감자봇을 완성해요." },
] as const;

export const features = [
  { number: "01", title: "집중을 곁에서", description: "포모도로 타이머와 할 일을 한곳에서 관리하고, 집중과 휴식의 리듬을 놓치지 않아요.", visual: "focus" },
  { number: "02", title: "살아 있는 데스크톱", description: "걷고, 춤추고, 반응하는 감자봇이 작업 중인 화면에 작지만 확실한 생기를 더해요.", visual: "walking" },
  { number: "03", title: "집중할수록 모이는 즐거움", description: "집중을 완료하면 티켓을 받고, 감챠로 새로운 코스튬을 모아 나만의 감자봇을 만들어요.", visual: "collection" },
] as const;

